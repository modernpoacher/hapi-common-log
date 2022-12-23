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
var _momentStrftime = _interopRequireDefault(require("moment-strftime"));
var _debug = _interopRequireDefault(require("debug"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var log = (0, _debug["default"])('@modernpoacher/hapi-common-log');
log('`@modernpoacher/hapi-common-log` is awake');
var hasRawReqClientNPNProtocol = function hasRawReqClientNPNProtocol() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$raw = _ref.raw,
    _ref$raw2 = _ref$raw === void 0 ? {} : _ref$raw,
    _ref$raw2$req = _ref$raw2.req,
    _ref$raw2$req2 = _ref$raw2$req === void 0 ? {} : _ref$raw2$req,
    _ref$raw2$req2$client = _ref$raw2$req2.client,
    client = _ref$raw2$req2$client === void 0 ? {} : _ref$raw2$req2$client;
  return Reflect.has(client, 'npnProtocol');
};
exports.hasRawReqClientNPNProtocol = hasRawReqClientNPNProtocol;
var getRawReqClientNPNProtocol = function getRawReqClientNPNProtocol() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$raw = _ref2.raw,
    _ref2$raw2 = _ref2$raw === void 0 ? {} : _ref2$raw,
    _ref2$raw2$req = _ref2$raw2.req,
    _ref2$raw2$req2 = _ref2$raw2$req === void 0 ? {} : _ref2$raw2$req,
    _ref2$raw2$req2$clien = _ref2$raw2$req2.client,
    client = _ref2$raw2$req2$clien === void 0 ? {} : _ref2$raw2$req2$clien;
  return Reflect.get(client, 'npnProtocol');
};
exports.getRawReqClientNPNProtocol = getRawReqClientNPNProtocol;
var hasRawReqHttpVersion = function hasRawReqHttpVersion() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref3$raw = _ref3.raw,
    _ref3$raw2 = _ref3$raw === void 0 ? {} : _ref3$raw,
    _ref3$raw2$req = _ref3$raw2.req,
    req = _ref3$raw2$req === void 0 ? {} : _ref3$raw2$req;
  return Reflect.has(req, 'httpVersion');
};
exports.hasRawReqHttpVersion = hasRawReqHttpVersion;
var getRawReqHttpVersion = function getRawReqHttpVersion() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref4$raw = _ref4.raw,
    _ref4$raw2 = _ref4$raw === void 0 ? {} : _ref4$raw,
    _ref4$raw2$req = _ref4$raw2.req,
    req = _ref4$raw2$req === void 0 ? {} : _ref4$raw2$req;
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
    _ref9$response = _ref9.response,
    _ref9$response2 = _ref9$response === void 0 ? {} : _ref9$response,
    _ref9$response2$heade = _ref9$response2.headers,
    headers = _ref9$response2$heade === void 0 ? {} : _ref9$response2$heade;
  return Reflect.has(headers, 'content-length');
};
exports.hasResponseHeadersContentLength = hasResponseHeadersContentLength;
var getResponseHeadersContentLength = function getResponseHeadersContentLength() {
  var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref10$response = _ref10.response,
    _ref10$response2 = _ref10$response === void 0 ? {} : _ref10$response,
    _ref10$response2$head = _ref10$response2.headers,
    headers = _ref10$response2$head === void 0 ? {} : _ref10$response2$head;
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
    _ref13$raw = _ref13.raw,
    _ref13$raw2 = _ref13$raw === void 0 ? {} : _ref13$raw,
    _ref13$raw2$req = _ref13$raw2.req,
    req = _ref13$raw2$req === void 0 ? {} : _ref13$raw2$req;
  return Reflect.has(req, 'method');
};
exports.hasRawReqMethod = hasRawReqMethod;
var getRawReqMethod = function getRawReqMethod() {
  var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref14$raw = _ref14.raw,
    _ref14$raw2 = _ref14$raw === void 0 ? {} : _ref14$raw,
    _ref14$raw2$req = _ref14$raw2.req,
    req = _ref14$raw2$req === void 0 ? {} : _ref14$raw2$req;
  return Reflect.get(req, 'method');
};
exports.getRawReqMethod = getRawReqMethod;
var hasRawReqUrl = function hasRawReqUrl() {
  var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref15$raw = _ref15.raw,
    _ref15$raw2 = _ref15$raw === void 0 ? {} : _ref15$raw,
    _ref15$raw2$req = _ref15$raw2.req,
    req = _ref15$raw2$req === void 0 ? {} : _ref15$raw2$req;
  return Reflect.has(req, 'url');
};
exports.hasRawReqUrl = hasRawReqUrl;
var getRawReqUrl = function getRawReqUrl() {
  var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref16$raw = _ref16.raw,
    _ref16$raw2 = _ref16$raw === void 0 ? {} : _ref16$raw,
    _ref16$raw2$req = _ref16$raw2.req,
    req = _ref16$raw2$req === void 0 ? {} : _ref16$raw2$req;
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