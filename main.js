/* globals $, FileReader, harValidator, sample */

function reset () {
  $('table tbody').empty()

  $('.panel').removeClass('error')
  $('select[name="example"]').val('')
  $('.input-container').removeClass('has-success').removeClass('has-error')
  $('.input-container .glyphicon').removeClass('glyphicon-ok').removeClass('glyphicon-remove')
}

$(function () {
  $('input[type="file"]').on('change', function (e) {
    var file = e.target.files[0]

    if (!file) {
      return
    }

    var reader = new FileReader()

    reader.onload = function (e) {
      $('textarea').val(e.target.result)
    }

    reader.readAsText(file)

    $(e.target).val('')

    reset()
  })

  $('select[name="example"]').on('change', function (e) {
    var data
    var selected = $(this).val()

    switch (selected) {
      case 'har':
        data = sample
        break

      case 'log':
        data = sample.log
        break

      case 'entry':
        data = sample.log.entries[0]
        break

      case 'request':
        data = sample.log.entries[0].request
        break

      case 'response':
        data = sample.log.entries[0].response
        break
    }

    $('select[name="schema"]').val(selected !== '' ? selected : 'har')

    if (data) {
      $('textarea').val(JSON.stringify(data, null, 2))
    }
  })

  $('.btn-validate').on('click', function (e) {
    var data
    var text = $('textarea').val()
    var schema = $('select[name="schema"]').val()

    reset()

    try {
      data = JSON.parse(text)
    } catch (e) {
      console.log(e)

      $('.panel').addClass('error')
      $('.input-container').addClass('has-error')
      $('.input-container .glyphicon').addClass('glyphicon-remove')

      $('table tbody').append($('<tr class="danger"><td>JSON</td><td colspan="2">JSON Parse Error</td></tr>'))

      return
    }

    harValidator[schema](data)
      .then(function () {
        $('.input-container').addClass('has-success')
        $('.input-container .glyphicon').addClass('glyphicon-ok')
      })

      .catch(function (err) {
        console.log(err)

        $('.panel').addClass('error')
        $('.input-container').addClass('has-error')
        $('.input-container .glyphicon').addClass('glyphicon-remove')

        err.errors.map(function (err) {
          var value = JSON.stringify(err.value)

          $('table tbody').append(
            $('<tr class="danger"/>').append(
              $('<td class="text-warning" title="' + err.field + '"/>').text(err.field),
              $('<td/>').text(err.message),
              $('<td class="text-info" title="' + value.replace(/\"/g, '&quot;') + '"/>').text(value)
            )
          )
        })
      })
  })
})
