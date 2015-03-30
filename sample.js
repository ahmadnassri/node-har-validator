var sample = {
  'log': {
    'version': 1.2,
    'creator': {
      'name': 'WebInspector',
      'version': '537.36'
    },
    'pages': [
      {
        'startedDateTime': '2015-03-30T04:50:41.948Z',
        'id': 'page_1',
        'title': 'HAR Validator',
        'pageTimings': {
          'onContentLoad': 280.7199954986572,
          'onLoad': 1065.579891204834
        }
      }
    ],
    'entries': [
      {
        'time': 2.8798580169677734,
        'request': {
          'method': 'GET',
          'url': 'https://ahmadnassri.github.io/har-validator/',
          'httpVersion': 'HTTP/1.1',
          'headers': [
            {
              'name': 'Host',
              'value': 'ahmadnassri.github.io'
            },
            {
              'value': 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
            }
          ],
          'queryString': [],
          'cookies': [],
          'headersSize': 558,
          'bodySize': 0
        },
        'response': {
          'status': 200,
          'statusText': 'OK',
          'httpVersion': 'HTTP/1.1',
          'headers': [
            {
              'name': 'Date',
              'value': 'Mon, 30 Mar 2015 04:50:41 GMT'
            },
            {
              'name': 'Content-Encoding',
              'value': 'gzip'
            },
            {
              'name': 'Content-Type',
              'value': 'text/html'
            }
          ],
          'cookies': [],
          'content': {
            'size': 8800,
            'mimeType': 'text/html',
            'compression': 6234,
            'text': ''
          },
          'redirectURL': '',
          'headersSize': 253,
          'bodySize': 2566
        },
        'cache': {},
        'timings': {
          'blocked': 1.49400002555922,
          'dns': -1,
          'connect': -1,
          'send': 0.08399999933316993,
          'wait': 0.55799999972805,
          'receive': 0.7438579923473334,
          'ssl': -1
        },
        'connection': '266830',
        'pageref': 'page_1'
      },
      {
        'startedDateTime': '2015-03-30T04:50:42.033Z',
        'time': 24.519920349121094,
        'request': {
          'method': 'GET',
          'url': 'https://ahmadnassri.github.io/har-validator/main.js',
          'httpVersion': 'HTTP/1.1',
          'headers': [
            {
              'name': 'Pragma',
              'value': 'no-cache'
            },
            {
              'name': 'DNT',
              'value': '1'
            },
            {
              'name': 'Accept-Encoding',
              'value': 'gzip, deflate, sdch'
            },
            {
              'name': 'Host',
              'value': 'ahmadnassri.github.io'
            },
            {
              'name': 'Accept',
              'value': '*/*'
            }
          ],
          'queryString': [],
          'cookies': [],
          'headersSize': 548,
          'bodySize': 0
        },
        'response': {
          'status': 200,
          'statusText': 'OK',
          'httpVersion': 'HTTP/1.1',
          'headers': [
            {
              'name': 'Date',
              'value': 'Mon, 30 Mar 2015 04:50:42 GMT'
            },
            {
              'name': 'Content-Type',
              'value': 'application/x-javascript'
            },
            {
              'name': 'Content-Length',
              'value': '1433'
            }
          ],
          'cookies': [],
          'content': {
            'size': 1433,
            'mimeType': 'application/x-javascript',
            'compression': 0,
            'text': ''
          },
          'redirectURL': '',
          'headersSize': 282,
          'bodySize': 1433
        },
        'cache': {},
        'timings': {
          'blocked': 22.7190000005066,
          'dns': -1,
          'connect': -1,
          'send': 0.058000005083201245,
          'wait': 0.6759999960194989,
          'receive': 1.0669203475117932,
          'ssl': -1
        },
        'connection': '266830',
        'pageref': 'page_1'
      }
    ]
  }
}
