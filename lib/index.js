"use strict";

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.reflect.get.js");

require("core-js/modules/es.reflect.has.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasOptionsIp = hasOptionsIp;
exports.getOptionsIp = getOptionsIp;
exports.getRequestLine = getRequestLine;
exports["default"] = toCommonLog;
exports.getStringFromTime = exports.getProtocol = exports.hasProtocol = exports.getRawReqUrl = exports.hasRawReqUrl = exports.getRawReqMethod = exports.hasRawReqMethod = exports.getInfoRemoteAddress = exports.hasInfoRemoteAddress = exports.getResponseHeadersContentLength = exports.hasResponseHeadersContentLength = exports.getResponseId = exports.hasResponseId = exports.getResponseStatusCode = exports.hasResponseStatusCode = exports.getRawReqHttpVersion = exports.hasRawReqHttpVersion = exports.getRawReqClientNPNProtocol = exports.hasRawReqClientNPNProtocol = void 0;

var _momentStrftime = _interopRequireDefault(require("moment-strftime"));

var _debug = _interopRequireDefault(require("debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var log = (0, _debug["default"])('@modernpoacher/hapi-common-log');
log('`@modernpoacher/hapi-common-log` is awake');

var hasRawReqClientNPNProtocol = function hasRawReqClientNPNProtocol() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$raw = _ref.raw;

  _ref$raw = _ref$raw === void 0 ? {} : _ref$raw;
  var _ref$raw$req = _ref$raw.req;
  _ref$raw$req = _ref$raw$req === void 0 ? {} : _ref$raw$req;
  var _ref$raw$req$client = _ref$raw$req.client,
      client = _ref$raw$req$client === void 0 ? {} : _ref$raw$req$client;
  return Reflect.has(client, 'npnProtocol');
};

exports.hasRawReqClientNPNProtocol = hasRawReqClientNPNProtocol;

var getRawReqClientNPNProtocol = function getRawReqClientNPNProtocol() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$raw = _ref2.raw;

  _ref2$raw = _ref2$raw === void 0 ? {} : _ref2$raw;
  var _ref2$raw$req = _ref2$raw.req;
  _ref2$raw$req = _ref2$raw$req === void 0 ? {} : _ref2$raw$req;
  var _ref2$raw$req$client = _ref2$raw$req.client,
      client = _ref2$raw$req$client === void 0 ? {} : _ref2$raw$req$client;
  return Reflect.get(client, 'npnProtocol');
};

exports.getRawReqClientNPNProtocol = getRawReqClientNPNProtocol;

var hasRawReqHttpVersion = function hasRawReqHttpVersion() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$raw = _ref3.raw;

  _ref3$raw = _ref3$raw === void 0 ? {} : _ref3$raw;
  var _ref3$raw$req = _ref3$raw.req,
      req = _ref3$raw$req === void 0 ? {} : _ref3$raw$req;
  return Reflect.has(req, 'httpVersion');
};

exports.hasRawReqHttpVersion = hasRawReqHttpVersion;

var getRawReqHttpVersion = function getRawReqHttpVersion() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$raw = _ref4.raw;

  _ref4$raw = _ref4$raw === void 0 ? {} : _ref4$raw;
  var _ref4$raw$req = _ref4$raw.req,
      req = _ref4$raw$req === void 0 ? {} : _ref4$raw$req;
  return Reflect.get(req, 'httpVersion');
};

exports.getRawReqHttpVersion = getRawReqHttpVersion;

var hasResponseStatusCode = function hasResponseStatusCode() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref5$response = _ref5.response,
      response = _ref5$response === void 0 ? {} : _ref5$response;

  return Reflect.has(response, 'statusCode');
};

exports.hasResponseStatusCode = hasResponseStatusCode;

var getResponseStatusCode = function getResponseStatusCode() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref6$response = _ref6.response,
      response = _ref6$response === void 0 ? {} : _ref6$response;

  return Reflect.get(response, 'statusCode');
};

exports.getResponseStatusCode = getResponseStatusCode;

var hasResponseId = function hasResponseId() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref7$response = _ref7.response,
      response = _ref7$response === void 0 ? {} : _ref7$response;

  return Reflect.has(response, 'id');
};

exports.hasResponseId = hasResponseId;

var getResponseId = function getResponseId() {
  var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref8$response = _ref8.response,
      response = _ref8$response === void 0 ? {} : _ref8$response;

  return Reflect.get(response, 'id');
};

exports.getResponseId = getResponseId;

var hasResponseHeadersContentLength = function hasResponseHeadersContentLength() {
  var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref9$response = _ref9.response;

  _ref9$response = _ref9$response === void 0 ? {} : _ref9$response;
  var _ref9$response$header = _ref9$response.headers,
      headers = _ref9$response$header === void 0 ? {} : _ref9$response$header;
  return Reflect.has(headers, 'content-length');
};

exports.hasResponseHeadersContentLength = hasResponseHeadersContentLength;

var getResponseHeadersContentLength = function getResponseHeadersContentLength() {
  var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref10$response = _ref10.response;

  _ref10$response = _ref10$response === void 0 ? {} : _ref10$response;
  var _ref10$response$heade = _ref10$response.headers,
      headers = _ref10$response$heade === void 0 ? {} : _ref10$response$heade;
  return Reflect.get(headers, 'content-length');
};

exports.getResponseHeadersContentLength = getResponseHeadersContentLength;

var hasInfoRemoteAddress = function hasInfoRemoteAddress() {
  var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref11$info = _ref11.info,
      info = _ref11$info === void 0 ? {} : _ref11$info;

  return Reflect.has(info, 'remoteAddress');
};

exports.hasInfoRemoteAddress = hasInfoRemoteAddress;

var getInfoRemoteAddress = function getInfoRemoteAddress() {
  var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref12$info = _ref12.info,
      info = _ref12$info === void 0 ? {} : _ref12$info;

  return Reflect.get(info, 'remoteAddress');
};

exports.getInfoRemoteAddress = getInfoRemoteAddress;

var hasRawReqMethod = function hasRawReqMethod() {
  var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref13$raw = _ref13.raw;

  _ref13$raw = _ref13$raw === void 0 ? {} : _ref13$raw;
  var _ref13$raw$req = _ref13$raw.req,
      req = _ref13$raw$req === void 0 ? {} : _ref13$raw$req;
  return Reflect.has(req, 'method');
};

exports.hasRawReqMethod = hasRawReqMethod;

var getRawReqMethod = function getRawReqMethod() {
  var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref14$raw = _ref14.raw;

  _ref14$raw = _ref14$raw === void 0 ? {} : _ref14$raw;
  var _ref14$raw$req = _ref14$raw.req,
      req = _ref14$raw$req === void 0 ? {} : _ref14$raw$req;
  return Reflect.get(req, 'method');
};

exports.getRawReqMethod = getRawReqMethod;

var hasRawReqUrl = function hasRawReqUrl() {
  var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref15$raw = _ref15.raw;

  _ref15$raw = _ref15$raw === void 0 ? {} : _ref15$raw;
  var _ref15$raw$req = _ref15$raw.req,
      req = _ref15$raw$req === void 0 ? {} : _ref15$raw$req;
  return Reflect.has(req, 'url');
};

exports.hasRawReqUrl = hasRawReqUrl;

var getRawReqUrl = function getRawReqUrl() {
  var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref16$raw = _ref16.raw;

  _ref16$raw = _ref16$raw === void 0 ? {} : _ref16$raw;
  var _ref16$raw$req = _ref16$raw.req,
      req = _ref16$raw$req === void 0 ? {} : _ref16$raw$req;
  return Reflect.get(req, 'url');
};

exports.getRawReqUrl = getRawReqUrl;

var hasProtocol = function hasProtocol(request) {
  return hasRawReqClientNPNProtocol(request) || hasRawReqHttpVersion(request);
};

exports.hasProtocol = hasProtocol;

var getProtocol = function getProtocol(request) {
  return hasRawReqClientNPNProtocol(request) ? getRawReqClientNPNProtocol(request) : hasRawReqHttpVersion(request) ? "HTTP/".concat(getRawReqHttpVersion(request)) : 'HTTP/1.0';
};

exports.getProtocol = getProtocol;

var getStringFromTime = function getStringFromTime() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  return (0, _momentStrftime["default"])(date).strftime('%d/%b/%Y:%H:%M:%S %z');
};

exports.getStringFromTime = getStringFromTime;

function hasOptionsIp() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /*
   *  log('hasOptionsIp')
   */
  if (Reflect.has(options, 'ip')) {
    return !!Reflect.get(options, 'ip');
  }

  return false;
}

function getOptionsIp() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /*
   *  log('getOptionsIp')
   */
  var ip = Reflect.get(options, 'ip');
  return String(ip).toLowerCase();
}

function getRequestLine(request) {
  /*
   *  log('getRequestLine')
   */
  var method = hasRawReqMethod(request) ? getRawReqMethod(request) : '-';
  var url = hasRawReqUrl(request) ? getRawReqUrl(request) : '-';
  var protocol = hasProtocol(request) ? getProtocol(request) : '-';
  return "".concat(method, " ").concat(url, " ").concat(protocol);
}

function toCommonLog(request) {
  /*
   *  log('toCommonLog')
   */
  var remoteHost = hasInfoRemoteAddress(request) ? getInfoRemoteAddress(request) : '-';
  var userIdentifier = '-';
  var userId = hasResponseId(request) ? getResponseId(request) : '-';
  var stringFromTime = getStringFromTime();
  var requestLine = getRequestLine(request);
  var responseStatusCode = hasResponseStatusCode(request) ? getResponseStatusCode(request) : '-';
  var responseObjectSize = hasResponseHeadersContentLength(request) ? getResponseHeadersContentLength(request) : '-';
  return "".concat(remoteHost, " ").concat(userIdentifier, " ").concat(userId, " [").concat(stringFromTime, "] \"").concat(requestLine, "\" ").concat(responseStatusCode, " ").concat(responseObjectSize);
}