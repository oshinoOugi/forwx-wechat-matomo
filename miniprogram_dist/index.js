module.exports = function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
}([ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
        Constructor;
    };
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function isDefined(property) {
        return "undefined" !== (void 0 === property ? "undefined" : _typeof(property));
    }
    function isString(property) {
        return "string" == typeof property || property instanceof String;
    }
    function isObject(property) {
        return "object" === (void 0 === property ? "undefined" : _typeof(property));
    }
    function logConsoleError(message) {
        "undefined" !== ("undefined" == typeof console ? "undefined" : _typeof(console)) && console && console.error && console.error(message);
    }
    function getProtocolScheme(url) {
        return (url = new RegExp("^([a-z]+):").exec(url)) ? url[1] : null;
    }
    function getHostName(url) {
        var matches = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)").exec(url);
        return matches ? matches[1] : url;
    }
    function getUrlParameter(url, name) {
        return (name = new RegExp("[\\?&#]" + name + "=([^&#]*)").exec(url)) ? decodeURIComponent(name[1]) : "";
    }
    function trim(text) {
        return text && String(text) === text ? text.replace(/^\s+|\s+$/g, "") : text;
    }
    function serialiseObject(obj) {
        try {
            var prop, pairs = [], ignoreKeys = [ "imageurl", "clockinsum", "status", "mark", "stratumid", "useranswerid", "sharemark", "ald_share_src", "pklogid", "weixinadinfo", "gdt_vid", "weixinadkey", "integraladd", "assignmentid", "totalnum", "offsetleft", "offsettop" ], ignoreValTypes = [ "function", "undefined", "object" ];
            for (prop in obj) obj.hasOwnProperty(prop) && ("[object Object]" !== Object.prototype.toString.call(obj[prop]) ? -1 === ignoreKeys.indexOf(prop.toLowerCase()) && -1 === ignoreValTypes.indexOf(_typeof(obj[prop])) && pairs.push(prop + "=" + obj[prop]) : pairs.push(serialiseObject(obj[prop])));
            return pairs.filter(function(item) {
                return "" !== item;
            }).sort().join("&");
        } catch (error) {
            return console.error(error), "";
        }
    }
    function domainFixup(domain) {
        var dl = domain.length;
        return domain = -1 !== (domain = "*." === (domain = "." === domain.charAt(--dl) ? domain.slice(0, dl) : domain).slice(0, 2) ? domain.slice(1) : domain).indexOf("/") ? domain.substr(0, domain.indexOf("/")) : domain;
    }
    function sha1(str) {
        for (var j, rotate_left = function(n, s) {
            return n << s | n >>> 32 - s;
        }, cvt_hex = function(val) {
            for (var strout = "", i = void 0, i = 7; 0 <= i; i--) strout += (val >>> 4 * i & 15).toString(16);
            return strout;
        }, blockstart = void 0, i = void 0, W = [], H0 = 1732584193, H1 = 4023233417, H2 = 2562383102, H3 = 271733878, H4 = 3285377520, A = void 0, B = void 0, C = void 0, D = void 0, E = void 0, temp = void 0, word_array = [], str_len = (str = utf8_encode(str)).length, i = 0; i < str_len - 3; i += 4) j = str.charCodeAt(i) << 24 | str.charCodeAt(i + 1) << 16 | str.charCodeAt(i + 2) << 8 | str.charCodeAt(i + 3), 
        word_array.push(j);
        switch (3 & str_len) {
          case 0:
            i = 2147483648;
            break;

          case 1:
            i = str.charCodeAt(str_len - 1) << 24 | 8388608;
            break;

          case 2:
            i = str.charCodeAt(str_len - 2) << 24 | str.charCodeAt(str_len - 1) << 16 | 32768;
            break;

          case 3:
            i = str.charCodeAt(str_len - 3) << 24 | str.charCodeAt(str_len - 2) << 16 | str.charCodeAt(str_len - 1) << 8 | 128;
        }
        for (word_array.push(i); 14 != (15 & word_array.length); ) word_array.push(0);
        for (word_array.push(str_len >>> 29), word_array.push(str_len << 3 & 4294967295), 
        blockstart = 0; blockstart < word_array.length; blockstart += 16) {
            for (i = 0; i < 16; i++) W[i] = word_array[blockstart + i];
            for (i = 16; i <= 79; i++) W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
            for (A = H0, B = H1, C = H2, D = H3, E = H4, i = 0; i <= 19; i++) temp = rotate_left(A, 5) + (B & C | ~B & D) + E + W[i] + 1518500249 & 4294967295, 
            E = D, D = C, C = rotate_left(B, 30), B = A, A = temp;
            for (i = 20; i <= 39; i++) temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 1859775393 & 4294967295, 
            E = D, D = C, C = rotate_left(B, 30), B = A, A = temp;
            for (i = 40; i <= 59; i++) temp = rotate_left(A, 5) + (B & C | B & D | C & D) + E + W[i] + 2400959708 & 4294967295, 
            E = D, D = C, C = rotate_left(B, 30), B = A, A = temp;
            for (i = 60; i <= 79; i++) temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 3395469782 & 4294967295, 
            E = D, D = C, C = rotate_left(B, 30), B = A, A = temp;
            H0 = H0 + A & 4294967295, H1 = H1 + B & 4294967295, H2 = H2 + C & 4294967295, H3 = H3 + D & 4294967295, 
            H4 = H4 + E & 4294967295;
        }
        return (temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4)).toLowerCase();
    }

    var obj = {};
    if(process.env.TARO_ENV == 'alipay'){
        obj = my;
    }else{
        obj = wx;
    }
    var expireDateTime = void 0, sysInfo = obj.getSystemInfoSync(), navigatorAlias_userAgent = sysInfo.model + " " + sysInfo.language + " " + sysInfo.screenWidth + "x" + sysInfo.screenHeight + " " + sysInfo.platform + " " + sysInfo.system + " " + sysInfo.version, navigatorAlias_platform = sysInfo.platform, utf8_encode = function(argString) {
        return unescape(encodeURIComponent(argString));
    }, Tracker = function() {
        function Tracker(trackerUrl, siteId) {
            _classCallCheck(this, Tracker), _initialiseProps.call(this), this.configTrackerUrl = trackerUrl, 
            this.configTrackerSiteId = siteId, this.registeredHooks = {}, (this.trackerInstance = this).CONSENT_COOKIE_NAME = "mtm_consent", 
            this.CONSENT_REMOVED_COOKIE_NAME = "mtm_consent_removed", this.locationArray = "", 
            this.domainAlias = "", this.locationHrefAlias = "", this.configReferrerUrl = "", 
            this.enableJSErrorTracking = !1, this.defaultRequestMethod = "POST", this.pageScheme = "mp://", 
            this.configRequestMethod = this.defaultRequestMethod, this.defaultRequestContentType = "application/x-www-form-urlencoded; charset=UTF-8", 
            this.configRequestContentType = this.defaultRequestContentType, this.configApiUrl = "", 
            this.configAppendToTrackingUrl = "", this.visitorUUID = "", this.configCustomUrl = "", 
            this.configTitle = "", this.configDownloadExtensions = [ "7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip" ], 
            this.configHostsAlias = [ this.domainAlias ], this.configIgnoreClasses = [], this.configDownloadClasses = [], 
            this.configLinkClasses = [], this.configTrackerPause = 500, this.configMinimumVisitTime = null, 
            this.configDiscardHashTag = null, this.configCustomData = null, this.configCampaignNameParameters = [ "pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium" ], 
            this.configCampaignKeywordParameters = [ "pk_kwd", "piwik_kwd", "utm_term" ], this.configCookieNamePrefix = "_pk_", 
            this.configVisitorIdUrlParameter = "pk_vid", this.configVisitorIdUrlParameterTimeoutInSeconds = 180, 
            this.configCookieDomain = null, this.configCookiePath = null, this.configCookieIsSecure = !1, 
            this.configCookiesDisabled = !1, this.configDoNotTrack = null, this.configCountPreRendered = null, 
            this.configConversionAttributionFirstReferrer = null, this.configVisitorCookieTimeout = 339552e5, 
            this.configSessionCookieTimeout = 18e5, this.configReferralCookieTimeout = 15768e6, 
            this.configPerformanceTrackingEnabled = !0, this.configPerformanceGenerationTime = 0, 
            this.configStoreCustomVariablesInCookie = !1, this.customVariables = !1, this.configCustomRequestContentProcessing = null, 
            this.customVariablesPage = {}, this.customVariablesEvent = {}, this.customDimensions = {}, 
            this.customVariableMaximumLength = 200, this.ecommerceItems = {}, this.browserFeatures = {}, 
            this.trackedContentImpressions = [], this.isTrackOnlyVisibleContentEnabled = !1, 
            this.timeNextTrackingRequestCanBeExecutedImmediately = !1, this.linkTrackingInstalled = !1, 
            this.linkTrackingEnabled = !1, this.crossDomainTrackingEnabled = !1, this.lastTrackerRequestTime = null, 
            this.lastButton = null, this.lastTarget = null, this.hash = sha1, this.domainHash = null, 
            this.configIdPageView = null, this.numTrackedPageviews = 0, this.configCookiesToDelete = [ "id", "ses", "cvar", "ref" ], 
            this.configConsentRequired = !1, this.configHasConsent = null, this.consentRequestsQueue = [], 
            this.configHasConsent = !this.getCookie(this.CONSENT_REMOVED_COOKIE_NAME), this.detectBrowserFeatures(), 
            this.updateDomainHash(), this.configUserId = this.getCookie(this.getCookieName("user_id")), 
            this.enableLog = !1;
        }
        return _createClass(Tracker, [ {
            key: "isSiteHostName",
            value: function(hostName) {
                for (var alias, offset, i = 0; i < this.configHostsAlias.length; i++) {
                    if (hostName === (alias = domainFixup(this.configHostsAlias[i].toLowerCase()))) return !0;
                    if ("." === alias.slice(0, 1)) {
                        if (hostName === alias.slice(1)) return !0;
                        if (0 < (offset = hostName.length - alias.length) && hostName.slice(offset) === alias) return !0;
                    }
                }
                return !1;
            }
        }, {
            key: "makeSureThereIsAGapAfterFirstTrackingRequestToPreventMultipleVisitorCreation",
            value: function(callback) {
                var timeToWait, timeNow = new Date().getTime();
                if (this.lastTrackerRequestTime = timeNow, this.timeNextTrackingRequestCanBeExecutedImmediately && timeNow < this.timeNextTrackingRequestCanBeExecutedImmediately) return timeToWait = this.timeNextTrackingRequestCanBeExecutedImmediately - timeNow, 
                setTimeout(callback, timeToWait), this.setExpireDateTime(50 + timeToWait), void (this.timeNextTrackingRequestCanBeExecutedImmediately += 50);
                !1 === this.timeNextTrackingRequestCanBeExecutedImmediately && (this.timeNextTrackingRequestCanBeExecutedImmediately = timeNow + 800), 
                callback();
            }
        }, {
            key: "isSameCrossDomainDevice",
            value: function(deviceIdFromUrl) {
                deviceIdFromUrl = String(deviceIdFromUrl);
                var thisBrowserId = this.generateBrowserSpecificId(), lengthBrowserId = thisBrowserId.length, browserIdInUrl = deviceIdFromUrl.substr(-1 * lengthBrowserId, lengthBrowserId), deviceIdFromUrl = parseInt(deviceIdFromUrl.substr(0, deviceIdFromUrl.length - lengthBrowserId), 10);
                if (deviceIdFromUrl && browserIdInUrl && browserIdInUrl === thisBrowserId) {
                    lengthBrowserId = this.getCurrentTimestampInSeconds();
                    if (this.configVisitorIdUrlParameterTimeoutInSeconds <= 0) return !0;
                    if (deviceIdFromUrl <= lengthBrowserId && lengthBrowserId <= deviceIdFromUrl + this.configVisitorIdUrlParameterTimeoutInSeconds) return !0;
                }
                return !1;
            }
        }, {
            key: "getVisitorIdFromUrl",
            value: function(url) {
                if (!this.crossDomainTrackingEnabled) return "";
                if (!(url = getUrlParameter(url, this.configVisitorIdUrlParameter))) return "";
                var url = String(url), pattern = new RegExp("^[a-zA-Z0-9]+$");
                if (32 === url.length && pattern.test(url)) {
                    pattern = url.substr(16, 32);
                    if (this.isSameCrossDomainDevice(pattern)) return url.substr(0, 16);
                }
                return "";
            }
        }, {
            key: "setVisitorIdCookie",
            value: function(visitorIdCookieValues) {
                var now;
                this.configTrackerSiteId && (now = new Date(), now = Math.round(now.getTime() / 1e3), 
                now = (visitorIdCookieValues = !isDefined(visitorIdCookieValues) ? this.getValuesFromVisitorIdCookie() : visitorIdCookieValues).uuid + "." + visitorIdCookieValues.createTs + "." + visitorIdCookieValues.visitCount + "." + now + "." + visitorIdCookieValues.lastVisitTs + "." + visitorIdCookieValues.lastEcommerceOrderTs, 
                this.setCookie(this.getCookieName("id"), now, this.getRemainingVisitorCookieTimeout(), this.configCookiePath, this.configCookieDomain, this.configCookieIsSecure));
            }
        }, {
            key: "deleteCookie",
            value: function(cookieName, path, domain) {
                this.setCookie(cookieName, "", -86400, path, domain);
            }
        }, {
            key: "isPossibleToSetCookieOnDomain",
            value: function(domainToTest) {
                return this.setCookie("test", "testvalue", 1e4, null, domainToTest), "testvalue" === this.getCookie("test") && (this.deleteCookie("test", null, domainToTest), 
                !0);
            }
        }, {
            key: "setSiteId",
            value: function(siteId) {
                this.configTrackerSiteId = siteId, this.setVisitorIdCookie();
            }
        }, {
            key: "sortObjectByKeys",
            value: function(value) {
                if (value && isObject(value)) {
                    var key, keys = [];
                    for (key in value) Object.prototype.hasOwnProperty.call(value, key) && keys.push(key);
                    for (var normalized = {}, len = (keys.sort(), keys.length), i = 0; i < len; i++) normalized[keys[i]] = value[keys[i]];
                    return normalized;
                }
            }
        }, {
            key: "logEcommerce",
            value: function(orderId, grandTotal, subTotal, tax, shipping, discount) {
                var request = "idgoal=0", lastEcommerceOrderTs = void 0, now = new Date(), items = [], sku = void 0, isEcommerceOrder = String(orderId).length;
                if (isEcommerceOrder && (request += "&ec_id=" + encodeURIComponent(orderId), lastEcommerceOrderTs = Math.round(now.getTime() / 1e3)), 
                request += "&revenue=" + grandTotal, String(subTotal).length && (request += "&ec_st=" + subTotal), 
                String(tax).length && (request += "&ec_tx=" + tax), String(shipping).length && (request += "&ec_sh=" + shipping), 
                String(discount).length && (request += "&ec_dt=" + discount), this.ecommerceItems) {
                    for (sku in this.ecommerceItems) Object.prototype.hasOwnProperty.call(this.ecommerceItems, sku) && (isDefined(this.ecommerceItems[sku][1]) || (this.ecommerceItems[sku][1] = ""), 
                    isDefined(this.ecommerceItems[sku][2]) || (this.ecommerceItems[sku][2] = ""), isDefined(this.ecommerceItems[sku][3]) && 0 !== String(this.ecommerceItems[sku][3]).length || (this.ecommerceItems[sku][3] = 0), 
                    isDefined(this.ecommerceItems[sku][4]) && 0 !== String(this.ecommerceItems[sku][4]).length || (this.ecommerceItems[sku][4] = 1), 
                    items.push(this.ecommerceItems[sku]));
                    request += "&ec_items=" + encodeURIComponent(JSON.stringify(items));
                }
                request = this.getRequest(request, this.configCustomData, "ecommerce", lastEcommerceOrderTs), 
                this.sendRequest(request, this.configTrackerPause), isEcommerceOrder && (this.ecommerceItems = {});
            }
        }, {
            key: "logEcommerceOrder",
            value: function(orderId, grandTotal, subTotal, tax, shipping, discount) {
                String(orderId).length && isDefined(grandTotal) && this.logEcommerce(orderId, grandTotal, subTotal, tax, shipping, discount);
            }
        }, {
            key: "logEcommerceCartUpdate",
            value: function(grandTotal) {
                isDefined(grandTotal) && this.logEcommerce("", grandTotal, "", "", "", "");
            }
        }, {
            key: "startsUrlWithTrackerUrl",
            value: function(url) {
                return this.configTrackerUrl && url && 0 === String(url).indexOf(this.configTrackerUrl);
            }
        }, {
            key: "logSiteSearch",
            value: function(keyword, category, resultsCount, customData) {
                keyword = this.getRequest("search=" + encodeURIComponent(keyword) + (category ? "&search_cat=" + encodeURIComponent(category) : "") + (isDefined(resultsCount) ? "&search_count=" + resultsCount : ""), customData, "sitesearch");
                this.sendRequest(keyword, this.configTrackerPause);
            }
        }, {
            key: "logGoal",
            value: function(idGoal, customRevenue, customData) {
                idGoal = this.getRequest("idgoal=" + idGoal + (customRevenue ? "&revenue=" + customRevenue : ""), customData, "goal");
                this.sendRequest(idGoal, this.configTrackerPause);
            }
        }, {
            key: "logLink",
            value: function(url, linkType, customData, callback, sourceElement) {
                linkType = linkType + "=" + encodeURIComponent(this.purify(url)), sourceElement = this.getContentInteractionToRequestIfPossible(sourceElement, "click", url), 
                sourceElement && (linkType += "&" + sourceElement), url = this.getRequest(linkType, customData, "link");
                this.sendRequest(url, this.configTrackerPause, callback);
            }
        }, {
            key: "prefixPropertyName",
            value: function(prefix, propertyName) {
                return "" !== prefix ? prefix + propertyName.charAt(0).toUpperCase() + propertyName.slice(1) : propertyName;
            }
        }, {
            key: "trackCallback",
            value: function(callback) {
                callback();
            }
        } ]), Tracker;
    }(), _initialiseProps = function() {
        var obj = {};
        if(process.env.TARO_ENV == 'alipay'){
            obj = my;
        }else{
            obj = wx;
        }
        var customSetStorageSync = function(key,data){
            if(process.env.TARO_ENV == 'alipay'){
                obj.setStorageSync({key:key, data:data});
            }else{
                obj.setStorageSync(key,data);
            }
        };
        var customGetStorageSync = function(key){
            if(process.env.TARO_ENV == 'alipay'){
                let res = obj.getStorageSync({key:key});
                return res.data;
            }else{
                return obj.getStorageSync(key);
            }
        };
        var _this2 = this;
        this.setCookie = function(cookieName, value, msToExpire, path, domain, isSecure) {
            var expiryDate;
            _this2.configCookiesDisabled || (expiryDate = void 0, msToExpire && (expiryDate = new Date()).setTime(expiryDate.getTime() + msToExpire), 
            customSetStorageSync("piwik_" + cookieName, encodeURIComponent(value) + (msToExpire ? ";" + expiryDate.getTime() : "")));
        }, this.getCookie = function(cookieName) {
            if (_this2.configCookiesDisabled) return 0;
            var cookieValue = 0;
            try {
                var res = customGetStorageSync("piwik_" + cookieName);
                res && (res.split(";")[1] < new Date().getTime() ? obj.removeStorage({
                    key: "piwik_" + cookieName
                }) : cookieValue = decodeURIComponent(res.split(";")[0]));
            } catch (e) {}
            return cookieValue;
        }, this.purify = function(url) {
            var targetPattern;
            return url = function(url, name) {
                if (-1 === (url = String(url)).indexOf("?" + name + "=") && -1 === url.indexOf("&" + name + "=")) return url;
                var searchPos = url.indexOf("?");
                if (-1 === searchPos) return url;
                var queryString = url.substr(searchPos + 1), url = url.substr(0, searchPos);
                if (queryString) {
                    for (var searchPos = "", hashPos = queryString.indexOf("#"), paramsArr = (-1 !== hashPos && (searchPos = queryString.substr(hashPos + 1), 
                    queryString = queryString.substr(0, hashPos)), queryString.split("&")), i = paramsArr.length - 1; 0 <= i; i--) paramsArr[i].split("=")[0] === name && paramsArr.splice(i, 1);
                    hashPos = paramsArr.join("&");
                    hashPos && (url = url + "?" + hashPos), searchPos && (url += "#" + searchPos);
                }
                return url;
            }(url, _this2.configVisitorIdUrlParameter), _this2.configDiscardHashTag ? (targetPattern = new RegExp("#.*"), 
            url.replace(targetPattern, "")) : url;
        }, this.resolveRelativeReference = function(baseUrl, url) {
            var i = void 0;
            return getProtocolScheme(url) ? url : "/" === url.slice(0, 1) ? getProtocolScheme(baseUrl) + "://" + getHostName(baseUrl) + url : (baseUrl = (i = (baseUrl = 0 <= (i = (baseUrl = _this2.purify(baseUrl)).indexOf("?")) ? baseUrl.slice(0, i) : baseUrl).lastIndexOf("/")) !== baseUrl.length - 1 ? baseUrl.slice(0, i + 1) : baseUrl) + url;
        }, this.getImage = function(request, callback) {
            request = request.replace("send_image=0", "send_image=1");
            var image = new Image(1, 1);
            image.onload = function() {
                "function" == typeof callback && callback();
            }, image.src = _this2.configTrackerUrl + (_this2.configTrackerUrl.indexOf("?") < 0 ? "?" : "&") + request;
        }, this.sendXmlHttpRequest = function(request, callback, fallbackToGet) {
            isDefined(fallbackToGet) && null !== fallbackToGet || (fallbackToGet = !0);
            var that = _this2;
            setTimeout(function() {
                obj.request({
                    url: _this2.configTrackerUrl + ("GET" === _this2.configRequestMethod.toLowerCase() ? "?" + request : ""),
                    data: request,
                    method: _this2.configRequestMethod,
                    headers: {
                        "content-type": _this2.configRequestContentType
                    },
                    header: {
                        "content-type": _this2.configRequestContentType
                    },
                    success: function(res) {
                        callback && callback(), that.log("request success", {
                            base: that.configTrackerUrl,
                            res: res
                        });
                    },
                    fail: function(res) {
                        that.log("request fail", {
                            base: that.configTrackerUrl,
                            res: res
                        });
                    }
                });
            }, 50);
        }, this.setExpireDateTime = function(delay) {
            delay = new Date().getTime() + delay;
            (!expireDateTime || expireDateTime < delay) && (expireDateTime = delay);
        }, this.sendRequest = function(request, delay, callback) {
            _this2.configHasConsent ? !_this2.configDoNotTrack && request && (_this2.configConsentRequired && _this2.configHasConsent && (request += "&consent=1"), 
            _this2.makeSureThereIsAGapAfterFirstTrackingRequestToPreventMultipleVisitorCreation(function() {
                _this2.sendXmlHttpRequest(request, callback), _this2.setExpireDateTime(delay);
            })) : _this2.consentRequestsQueue.push(request);
        }, this.canSendBulkRequest = function(requests) {
            return !_this2.configDoNotTrack && (requests && requests.length);
        }, this.sendBulkRequest = function(requests, delay) {
            var bulk;
            _this2.canSendBulkRequest(requests) && (_this2.configHasConsent ? (bulk = '{"requests":["?' + requests.join('","?') + '"]}', 
            _this2.makeSureThereIsAGapAfterFirstTrackingRequestToPreventMultipleVisitorCreation(function() {
                _this2.sendXmlHttpRequest(bulk, null, !1), _this2.setExpireDateTime(delay);
            })) : _this2.consentRequestsQueue.push(requests));
        }, this.getCookieName = function(baseName) {
            return _this2.configCookieNamePrefix + baseName + "." + _this2.configTrackerSiteId + "." + _this2.domainHash;
        }, this.updateDomainHash = function() {
            _this2.domainHash = _this2.hash((_this2.configCookieDomain || _this2.domainAlias) + (_this2.configCookiePath || "/")).slice(0, 4);
        }, this.getCustomVariablesFromCookie = function() {
            var cookieName = _this2.getCookieName("cvar"), cookieName = _this2.getCookie(cookieName);
            return cookieName.length && (cookieName = JSON.parse(cookieName), isObject(cookieName)) ? cookieName : {};
        }, this.loadCustomVariables = function() {
            !1 === _this2.customVariables && (_this2.customVariables = _this2.getCustomVariablesFromCookie());
        }, this.generateRandomUuid = function() {
            return _this2.hash((navigatorAlias_userAgent || "") + (navigatorAlias_platform || "") + JSON.stringify(_this2.browserFeatures) + new Date().getTime() + Math.random()).slice(0, 16);
        }, this.generateBrowserSpecificId = function() {
            return _this2.hash((navigatorAlias_userAgent || "") + (navigatorAlias_platform || "") + JSON.stringify(_this2.browserFeatures)).slice(0, 6);
        }, this.getCurrentTimestampInSeconds = function() {
            return Math.floor(new Date().getTime() / 1e3);
        }, this.makeCrossDomainDeviceId = function() {
            var timestamp = _this2.getCurrentTimestampInSeconds(), browserId = _this2.generateBrowserSpecificId();
            return String(timestamp) + browserId;
        }, this.loadVisitorIdCookie = function() {
            _this2.visitorUUID || (_this2.visitorUUID = _this2.getVisitorIdFromUrl(_this2.locationHrefAlias));
            var now = new Date(), now = Math.round(now.getTime() / 1e3), visitorIdCookieName = _this2.getCookieName("id"), visitorIdCookieName = _this2.getCookie(visitorIdCookieName), cookieValue = void 0;
            return visitorIdCookieName ? ((cookieValue = visitorIdCookieName.split(".")).unshift("0"), 
            _this2.visitorUUID.length && (cookieValue[1] = _this2.visitorUUID), cookieValue) : [ "1", _this2.visitorUUID.length ? _this2.visitorUUID : _this2.generateRandomUuid(), now, 0, now, "", "" ];
        }, this.getValuesFromVisitorIdCookie = function() {
            var cookieVisitorIdValue = _this2.loadVisitorIdCookie(), newVisitor = cookieVisitorIdValue[0], uuid = cookieVisitorIdValue[1], createTs = cookieVisitorIdValue[2], visitCount = cookieVisitorIdValue[3], currentVisitTs = cookieVisitorIdValue[4], lastVisitTs = cookieVisitorIdValue[5];
            return isDefined(cookieVisitorIdValue[6]) || (cookieVisitorIdValue[6] = ""), {
                newVisitor: newVisitor,
                uuid: uuid,
                createTs: createTs,
                visitCount: visitCount,
                currentVisitTs: currentVisitTs,
                lastVisitTs: lastVisitTs,
                lastEcommerceOrderTs: cookieVisitorIdValue[6]
            };
        }, this.getRemainingVisitorCookieTimeout = function() {
            var nowTs = new Date().getTime(), cookieCreatedTs = _this2.getValuesFromVisitorIdCookie().createTs;
            return 1e3 * parseInt(cookieCreatedTs, 10) + _this2.configVisitorCookieTimeout - nowTs;
        }, this.loadReferrerAttributionCookie = function() {
            var cookie = _this2.getCookie(_this2.getCookieName("ref"));
            if (cookie.length) try {
                if (cookie = JSON.parse(cookie), isObject(cookie)) return cookie;
            } catch (ignore) {}
            return [ "", "", 0, "" ];
        }, this.deleteCookies = function() {
            var index, cookieName, savedConfigCookiesDisabled = _this2.configCookiesDisabled;
            for (_this2.configCookiesDisabled = !1, index = 0; index < _this2.configCookiesToDelete.length; index++) (cookieName = _this2.getCookieName(_this2.configCookiesToDelete[index])) !== _this2.CONSENT_REMOVED_COOKIE_NAME && cookieName !== _this2.CONSENT_COOKIE_NAME && 0 !== _this2.getCookie(cookieName) && _this2.deleteCookie(cookieName, _this2.configCookiePath, _this2.configCookieDomain);
            _this2.configCookiesDisabled = savedConfigCookiesDisabled;
        }, this.generateUniqueId = function() {
            for (var id = "", chars = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", charLen = chars.length, i = 0; i < 6; i++) id += chars.charAt(Math.floor(Math.random() * charLen));
            return id;
        }, this.getRequest = function(request, customData, pluginMethod, currentEcommerceOrderTs) {
            var i = void 0, now = new Date(), nowTs = Math.round(now.getTime() / 1e3), referralTs = void 0, referralUrl = void 0, customVariablesCopy = _this2.customVariables, cookieSessionName = _this2.getCookieName("ses"), cookieReferrerName = _this2.getCookieName("ref"), cookieCustomVariablesName = _this2.getCookieName("cvar"), cookieSessionName = _this2.getCookie(cookieSessionName), attributionCookie = _this2.loadReferrerAttributionCookie(), currentUrl = _this2.configCustomUrl || _this2.locationHrefAlias, campaignNameDetected = void 0, campaignKeywordDetected = void 0;
            if (_this2.configCookiesDisabled && _this2.deleteCookies(), _this2.configDoNotTrack) return "";
            var cookieVisitorIdValues = _this2.getValuesFromVisitorIdCookie(), campaignNameDetected = (isDefined(currentEcommerceOrderTs) || (currentEcommerceOrderTs = ""), 
            attributionCookie[0]), campaignKeywordDetected = attributionCookie[1], referralTs = attributionCookie[2], referralUrl = attributionCookie[3];
            if (!cookieSessionName) {
                cookieSessionName = _this2.configSessionCookieTimeout / 1e3;
                if ((!cookieVisitorIdValues.lastVisitTs || nowTs - cookieVisitorIdValues.lastVisitTs > cookieSessionName) && (cookieVisitorIdValues.visitCount++, 
                cookieVisitorIdValues.lastVisitTs = cookieVisitorIdValues.currentVisitTs), !_this2.configConversionAttributionFirstReferrer || !campaignNameDetected.length) {
                    for (i in _this2.configCampaignNameParameters) if (Object.prototype.hasOwnProperty.call(_this2.configCampaignNameParameters, i) && (campaignNameDetected = getUrlParameter(currentUrl, _this2.configCampaignNameParameters[i])).length) break;
                    for (i in _this2.configCampaignKeywordParameters) if (Object.prototype.hasOwnProperty.call(_this2.configCampaignKeywordParameters, i) && (campaignKeywordDetected = getUrlParameter(currentUrl, _this2.configCampaignKeywordParameters[i])).length) break;
                }
                cookieSessionName = getHostName(_this2.configReferrerUrl), originalReferrerHostName = referralUrl.length ? getHostName(referralUrl) : "", 
                ((referralUrl = !(!cookieSessionName.length || _this2.isSiteHostName(cookieSessionName) || _this2.configConversionAttributionFirstReferrer && originalReferrerHostName.length && !_this2.isSiteHostName(originalReferrerHostName)) ? _this2.configReferrerUrl : referralUrl).length || campaignNameDetected.length) && (attributionCookie = [ campaignNameDetected, campaignKeywordDetected, referralTs = nowTs, _this2.purify(referralUrl.slice(0, 1024)) ], 
                _this2.setCookie(cookieReferrerName, JSON.stringify(attributionCookie), _this2.configReferralCookieTimeout, _this2.configCookiePath, _this2.configCookieDomain));
            }
            for (i in request += "&sdk_version=0.0.2&idsite=" + _this2.configTrackerSiteId + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + now.getHours() + "&m=" + now.getMinutes() + "&s=" + now.getSeconds() + "&url=" + encodeURIComponent(_this2.purify(currentUrl)) + (_this2.configReferrerUrl.length ? "&urlref=" + encodeURIComponent(_this2.purify(_this2.configReferrerUrl)) : "") + (_this2.configUserId && _this2.configUserId.length ? "&uid=" + encodeURIComponent(_this2.configUserId) : "") + "&_id=" + cookieVisitorIdValues.uuid + "&_idts=" + cookieVisitorIdValues.createTs + "&_idvc=" + cookieVisitorIdValues.visitCount + "&_idn=" + cookieVisitorIdValues.newVisitor + "&new_visit=" + cookieVisitorIdValues.newVisitor + (campaignNameDetected.length ? "&_rcn=" + encodeURIComponent(campaignNameDetected) : "") + (campaignKeywordDetected.length ? "&_rck=" + encodeURIComponent(campaignKeywordDetected) : "") + "&_refts=" + referralTs + "&_viewts=" + cookieVisitorIdValues.lastVisitTs + (String(cookieVisitorIdValues.lastEcommerceOrderTs).length ? "&_ects=" + cookieVisitorIdValues.lastEcommerceOrderTs : "") + (String(referralUrl).length ? "&_ref=" + encodeURIComponent(_this2.purify(referralUrl.slice(0, 1024))) : "") + "&send_image=0", 
            _this2.browserFeatures) Object.prototype.hasOwnProperty.call(_this2.browserFeatures, i) && (request += "&" + i + "=" + _this2.browserFeatures[i]);
            var index, customDimensionIdsAlreadyHandled = [];
            if (customData) for (i in customData) Object.prototype.hasOwnProperty.call(customData, i) && /^dimension\d+$/.test(i) && (index = i.replace("dimension", ""), 
            customDimensionIdsAlreadyHandled.push(parseInt(index, 10)), customDimensionIdsAlreadyHandled.push(String(index)), 
            request += "&" + i + "=" + customData[i], delete customData[i]);
            for (i in customData && function(property) {
                if (!property) return !0;
                var i, isEmpty = !0;
                for (i in property) Object.prototype.hasOwnProperty.call(property, i) && (isEmpty = !1);
                return isEmpty;
            }(customData) && (customData = null), _this2.customDimensions) Object.prototype.hasOwnProperty.call(_this2.customDimensions, i) && -1 === customDimensionIdsAlreadyHandled.indexOf(i) && (request += "&dimension" + i + "=" + _this2.customDimensions[i]);
            customData ? request += "&data=" + encodeURIComponent(JSON.stringify(customData)) : _this2.configCustomData && (request += "&data=" + encodeURIComponent(JSON.stringify(_this2.configCustomData)));
            function appendCustomVariablesToRequest(customVariables, parameterName) {
                return 2 < (customVariables = JSON.stringify(customVariables)).length ? "&" + parameterName + "=" + encodeURIComponent(customVariables) : "";
            }
            var cookieSessionName = _this2.sortObjectByKeys(_this2.customVariablesPage), originalReferrerHostName = _this2.sortObjectByKeys(_this2.customVariablesEvent);
            if (request = (request += appendCustomVariablesToRequest(cookieSessionName, "cvar")) + appendCustomVariablesToRequest(originalReferrerHostName, "e_cvar"), 
            _this2.customVariables) {
                for (i in request += appendCustomVariablesToRequest(_this2.customVariables, "_cvar"), 
                customVariablesCopy) Object.prototype.hasOwnProperty.call(customVariablesCopy, i) && ("" !== _this2.customVariables[i][0] && "" !== _this2.customVariables[i][1] || delete _this2.customVariables[i]);
                _this2.configStoreCustomVariablesInCookie && _this2.setCookie(cookieCustomVariablesName, JSON.stringify(_this2.customVariables), _this2.configSessionCookieTimeout, _this2.configCookiePath, _this2.configCookieDomain);
            }
            return _this2.configPerformanceTrackingEnabled && _this2.configPerformanceGenerationTime && (request += "&gt_ms=" + _this2.configPerformanceGenerationTime), 
            _this2.configIdPageView && (request += "&pv_id=" + _this2.configIdPageView), cookieVisitorIdValues.lastEcommerceOrderTs = isDefined(currentEcommerceOrderTs) && String(currentEcommerceOrderTs).length ? currentEcommerceOrderTs : cookieVisitorIdValues.lastEcommerceOrderTs, 
            _this2.setVisitorIdCookie(cookieVisitorIdValues), _this2.setCookie(_this2.getCookieName("ses"), "*", _this2.configSessionCookieTimeout, _this2.configCookiePath, _this2.configCookieDomain, _this2.configCookieIsSecure), 
            _this2.configAppendToTrackingUrl.length && (request += "&" + _this2.configAppendToTrackingUrl), 
            request = "function" == typeof _this2.configCustomRequestContentProcessing ? _this2.configCustomRequestContentProcessing(request) : request;
        }, this.logPageView = function(customTitle, customData, callback) {
            _this2.configIdPageView = _this2.generateUniqueId();
            customTitle = _this2.getRequest("action_name=" + encodeURIComponent(customTitle || _this2.configTitle), customData, "log");
            _this2.sendRequest(customTitle, _this2.configTrackerPause, callback);
        }, this.buildEventRequest = function(category, action, name, value) {
            return "e_c=" + encodeURIComponent(category) + "&e_a=" + encodeURIComponent(action) + (isDefined(name) ? "&e_n=" + encodeURIComponent(name) : "") + (isDefined(value) ? "&e_v=" + encodeURIComponent(value) : "");
        }, this.logEvent = function(category, action, name, value, customData, callback) {
            if (0 === trim(String(category)).length || 0 === trim(String(action)).length) return logConsoleError("Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces"), 
            !1;
            category = _this2.getRequest(_this2.buildEventRequest(category, action, name, value), customData, "event");
            _this2.sendRequest(category, _this2.configTrackerPause, callback);
        }, this.getCrossDomainVisitorId = function() {
            return _this2.getValuesFromVisitorIdCookie().uuid + _this2.makeCrossDomainDeviceId();
        }, this.detectBrowserFeatures = function() {
            _this2.browserFeatures.java = "0", _this2.browserFeatures.gears = "0", _this2.browserFeatures.cookie = "0";
            var width = parseInt(sysInfo.screenWidth, 10), height = parseInt(sysInfo.screenHeight, 10);
            _this2.browserFeatures.res = parseInt(width, 10) + "x" + parseInt(height, 10);
        }, this.getVisitorId = function() {
            return _this2.getValuesFromVisitorIdCookie().uuid;
        }, this.getVisitorInfo = function() {
            return _this2.loadVisitorIdCookie();
        }, this.getAttributionInfo = function() {
            return _this2.loadReferrerAttributionCookie();
        }, this.getAttributionCampaignName = function() {
            return _this2.loadReferrerAttributionCookie()[0];
        }, this.getAttributionCampaignKeyword = function() {
            return _this2.loadReferrerAttributionCookie()[1];
        }, this.getAttributionReferrerTimestamp = function() {
            return _this2.loadReferrerAttributionCookie()[2];
        }, this.getAttributionReferrerUrl = function() {
            return _this2.loadReferrerAttributionCookie()[3];
        }, this.setTrackerUrl = function(trackerUrl) {
            this.configTrackerUrl = trackerUrl;
        }, this.getTrackerUrl = function() {
            return _this2.configTrackerUrl;
        }, this.getPiwikUrl = function() {
            return _this2.getTrackerUrl();
        }, this.getSiteId = function() {
            return _this2.configTrackerSiteId;
        }, this.resetUserId = function(siteId) {
            _this2.configTrackerSiteId = siteId,
            _this2.configUserId = "", _this2.deleteCookie(_this2.getCookieName("user_id"), "", "");
        }, this.setUserId = function(userId,siteId) {
            _this2.configTrackerSiteId = siteId,
            isDefined(userId) && null != userId && userId.toString().length && (_this2.configUserId = userId.toString(), 
            userId = _this2.getCookie(_this2.getCookieName("user_id")), _this2.configUserId != userId && _this2.trackEvent("sys", "bind-user-id"), 
            _this2.setCookie(_this2.getCookieName("user_id"), _this2.configUserId, _this2.getRemainingVisitorCookieTimeout()));
        }, this.getUserId = function() {
            return _this2.configUserId;
        }, this.setCustomData = function(key_or_obj, opt_value) {
            isObject(key_or_obj) ? _this2.configCustomData = key_or_obj : (_this2.configCustomData || (_this2.configCustomData = {}), 
            _this2.configCustomData[key_or_obj] = opt_value);
        }, this.getCustomData = function() {
            return _this2.configCustomData;
        }, this.setCustomRequestProcessing = function(customRequestContentProcessingLogic) {
            _this2.configCustomRequestContentProcessing = customRequestContentProcessingLogic;
        }, this.appendToTrackingUrl = function(queryString) {
            _this2.configAppendToTrackingUrl = queryString;
        }, this.setCustomDimension = function(customDimensionId, value) {
            0 < (customDimensionId = parseInt(customDimensionId, 10)) && (isDefined(value) || (value = ""), 
            isString(value) || (value = String(value)), _this2.customDimensions[customDimensionId] = value);
        }, this.getCustomDimension = function(customDimensionId) {
            if (0 < (customDimensionId = parseInt(customDimensionId, 10)) && Object.prototype.hasOwnProperty.call(_this2.customDimensions, customDimensionId)) return _this2.customDimensions[customDimensionId];
        }, this.deleteCustomDimension = function(customDimensionId) {
            0 < (customDimensionId = parseInt(customDimensionId, 10)) && delete _this2.customDimensions[customDimensionId];
        }, this.setCustomVariable = function(index, name, value, scope) {
            isDefined(scope) || (scope = "visit"), isDefined(name) && (isDefined(value) || (value = ""), 
            0 < index && (name = isString(name) ? name : String(name), value = isString(value) ? value : String(value), 
            name = [ name.slice(0, _this2.customVariableMaximumLength), value.slice(0, _this2.customVariableMaximumLength) ], 
            "visit" === scope || 2 === scope ? (_this2.loadCustomVariables(), _this2.customVariables[index] = name) : "page" === scope || 3 === scope ? _this2.customVariablesPage[index] = name : "event" === scope && (_this2.customVariablesEvent[index] = name)));
        }, this.getCustomVariable = function(index, scope) {
            var cvar;
            return "page" === (scope = !isDefined(scope) ? "visit" : scope) || 3 === scope ? cvar = _this2.customVariablesPage[index] : "event" === scope ? cvar = _this2.customVariablesEvent[index] : "visit" !== scope && 2 !== scope || (_this2.loadCustomVariables(), 
            cvar = _this2.customVariables[index]), !(!isDefined(cvar) || cvar && "" === cvar[0]) && cvar;
        }, this.deleteCustomVariable = function(index, scope) {
            _this2.getCustomVariable(index, scope) && _this2.setCustomVariable(index, "", "", scope);
        }, this.deleteCustomVariables = function(scope) {
            "page" === scope || 3 === scope ? _this2.loadCustomVariablescustomVariablesPage = {} : "event" === scope ? _this2.customVariablesEvent = {} : "visit" !== scope && 2 !== scope || (_this2.customVariables = {});
        }, this.storeCustomVariablesInCookie = function() {
            _this2.configStoreCustomVariablesInCookie = !0;
        }, this.setLinkTrackingTimer = function(delay) {
            _this2.configTrackerPause = delay;
        }, this.getLinkTrackingTimer = function() {
            return _this2.configTrackerPause;
        }, this.setDownloadExtensions = function(extensions) {
            isString(extensions) && (extensions = extensions.split("|")), _this2.configDownloadExtensions = extensions;
        }, this.addDownloadExtensions = function(extensions) {
            var i;
            for (isString(extensions) && (extensions = extensions.split("|")), i = 0; i < extensions.length; i++) _this2.configDownloadExtensions.push(extensions[i]);
        }, this.removeDownloadExtensions = function(extensions) {
            var i = void 0, newExtensions = [];
            for (isString(extensions) && (extensions = extensions.split("|")), i = 0; i < _this2.configDownloadExtensions.length; i++) -1 === extensions.indexOf(_this2.configDownloadExtensions[i]) && newExtensions.push(_this2.configDownloadExtensions[i]);
            _this2.configDownloadExtensions = newExtensions;
        }, this.setRequestMethod = function(method) {
            _this2.configRequestMethod = method || _this2.defaultRequestMethod;
        }, this.setRequestContentType = function(requestContentType) {
            _this2.configRequestContentType = requestContentType || _this2.defaultRequestContentType;
        }, this.setReferrerUrl = function(url) {
            _this2.configReferrerUrl = url;
        }, this.setCustomUrl = function(url) {
            _this2.configCustomUrl = _this2.resolveRelativeReference(_this2.locationHrefAlias, url);
        }, this.getCurrentUrl = function() {
            return _this2.configCustomUrl || _this2.locationHrefAlias;
        }, this.setDocumentTitle = function(title) {
            _this2.configTitle = title;
        }, this.setAPIUrl = function(apiUrl) {
            _this2.configApiUrl = apiUrl;
        }, this.setCampaignNameKey = function(campaignNames) {
            _this2.configCampaignNameParameters = isString(campaignNames) ? [ campaignNames ] : campaignNames;
        }, this.setCampaignKeywordKey = function(campaignKeywords) {
            _this2.configCampaignKeywordParameters = isString(campaignKeywords) ? [ campaignKeywords ] : campaignKeywords;
        }, this.discardHashTag = function(enableFilter) {
            _this2.configDiscardHashTag = enableFilter;
        }, this.setCookieNamePrefix = function(cookieNamePrefix) {
            _this2.configCookieNamePrefix = cookieNamePrefix, _this2.customVariables = _this2.getCustomVariablesFromCookie();
        }, this.setCookieDomain = function(domain) {
            domain = domainFixup(domain);
            _this2.isPossibleToSetCookieOnDomain(domain) && (_this2.configCookieDomain = domain, 
            _this2.updateDomainHash());
        }, this.getCookieDomain = function() {
            return _this2.configCookieDomain;
        }, this.setSessionCookie = function(cookieName, cookieValue, msToExpire) {
            if (!cookieName) throw new Error("Missing cookie name");
            isDefined(msToExpire) || (msToExpire = _this2.configSessionCookieTimeout), _this2.configCookiesToDelete.push(cookieName), 
            _this2.setCookie(_this2.getCookieName(cookieName), cookieValue, msToExpire, _this2.configCookiePath, _this2.configCookieDomain);
        }, this.setCookiePath = function(path) {
            _this2.configCookiePath = path, _this2.updateDomainHash();
        }, this.getCookiePath = function(path) {
            return _this2.configCookiePath;
        }, this.setVisitorCookieTimeout = function(timeout) {
            _this2.configVisitorCookieTimeout = 1e3 * timeout;
        }, this.setSessionCookieTimeout = function(timeout) {
            _this2.configSessionCookieTimeout = 1e3 * timeout;
        }, this.getSessionCookieTimeout = function() {
            return _this2.configSessionCookieTimeout;
        }, this.setReferralCookieTimeout = function(timeout) {
            _this2.configReferralCookieTimeout = 1e3 * timeout;
        }, this.setConversionAttributionFirstReferrer = function(enable) {
            _this2.configConversionAttributionFirstReferrer = enable;
        }, this.disableCookies = function() {
            _this2.configCookiesDisabled = !0, _this2.browserFeatures.cookie = "0", _this2.configTrackerSiteId && _this2.deleteCookies();
        }, this.deleteCookies = function() {
            _this2.deleteCookies();
        }, this.disablePerformanceTracking = function() {
            _this2.configPerformanceTrackingEnabled = !1;
        }, this.setGenerationTimeMs = function(generationTime) {
            _this2.configPerformanceGenerationTime = parseInt(generationTime, 10);
        }, this.trackGoal = function(idGoal, customRevenue, customData) {
            _this2.trackCallback(function() {
                _this2.logGoal(idGoal, customRevenue, customData);
            });
        }, this.trackLink = function(sourceUrl, linkType, customData, callback) {
            _this2.trackCallback(function() {
                _this2.logLink(sourceUrl, linkType, customData, callback);
            });
        }, this.getNumTrackedPageViews = function() {
            return _this2.numTrackedPageviews;
        }, this.trackPageView = function(customTitle, pageUrl, customData, callback) {
            _this2.trackedContentImpressions = [], _this2.consentRequestsQueue = [], "" !== customTitle && void 0 !== customTitle && "" !== pageUrl && void 0 !== pageUrl && ((pageUrl = 0 !== pageUrl.indexOf(_this2.pageScheme) ? _this2.pageScheme + pageUrl : pageUrl).indexOf(_this2.sc) && _this2.setCustomUrl(pageUrl), 
            _this2.trackCallback(function() {
                _this2.numTrackedPageviews++, _this2.logPageView(customTitle, customData, callback);
            }));
        }, this.trackEvent = function(category, action, name, value, customData, callback) {
            void 0 === name && (name = action), _this2.trackCallback(function() {
                _this2.logEvent(category, action, name, value, customData, callback);
            });
        }, this.trackSiteSearch = function(keyword, category, resultsCount, customData) {
            _this2.trackCallback(function() {
                _this2.logSiteSearch(keyword, category, resultsCount, customData);
            });
        }, this.setEcommerceView = function(sku, name, category, price) {
            isDefined(category) && category.length ? category instanceof Array && (category = JSON.stringify(category)) : category = "", 
            _this2.customVariablesPage[5] = [ "_pkc", category ], isDefined(price) && String(price).length && (_this2.customVariablesPage[2] = [ "_pkp", price ]), 
            (isDefined(sku) && sku.length || isDefined(name) && name.length) && (isDefined(sku) && sku.length && (_this2.customVariablesPage[3] = [ "_pks", sku ]), 
            isDefined(name) && name.length || (name = ""), _this2.customVariablesPage[4] = [ "_pkn", name ]);
        }, this.addEcommerceItem = function(sku, name, category, price, quantity) {
            sku.length && (_this2.ecommerceItems[sku] = [ sku, name, category, price, quantity ]);
        }, this.removeEcommerceItem = function(sku) {
            sku.length && delete _this2.ecommerceItems[sku];
        }, this.clearEcommerceCart = function() {
            _this2.ecommerceItems = {};
        }, this.trackEcommerceOrder = function(orderId, grandTotal, subTotal, tax, shipping, discount) {
            _this2.logEcommerceOrder(orderId, grandTotal, subTotal, tax, shipping, discount);
        }, this.trackEcommerceCartUpdate = function(grandTotal) {
            _this2.logEcommerceCartUpdate(grandTotal);
        }, this.trackRequest = function(request, customData, callback, pluginMethod) {
            _this2.trackCallback(function() {
                var fullRequest = _this2.getRequest(request, customData, pluginMethod);
                _this2.sendRequest(fullRequest, _this2.configTrackerPause, callback);
            });
        }, this.getRememberedConsent = function() {
            var value = _this2.getCookie(_this2.CONSENT_COOKIE_NAME);
            return _this2.getCookie(_this2.CONSENT_REMOVED_COOKIE_NAME) ? (value && _this2.deleteCookie(_this2.CONSENT_COOKIE_NAME, _this2.configCookiePath, _this2.configCookieDomain), 
            null) : value && 0 !== value ? value : null;
        }, this.hasRememberedConsent = function() {
            return !!_this2.getRememberedConsent();
        }, this.requireConsent = function() {
            _this2.configConsentRequired = !0, _this2.configHasConsent = _this2.hasRememberedConsent();
        }, this.setConsentGiven = function() {
            var i, requestType;
            for (_this2.configHasConsent = !0, _this2.deleteCookie(_this2.CONSENT_REMOVED_COOKIE_NAME, _this2.configCookiePath, _this2.configCookieDomain), 
            i = 0; i < _this2.consentRequestsQueue.length; i++) "string" === (requestType = _typeof(_this2.consentRequestsQueue[i])) ? _this2.sendRequest(_this2.consentRequestsQueue[i], _this2.configTrackerPause) : "object" === requestType && _this2.sendBulkRequest(_this2.consentRequestsQueue[i], _this2.configTrackerPause);
            _this2.consentRequestsQueue = [];
        }, this.rememberConsentGiven = function(hoursToExpire) {
            var now;
            _this2.configCookiesDisabled ? logConsoleError("rememberConsentGiven is called but cookies are disabled, consent will not be remembered") : (hoursToExpire = hoursToExpire && 60 * hoursToExpire * 60 * 1e3, 
            _this2.setConsentGiven(), now = new Date().getTime(), _this2.setCookie(_this2.CONSENT_COOKIE_NAME, now, hoursToExpire, _this2.configCookiePath, _this2.configCookieDomain, _this2.configCookieIsSecure));
        }, this.forgetConsentGiven = function() {
            _this2.configCookiesDisabled ? logConsoleError("forgetConsentGiven is called but cookies are disabled, consent will not be forgotten") : (_this2.deleteCookie(_this2.CONSENT_COOKIE_NAME, _this2.configCookiePath, _this2.configCookieDomain), 
            _this2.setCookie(_this2.CONSENT_REMOVED_COOKIE_NAME, new Date().getTime(), 0, _this2.configCookiePath, _this2.configCookieDomain, _this2.configCookieIsSecure), 
            _this2.requireConsent());
        }, this.isUserOptedOut = function() {
            return !_this2.configHasConsent;
        }, this.optUserOut = this.forgetConsentGiven, this.forgetUserOptOut = this.rememberConsentGiven, 
        this.log = function() {
            _this2.enableLog && function() {
                for (var _console, _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                return (_console = console).log.apply(_console, [ "[MATOMO]" ].concat(args));
            }.apply(void 0, arguments);
        };
    };
    function Matomo() {
        var _this = this;
        return _classCallCheck(this, Matomo), this._proxy_ret = function(that, funcName, func) {
            var origin;
            that[funcName] ? (origin = that[funcName], that[funcName] = function(param) {
                var res = origin.call(this, param);
                return func.call(this, [ param, res ], funcName), res;
            }) : that[funcName] = function(param) {
                func.call(this, param, funcName);
            };
        }, this._proxy = function(that, funcName, func) {
            var origin;
            that[funcName] ? (origin = that[funcName], that[funcName] = function(param) {
                func.call(this, param, funcName), origin.call(this, param);
            }) : that[funcName] = function(param) {
                func.call(this, param, funcName);
            };
        }, this.initTracker = function(matomoUrl, siteId) {
            var _ref = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, _ref$autoTrackPage = _ref.autoTrackPage, autoTrackPage = void 0 === _ref$autoTrackPage || _ref$autoTrackPage, _ref$autoTrackPage = _ref.enableLog, _ref$autoTrackPage = void 0 !== _ref$autoTrackPage && _ref$autoTrackPage, _ref$pageScheme = _ref.pageScheme, _ref$pageScheme = void 0 === _ref$pageScheme ? "mp://" : _ref$pageScheme, _ref = _ref.pageTitles, _ref = void 0 === _ref ? {} : _ref;
            return _this.tracker || (_this.tracker = new Tracker(matomoUrl, siteId), _this.tracker.pageScheme = _ref$pageScheme, 
            _this.tracker.pageTitles = _ref, _this.tracker.enableLog = _ref$autoTrackPage, _this.AppProxy = App, 
            App = function(app) {
                app.matomo = _this.tracker, autoTrackPage && (_this._proxy(app, "onLaunch", _this._appOnLaunch), 
                _this._proxy(app, "onUnlaunch", _this._appOnUnlaunch), _this._proxy(app, "onShow", _this._appOnShow), 
                _this._proxy(app, "onHide", _this._appOnHide), _this._proxy(app, "onError", _this._appOnError)), 
                _this.AppProxy(app);
            }, _this.PageProxy = Page, Page = function(page) {
                page.matomo = _this.tracker, autoTrackPage && (_this._proxy(page, "onLoad", _this._pageOnLoad), 
                _this._proxy(page, "onUnload", _this._pageOnUnload), _this._proxy(page, "onShow", _this._pageOnShow), 
                _this._proxy(page, "onHide", _this._pageOnHide), void 0 !== page.onShareAppMessage && _this._proxy_ret(page, "onShareAppMessage", _this._pageOnShareAppMessage)), 
                _this.PageProxy(page);
            }), _this.tracker;
        }, this._appOnLaunch = function(options) {
            var scene = options && options.scene || "default", shareFrom = options && options.query && (options.query.sharefrom || options.query.shareFrom) || "default", siteId = options && options.query && (options.query.siteId || options.query.siteid) || "default", param = serialiseObject(options), scene = "<" + scene + "-" + shareFrom + "-" + siteId + "-" + param + ">";
            this.matomo.log("_appOnLaunch", options, scene), this.calledStartup !== scene && (this.calledStartup = scene, 
            this.matomo.trackPageView("app/launch", "app/launch?" + param));
        }, this._appOnUnlaunch = function() {
            this.matomo.log("_appOnUnlaunch");
        }, this._appOnShow = function(options) {
            var scene = options && options.scene || "default", shareFrom = options && options.query && (options.query.sharefrom || options.query.shareFrom) || "default", siteId = options && options.query && (options.query.siteId || options.query.siteid) || "default", param = serialiseObject(options), scene = "<" + scene + "-" + shareFrom + "-" + siteId + "-" + param + ">";
            this.matomo.log("_appOnShow", options, scene), this.calledStartup !== scene && (this.calledStartup = scene, 
            this.matomo.trackPageView("app/show", "app/show?" + param));
        }, this._appOnHide = function() {
            this.matomo.log("_appOnHide");
        }, this._appOnError = function() {
            this.matomo.log("_appOnError");
        }, this._pageOnLoad = function(options) {
            this.matomo.log("_pageOnLoad", options);
            var url = function() {
                if ("function" != typeof getCurrentPages) return "";
                var pages = getCurrentPages(), pages = pages[pages.length - 1];
                return "function" == typeof pages.route ? pages.__route__ || "" : pages.route || "";
            }();
            url && "module/index" !== url && "pages/loading/index" !== url && (this.matomo.setCustomData(options), 
            this.matomo.trackPageView(this.matomo.pageTitles[url] || url, url + "?" + serialiseObject(options)));
        }, this._pageOnUnload = function() {
            this.matomo.log("_pageOnUnload");
        }, this._pageOnShow = function() {
            this.matomo.log("_pageOnShow");
        }, this._pageOnHide = function() {
            this.matomo.log("_pageOnHide");
        }, this._pageOnShareAppMessage = function(options) {
            this.matomo.log("_pageOnShareAppMessage", options);
            var sharefrom = options[0] && options[0].from || "menu";
            this.matomo.trackEvent("share", sharefrom, serialiseObject(options));
        }, void 0 === Matomo.prototype.Instance && (Matomo.prototype.Instance = this), Matomo.prototype.Instance;
    };

    const newMatomo = new Matomo();

    const newTarker = new Tracker();

    exports.default = { newMatomo,newTarker }
} ]);