exports.invalid = {
  bodySize: {
    status: 200,
    statusText: 'OK',
    httpVersion: 'HTTP/1.1',
    headers: [],
    cookies: [],
    content: {
      size: 0,
      mimeType: 'text/html',
    },
    redirectURL: '',
    headersSize: 0,
    bodySize: '0'
  },

  headers: {
    status: 200,
    statusText: 'OK',
    httpVersion: 'HTTP/1.1',
    headers: {},
    cookies: [],
    content: {
      size: 0,
      mimeType: 'text/html',
    },
    redirectURL: '',
    headersSize: 0,
    bodySize: 0
  },

  malformed: {
    status: 200,
    statusText: 'OK',
    httpVersion: 'HTTP/1.1',
    headers: [
      {
        foo: 'bar',
      }
    ],
    cookies: [],
    content: {
      size: 0,
      mimeType: 'text/html',
    },
    redirectURL: '',
    headersSize: 0,
    bodySize: 0
  }
};

exports.valid = {
  status: 200,
  statusText: 'OK',
  httpVersion: 'HTTP/1.1',
  headers: [
    {
      name: 'X-Response-Time',
      value: '3.419ms'
    },
    {
      name: 'Date',
      value: 'Tue, 10 Feb 2015 07:33:16 GMT'
    },
    {
      name: 'Vary',
      value: 'Accept, Accept-Encoding'
    },
    {
      name: 'X-Powered-By',
      value: 'httpconsole.com'
    },
    {
      name: 'Transfer-Encoding',
      value: 'chunked'
    },
    {
      name: 'Content-Type',
      value: 'text/html; charset=utf-8'
    },
    {
      name: 'Content-Encoding',
      value: 'gzip'
    },
    {
      name: 'Connection',
      value: 'keep-alive'
    }
  ],
  cookies: [],
  content: {
    size: 30,
    mimeType: 'text/html',
    compression: 0,
    text: 'ALL YOUR BASE ARE BELONG TO US'
  },
  redirectURL: '',
  headersSize: 430,
  bodySize: 30
};
