exports.invalid = {
  url: {
    method: 'GET',
    url: 'httpconsole.com',
    httpVersion: 'HTTP/1.1',
    headers: [],
    queryString: [],
    cookies: [],
    headersSize: 0,
    bodySize: 0
  },

  headers: {
    method: 'GET',
    url: 'http://httpconsole.com/',
    httpVersion: 'HTTP/1.1',
    headers: {},
    queryString: [],
    cookies: [],
    headersSize: 0,
    bodySize: 0
  },

  malformed: {
    method: 'GET',
    url: 'http://httpconsole.com/',
    httpVersion: 'HTTP/1.1',
    headers: [
      {
        foo: 'bar'
      }
    ],
    queryString: [],
    cookies: [],
    headersSize: 0,
    bodySize: 0
  }
};

exports.valid = {
  method: 'GET',
  url: 'http://httpconsole.com/',
  httpVersion: 'HTTP/1.1',
  headers: [
    {
      name: 'DNT',
      value: '1'
    },
    {
      name: 'Accept-Encoding',
      value: 'gzip, deflate, sdch'
    },
    {
      name: 'Host',
      value: 'httpconsole.com'
    },
    {
      name: 'Connection',
      value: 'keep-alive'
    }
  ],
  queryString: [],
  cookies: [
    {
      name: 'foo',
      expires: '2015-02-10T07:33:17.146Z',
      value: 'bar',
      httpOnly: false,
      secure: false
    }
  ],
  headersSize: 482,
  bodySize: 0
};
