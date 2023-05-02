"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toCommonLog;
exports.getInfoRemoteAddress = void 0;
exports.getOptionsIp = getOptionsIp;
exports.getRawReqUrl = exports.getRawReqMethod = exports.getRawReqHttpVersion = exports.getRawReqClientNPNProtocol = exports.getProtocol = void 0;
exports.getRequestLine = getRequestLine;
exports.hasInfoRemoteAddress = exports.getStringFromTime = exports.getResponseStatusCode = exports.getResponseId = exports.getResponseHeadersContentLength = void 0;
exports.hasOptionsIp = hasOptionsIp;
exports.hasResponseStatusCode = exports.hasResponseId = exports.hasResponseHeadersContentLength = exports.hasRawReqUrl = exports.hasRawReqMethod = exports.hasRawReqHttpVersion = exports.hasRawReqClientNPNProtocol = exports.hasProtocol = void 0;
var _debug = _interopRequireDefault(require("debug"));
var _momentStrftime = _interopRequireDefault(require("moment-strftime"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const log = (0, _debug.default)('@modernpoacher/hapi-common-log');
log('`@modernpoacher/hapi-common-log` is awake');
const DEFAULT = '-';
const getRaw = ({
  raw = {}
} = {}) => raw;
const getReq = ({
  req = {}
} = {}) => req;
const getClient = ({
  client = {}
} = {}) => client;
const getHeaders = ({
  headers = {}
} = {}) => headers;
const getInfo = ({
  info = {}
} = {}) => info;
const getRawReq = request => getReq(getRaw(request));
const getRawReqClient = request => getClient(getRawReq(request));
const getResponseHeaders = request => getHeaders(getResponse(request));
const getResponse = ({
  response = {}
} = {}) => response;
const hasRawReqClientNPNProtocol = request => Reflect.has(getRawReqClient(request), 'npnProtocol');
exports.hasRawReqClientNPNProtocol = hasRawReqClientNPNProtocol;
const getRawReqClientNPNProtocol = request => Reflect.get(getRawReqClient(request), 'npnProtocol');
exports.getRawReqClientNPNProtocol = getRawReqClientNPNProtocol;
const hasRawReqHttpVersion = request => Reflect.has(getRawReq(request), 'httpVersion');
exports.hasRawReqHttpVersion = hasRawReqHttpVersion;
const getRawReqHttpVersion = request => Reflect.get(getRawReq(request), 'httpVersion');
exports.getRawReqHttpVersion = getRawReqHttpVersion;
const hasResponseStatusCode = request => Reflect.has(getResponse(request), 'statusCode');
exports.hasResponseStatusCode = hasResponseStatusCode;
const getResponseStatusCode = request => Reflect.get(getResponse(request), 'statusCode');
exports.getResponseStatusCode = getResponseStatusCode;
const hasResponseId = request => Reflect.has(getResponse(request), 'id');
exports.hasResponseId = hasResponseId;
const getResponseId = request => Reflect.get(getResponse(request), 'id');
exports.getResponseId = getResponseId;
const hasResponseHeadersContentLength = request => Reflect.has(getResponseHeaders(request), 'content-length');
exports.hasResponseHeadersContentLength = hasResponseHeadersContentLength;
const getResponseHeadersContentLength = request => Reflect.get(getResponseHeaders(request), 'content-length');
exports.getResponseHeadersContentLength = getResponseHeadersContentLength;
const hasInfoRemoteAddress = request => Reflect.has(getInfo(request), 'remoteAddress');
exports.hasInfoRemoteAddress = hasInfoRemoteAddress;
const getInfoRemoteAddress = request => Reflect.get(getInfo(request), 'remoteAddress');
exports.getInfoRemoteAddress = getInfoRemoteAddress;
const hasRawReqMethod = request => Reflect.has(getRawReq(request), 'method');
exports.hasRawReqMethod = hasRawReqMethod;
const getRawReqMethod = request => Reflect.get(getRawReq(request), 'method');
exports.getRawReqMethod = getRawReqMethod;
const hasRawReqUrl = request => Reflect.has(getRawReq(request), 'url');
exports.hasRawReqUrl = hasRawReqUrl;
const getRawReqUrl = request => Reflect.get(getRawReq(request), 'url');
exports.getRawReqUrl = getRawReqUrl;
const hasProtocol = request => hasRawReqClientNPNProtocol(request) || hasRawReqHttpVersion(request);
exports.hasProtocol = hasProtocol;
const getProtocol = request => hasRawReqClientNPNProtocol(request) ? getRawReqClientNPNProtocol(request) : hasRawReqHttpVersion(request) ? `HTTP/${getRawReqHttpVersion(request)}` : 'HTTP/1.0';
exports.getProtocol = getProtocol;
const getStringFromTime = (date = new Date()) => (0, _momentStrftime.default)(date).strftime('%d/%b/%Y:%H:%M:%S %z');
exports.getStringFromTime = getStringFromTime;
function hasOptionsIp(options = {}) {
  /*
   *  log('hasOptionsIp')
   */

  if (Reflect.has(options, 'ip')) {
    return !!Reflect.get(options, 'ip');
  }
  return false;
}
function getOptionsIp(options = {}) {
  /*
   *  log('getOptionsIp')
   */

  const ip = Reflect.get(options, 'ip');
  return String(ip).toLowerCase();
}
function getRequestLine(request) {
  /*
   *  log('getRequestLine')
   */

  const method = hasRawReqMethod(request) ? getRawReqMethod(request) : DEFAULT;
  const url = hasRawReqUrl(request) ? getRawReqUrl(request) : DEFAULT;
  const protocol = hasProtocol(request) ? getProtocol(request) : DEFAULT;
  return `${method} ${url} ${protocol}`;
}
function toCommonLog(request) {
  /*
   *  log('toCommonLog')
   */

  const remoteHost = hasInfoRemoteAddress(request) ? getInfoRemoteAddress(request) : DEFAULT;
  const userIdentifier = DEFAULT;
  const userId = hasResponseId(request) ? getResponseId(request) : DEFAULT;
  const stringFromTime = getStringFromTime();
  const requestLine = getRequestLine(request);
  const responseStatusCode = hasResponseStatusCode(request) ? getResponseStatusCode(request) : DEFAULT;
  const responseObjectSize = hasResponseHeadersContentLength(request) ? getResponseHeadersContentLength(request) : DEFAULT;
  return `${remoteHost} ${userIdentifier} ${userId} [${stringFromTime}] "${requestLine}" ${responseStatusCode} ${responseObjectSize}`;
}