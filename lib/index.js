"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toCommonLog;
exports.getInfoRemoteAddress = void 0;
exports.getOptionsIp = getOptionsIp;
exports.getRawReqUrl = exports.getRawReqMethod = exports.getRawReqHttpVersion = exports.getRawReqClientNPNProtocol = exports.getProtocol = void 0;
exports.getRequestLine = getRequestLine;
exports.hasInfoRemoteAddress = exports.getStringFromTime = exports.getResponseStatusCode = exports.getResponseId = exports.getResponseHeadersContentLength = void 0;
exports.hasOptionsIp = hasOptionsIp;
exports.hasResponseStatusCode = exports.hasResponseId = exports.hasResponseHeadersContentLength = exports.hasRawReqUrl = exports.hasRawReqMethod = exports.hasRawReqHttpVersion = exports.hasRawReqClientNPNProtocol = exports.hasProtocol = void 0;
require("core-js/modules/es.reflect.has.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.reflect.get.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.array.concat.js");
var _debug = _interopRequireDefault(require("debug"));
var _momentStrftime = _interopRequireDefault(require("moment-strftime"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var log = (0, _debug["default"])('@modernpoacher/hapi-common-log');
log('`@modernpoacher/hapi-common-log` is awake');
var getRaw = function getRaw() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$raw = _ref.raw,
    raw = _ref$raw === void 0 ? {} : _ref$raw;
  return raw;
};
var getReq = function getReq() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$req = _ref2.req,
    req = _ref2$req === void 0 ? {} : _ref2$req;
  return req;
};
var getClient = function getClient() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref3$client = _ref3.client,
    client = _ref3$client === void 0 ? {} : _ref3$client;
  return client;
};
var getHeaders = function getHeaders() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref4$headers = _ref4.headers,
    headers = _ref4$headers === void 0 ? {} : _ref4$headers;
  return headers;
};
var getInfo = function getInfo() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref5$info = _ref5.info,
    info = _ref5$info === void 0 ? {} : _ref5$info;
  return info;
};
var getRawReq = function getRawReq(request) {
  return getReq(getRaw(request));
};
var getRawReqClient = function getRawReqClient(request) {
  return getClient(getRawReq(request));
};
var getResponseHeaders = function getResponseHeaders(request) {
  return getHeaders(getResponse(request));
};
var getResponse = function getResponse() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref6$response = _ref6.response,
    response = _ref6$response === void 0 ? {} : _ref6$response;
  return response;
};
var hasRawReqClientNPNProtocol = function hasRawReqClientNPNProtocol(request) {
  return Reflect.has(getRawReqClient(request), 'npnProtocol');
};
exports.hasRawReqClientNPNProtocol = hasRawReqClientNPNProtocol;
var getRawReqClientNPNProtocol = function getRawReqClientNPNProtocol(request) {
  return Reflect.get(getRawReqClient(request), 'npnProtocol');
};
exports.getRawReqClientNPNProtocol = getRawReqClientNPNProtocol;
var hasRawReqHttpVersion = function hasRawReqHttpVersion(request) {
  return Reflect.has(getRawReq(request), 'httpVersion');
};
exports.hasRawReqHttpVersion = hasRawReqHttpVersion;
var getRawReqHttpVersion = function getRawReqHttpVersion(request) {
  return Reflect.get(getRawReq(request), 'httpVersion');
};
exports.getRawReqHttpVersion = getRawReqHttpVersion;
var hasResponseStatusCode = function hasResponseStatusCode(request) {
  return Reflect.has(getResponse(request), 'statusCode');
};
exports.hasResponseStatusCode = hasResponseStatusCode;
var getResponseStatusCode = function getResponseStatusCode(request) {
  return Reflect.get(getResponse(request), 'statusCode');
};
exports.getResponseStatusCode = getResponseStatusCode;
var hasResponseId = function hasResponseId(request) {
  return Reflect.has(getResponse(request), 'id');
};
exports.hasResponseId = hasResponseId;
var getResponseId = function getResponseId(request) {
  return Reflect.get(getResponse(request), 'id');
};
exports.getResponseId = getResponseId;
var hasResponseHeadersContentLength = function hasResponseHeadersContentLength(request) {
  return Reflect.has(getResponseHeaders(request), 'content-length');
};
exports.hasResponseHeadersContentLength = hasResponseHeadersContentLength;
var getResponseHeadersContentLength = function getResponseHeadersContentLength(request) {
  return Reflect.get(getResponseHeaders(request), 'content-length');
};
exports.getResponseHeadersContentLength = getResponseHeadersContentLength;
var hasInfoRemoteAddress = function hasInfoRemoteAddress(request) {
  return Reflect.has(getInfo(request), 'remoteAddress');
};
exports.hasInfoRemoteAddress = hasInfoRemoteAddress;
var getInfoRemoteAddress = function getInfoRemoteAddress(request) {
  return Reflect.get(getInfo(request), 'remoteAddress');
};
exports.getInfoRemoteAddress = getInfoRemoteAddress;
var hasRawReqMethod = function hasRawReqMethod(request) {
  return Reflect.has(getRawReq(request), 'method');
};
exports.hasRawReqMethod = hasRawReqMethod;
var getRawReqMethod = function getRawReqMethod(request) {
  return Reflect.get(getRawReq(request), 'method');
};
exports.getRawReqMethod = getRawReqMethod;
var hasRawReqUrl = function hasRawReqUrl(request) {
  return Reflect.has(getRawReq(request), 'url');
};
exports.hasRawReqUrl = hasRawReqUrl;
var getRawReqUrl = function getRawReqUrl(request) {
  return Reflect.get(getRawReq(request), 'url');
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