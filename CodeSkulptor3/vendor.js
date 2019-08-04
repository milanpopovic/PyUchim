/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(22);
module.exports = __webpack_require__(23);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
    "use strict";
    if (true) {
        // using AMD; register as anon module
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        // no AMD; invoke directly
        factory( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );
    }
}

(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (t == "file") {
            if (/MSIE/.test(navigator.userAgent)) {
                $(this).replaceWith($(this).clone(true));
            } else {
                $(this).val('');
            }
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

}));


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(e){function t(e,t){if(!(e.originalEvent.touches.length>1)){e.preventDefault();var o=e.originalEvent.changedTouches[0],n=document.createEvent("MouseEvents");n.initMouseEvent(t,!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(n)}}if(e.support.touch="ontouchend"in document,e.support.touch){var o,n,u,c,r=e.ui.mouse.prototype,i=r._mouseInit,s=r._mouseDestroy,h=.005*Math.max(screen.width,screen.height);r._touchStart=function(e){var r=this;!u&&r._mouseCapture(e.originalEvent.changedTouches[0])&&(u=!0,c=!1,o=e.originalEvent.touches[0].screenX,n=e.originalEvent.touches[0].screenY,t(e,"mouseover"),t(e,"mousemove"),t(e,"mousedown"))},r._touchMove=function(e){if(u){var r=e.originalEvent.touches[0].screenX,i=e.originalEvent.touches[0].screenY;if(Math.abs(o-r)<h&&Math.abs(n-i)<h)return void(c=!1);c=!0,t(e,"mousemove")}},r._touchEnd=function(e){u&&(t(e,"mouseup"),t(e,"mouseout"),c||t(e,"click"),u=!1)},r._mouseInit=function(){var t=this;t.element.bind({touchstart:e.proxy(t,"_touchStart"),touchmove:e.proxy(t,"_touchMove"),touchend:e.proxy(t,"_touchEnd")}),i.call(t)},r._mouseDestroy=function(){var t=this;t.element.unbind({touchstart:e.proxy(t,"_touchStart"),touchmove:e.proxy(t,"_touchMove"),touchend:e.proxy(t,"_touchEnd")}),s.call(t)}}}(jQuery);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/*
 * jQuery.splitter.js - two-pane splitter window plugin
 *
 * version 1.51 (2009/01/09) 
 * 
 * Dual licensed under the MIT and GPL licenses: 
 *   http://www.opensource.org/licenses/mit-license.php 
 *   http://www.gnu.org/licenses/gpl.html 
 */

/**
 * The splitter() plugin implements a two-pane resizable splitter window.
 * The selected elements in the jQuery object are converted to a splitter;
 * each selected element should have two child elements, used for the panes
 * of the splitter. The plugin adds a third child element for the splitbar.
 * 
 * For more details see: http://methvin.com/splitter/
 *
 *
 * @example $('#MySplitter').splitter();
 * @desc Create a vertical splitter with default settings 
 *
 * @example $('#MySplitter').splitter({type: 'h', accessKey: 'M'});
 * @desc Create a horizontal splitter resizable via Alt+Shift+M
 *
 * @name splitter
 * @type jQuery
 * @param Object options Options for the splitter (not required)
 * @cat Plugins/Splitter
 * @return jQuery
 * @author Dave Methvin (dave.methvin@gmail.com)
 */
 ;(function($){

 $.browser = {};
 
 $.fn.splitter = function(args){
	args = args || {};
	return this.each(function() {
		var zombie;		// left-behind splitbar for outline resizes
		function startSplitMouse(evt) {
			if ( opts.outline )
				zombie = zombie || bar.clone(false).insertAfter(A);
			panes.css("-webkit-user-select", "none");	// Safari selects A/B text on a move
			bar.addClass(opts.activeClass);
			A._posSplit = A[0][opts.pxSplit] - evt[opts.eventPos];
			$(document)
				.bind("mousemove", doSplitMouse)
				.bind("mouseup", endSplitMouse);
		}
		function doSplitMouse(evt) {
			var newPos = A._posSplit+evt[opts.eventPos];
			if ( opts.outline ) {
				newPos = Math.max(0, Math.min(newPos, splitter._DA - bar._DA));
				bar.css(opts.origin, newPos);
			} else 
				resplit(newPos);
		}
		function endSplitMouse(evt) {
			bar.removeClass(opts.activeClass);
			var newPos = A._posSplit+evt[opts.eventPos];
			if ( opts.outline ) {
				zombie.remove(); zombie = null;
				resplit(newPos);
			}
			panes.css("-webkit-user-select", "text");	// let Safari select text again
			$(document)
				.unbind("mousemove", doSplitMouse)
				.unbind("mouseup", endSplitMouse);
		}
		function resplit(newPos) {
			// Constrain new splitbar position to fit pane size limits
			newPos = Math.max(A._min, splitter._DA - B._max, 
					Math.min(newPos, A._max, splitter._DA - bar._DA - B._min));
			// Resize/position the two panes
			bar._DA = bar[0][opts.pxSplit];		// bar size may change during dock
			bar.css(opts.origin, newPos).css(opts.fixed, splitter._DF);
			A.css(opts.origin, 0).css(opts.split, newPos).css(opts.fixed,  splitter._DF);
			B.css(opts.origin, newPos+bar._DA)
				.css(opts.split, splitter._DA-bar._DA-newPos).css(opts.fixed,  splitter._DF);
			// IE fires resize for us; all others pay cash
			if ( !$.browser.msie )
				panes.trigger("resize");
		}
		function dimSum(jq, dims) {
			// Opera returns -1 for missing min/max width, turn into 0
			var sum = 0;
			for ( var i=1; i < arguments.length; i++ )
				sum += Math.max(parseInt(jq.css(arguments[i])) || 0, 0);
			return sum;
		}
		
		// Determine settings based on incoming opts, element classes, and defaults
		var vh = (args.splitHorizontal? 'h' : args.splitVertical? 'v' : args.type) || 'v';
		var opts = $.extend({
			activeClass: 'active',	// class name for active splitter
			pxPerKey: 8,			// splitter px moved per keypress
			tabIndex: 0,			// tab order indicator
			accessKey: ''			// accessKey for splitbar
		},{
			v: {					// Vertical splitters:
				keyLeft: 39, keyRight: 37, cursor: "e-resize",
				splitbarClass: "vsplitbar", outlineClass: "voutline",
				type: 'v', eventPos: "pageX", origin: "left",
				split: "width",  pxSplit: "offsetWidth",  side1: "Left", side2: "Right",
				fixed: "height", pxFixed: "offsetHeight", side3: "Top",  side4: "Bottom"
			},
			h: {					// Horizontal splitters:
				keyTop: 40, keyBottom: 38,  cursor: "n-resize",
				splitbarClass: "hsplitbar", outlineClass: "houtline",
				type: 'h', eventPos: "pageY", origin: "top",
				split: "height", pxSplit: "offsetHeight", side1: "Top",  side2: "Bottom",
				fixed: "width",  pxFixed: "offsetWidth",  side3: "Left", side4: "Right"
			}
		}[vh], args);

		// Create jQuery object closures for splitter and both panes
		var splitter = $(this).css({position: "relative"});
		var panes = $(">*", splitter[0]).css({
			position: "absolute", 			// positioned inside splitter container
			"z-index": "1",					// splitbar is positioned above
			"-moz-outline-style": "none"	// don't show dotted outline
		});
		var A = $(panes[0]);		// left  or top
		var B = $(panes[1]);		// right or bottom

		// Focuser element, provides keyboard support; title is shown by Opera accessKeys
		var focuser = $('<a href="javascript:void(0)"></a>')
			.attr({accessKey: opts.accessKey, tabIndex: opts.tabIndex, title: opts.splitbarClass})
			.bind($.browser.opera?"click":"focus", function(){ this.focus(); bar.addClass(opts.activeClass) })
			.bind("keydown", function(e){
				var key = e.which || e.keyCode;
				var dir = key==opts["key"+opts.side1]? 1 : key==opts["key"+opts.side2]? -1 : 0;
				if ( dir )
					resplit(A[0][opts.pxSplit]+dir*opts.pxPerKey, false);
			})
			.bind("blur", function(){ bar.removeClass(opts.activeClass) });
			
		// Splitbar element, can be already in the doc or we create one
		var bar = $(panes[2] || '<div></div>')
			.insertAfter(A).css("z-index", "100").append(focuser)
			.attr({"class": opts.splitbarClass, unselectable: "on"})
			.css({position: "absolute",	"user-select": "none", "-webkit-user-select": "none",
				"-khtml-user-select": "none", "-moz-user-select": "none"})
			.bind("mousedown", startSplitMouse);
		// Use our cursor unless the style specifies a non-default cursor
		if ( /^(auto|default|)$/.test(bar.css("cursor")) )
			bar.css("cursor", opts.cursor);

		// Cache several dimensions for speed, rather than re-querying constantly
		bar._DA = bar[0][opts.pxSplit];
		splitter._PBF = $.boxModel? dimSum(splitter, "border"+opts.side3+"Width", "border"+opts.side4+"Width") : 0;
		splitter._PBA = $.boxModel? dimSum(splitter, "border"+opts.side1+"Width", "border"+opts.side2+"Width") : 0;
		A._pane = opts.side1;
		B._pane = opts.side2;
		$.each([A,B], function(){
			this._min = opts["min"+this._pane] || dimSum(this, "min-"+opts.split);
			this._max = opts["max"+this._pane] || dimSum(this, "max-"+opts.split) || 9999;
			this._init = opts["size"+this._pane]===true ?
				parseInt($.curCSS(this[0],opts.split)) : opts["size"+this._pane];
		});
		
		// Determine initial position, get from cookie if specified
		var initPos = A._init;
		if ( !isNaN(B._init) )	// recalc initial B size as an offset from the top or left side
			initPos = splitter[0][opts.pxSplit] - splitter._PBA - B._init - bar._DA;
		if ( opts.cookie ) {
			if ( !$.cookie )
				alert('jQuery.splitter(): jQuery cookie plugin required');
			var ckpos = parseInt($.cookie(opts.cookie));
			if ( !isNaN(ckpos) )
				initPos = ckpos;
			$(window).bind("unload", function(){
				var state = String(bar.css(opts.origin));	// current location of splitbar
				$.cookie(opts.cookie, state, {expires: opts.cookieExpires || 365, 
					path: opts.cookiePath || document.location.pathname});
			});
		}
		if ( isNaN(initPos) )	// King Solomon's algorithm
			initPos = Math.round((splitter[0][opts.pxSplit] - splitter._PBA - bar._DA)/2);

		// Resize event propagation and splitter sizing
		if ( opts.anchorToWindow ) {
			// Account for margin or border on the splitter container and enforce min height
			splitter._hadjust = dimSum(splitter, "borderTopWidth", "borderBottomWidth", "marginBottom");
			splitter._hmin = Math.max(dimSum(splitter, "minHeight"), 20);
			$(window).bind("resize", function(){
				var top = splitter.offset().top;
				var wh = $(window).height();
				splitter.css("height", Math.max(wh-top-splitter._hadjust, splitter._hmin)+"px");
				if ( !$.browser.msie ) splitter.trigger("resize");
			}).trigger("resize");
		}
		else if ( opts.resizeToWidth && !$.browser.msie )
			$(window).bind("resize", function(){
				splitter.trigger("resize"); 
			});

		// Resize event handler; triggered immediately to set initial position
		splitter.bind("resize", function(e, size){
			// Custom events bubble in jQuery 1.3; don't get into a Yo Dawg
			if ( e.target != this ) return;
			// Determine new width/height of splitter container
			splitter._DF = splitter[0][opts.pxFixed] - splitter._PBF;
			splitter._DA = splitter[0][opts.pxSplit] - splitter._PBA;
			// Bail if splitter isn't visible or content isn't there yet
			if ( splitter._DF <= 0 || splitter._DA <= 0 ) return;
			// Re-divvy the adjustable dimension; maintain size of the preferred pane
			resplit(!isNaN(size)? size : (!(opts.sizeRight||opts.sizeBottom)? A[0][opts.pxSplit] :
				splitter._DA-B[0][opts.pxSplit]-bar._DA));
		}).trigger("resize" , [initPos]);
	});
};

})(jQuery);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var numeric= false?function(){}:exports;typeof global!="undefined"&&(global.numeric=numeric),numeric.version="1.2.6",numeric.bench=function(t,n){var r,i,s,o;typeof n=="undefined"&&(n=15),s=.5,r=new Date;for(;;){s*=2;for(o=s;o>3;o-=4)t(),t(),t(),t();while(o>0)t(),o--;i=new Date;if(i-r>n)break}for(o=s;o>3;o-=4)t(),t(),t(),t();while(o>0)t(),o--;return i=new Date,1e3*(3*s-1)/(i-r)},numeric._myIndexOf=function(t){var n=this.length,r;for(r=0;r<n;++r)if(this[r]===t)return r;return-1},numeric.myIndexOf=Array.prototype.indexOf?Array.prototype.indexOf:numeric._myIndexOf,numeric.Function=Function,numeric.precision=4,numeric.largeArray=50,numeric.prettyPrint=function(t){function n(e){if(e===0)return"0";if(isNaN(e))return"NaN";if(e<0)return"-"+n(-e);if(isFinite(e)){var t=Math.floor(Math.log(e)/Math.log(10)),r=e/Math.pow(10,t),i=r.toPrecision(numeric.precision);return parseFloat(i)===10&&(t++,r=1,i=r.toPrecision(numeric.precision)),parseFloat(i).toString()+"e"+t.toString()}return"Infinity"}function i(e){var t;if(typeof e=="undefined")return r.push(Array(numeric.precision+8).join(" ")),!1;if(typeof e=="string")return r.push('"'+e+'"'),!1;if(typeof e=="boolean")return r.push(e.toString()),!1;if(typeof e=="number"){var s=n(e),o=e.toPrecision(numeric.precision),u=parseFloat(e.toString()).toString(),a=[s,o,u,parseFloat(o).toString(),parseFloat(u).toString()];for(t=1;t<a.length;t++)a[t].length<s.length&&(s=a[t]);return r.push(Array(numeric.precision+8-s.length).join(" ")+s),!1}if(e===null)return r.push("null"),!1;if(typeof e=="function"){r.push(e.toString());var f=!1;for(t in e)e.hasOwnProperty(t)&&(f?r.push(",\n"):r.push("\n{"),f=!0,r.push(t),r.push(": \n"),i(e[t]));return f&&r.push("}\n"),!0}if(e instanceof Array){if(e.length>numeric.largeArray)return r.push("...Large Array..."),!0;var f=!1;r.push("[");for(t=0;t<e.length;t++)t>0&&(r.push(","),f&&r.push("\n ")),f=i(e[t]);return r.push("]"),!0}r.push("{");var f=!1;for(t in e)e.hasOwnProperty(t)&&(f&&r.push(",\n"),f=!0,r.push(t),r.push(": \n"),i(e[t]));return r.push("}"),!0}var r=[];return i(t),r.join("")},numeric.parseDate=function(t){function n(e){if(typeof e=="string")return Date.parse(e.replace(/-/g,"/"));if(e instanceof Array){var t=[],r;for(r=0;r<e.length;r++)t[r]=n(e[r]);return t}throw new Error("parseDate: parameter must be arrays of strings")}return n(t)},numeric.parseFloat=function(t){function n(e){if(typeof e=="string")return parseFloat(e);if(e instanceof Array){var t=[],r;for(r=0;r<e.length;r++)t[r]=n(e[r]);return t}throw new Error("parseFloat: parameter must be arrays of strings")}return n(t)},numeric.parseCSV=function(t){var n=t.split("\n"),r,i,s=[],o=/(([^'",]*)|('[^']*')|("[^"]*")),/g,u=/^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/,a=function(e){return e.substr(0,e.length-1)},f=0;for(i=0;i<n.length;i++){var l=(n[i]+",").match(o),c;if(l.length>0){s[f]=[];for(r=0;r<l.length;r++)c=a(l[r]),u.test(c)?s[f][r]=parseFloat(c):s[f][r]=c;f++}}return s},numeric.toCSV=function(t){var n=numeric.dim(t),r,i,s,o,u,a;s=n[0],o=n[1],a=[];for(r=0;r<s;r++){u=[];for(i=0;i<s;i++)u[i]=t[r][i].toString();a[r]=u.join(", ")}return a.join("\n")+"\n"},numeric.getURL=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(),n},numeric.imageURL=function(t){function n(e){var t=e.length,n,r,i,s,o,u,a,f,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="";for(n=0;n<t;n+=3)r=e[n],i=e[n+1],s=e[n+2],o=r>>2,u=((r&3)<<4)+(i>>4),a=((i&15)<<2)+(s>>6),f=s&63,n+1>=t?a=f=64:n+2>=t&&(f=64),c+=l.charAt(o)+l.charAt(u)+l.charAt(a)+l.charAt(f);return c}function r(e,t,n){typeof t=="undefined"&&(t=0),typeof n=="undefined"&&(n=e.length);var r=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],i=-1,s=0,o=e.length,u;for(u=t;u<n;u++)s=(i^e[u])&255,i=i>>>8^r[s];return i^-1}var i=t[0].length,s=t[0][0].length,o,u,a,f,l,c,h,p,d,v,m,g=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,s>>24&255,s>>16&255,s>>8&255,s&255,i>>24&255,i>>16&255,i>>8&255,i&255,8,2,0,0,0,-1,-2,-3,-4,-5,-6,-7,-8,73,68,65,84,8,29];m=r(g,12,29),g[29]=m>>24&255,g[30]=m>>16&255,g[31]=m>>8&255,g[32]=m&255,o=1,u=0;for(p=0;p<i;p++){p<i-1?g.push(0):g.push(1),c=3*s+1+(p===0)&255,h=3*s+1+(p===0)>>8&255,g.push(c),g.push(h),g.push(~c&255),g.push(~h&255),p===0&&g.push(0);for(d=0;d<s;d++)for(f=0;f<3;f++)c=t[f][p][d],c>255?c=255:c<0?c=0:c=Math.round(c),o=(o+c)%65521,u=(u+o)%65521,g.push(c);g.push(0)}return v=(u<<16)+o,g.push(v>>24&255),g.push(v>>16&255),g.push(v>>8&255),g.push(v&255),l=g.length-41,g[33]=l>>24&255,g[34]=l>>16&255,g[35]=l>>8&255,g[36]=l&255,m=r(g,37),g.push(m>>24&255),g.push(m>>16&255),g.push(m>>8&255),g.push(m&255),g.push(0),g.push(0),g.push(0),g.push(0),g.push(73),g.push(69),g.push(78),g.push(68),g.push(174),g.push(66),g.push(96),g.push(130),"data:image/png;base64,"+n(g)},numeric._dim=function(t){var n=[];while(typeof t=="object")n.push(t.length),t=t[0];return n},numeric.dim=function(t){var n,r;if(typeof t=="object")return n=t[0],typeof n=="object"?(r=n[0],typeof r=="object"?numeric._dim(t):[t.length,n.length]):[t.length];return[]},numeric.mapreduce=function(t,n){return Function("x","accum","_s","_k",'if(typeof accum === "undefined") accum = '+n+";\n"+'if(typeof x === "number") { var xi = x; '+t+"; return accum; }\n"+'if(typeof _s === "undefined") _s = numeric.dim(x);\n'+'if(typeof _k === "undefined") _k = 0;\n'+"var _n = _s[_k];\n"+"var i,xi;\n"+"if(_k < _s.length-1) {\n"+"    for(i=_n-1;i>=0;i--) {\n"+"        accum = arguments.callee(x[i],accum,_s,_k+1);\n"+"    }"+"    return accum;\n"+"}\n"+"for(i=_n-1;i>=1;i-=2) { \n"+"    xi = x[i];\n"+"    "+t+";\n"+"    xi = x[i-1];\n"+"    "+t+";\n"+"}\n"+"if(i === 0) {\n"+"    xi = x[i];\n"+"    "+t+"\n"+"}\n"+"return accum;")},numeric.mapreduce2=function(t,n){return Function("x","var n = x.length;\nvar i,xi;\n"+n+";\n"+"for(i=n-1;i!==-1;--i) { \n"+"    xi = x[i];\n"+"    "+t+";\n"+"}\n"+"return accum;")},numeric.same=function same(e,t){var n,r;if(e instanceof Array&&t instanceof Array){r=e.length;if(r!==t.length)return!1;for(n=0;n<r;n++){if(e[n]===t[n])continue;if(typeof e[n]!="object")return!1;if(!same(e[n],t[n]))return!1}return!0}return!1},numeric.rep=function(t,n,r){typeof r=="undefined"&&(r=0);var i=t[r],s=Array(i),o;if(r===t.length-1){for(o=i-2;o>=0;o-=2)s[o+1]=n,s[o]=n;return o===-1&&(s[0]=n),s}for(o=i-1;o>=0;o--)s[o]=numeric.rep(t,n,r+1);return s},numeric.dotMMsmall=function(t,n){var r,i,s,o,u,a,f,l,c,h,p,d,v,m;o=t.length,u=n.length,a=n[0].length,f=Array(o);for(r=o-1;r>=0;r--){l=Array(a),c=t[r];for(s=a-1;s>=0;s--){h=c[u-1]*n[u-1][s];for(i=u-2;i>=1;i-=2)p=i-1,h+=c[i]*n[i][s]+c[p]*n[p][s];i===0&&(h+=c[0]*n[0][s]),l[s]=h}f[r]=l}return f},numeric._getCol=function(t,n,r){var i=t.length,s;for(s=i-1;s>0;--s)r[s]=t[s][n],--s,r[s]=t[s][n];s===0&&(r[0]=t[0][n])},numeric.dotMMbig=function(t,n){var r=numeric._getCol,i=n.length,s=Array(i),o=t.length,u=n[0].length,a=new Array(o),f,l=numeric.dotVV,c,h,p,d;--i,--o;for(c=o;c!==-1;--c)a[c]=Array(u);--u;for(c=u;c!==-1;--c){r(n,c,s);for(h=o;h!==-1;--h)d=0,f=t[h],a[h][c]=l(f,s)}return a},numeric.dotMV=function(t,n){var r=t.length,i=n.length,s,o=Array(r),u=numeric.dotVV;for(s=r-1;s>=0;s--)o[s]=u(t[s],n);return o},numeric.dotVM=function(t,n){var r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E;o=t.length,u=n[0].length,f=Array(u);for(s=u-1;s>=0;s--){h=t[o-1]*n[o-1][s];for(i=o-2;i>=1;i-=2)p=i-1,h+=t[i]*n[i][s]+t[p]*n[p][s];i===0&&(h+=t[0]*n[0][s]),f[s]=h}return f},numeric.dotVV=function(t,n){var r,i=t.length,s,o=t[i-1]*n[i-1];for(r=i-2;r>=1;r-=2)s=r-1,o+=t[r]*n[r]+t[s]*n[s];return r===0&&(o+=t[0]*n[0]),o},numeric.dot=function(t,n){var r=numeric.dim;switch(r(t).length*1e3+r(n).length){case 2002:return n.length<10?numeric.dotMMsmall(t,n):numeric.dotMMbig(t,n);case 2001:return numeric.dotMV(t,n);case 1002:return numeric.dotVM(t,n);case 1001:return numeric.dotVV(t,n);case 1e3:return numeric.mulVS(t,n);case 1:return numeric.mulSV(t,n);case 0:return t*n;default:throw new Error("numeric.dot only works on vectors and matrices")}},numeric.diag=function(t){var n,r,i,s=t.length,o=Array(s),u;for(n=s-1;n>=0;n--){u=Array(s),r=n+2;for(i=s-1;i>=r;i-=2)u[i]=0,u[i-1]=0;i>n&&(u[i]=0),u[n]=t[n];for(i=n-1;i>=1;i-=2)u[i]=0,u[i-1]=0;i===0&&(u[0]=0),o[n]=u}return o},numeric.getDiag=function(e){var t=Math.min(e.length,e[0].length),n,r=Array(t);for(n=t-1;n>=1;--n)r[n]=e[n][n],--n,r[n]=e[n][n];return n===0&&(r[0]=e[0][0]),r},numeric.identity=function(t){return numeric.diag(numeric.rep([t],1))},numeric.pointwise=function(t,n,r){typeof r=="undefined"&&(r="");var i=[],s,o=/\[i\]$/,u,a="",f=!1;for(s=0;s<t.length;s++)o.test(t[s])?(u=t[s].substring(0,t[s].length-3),a=u):u=t[s],u==="ret"&&(f=!0),i.push(u);return i[t.length]="_s",i[t.length+1]="_k",i[t.length+2]='if(typeof _s === "undefined") _s = numeric.dim('+a+");\n"+'if(typeof _k === "undefined") _k = 0;\n'+"var _n = _s[_k];\n"+"var i"+(f?"":", ret = Array(_n)")+";\n"+"if(_k < _s.length-1) {\n"+"    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee("+t.join(",")+",_s,_k+1);\n"+"    return ret;\n"+"}\n"+r+"\n"+"for(i=_n-1;i!==-1;--i) {\n"+"    "+n+"\n"+"}\n"+"return ret;",Function.apply(null,i)},numeric.pointwise2=function(t,n,r){typeof r=="undefined"&&(r="");var i=[],s,o=/\[i\]$/,u,a="",f=!1;for(s=0;s<t.length;s++)o.test(t[s])?(u=t[s].substring(0,t[s].length-3),a=u):u=t[s],u==="ret"&&(f=!0),i.push(u);return i[t.length]="var _n = "+a+".length;\n"+"var i"+(f?"":", ret = Array(_n)")+";\n"+r+"\n"+"for(i=_n-1;i!==-1;--i) {\n"+n+"\n"+"}\n"+"return ret;",Function.apply(null,i)},numeric._biforeach=function _biforeach(e,t,n,r,i){if(r===n.length-1){i(e,t);return}var s,o=n[r];for(s=o-1;s>=0;s--)_biforeach(typeof e=="object"?e[s]:e,typeof t=="object"?t[s]:t,n,r+1,i)},numeric._biforeach2=function _biforeach2(e,t,n,r,i){if(r===n.length-1)return i(e,t);var s,o=n[r],u=Array(o);for(s=o-1;s>=0;--s)u[s]=_biforeach2(typeof e=="object"?e[s]:e,typeof t=="object"?t[s]:t,n,r+1,i);return u},numeric._foreach=function _foreach(e,t,n,r){if(n===t.length-1){r(e);return}var i,s=t[n];for(i=s-1;i>=0;i--)_foreach(e[i],t,n+1,r)},numeric._foreach2=function _foreach2(e,t,n,r){if(n===t.length-1)return r(e);var i,s=t[n],o=Array(s);for(i=s-1;i>=0;i--)o[i]=_foreach2(e[i],t,n+1,r);return o},numeric.ops2={add:"+",sub:"-",mul:"*",div:"/",mod:"%",and:"&&",or:"||",eq:"===",neq:"!==",lt:"<",gt:">",leq:"<=",geq:">=",band:"&",bor:"|",bxor:"^",lshift:"<<",rshift:">>",rrshift:">>>"},numeric.opseq={addeq:"+=",subeq:"-=",muleq:"*=",diveq:"/=",modeq:"%=",lshifteq:"<<=",rshifteq:">>=",rrshifteq:">>>=",bandeq:"&=",boreq:"|=",bxoreq:"^="},numeric.mathfuns=["abs","acos","asin","atan","ceil","cos","exp","floor","log","round","sin","sqrt","tan","isNaN","isFinite"],numeric.mathfuns2=["atan2","pow","max","min"],numeric.ops1={neg:"-",not:"!",bnot:"~",clone:""},numeric.mapreducers={any:["if(xi) return true;","var accum = false;"],all:["if(!xi) return false;","var accum = true;"],sum:["accum += xi;","var accum = 0;"],prod:["accum *= xi;","var accum = 1;"],norm2Squared:["accum += xi*xi;","var accum = 0;"],norminf:["accum = max(accum,abs(xi));","var accum = 0, max = Math.max, abs = Math.abs;"],norm1:["accum += abs(xi)","var accum = 0, abs = Math.abs;"],sup:["accum = max(accum,xi);","var accum = -Infinity, max = Math.max;"],inf:["accum = min(accum,xi);","var accum = Infinity, min = Math.min;"]},function(){var e,t;for(e=0;e<numeric.mathfuns2.length;++e)t=numeric.mathfuns2[e],numeric.ops2[t]=t;for(e in numeric.ops2)if(numeric.ops2.hasOwnProperty(e)){t=numeric.ops2[e];var n,r,i="";numeric.myIndexOf.call(numeric.mathfuns2,e)!==-1?(i="var "+t+" = Math."+t+";\n",n=function(e,n,r){return e+" = "+t+"("+n+","+r+")"},r=function(e,n){return e+" = "+t+"("+e+","+n+")"}):(n=function(e,n,r){return e+" = "+n+" "+t+" "+r},numeric.opseq.hasOwnProperty(e+"eq")?r=function(e,n){return e+" "+t+"= "+n}:r=function(e,n){return e+" = "+e+" "+t+" "+n}),numeric[e+"VV"]=numeric.pointwise2(["x[i]","y[i]"],n("ret[i]","x[i]","y[i]"),i),numeric[e+"SV"]=numeric.pointwise2(["x","y[i]"],n("ret[i]","x","y[i]"),i),numeric[e+"VS"]=numeric.pointwise2(["x[i]","y"],n("ret[i]","x[i]","y"),i),numeric[e]=Function("var n = arguments.length, i, x = arguments[0], y;\nvar VV = numeric."+e+"VV, VS = numeric."+e+"VS, SV = numeric."+e+"SV;\n"+"var dim = numeric.dim;\n"+"for(i=1;i!==n;++i) { \n"+"  y = arguments[i];\n"+'  if(typeof x === "object") {\n'+'      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n'+"      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n"+'  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n'+"  else "+r("x","y")+"\n"+"}\nreturn x;\n"),numeric[t]=numeric[e],numeric[e+"eqV"]=numeric.pointwise2(["ret[i]","x[i]"],r("ret[i]","x[i]"),i),numeric[e+"eqS"]=numeric.pointwise2(["ret[i]","x"],r("ret[i]","x"),i),numeric[e+"eq"]=Function("var n = arguments.length, i, x = arguments[0], y;\nvar V = numeric."+e+"eqV, S = numeric."+e+"eqS\n"+"var s = numeric.dim(x);\n"+"for(i=1;i!==n;++i) { \n"+"  y = arguments[i];\n"+'  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n'+"  else numeric._biforeach(x,y,s,0,S);\n"+"}\nreturn x;\n")}for(e=0;e<numeric.mathfuns2.length;++e)t=numeric.mathfuns2[e],delete numeric.ops2[t];for(e=0;e<numeric.mathfuns.length;++e)t=numeric.mathfuns[e],numeric.ops1[t]=t;for(e in numeric.ops1)numeric.ops1.hasOwnProperty(e)&&(i="",t=numeric.ops1[e],numeric.myIndexOf.call(numeric.mathfuns,e)!==-1&&Math.hasOwnProperty(t)&&(i="var "+t+" = Math."+t+";\n"),numeric[e+"eqV"]=numeric.pointwise2(["ret[i]"],"ret[i] = "+t+"(ret[i]);",i),numeric[e+"eq"]=Function("x",'if(typeof x !== "object") return '+t+"x\n"+"var i;\n"+"var V = numeric."+e+"eqV;\n"+"var s = numeric.dim(x);\n"+"numeric._foreach(x,s,0,V);\n"+"return x;\n"),numeric[e+"V"]=numeric.pointwise2(["x[i]"],"ret[i] = "+t+"(x[i]);",i),numeric[e]=Function("x",'if(typeof x !== "object") return '+t+"(x)\n"+"var i;\n"+"var V = numeric."+e+"V;\n"+"var s = numeric.dim(x);\n"+"return numeric._foreach2(x,s,0,V);\n"));for(e=0;e<numeric.mathfuns.length;++e)t=numeric.mathfuns[e],delete numeric.ops1[t];for(e in numeric.mapreducers)numeric.mapreducers.hasOwnProperty(e)&&(t=numeric.mapreducers[e],numeric[e+"V"]=numeric.mapreduce2(t[0],t[1]),numeric[e]=Function("x","s","k",t[1]+'if(typeof x !== "object") {'+"    xi = x;\n"+t[0]+";\n"+"    return accum;\n"+"}"+'if(typeof s === "undefined") s = numeric.dim(x);\n'+'if(typeof k === "undefined") k = 0;\n'+"if(k === s.length-1) return numeric."+e+"V(x);\n"+"var xi;\n"+"var n = x.length, i;\n"+"for(i=n-1;i!==-1;--i) {\n"+"   xi = arguments.callee(x[i]);\n"+t[0]+";\n"+"}\n"+"return accum;\n"))}(),numeric.truncVV=numeric.pointwise(["x[i]","y[i]"],"ret[i] = round(x[i]/y[i])*y[i];","var round = Math.round;"),numeric.truncVS=numeric.pointwise(["x[i]","y"],"ret[i] = round(x[i]/y)*y;","var round = Math.round;"),numeric.truncSV=numeric.pointwise(["x","y[i]"],"ret[i] = round(x/y[i])*y[i];","var round = Math.round;"),numeric.trunc=function(t,n){return typeof t=="object"?typeof n=="object"?numeric.truncVV(t,n):numeric.truncVS(t,n):typeof n=="object"?numeric.truncSV(t,n):Math.round(t/n)*n},numeric.inv=function(t){var n=numeric.dim(t),r=Math.abs,i=n[0],s=n[1],o=numeric.clone(t),u,a,f=numeric.identity(i),l,c,h,p,d,t;for(p=0;p<s;++p){var v=-1,m=-1;for(h=p;h!==i;++h)d=r(o[h][p]),d>m&&(v=h,m=d);a=o[v],o[v]=o[p],o[p]=a,c=f[v],f[v]=f[p],f[p]=c,t=a[p];for(d=p;d!==s;++d)a[d]/=t;for(d=s-1;d!==-1;--d)c[d]/=t;for(h=i-1;h!==-1;--h)if(h!==p){u=o[h],l=f[h],t=u[p];for(d=p+1;d!==s;++d)u[d]-=a[d]*t;for(d=s-1;d>0;--d)l[d]-=c[d]*t,--d,l[d]-=c[d]*t;d===0&&(l[0]-=c[0]*t)}}return f},numeric.det=function(t){var n=numeric.dim(t);if(n.length!==2||n[0]!==n[1])throw new Error("numeric: det() only works on square matrices");var r=n[0],i=1,s,o,u,a=numeric.clone(t),f,l,c,h,p,d,v;for(o=0;o<r-1;o++){u=o;for(s=o+1;s<r;s++)Math.abs(a[s][o])>Math.abs(a[u][o])&&(u=s);u!==o&&(h=a[u],a[u]=a[o],a[o]=h,i*=-1),f=a[o];for(s=o+1;s<r;s++){l=a[s],c=l[o]/f[o];for(u=o+1;u<r-1;u+=2)p=u+1,l[u]-=f[u]*c,l[p]-=f[p]*c;u!==r&&(l[u]-=f[u]*c)}if(f[o]===0)return 0;i*=f[o]}return i*a[o][o]},numeric.transpose=function(t){var n,r,i=t.length,s=t[0].length,o=Array(s),u,a,f;for(r=0;r<s;r++)o[r]=Array(i);for(n=i-1;n>=1;n-=2){a=t[n],u=t[n-1];for(r=s-1;r>=1;--r)f=o[r],f[n]=a[r],f[n-1]=u[r],--r,f=o[r],f[n]=a[r],f[n-1]=u[r];r===0&&(f=o[0],f[n]=a[0],f[n-1]=u[0])}if(n===0){u=t[0];for(r=s-1;r>=1;--r)o[r][0]=u[r],--r,o[r][0]=u[r];r===0&&(o[0][0]=u[0])}return o},numeric.negtranspose=function(t){var n,r,i=t.length,s=t[0].length,o=Array(s),u,a,f;for(r=0;r<s;r++)o[r]=Array(i);for(n=i-1;n>=1;n-=2){a=t[n],u=t[n-1];for(r=s-1;r>=1;--r)f=o[r],f[n]=-a[r],f[n-1]=-u[r],--r,f=o[r],f[n]=-a[r],f[n-1]=-u[r];r===0&&(f=o[0],f[n]=-a[0],f[n-1]=-u[0])}if(n===0){u=t[0];for(r=s-1;r>=1;--r)o[r][0]=-u[r],--r,o[r][0]=-u[r];r===0&&(o[0][0]=-u[0])}return o},numeric._random=function _random(e,t){var n,r=e[t],i=Array(r),s;if(t===e.length-1){s=Math.random;for(n=r-1;n>=1;n-=2)i[n]=s(),i[n-1]=s();return n===0&&(i[0]=s()),i}for(n=r-1;n>=0;n--)i[n]=_random(e,t+1);return i},numeric.random=function(t){return numeric._random(t,0)},numeric.norm2=function(t){return Math.sqrt(numeric.norm2Squared(t))},numeric.linspace=function(t,n,r){typeof r=="undefined"&&(r=Math.max(Math.round(n-t)+1,1));if(r<2)return r===1?[t]:[];var i,s=Array(r);r--;for(i=r;i>=0;i--)s[i]=(i*n+(r-i)*t)/r;return s},numeric.getBlock=function(t,n,r){function s(e,t){var o,u=n[t],a=r[t]-u,f=Array(a);if(t===i.length-1){for(o=a;o>=0;o--)f[o]=e[o+u];return f}for(o=a;o>=0;o--)f[o]=s(e[o+u],t+1);return f}var i=numeric.dim(t);return s(t,0)},numeric.setBlock=function(t,n,r,i){function o(e,t,i){var u,a=n[i],f=r[i]-a;if(i===s.length-1)for(u=f;u>=0;u--)e[u+a]=t[u];for(u=f;u>=0;u--)o(e[u+a],t[u],i+1)}var s=numeric.dim(t);return o(t,i,0),t},numeric.getRange=function(t,n,r){var i=n.length,s=r.length,o,u,a=Array(i),f,l;for(o=i-1;o!==-1;--o){a[o]=Array(s),f=a[o],l=t[n[o]];for(u=s-1;u!==-1;--u)f[u]=l[r[u]]}return a},numeric.blockMatrix=function(t){var n=numeric.dim(t);if(n.length<4)return numeric.blockMatrix([t]);var r=n[0],i=n[1],s,o,u,a,f;s=0,o=0;for(u=0;u<r;++u)s+=t[u][0].length;for(a=0;a<i;++a)o+=t[0][a][0].length;var l=Array(s);for(u=0;u<s;++u)l[u]=Array(o);var c=0,h,p,d,v,m;for(u=0;u<r;++u){h=o;for(a=i-1;a!==-1;--a){f=t[u][a],h-=f[0].length;for(d=f.length-1;d!==-1;--d){m=f[d],p=l[c+d];for(v=m.length-1;v!==-1;--v)p[h+v]=m[v]}}c+=t[u][0].length}return l},numeric.tensor=function(t,n){if(typeof t=="number"||typeof n=="number")return numeric.mul(t,n);var r=numeric.dim(t),i=numeric.dim(n);if(r.length!==1||i.length!==1)throw new Error("numeric: tensor product is only defined for vectors");var s=r[0],o=i[0],u=Array(s),a,f,l,c;for(f=s-1;f>=0;f--){a=Array(o),c=t[f];for(l=o-1;l>=3;--l)a[l]=c*n[l],--l,a[l]=c*n[l],--l,a[l]=c*n[l],--l,a[l]=c*n[l];while(l>=0)a[l]=c*n[l],--l;u[f]=a}return u},numeric.T=function(t,n){this.x=t,this.y=n},numeric.t=function(t,n){return new numeric.T(t,n)},numeric.Tbinop=function(t,n,r,i,s){var o=numeric.indexOf;if(typeof s!="string"){var u;s="";for(u in numeric)numeric.hasOwnProperty(u)&&(t.indexOf(u)>=0||n.indexOf(u)>=0||r.indexOf(u)>=0||i.indexOf(u)>=0)&&u.length>1&&(s+="var "+u+" = numeric."+u+";\n")}return Function(["y"],"var x = this;\nif(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n"+s+"\n"+"if(x.y) {"+"  if(y.y) {"+"    return new numeric.T("+i+");\n"+"  }\n"+"  return new numeric.T("+r+");\n"+"}\n"+"if(y.y) {\n"+"  return new numeric.T("+n+");\n"+"}\n"+"return new numeric.T("+t+");\n")},numeric.T.prototype.add=numeric.Tbinop("add(x.x,y.x)","add(x.x,y.x),y.y","add(x.x,y.x),x.y","add(x.x,y.x),add(x.y,y.y)"),numeric.T.prototype.sub=numeric.Tbinop("sub(x.x,y.x)","sub(x.x,y.x),neg(y.y)","sub(x.x,y.x),x.y","sub(x.x,y.x),sub(x.y,y.y)"),numeric.T.prototype.mul=numeric.Tbinop("mul(x.x,y.x)","mul(x.x,y.x),mul(x.x,y.y)","mul(x.x,y.x),mul(x.y,y.x)","sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))"),numeric.T.prototype.reciprocal=function(){var t=numeric.mul,n=numeric.div;if(this.y){var r=numeric.add(t(this.x,this.x),t(this.y,this.y));return new numeric.T(n(this.x,r),n(numeric.neg(this.y),r))}return new T(n(1,this.x))},numeric.T.prototype.div=function div(e){e instanceof numeric.T||(e=new numeric.T(e));if(e.y)return this.mul(e.reciprocal());var div=numeric.div;return this.y?new numeric.T(div(this.x,e.x),div(this.y,e.x)):new numeric.T(div(this.x,e.x))},numeric.T.prototype.dot=numeric.Tbinop("dot(x.x,y.x)","dot(x.x,y.x),dot(x.x,y.y)","dot(x.x,y.x),dot(x.y,y.x)","sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))"),numeric.T.prototype.transpose=function(){var t=numeric.transpose,n=this.x,r=this.y;return r?new numeric.T(t(n),t(r)):new numeric.T(t(n))},numeric.T.prototype.transjugate=function(){var t=numeric.transpose,n=this.x,r=this.y;return r?new numeric.T(t(n),numeric.negtranspose(r)):new numeric.T(t(n))},numeric.Tunop=function(t,n,r){return typeof r!="string"&&(r=""),Function("var x = this;\n"+r+"\n"+"if(x.y) {"+"  "+n+";\n"+"}\n"+t+";\n")},numeric.T.prototype.exp=numeric.Tunop("return new numeric.T(ex)","return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))","var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;"),numeric.T.prototype.conj=numeric.Tunop("return new numeric.T(x.x);","return new numeric.T(x.x,numeric.neg(x.y));"),numeric.T.prototype.neg=numeric.Tunop("return new numeric.T(neg(x.x));","return new numeric.T(neg(x.x),neg(x.y));","var neg = numeric.neg;"),numeric.T.prototype.sin=numeric.Tunop("return new numeric.T(numeric.sin(x.x))","return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));"),numeric.T.prototype.cos=numeric.Tunop("return new numeric.T(numeric.cos(x.x))","return x.exp().add(x.neg().exp()).div(2);"),numeric.T.prototype.abs=numeric.Tunop("return new numeric.T(numeric.abs(x.x));","return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));","var mul = numeric.mul;"),numeric.T.prototype.log=numeric.Tunop("return new numeric.T(numeric.log(x.x));","var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\nreturn new numeric.T(numeric.log(r.x),theta.x);"),numeric.T.prototype.norm2=numeric.Tunop("return numeric.norm2(x.x);","var f = numeric.norm2Squared;\nreturn Math.sqrt(f(x.x)+f(x.y));"),numeric.T.prototype.inv=function(){var t=this;if(typeof t.y=="undefined")return new numeric.T(numeric.inv(t.x));var n=t.x.length,r,i,s,o=numeric.identity(n),u=numeric.rep([n,n],0),a=numeric.clone(t.x),f=numeric.clone(t.y),l,c,h,p,d,v,m,g,r,i,s,y,b,w,E,S,x,T;for(r=0;r<n;r++){w=a[r][r],E=f[r][r],y=w*w+E*E,s=r;for(i=r+1;i<n;i++)w=a[i][r],E=f[i][r],b=w*w+E*E,b>y&&(s=i,y=b);s!==r&&(T=a[r],a[r]=a[s],a[s]=T,T=f[r],f[r]=f[s],f[s]=T,T=o[r],o[r]=o[s],o[s]=T,T=u[r],u[r]=u[s],u[s]=T),l=a[r],c=f[r],d=o[r],v=u[r],w=l[r],E=c[r];for(i=r+1;i<n;i++)S=l[i],x=c[i],l[i]=(S*w+x*E)/y,c[i]=(x*w-S*E)/y;for(i=0;i<n;i++)S=d[i],x=v[i],d[i]=(S*w+x*E)/y,v[i]=(x*w-S*E)/y;for(i=r+1;i<n;i++){h=a[i],p=f[i],m=o[i],g=u[i],w=h[r],E=p[r];for(s=r+1;s<n;s++)S=l[s],x=c[s],h[s]-=S*w-x*E,p[s]-=x*w+S*E;for(s=0;s<n;s++)S=d[s],x=v[s],m[s]-=S*w-x*E,g[s]-=x*w+S*E}}for(r=n-1;r>0;r--){d=o[r],v=u[r];for(i=r-1;i>=0;i--){m=o[i],g=u[i],w=a[i][r],E=f[i][r];for(s=n-1;s>=0;s--)S=d[s],x=v[s],m[s]-=w*S-E*x,g[s]-=w*x+E*S}}return new numeric.T(o,u)},numeric.T.prototype.get=function(t){var n=this.x,r=this.y,i=0,s,o=t.length;if(r){while(i<o)s=t[i],n=n[s],r=r[s],i++;return new numeric.T(n,r)}while(i<o)s=t[i],n=n[s],i++;return new numeric.T(n)},numeric.T.prototype.set=function(t,n){var r=this.x,i=this.y,s=0,o,u=t.length,a=n.x,f=n.y;if(u===0)return f?this.y=f:i&&(this.y=undefined),this.x=r,this;if(f){i||(i=numeric.rep(numeric.dim(r),0),this.y=i);while(s<u-1)o=t[s],r=r[o],i=i[o],s++;return o=t[s],r[o]=a,i[o]=f,this}if(i){while(s<u-1)o=t[s],r=r[o],i=i[o],s++;return o=t[s],r[o]=a,a instanceof Array?i[o]=numeric.rep(numeric.dim(a),0):i[o]=0,this}while(s<u-1)o=t[s],r=r[o],s++;return o=t[s],r[o]=a,this},numeric.T.prototype.getRows=function(t,n){var r=n-t+1,i,s=Array(r),o,u=this.x,a=this.y;for(i=t;i<=n;i++)s[i-t]=u[i];if(a){o=Array(r);for(i=t;i<=n;i++)o[i-t]=a[i];return new numeric.T(s,o)}return new numeric.T(s)},numeric.T.prototype.setRows=function(t,n,r){var i,s=this.x,o=this.y,u=r.x,a=r.y;for(i=t;i<=n;i++)s[i]=u[i-t];if(a){o||(o=numeric.rep(numeric.dim(s),0),this.y=o);for(i=t;i<=n;i++)o[i]=a[i-t]}else if(o)for(i=t;i<=n;i++)o[i]=numeric.rep([u[i-t].length],0);return this},numeric.T.prototype.getRow=function(t){var n=this.x,r=this.y;return r?new numeric.T(n[t],r[t]):new numeric.T(n[t])},numeric.T.prototype.setRow=function(t,n){var r=this.x,i=this.y,s=n.x,o=n.y;return r[t]=s,o?(i||(i=numeric.rep(numeric.dim(r),0),this.y=i),i[t]=o):i&&(i=numeric.rep([s.length],0)),this},numeric.T.prototype.getBlock=function(t,n){var r=this.x,i=this.y,s=numeric.getBlock;return i?new numeric.T(s(r,t,n),s(i,t,n)):new numeric.T(s(r,t,n))},numeric.T.prototype.setBlock=function(t,n,r){r instanceof numeric.T||(r=new numeric.T(r));var i=this.x,s=this.y,o=numeric.setBlock,u=r.x,a=r.y;if(a)return s||(this.y=numeric.rep(numeric.dim(this),0),s=this.y),o(i,t,n,u),o(s,t,n,a),this;o(i,t,n,u),s&&o(s,t,n,numeric.rep(numeric.dim(u),0))},numeric.T.rep=function(t,n){var r=numeric.T;n instanceof r||(n=new r(n));var i=n.x,s=n.y,o=numeric.rep;return s?new r(o(t,i),o(t,s)):new r(o(t,i))},numeric.T.diag=function diag(e){e instanceof numeric.T||(e=new numeric.T(e));var t=e.x,n=e.y,diag=numeric.diag;return n?new numeric.T(diag(t),diag(n)):new numeric.T(diag(t))},numeric.T.eig=function(){if(this.y)throw new Error("eig: not implemented for complex matrices.");return numeric.eig(this.x)},numeric.T.identity=function(t){return new numeric.T(numeric.identity(t))},numeric.T.prototype.getDiag=function(){var t=numeric,n=this.x,r=this.y;return r?new t.T(t.getDiag(n),t.getDiag(r)):new t.T(t.getDiag(n))},numeric.house=function(t){var n=numeric.clone(t),r=t[0]>=0?1:-1,i=r*numeric.norm2(t);n[0]+=i;var s=numeric.norm2(n);if(s===0)throw new Error("eig: internal error");return numeric.div(n,s)},numeric.toUpperHessenberg=function(t){var n=numeric.dim(t);if(n.length!==2||n[0]!==n[1])throw new Error("numeric: toUpperHessenberg() only works on square matrices");var r=n[0],i,s,o,u,a,f=numeric.clone(t),l,c,h,p,d=numeric.identity(r),v;for(s=0;s<r-2;s++){u=Array(r-s-1);for(i=s+1;i<r;i++)u[i-s-1]=f[i][s];if(numeric.norm2(u)>0){a=numeric.house(u),l=numeric.getBlock(f,[s+1,s],[r-1,r-1]),c=numeric.tensor(a,numeric.dot(a,l));for(i=s+1;i<r;i++){h=f[i],p=c[i-s-1];for(o=s;o<r;o++)h[o]-=2*p[o-s]}l=numeric.getBlock(f,[0,s+1],[r-1,r-1]),c=numeric.tensor(numeric.dot(l,a),a);for(i=0;i<r;i++){h=f[i],p=c[i];for(o=s+1;o<r;o++)h[o]-=2*p[o-s-1]}l=Array(r-s-1);for(i=s+1;i<r;i++)l[i-s-1]=d[i];c=numeric.tensor(a,numeric.dot(a,l));for(i=s+1;i<r;i++){v=d[i],p=c[i-s-1];for(o=0;o<r;o++)v[o]-=2*p[o]}}}return{H:f,Q:d}},numeric.epsilon=2.220446049250313e-16,numeric.QRFrancis=function(e,t){typeof t=="undefined"&&(t=1e4),e=numeric.clone(e);var n=numeric.clone(e),r=numeric.dim(e),i=r[0],s,o,u,a,f,l,c,h,p,d=numeric.identity(i),v,m,g,y,b,w,E,S,x;if(i<3)return{Q:d,B:[[0,i-1]]};var T=numeric.epsilon;for(x=0;x<t;x++){for(E=0;E<i-1;E++)if(Math.abs(e[E+1][E])<T*(Math.abs(e[E][E])+Math.abs(e[E+1][E+1]))){var N=numeric.QRFrancis(numeric.getBlock(e,[0,0],[E,E]),t),C=numeric.QRFrancis(numeric.getBlock(e,[E+1,E+1],[i-1,i-1]),t);g=Array(E+1);for(w=0;w<=E;w++)g[w]=d[w];y=numeric.dot(N.Q,g);for(w=0;w<=E;w++)d[w]=y[w];g=Array(i-E-1);for(w=E+1;w<i;w++)g[w-E-1]=d[w];y=numeric.dot(C.Q,g);for(w=E+1;w<i;w++)d[w]=y[w-E-1];return{Q:d,B:N.B.concat(numeric.add(C.B,E+1))}}u=e[i-2][i-2],a=e[i-2][i-1],f=e[i-1][i-2],l=e[i-1][i-1],h=u+l,c=u*l-a*f,p=numeric.getBlock(e,[0,0],[2,2]);if(h*h>=4*c){var k,L;k=.5*(h+Math.sqrt(h*h-4*c)),L=.5*(h-Math.sqrt(h*h-4*c)),p=numeric.add(numeric.sub(numeric.dot(p,p),numeric.mul(p,k+L)),numeric.diag(numeric.rep([3],k*L)))}else p=numeric.add(numeric.sub(numeric.dot(p,p),numeric.mul(p,h)),numeric.diag(numeric.rep([3],c)));s=[p[0][0],p[1][0],p[2][0]],o=numeric.house(s),g=[e[0],e[1],e[2]],y=numeric.tensor(o,numeric.dot(o,g));for(w=0;w<3;w++){m=e[w],b=y[w];for(S=0;S<i;S++)m[S]-=2*b[S]}g=numeric.getBlock(e,[0,0],[i-1,2]),y=numeric.tensor(numeric.dot(g,o),o);for(w=0;w<i;w++){m=e[w],b=y[w];for(S=0;S<3;S++)m[S]-=2*b[S]}g=[d[0],d[1],d[2]],y=numeric.tensor(o,numeric.dot(o,g));for(w=0;w<3;w++){v=d[w],b=y[w];for(S=0;S<i;S++)v[S]-=2*b[S]}var A;for(E=0;E<i-2;E++){for(S=E;S<=E+1;S++)if(Math.abs(e[S+1][S])<T*(Math.abs(e[S][S])+Math.abs(e[S+1][S+1]))){var N=numeric.QRFrancis(numeric.getBlock(e,[0,0],[S,S]),t),C=numeric.QRFrancis(numeric.getBlock(e,[S+1,S+1],[i-1,i-1]),t);g=Array(S+1);for(w=0;w<=S;w++)g[w]=d[w];y=numeric.dot(N.Q,g);for(w=0;w<=S;w++)d[w]=y[w];g=Array(i-S-1);for(w=S+1;w<i;w++)g[w-S-1]=d[w];y=numeric.dot(C.Q,g);for(w=S+1;w<i;w++)d[w]=y[w-S-1];return{Q:d,B:N.B.concat(numeric.add(C.B,S+1))}}A=Math.min(i-1,E+3),s=Array(A-E);for(w=E+1;w<=A;w++)s[w-E-1]=e[w][E];o=numeric.house(s),g=numeric.getBlock(e,[E+1,E],[A,i-1]),y=numeric.tensor(o,numeric.dot(o,g));for(w=E+1;w<=A;w++){m=e[w],b=y[w-E-1];for(S=E;S<i;S++)m[S]-=2*b[S-E]}g=numeric.getBlock(e,[0,E+1],[i-1,A]),y=numeric.tensor(numeric.dot(g,o),o);for(w=0;w<i;w++){m=e[w],b=y[w];for(S=E+1;S<=A;S++)m[S]-=2*b[S-E-1]}g=Array(A-E);for(w=E+1;w<=A;w++)g[w-E-1]=d[w];y=numeric.tensor(o,numeric.dot(o,g));for(w=E+1;w<=A;w++){v=d[w],b=y[w-E-1];for(S=0;S<i;S++)v[S]-=2*b[S]}}}throw new Error("numeric: eigenvalue iteration does not converge -- increase maxiter?")},numeric.eig=function(t,n){var r=numeric.toUpperHessenberg(t),i=numeric.QRFrancis(r.H,n),s=numeric.T,o=t.length,u,a,f=!1,l=i.B,c=numeric.dot(i.Q,numeric.dot(r.H,numeric.transpose(i.Q))),h=new s(numeric.dot(i.Q,r.Q)),p,d=l.length,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A=Math.sqrt;for(a=0;a<d;a++){u=l[a][0];if(u!==l[a][1]){v=u+1,m=c[u][u],g=c[u][v],y=c[v][u],b=c[v][v];if(g===0&&y===0)continue;w=-m-b,E=m*b-g*y,S=w*w-4*E,S>=0?(w<0?x=-0.5*(w-A(S)):x=-0.5*(w+A(S)),k=(m-x)*(m-x)+g*g,L=y*y+(b-x)*(b-x),k>L?(k=A(k),N=(m-x)/k,C=g/k):(L=A(L),N=y/L,C=(b-x)/L),p=new s([[C,-N],[N,C]]),h.setRows(u,v,p.dot(h.getRows(u,v)))):(x=-0.5*w,T=.5*A(-S),k=(m-x)*(m-x)+g*g,L=y*y+(b-x)*(b-x),k>L?(k=A(k+T*T),N=(m-x)/k,C=g/k,x=0,T/=k):(L=A(L+T*T),N=y/L,C=(b-x)/L,x=T/L,T=0),p=new s([[C,-N],[N,C]],[[x,
T],[T,-x]]),h.setRows(u,v,p.dot(h.getRows(u,v))))}}var O=h.dot(t).dot(h.transjugate()),o=t.length,M=numeric.T.identity(o);for(v=0;v<o;v++)if(v>0)for(a=v-1;a>=0;a--){var _=O.get([a,a]),D=O.get([v,v]);if(!numeric.neq(_.x,D.x)&&!numeric.neq(_.y,D.y)){M.setRow(v,M.getRow(a));continue}x=O.getRow(a).getBlock([a],[v-1]),T=M.getRow(v).getBlock([a],[v-1]),M.set([v,a],O.get([a,v]).neg().sub(x.dot(T)).div(_.sub(D)))}for(v=0;v<o;v++)x=M.getRow(v),M.setRow(v,x.div(x.norm2()));return M=M.transpose(),M=h.transjugate().dot(M),{lambda:O.getDiag(),E:M}},numeric.ccsSparse=function(t){var n=t.length,r,i,s,o,u=[];for(s=n-1;s!==-1;--s){i=t[s];for(o in i){o=parseInt(o);while(o>=u.length)u[u.length]=0;i[o]!==0&&u[o]++}}var r=u.length,a=Array(r+1);a[0]=0;for(s=0;s<r;++s)a[s+1]=a[s]+u[s];var f=Array(a[r]),l=Array(a[r]);for(s=n-1;s!==-1;--s){i=t[s];for(o in i)i[o]!==0&&(u[o]--,f[a[o]+u[o]]=s,l[a[o]+u[o]]=i[o])}return[a,f,l]},numeric.ccsFull=function(t){var n=t[0],r=t[1],i=t[2],s=numeric.ccsDim(t),o=s[0],u=s[1],a,f,l,c,h,p=numeric.rep([o,u],0);for(a=0;a<u;a++){l=n[a],c=n[a+1];for(f=l;f<c;++f)p[r[f]][a]=i[f]}return p},numeric.ccsTSolve=function(t,n,r,i,s){function h(e){var t;if(r[e]!==0)return;r[e]=1;for(t=o[e];t<o[e+1];++t)h(u[t]);s[c]=e,++c}var o=t[0],u=t[1],a=t[2],f=o.length-1,l=Math.max,c=0;typeof i=="undefined"&&(r=numeric.rep([f],0)),typeof i=="undefined"&&(i=numeric.linspace(0,r.length-1)),typeof s=="undefined"&&(s=[]);var p,d,v,m,g,y,b,w,E;for(p=i.length-1;p!==-1;--p)h(i[p]);s.length=c;for(p=s.length-1;p!==-1;--p)r[s[p]]=0;for(p=i.length-1;p!==-1;--p)d=i[p],r[d]=n[d];for(p=s.length-1;p!==-1;--p){d=s[p],v=o[d],m=l(o[d+1],v);for(g=v;g!==m;++g)if(u[g]===d){r[d]/=a[g];break}E=r[d];for(g=v;g!==m;++g)y=u[g],y!==d&&(r[y]-=E*a[g])}return r},numeric.ccsDFS=function(t){this.k=Array(t),this.k1=Array(t),this.j=Array(t)},numeric.ccsDFS.prototype.dfs=function(t,n,r,i,s,o){var u=0,a,f=s.length,l=this.k,c=this.k1,h=this.j,p,d;if(i[t]!==0)return;i[t]=1,h[0]=t,l[0]=p=n[t],c[0]=d=n[t+1];for(;;)if(p>=d){s[f]=h[u];if(u===0)return;++f,--u,p=l[u],d=c[u]}else a=o[r[p]],i[a]===0?(i[a]=1,l[u]=p,++u,h[u]=a,p=n[a],c[u]=d=n[a+1]):++p},numeric.ccsLPSolve=function(t,n,r,i,s,o,u){var a=t[0],f=t[1],l=t[2],c=a.length-1,h=0,p=n[0],d=n[1],v=n[2],m,g,y,b,w,E,S,x,T,N,C,k;g=p[s],y=p[s+1],i.length=0;for(m=g;m<y;++m)u.dfs(o[d[m]],a,f,r,i,o);for(m=i.length-1;m!==-1;--m)r[i[m]]=0;for(m=g;m!==y;++m)b=o[d[m]],r[b]=v[m];for(m=i.length-1;m!==-1;--m){b=i[m],E=a[b],S=a[b+1];for(x=E;x<S;++x)if(o[f[x]]===b){r[b]/=l[x];break}k=r[b];for(x=E;x<S;++x)T=o[f[x]],T!==b&&(r[T]-=k*l[x])}return r},numeric.ccsLUP1=function(t,n){var r=t[0].length-1,i=[numeric.rep([r+1],0),[],[]],s=[numeric.rep([r+1],0),[],[]],o=i[0],u=i[1],a=i[2],f=s[0],l=s[1],c=s[2],h=numeric.rep([r],0),p=numeric.rep([r],0),d,v,m,g,y,b,w,E,S,x,T=numeric.ccsLPSolve,N=Math.max,C=Math.abs,k=numeric.linspace(0,r-1),L=numeric.linspace(0,r-1),A=new numeric.ccsDFS(r);typeof n=="undefined"&&(n=1);for(d=0;d<r;++d){T(i,t,h,p,d,L,A),b=-1,w=-1;for(v=p.length-1;v!==-1;--v){m=p[v];if(m<=d)continue;E=C(h[m]),E>b&&(w=m,b=E)}C(h[d])<n*b&&(v=k[d],b=k[w],k[d]=b,L[b]=d,k[w]=v,L[v]=w,b=h[d],h[d]=h[w],h[w]=b),b=o[d],w=f[d],S=h[d],u[b]=k[d],a[b]=1,++b;for(v=p.length-1;v!==-1;--v)m=p[v],E=h[m],p[v]=0,h[m]=0,m<=d?(l[w]=m,c[w]=E,++w):(u[b]=k[m],a[b]=E/S,++b);o[d+1]=b,f[d+1]=w}for(v=u.length-1;v!==-1;--v)u[v]=L[u[v]];return{L:i,U:s,P:k,Pinv:L}},numeric.ccsDFS0=function(t){this.k=Array(t),this.k1=Array(t),this.j=Array(t)},numeric.ccsDFS0.prototype.dfs=function(t,n,r,i,s,o,u){var a=0,f,l=s.length,c=this.k,h=this.k1,p=this.j,d,v;if(i[t]!==0)return;i[t]=1,p[0]=t,c[0]=d=n[o[t]],h[0]=v=n[o[t]+1];for(;;){if(isNaN(d))throw new Error("Ow!");if(d>=v){s[l]=o[p[a]];if(a===0)return;++l,--a,d=c[a],v=h[a]}else f=r[d],i[f]===0?(i[f]=1,c[a]=d,++a,p[a]=f,f=o[f],d=n[f],h[a]=v=n[f+1]):++d}},numeric.ccsLPSolve0=function(t,n,r,i,s,o,u,a){var f=t[0],l=t[1],c=t[2],h=f.length-1,p=0,d=n[0],v=n[1],m=n[2],g,y,b,w,E,S,x,T,N,C,k,L;y=d[s],b=d[s+1],i.length=0;for(g=y;g<b;++g)a.dfs(v[g],f,l,r,i,o,u);for(g=i.length-1;g!==-1;--g)w=i[g],r[u[w]]=0;for(g=y;g!==b;++g)w=v[g],r[w]=m[g];for(g=i.length-1;g!==-1;--g){w=i[g],N=u[w],S=f[w],x=f[w+1];for(T=S;T<x;++T)if(l[T]===N){r[N]/=c[T];break}L=r[N];for(T=S;T<x;++T)r[l[T]]-=L*c[T];r[N]=L}},numeric.ccsLUP0=function(t,n){var r=t[0].length-1,i=[numeric.rep([r+1],0),[],[]],s=[numeric.rep([r+1],0),[],[]],o=i[0],u=i[1],a=i[2],f=s[0],l=s[1],c=s[2],h=numeric.rep([r],0),p=numeric.rep([r],0),d,v,m,g,y,b,w,E,S,x,T=numeric.ccsLPSolve0,N=Math.max,C=Math.abs,k=numeric.linspace(0,r-1),L=numeric.linspace(0,r-1),A=new numeric.ccsDFS0(r);typeof n=="undefined"&&(n=1);for(d=0;d<r;++d){T(i,t,h,p,d,L,k,A),b=-1,w=-1;for(v=p.length-1;v!==-1;--v){m=p[v];if(m<=d)continue;E=C(h[k[m]]),E>b&&(w=m,b=E)}C(h[k[d]])<n*b&&(v=k[d],b=k[w],k[d]=b,L[b]=d,k[w]=v,L[v]=w),b=o[d],w=f[d],S=h[k[d]],u[b]=k[d],a[b]=1,++b;for(v=p.length-1;v!==-1;--v)m=p[v],E=h[k[m]],p[v]=0,h[k[m]]=0,m<=d?(l[w]=m,c[w]=E,++w):(u[b]=k[m],a[b]=E/S,++b);o[d+1]=b,f[d+1]=w}for(v=u.length-1;v!==-1;--v)u[v]=L[u[v]];return{L:i,U:s,P:k,Pinv:L}},numeric.ccsLUP=numeric.ccsLUP0,numeric.ccsDim=function(t){return[numeric.sup(t[1])+1,t[0].length-1]},numeric.ccsGetBlock=function(t,n,r){var i=numeric.ccsDim(t),s=i[0],o=i[1];typeof n=="undefined"?n=numeric.linspace(0,s-1):typeof n=="number"&&(n=[n]),typeof r=="undefined"?r=numeric.linspace(0,o-1):typeof r=="number"&&(r=[r]);var u,a,f,l=n.length,c,h=r.length,p,d,v,m=numeric.rep([o],0),g=[],y=[],b=[m,g,y],w=t[0],E=t[1],S=t[2],x=numeric.rep([s],0),T=0,N=numeric.rep([s],0);for(c=0;c<h;++c){d=r[c];var C=w[d],k=w[d+1];for(u=C;u<k;++u)p=E[u],N[p]=1,x[p]=S[u];for(u=0;u<l;++u)v=n[u],N[v]&&(g[T]=u,y[T]=x[n[u]],++T);for(u=C;u<k;++u)p=E[u],N[p]=0;m[c+1]=T}return b},numeric.ccsDot=function(t,n){var r=t[0],i=t[1],s=t[2],o=n[0],u=n[1],a=n[2],f=numeric.ccsDim(t),l=numeric.ccsDim(n),c=f[0],h=f[1],p=l[1],d=numeric.rep([c],0),v=numeric.rep([c],0),m=Array(c),g=numeric.rep([p],0),y=[],b=[],w=[g,y,b],E,S,x,T,N,C,k,L,A,O,M;for(x=0;x!==p;++x){T=o[x],N=o[x+1],A=0;for(S=T;S<N;++S){O=u[S],M=a[S],C=r[O],k=r[O+1];for(E=C;E<k;++E)L=i[E],v[L]===0&&(m[A]=L,v[L]=1,A+=1),d[L]=d[L]+s[E]*M}T=g[x],N=T+A,g[x+1]=N;for(S=A-1;S!==-1;--S)M=T+S,E=m[S],y[M]=E,b[M]=d[E],v[E]=0,d[E]=0;g[x+1]=g[x]+A}return w},numeric.ccsLUPSolve=function(t,n){var r=t.L,i=t.U,s=t.P,o=n[0],u=!1;typeof o!="object"&&(n=[[0,n.length],numeric.linspace(0,n.length-1),n],o=n[0],u=!0);var a=n[1],f=n[2],l=r[0].length-1,c=o.length-1,h=numeric.rep([l],0),p=Array(l),d=numeric.rep([l],0),v=Array(l),m=numeric.rep([c+1],0),g=[],y=[],b=numeric.ccsTSolve,w,E,S,x,T,N,C=0;for(w=0;w<c;++w){T=0,S=o[w],x=o[w+1];for(E=S;E<x;++E)N=t.Pinv[a[E]],v[T]=N,d[N]=f[E],++T;v.length=T,b(r,d,h,v,p);for(E=v.length-1;E!==-1;--E)d[v[E]]=0;b(i,h,d,p,v);if(u)return d;for(E=p.length-1;E!==-1;--E)h[p[E]]=0;for(E=v.length-1;E!==-1;--E)N=v[E],g[C]=N,y[C]=d[N],d[N]=0,++C;m[w+1]=C}return[m,g,y]},numeric.ccsbinop=function(t,n){return typeof n=="undefined"&&(n=""),Function("X","Y","var Xi = X[0], Xj = X[1], Xv = X[2];\nvar Yi = Y[0], Yj = Y[1], Yv = Y[2];\nvar n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\nvar Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\nvar x = numeric.rep([m],0),y = numeric.rep([m],0);\nvar xk,yk,zk;\nvar i,j,j0,j1,k,p=0;\n"+n+"for(i=0;i<n;++i) {\n"+"  j0 = Xi[i]; j1 = Xi[i+1];\n"+"  for(j=j0;j!==j1;++j) {\n"+"    k = Xj[j];\n"+"    x[k] = 1;\n"+"    Zj[p] = k;\n"+"    ++p;\n"+"  }\n"+"  j0 = Yi[i]; j1 = Yi[i+1];\n"+"  for(j=j0;j!==j1;++j) {\n"+"    k = Yj[j];\n"+"    y[k] = Yv[j];\n"+"    if(x[k] === 0) {\n"+"      Zj[p] = k;\n"+"      ++p;\n"+"    }\n"+"  }\n"+"  Zi[i+1] = p;\n"+"  j0 = Xi[i]; j1 = Xi[i+1];\n"+"  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n"+"  j0 = Zi[i]; j1 = Zi[i+1];\n"+"  for(j=j0;j!==j1;++j) {\n"+"    k = Zj[j];\n"+"    xk = x[k];\n"+"    yk = y[k];\n"+t+"\n"+"    Zv[j] = zk;\n"+"  }\n"+"  j0 = Xi[i]; j1 = Xi[i+1];\n"+"  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n"+"  j0 = Yi[i]; j1 = Yi[i+1];\n"+"  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n"+"}\n"+"return [Zi,Zj,Zv];")},function(){var k,A,B,C;for(k in numeric.ops2)isFinite(eval("1"+numeric.ops2[k]+"0"))?A="[Y[0],Y[1],numeric."+k+"(X,Y[2])]":A="NaN",isFinite(eval("0"+numeric.ops2[k]+"1"))?B="[X[0],X[1],numeric."+k+"(X[2],Y)]":B="NaN",isFinite(eval("1"+numeric.ops2[k]+"0"))&&isFinite(eval("0"+numeric.ops2[k]+"1"))?C="numeric.ccs"+k+"MM(X,Y)":C="NaN",numeric["ccs"+k+"MM"]=numeric.ccsbinop("zk = xk "+numeric.ops2[k]+"yk;"),numeric["ccs"+k]=Function("X","Y",'if(typeof X === "number") return '+A+";\n"+'if(typeof Y === "number") return '+B+";\n"+"return "+C+";\n")}(),numeric.ccsScatter=function(t){var n=t[0],r=t[1],i=t[2],s=numeric.sup(r)+1,o=n.length,u=numeric.rep([s],0),a=Array(o),f=Array(o),l=numeric.rep([s],0),c;for(c=0;c<o;++c)l[r[c]]++;for(c=0;c<s;++c)u[c+1]=u[c]+l[c];var h=u.slice(0),p,d;for(c=0;c<o;++c)d=r[c],p=h[d],a[p]=n[c],f[p]=i[c],h[d]=h[d]+1;return[u,a,f]},numeric.ccsGather=function(t){var n=t[0],r=t[1],i=t[2],s=n.length-1,o=r.length,u=Array(o),a=Array(o),f=Array(o),l,c,h,p,d;d=0;for(l=0;l<s;++l){h=n[l],p=n[l+1];for(c=h;c!==p;++c)a[d]=l,u[d]=r[c],f[d]=i[c],++d}return[u,a,f]},numeric.sdim=function dim(e,t,n){typeof t=="undefined"&&(t=[]);if(typeof e!="object")return t;typeof n=="undefined"&&(n=0),n in t||(t[n]=0),e.length>t[n]&&(t[n]=e.length);var r;for(r in e)e.hasOwnProperty(r)&&dim(e[r],t,n+1);return t},numeric.sclone=function clone(e,t,n){typeof t=="undefined"&&(t=0),typeof n=="undefined"&&(n=numeric.sdim(e).length);var r,i=Array(e.length);if(t===n-1){for(r in e)e.hasOwnProperty(r)&&(i[r]=e[r]);return i}for(r in e)e.hasOwnProperty(r)&&(i[r]=clone(e[r],t+1,n));return i},numeric.sdiag=function(t){var n=t.length,r,i=Array(n),s,o,u;for(r=n-1;r>=1;r-=2)s=r-1,i[r]=[],i[r][r]=t[r],i[s]=[],i[s][s]=t[s];return r===0&&(i[0]=[],i[0][0]=t[r]),i},numeric.sidentity=function(t){return numeric.sdiag(numeric.rep([t],1))},numeric.stranspose=function(t){var n=[],r=t.length,i,s,o;for(i in t){if(!t.hasOwnProperty(i))continue;o=t[i];for(s in o){if(!o.hasOwnProperty(s))continue;typeof n[s]!="object"&&(n[s]=[]),n[s][i]=o[s]}}return n},numeric.sLUP=function(t,n){throw new Error("The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.")},numeric.sdotMM=function(t,n){var r=t.length,i=n.length,s=numeric.stranspose(n),o=s.length,u,a,f,l,c,h,p=Array(r),d;for(f=r-1;f>=0;f--){d=[],u=t[f];for(c=o-1;c>=0;c--){h=0,a=s[c];for(l in u){if(!u.hasOwnProperty(l))continue;l in a&&(h+=u[l]*a[l])}h&&(d[c]=h)}p[f]=d}return p},numeric.sdotMV=function(t,n){var r=t.length,i,s,o,u=Array(r),a;for(s=r-1;s>=0;s--){i=t[s],a=0;for(o in i){if(!i.hasOwnProperty(o))continue;n[o]&&(a+=i[o]*n[o])}a&&(u[s]=a)}return u},numeric.sdotVM=function(t,n){var r,i,s,o,u=[],a;for(r in t){if(!t.hasOwnProperty(r))continue;s=n[r],o=t[r];for(i in s){if(!s.hasOwnProperty(i))continue;u[i]||(u[i]=0),u[i]+=o*s[i]}}return u},numeric.sdotVV=function(t,n){var r,i=0;for(r in t)t[r]&&n[r]&&(i+=t[r]*n[r]);return i},numeric.sdot=function(t,n){var r=numeric.sdim(t).length,i=numeric.sdim(n).length,s=r*1e3+i;switch(s){case 0:return t*n;case 1001:return numeric.sdotVV(t,n);case 2001:return numeric.sdotMV(t,n);case 1002:return numeric.sdotVM(t,n);case 2002:return numeric.sdotMM(t,n);default:throw new Error("numeric.sdot not implemented for tensors of order "+r+" and "+i)}},numeric.sscatter=function(t){var n=t[0].length,r,i,s,o=t.length,u=[],a;for(i=n-1;i>=0;--i){if(!t[o-1][i])continue;a=u;for(s=0;s<o-2;s++)r=t[s][i],a[r]||(a[r]=[]),a=a[r];a[t[s][i]]=t[s+1][i]}return u},numeric.sgather=function gather(e,t,n){typeof t=="undefined"&&(t=[]),typeof n=="undefined"&&(n=[]);var r,i,s;r=n.length;for(i in e)if(e.hasOwnProperty(i)){n[r]=parseInt(i),s=e[i];if(typeof s=="number"){if(s){if(t.length===0)for(i=r+1;i>=0;--i)t[i]=[];for(i=r;i>=0;--i)t[i].push(n[i]);t[r+1].push(s)}}else gather(s,t,n)}return n.length>r&&n.pop(),t},numeric.cLU=function(t){var n=t[0],r=t[1],i=t[2],s=n.length,o=0,u,a,f,l,c,h;for(u=0;u<s;u++)n[u]>o&&(o=n[u]);o++;var p=Array(o),d=Array(o),v=numeric.rep([o],Infinity),m=numeric.rep([o],-Infinity),g,y,b;for(f=0;f<s;f++)u=n[f],a=r[f],a<v[u]&&(v[u]=a),a>m[u]&&(m[u]=a);for(u=0;u<o-1;u++)m[u]>m[u+1]&&(m[u+1]=m[u]);for(u=o-1;u>=1;u--)v[u]<v[u-1]&&(v[u-1]=v[u]);var w=0,E=0;for(u=0;u<o;u++)d[u]=numeric.rep([m[u]-v[u]+1],0),p[u]=numeric.rep([u-v[u]],0),w+=u-v[u]+1,E+=m[u]-u+1;for(f=0;f<s;f++)u=n[f],d[u][r[f]-v[u]]=i[f];for(u=0;u<o-1;u++){l=u-v[u],g=d[u];for(a=u+1;v[a]<=u&&a<o;a++){c=u-v[a],h=m[u]-u,y=d[a],b=y[c]/g[l];if(b){for(f=1;f<=h;f++)y[f+c]-=b*g[f+l];p[a][u-v[a]]=b}}}var g=[],y=[],S=[],x=[],T=[],N=[],s,C,k;s=0,C=0;for(u=0;u<o;u++){l=v[u],c=m[u],k=d[u];for(a=u;a<=c;a++)k[a-l]&&(g[s]=u,y[s]=a,S[s]=k[a-l],s++);k=p[u];for(a=l;a<u;a++)k[a-l]&&(x[C]=u,T[C]=a,N[C]=k[a-l],C++);x[C]=u,T[C]=u,N[C]=1,C++}return{U:[g,y,S],L:[x,T,N]}},numeric.cLUsolve=function(t,n){var r=t.L,i=t.U,s=numeric.clone(n),o=r[0],u=r[1],a=r[2],f=i[0],l=i[1],c=i[2],h=f.length,p=o.length,d=s.length,v,m,g;g=0;for(v=0;v<d;v++){while(u[g]<v)s[v]-=a[g]*s[u[g]],g++;g++}g=h-1;for(v=d-1;v>=0;v--){while(l[g]>v)s[v]-=c[g]*s[l[g]],g--;s[v]/=c[g],g--}return s},numeric.cgrid=function(t,n){typeof t=="number"&&(t=[t,t]);var r=numeric.rep(t,-1),i,s,o;if(typeof n!="function")switch(n){case"L":n=function(e,n){return e>=t[0]/2||n<t[1]/2};break;default:n=function(e,t){return!0}}o=0;for(i=1;i<t[0]-1;i++)for(s=1;s<t[1]-1;s++)n(i,s)&&(r[i][s]=o,o++);return r},numeric.cdelsq=function(t){var n=[[-1,0],[0,-1],[0,1],[1,0]],r=numeric.dim(t),i=r[0],s=r[1],o,u,a,f,l,c=[],h=[],p=[];for(o=1;o<i-1;o++)for(u=1;u<s-1;u++){if(t[o][u]<0)continue;for(a=0;a<4;a++){f=o+n[a][0],l=u+n[a][1];if(t[f][l]<0)continue;c.push(t[o][u]),h.push(t[f][l]),p.push(-1)}c.push(t[o][u]),h.push(t[o][u]),p.push(4)}return[c,h,p]},numeric.cdotMV=function(t,n){var r,i=t[0],s=t[1],o=t[2],u,a=i.length,f;f=0;for(u=0;u<a;u++)i[u]>f&&(f=i[u]);f++,r=numeric.rep([f],0);for(u=0;u<a;u++)r[i[u]]+=o[u]*n[s[u]];return r},numeric.Spline=function(t,n,r,i,s){this.x=t,this.yl=n,this.yr=r,this.kl=i,this.kr=s},numeric.Spline.prototype._at=function(t,n){var r=this.x,i=this.yl,s=this.yr,o=this.kl,u=this.kr,t,a,f,l,c=numeric.add,h=numeric.sub,p=numeric.mul;a=h(p(o[n],r[n+1]-r[n]),h(s[n+1],i[n])),f=c(p(u[n+1],r[n]-r[n+1]),h(s[n+1],i[n])),l=(t-r[n])/(r[n+1]-r[n]);var d=l*(1-l);return c(c(c(p(1-l,i[n]),p(l,s[n+1])),p(a,d*(1-l))),p(f,d*l))},numeric.Spline.prototype.at=function(t){if(typeof t=="number"){var n=this.x,r=n.length,i,s,o,u=Math.floor,a,f,l;i=0,s=r-1;while(s-i>1)o=u((i+s)/2),n[o]<=t?i=o:s=o;return this._at(t,i)}var r=t.length,c,h=Array(r);for(c=r-1;c!==-1;--c)h[c]=this.at(t[c]);return h},numeric.Spline.prototype.diff=function(){var t=this.x,n=this.yl,r=this.yr,i=this.kl,s=this.kr,o=n.length,u,a,f,l=i,c=s,h=Array(o),p=Array(o),d=numeric.add,v=numeric.mul,m=numeric.div,g=numeric.sub;for(u=o-1;u!==-1;--u)a=t[u+1]-t[u],f=g(r[u+1],n[u]),h[u]=m(d(v(f,6),v(i[u],-4*a),v(s[u+1],-2*a)),a*a),p[u+1]=m(d(v(f,-6),v(i[u],2*a),v(s[u+1],4*a)),a*a);return new numeric.Spline(t,l,c,h,p)},numeric.Spline.prototype.roots=function(){function t(e){return e*e}function n(e,t,n,r,i){var s=n*2-(t-e),o=-r*2+(t-e),u=(i+1)*.5,a=u*(1-u);return(1-u)*e+u*t+s*a*(1-u)+o*a*u}var r=[],i=this.x,s=this.yl,o=this.yr,u=this.kl,a=this.kr;typeof s[0]=="number"&&(s=[s],o=[o],u=[u],a=[a]);var f=s.length,l=i.length-1,c,h,p,d,v,m,g,y,b,w,r=Array(f),E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F=Math.sqrt;for(c=0;c!==f;++c){g=s[c],y=o[c],b=u[c],w=a[c],E=[];for(h=0;h!==l;h++){h>0&&y[h]*g[h]<0&&E.push(i[h]),A=i[h+1]-i[h],O=i[h],T=g[h],N=y[h+1],S=b[h]/A,x=w[h+1]/A,L=t(S-x+3*(T-N))+12*x*T,C=x+3*T+2*S-3*N,k=3*(x+S+2*(T-N)),L<=0?(_=C/k,_>i[h]&&_<i[h+1]?M=[i[h],_,i[h+1]]:M=[i[h],i[h+1]]):(_=(C-F(L))/k,D=(C+F(L))/k,M=[i[h]],_>i[h]&&_<i[h+1]&&M.push(_),D>i[h]&&D<i[h+1]&&M.push(D),M.push(i[h+1])),H=M[0],_=this._at(H,h);for(p=0;p<M.length-1;p++){B=M[p+1],D=this._at(B,h);if(_===0){E.push(H),H=B,_=D;continue}if(D===0||_*D>0){H=B,_=D;continue}var I=0;for(;;){j=(_*B-D*H)/(_-D);if(j<=H||j>=B)break;P=this._at(j,h);if(P*D>0)B=j,D=P,I===-1&&(_*=.5),I=-1;else{if(!(P*_>0))break;H=j,_=P,I===1&&(D*=.5),I=1}}E.push(j),H=M[p+1],_=this._at(H,h)}D===0&&E.push(B)}r[c]=E}return typeof this.yl[0]=="number"?r[0]:r},numeric.spline=function(t,n,r,i){var s=t.length,o=[],u=[],a=[],f,l=numeric.sub,c=numeric.mul,h=numeric.add;for(f=s-2;f>=0;f--)u[f]=t[f+1]-t[f],a[f]=l(n[f+1],n[f]);if(typeof r=="string"||typeof i=="string")r=i="periodic";var p=[[],[],[]];switch(typeof r){case"undefined":o[0]=c(3/(u[0]*u[0]),a[0]),p[0].push(0,0),p[1].push(0,1),p[2].push(2/u[0],1/u[0]);break;case"string":o[0]=h(c(3/(u[s-2]*u[s-2]),a[s-2]),c(3/(u[0]*u[0]),a[0])),p[0].push(0,0,0),p[1].push(s-2,0,1),p[2].push(1/u[s-2],2/u[s-2]+2/u[0],1/u[0]);break;default:o[0]=r,p[0].push(0),p[1].push(0),p[2].push(1)}for(f=1;f<s-1;f++)o[f]=h(c(3/(u[f-1]*u[f-1]),a[f-1]),c(3/(u[f]*u[f]),a[f])),p[0].push(f,f,f),p[1].push(f-1,f,f+1),p[2].push(1/u[f-1],2/u[f-1]+2/u[f],1/u[f]);switch(typeof i){case"undefined":o[s-1]=c(3/(u[s-2]*u[s-2]),a[s-2]),p[0].push(s-1,s-1),p[1].push(s-2,s-1),p[2].push(1/u[s-2],2/u[s-2]);break;case"string":p[1][p[1].length-1]=0;break;default:o[s-1]=i,p[0].push(s-1),p[1].push(s-1),p[2].push(1)}typeof o[0]!="number"?o=numeric.transpose(o):o=[o];var d=Array(o.length);if(typeof r=="string")for(f=d.length-1;f!==-1;--f)d[f]=numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(p)),o[f]),d[f][s-1]=d[f][0];else for(f=d.length-1;f!==-1;--f)d[f]=numeric.cLUsolve(numeric.cLU(p),o[f]);return typeof n[0]=="number"?d=d[0]:d=numeric.transpose(d),new numeric.Spline(t,n,n,d,d)},numeric.fftpow2=function fftpow2(e,t){var n=e.length;if(n===1)return;var r=Math.cos,i=Math.sin,s,o,u=Array(n/2),a=Array(n/2),f=Array(n/2),l=Array(n/2);o=n/2;for(s=n-1;s!==-1;--s)--o,f[o]=e[s],l[o]=t[s],--s,u[o]=e[s],a[o]=t[s];fftpow2(u,a),fftpow2(f,l),o=n/2;var c,h=-6.283185307179586/n,p,d;for(s=n-1;s!==-1;--s)--o,o===-1&&(o=n/2-1),c=h*s,p=r(c),d=i(c),e[s]=u[o]+p*f[o]-d*l[o],t[s]=a[o]+p*l[o]+d*f[o]},numeric._ifftpow2=function _ifftpow2(e,t){var n=e.length;if(n===1)return;var r=Math.cos,i=Math.sin,s,o,u=Array(n/2),a=Array(n/2),f=Array(n/2),l=Array(n/2);o=n/2;for(s=n-1;s!==-1;--s)--o,f[o]=e[s],l[o]=t[s],--s,u[o]=e[s],a[o]=t[s];_ifftpow2(u,a),_ifftpow2(f,l),o=n/2;var c,h=6.283185307179586/n,p,d;for(s=n-1;s!==-1;--s)--o,o===-1&&(o=n/2-1),c=h*s,p=r(c),d=i(c),e[s]=u[o]+p*f[o]-d*l[o],t[s]=a[o]+p*l[o]+d*f[o]},numeric.ifftpow2=function(t,n){numeric._ifftpow2(t,n),numeric.diveq(t,t.length),numeric.diveq(n,n.length)},numeric.convpow2=function(t,n,r,i){numeric.fftpow2(t,n),numeric.fftpow2(r,i);var s,o=t.length,u,a,f,l;for(s=o-1;s!==-1;--s)u=t[s],f=n[s],a=r[s],l=i[s],t[s]=u*a-f*l,n[s]=u*l+f*a;numeric.ifftpow2(t,n)},numeric.T.prototype.fft=function(){var t=this.x,n=this.y,r=t.length,i=Math.log,s=i(2),o=Math.ceil(i(2*r-1)/s),u=Math.pow(2,o),a=numeric.rep([u],0),f=numeric.rep([u],0),l=Math.cos,c=Math.sin,h,p=-3.141592653589793/r,d,v=numeric.rep([u],0),m=numeric.rep([u],0),g=Math.floor(r/2);for(h=0;h<r;h++)v[h]=t[h];if(typeof n!="undefined")for(h=0;h<r;h++)m[h]=n[h];a[0]=1;for(h=1;h<=u/2;h++)d=p*h*h,a[h]=l(d),f[h]=c(d),a[u-h]=l(d),f[u-h]=c(d);var y=new numeric.T(v,m),b=new numeric.T(a,f);return y=y.mul(b),numeric.convpow2(y.x,y.y,numeric.clone(b.x),numeric.neg(b.y)),y=y.mul(b),y.x.length=r,y.y.length=r,y},numeric.T.prototype.ifft=function(){var t=this.x,n=this.y,r=t.length,i=Math.log,s=i(2),o=Math.ceil(i(2*r-1)/s),u=Math.pow(2,o),a=numeric.rep([u],0),f=numeric.rep([u],0),l=Math.cos,c=Math.sin,h,p=3.141592653589793/r,d,v=numeric.rep([u],0),m=numeric.rep([u],0),g=Math.floor(r/2);for(h=0;h<r;h++)v[h]=t[h];if(typeof n!="undefined")for(h=0;h<r;h++)m[h]=n[h];a[0]=1;for(h=1;h<=u/2;h++)d=p*h*h,a[h]=l(d),f[h]=c(d),a[u-h]=l(d),f[u-h]=c(d);var y=new numeric.T(v,m),b=new numeric.T(a,f);return y=y.mul(b),numeric.convpow2(y.x,y.y,numeric.clone(b.x),numeric.neg(b.y)),y=y.mul(b),y.x.length=r,y.y.length=r,y.div(r)},numeric.gradient=function(t,n){var r=n.length,i=t(n);if(isNaN(i))throw new Error("gradient: f(x) is a NaN!");var s=Math.max,o,u=numeric.clone(n),a,f,l=Array(r),c=numeric.div,h=numeric.sub,p,d,s=Math.max,v=.001,m=Math.abs,g=Math.min,y,b,w,E=0,S,x,T;for(o=0;o<r;o++){var N=s(1e-6*i,1e-8);for(;;){++E;if(E>20)throw new Error("Numerical gradient fails");u[o]=n[o]+N,a=t(u),u[o]=n[o]-N,f=t(u),u[o]=n[o];if(isNaN(a)||isNaN(f)){N/=16;continue}l[o]=(a-f)/(2*N),y=n[o]-N,b=n[o],w=n[o]+N,S=(a-i)/N,x=(i-f)/N,T=s(m(l[o]),m(i),m(a),m(f),m(y),m(b),m(w),1e-8),p=g(s(m(S-l[o]),m(x-l[o]),m(S-x))/T,N/T);if(!(p>v))break;N/=16}}return l},numeric.uncmin=function(t,n,r,i,s,o,u){var a=numeric.gradient;typeof u=="undefined"&&(u={}),typeof r=="undefined"&&(r=1e-8),typeof i=="undefined"&&(i=function(e){return a(t,e)}),typeof s=="undefined"&&(s=1e3),n=numeric.clone(n);var f=n.length,l=t(n),c,h;if(isNaN(l))throw new Error("uncmin: f(x0) is a NaN!");var p=Math.max,d=numeric.norm2;r=p(r,numeric.epsilon);var v,m,g,y=u.Hinv||numeric.identity(f),b=numeric.dot,w=numeric.inv,E=numeric.sub,S=numeric.add,x=numeric.tensor,T=numeric.div,N=numeric.mul,C=numeric.all,k=numeric.isFinite,L=numeric.neg,A=0,O,M,_,D,P,H,B,j,F,I,q,R,U="";m=i(n);while(A<s){if(typeof o=="function"&&o(A,n,l,m,y)){U="Callback returned true";break}if(!C(k(m))){U="Gradient has Infinity or NaN";break}v=L(b(y,m));if(!C(k(v))){U="Search direction has Infinity or NaN";break}I=d(v);if(I<r){U="Newton step smaller than tol";break}F=1,h=b(m,v),_=n;while(A<s){if(F*I<r)break;M=N(v,F),_=S(n,M),c=t(_);if(c-l>=.1*F*h||isNaN(c)){F*=.5,++A;continue}break}if(F*I<r){U="Line search step size smaller than tol";break}if(A===s){U="maxit reached during line search";break}g=i(_),D=E(g,m),B=b(D,M),P=b(y,D),y=E(S(y,N((B+b(D,P))/(B*B),x(M,M))),T(S(x(P,M),x(M,P)),B)),n=_,l=c,m=g,++A}return{solution:n,f:l,gradient:m,invHessian:y,iterations:A,message:U}},numeric.Dopri=function(t,n,r,i,s,o,u){this.x=t,this.y=n,this.f=r,this.ymid=i,this.iterations=s,this.events=u,this.message=o},numeric.Dopri.prototype._at=function(t,n){function r(e){return e*e}var i=this,s=i.x,o=i.y,u=i.f,a=i.ymid,f=s.length,l,c,h,p,d,v,t,m=Math.floor,g,y=.5,b=numeric.add,w=numeric.mul,E=numeric.sub,S,x,T;return l=s[n],c=s[n+1],p=o[n],d=o[n+1],g=c-l,h=l+y*g,v=a[n],S=E(u[n],w(p,1/(l-h)+2/(l-c))),x=E(u[n+1],w(d,1/(c-h)+2/(c-l))),T=[r(t-c)*(t-h)/r(l-c)/(l-h),r(t-l)*r(t-c)/r(l-h)/r(c-h),r(t-l)*(t-h)/r(c-l)/(c-h),(t-l)*r(t-c)*(t-h)/r(l-c)/(l-h),(t-c)*r(t-l)*(t-h)/r(l-c)/(c-h)],b(b(b(b(w(p,T[0]),w(v,T[1])),w(d,T[2])),w(S,T[3])),w(x,T[4]))},numeric.Dopri.prototype.at=function(t){var n,r,i,s=Math.floor;if(typeof t!="number"){var o=t.length,u=Array(o);for(n=o-1;n!==-1;--n)u[n]=this.at(t[n]);return u}var a=this.x;n=0,r=a.length-1;while(r-n>1)i=s(.5*(n+r)),a[i]<=t?n=i:r=i;return this._at(t,n)},numeric.dopri=function(t,n,r,i,s,o,u){typeof s=="undefined"&&(s=1e-6),typeof o=="undefined"&&(o=1e3);var a=[t],f=[r],l=[i(t,r)],c,h,p,d,v,m,g=[],y=.2,b=[.075,.225],w=[44/45,-56/15,32/9],E=[19372/6561,-25360/2187,64448/6561,-212/729],S=[9017/3168,-355/33,46732/5247,49/176,-5103/18656],x=[35/384,0,500/1113,125/192,-2187/6784,11/84],T=[.10013431883002395,0,.3918321794184259,-0.02982460176594817,.05893268337240795,-0.04497888809104361,.023904308236133973],N=[.2,.3,.8,8/9,1,1],C=[-71/57600,0,71/16695,-71/1920,17253/339200,-22/525,.025],k=0,L,A,O=(n-t)/10,M=0,_=numeric.add,D=numeric.mul,P,H,B=Math.max,j=Math.min,F=Math.abs,I=numeric.norminf,q=Math.pow,R=numeric.any,U=numeric.lt,z=numeric.and,W=numeric.sub,X,V,$,J=new numeric.Dopri(a,f,l,g,-1,"");typeof u=="function"&&(X=u(t,r));while(t<n&&M<o){++M,t+O>n&&(O=n-t),c=i(t+N[0]*O,_(r,D(y*O,l[k]))),h=i(t+N[1]*O,_(_(r,D(b[0]*O,l[k])),D(b[1]*O,c))),p=i(t+N[2]*O,_(_(_(r,D(w[0]*O,l[k])),D(w[1]*O,c)),D(w[2]*O,h))),d=i(t+N[3]*O,_(_(_(_(r,D(E[0]*O,l[k])),D(E[1]*O,c)),D(E[2]*O,h)),D(E[3]*O,p))),v=i(t+N[4]*O,_(_(_(_(_(r,D(S[0]*O,l[k])),D(S[1]*O,c)),D(S[2]*O,h)),D(S[3]*O,p)),D(S[4]*O,d))),P=_(_(_(_(_(r,D(l[k],O*x[0])),D(h,O*x[2])),D(p,O*x[3])),D(d,O*x[4])),D(v,O*x[5])),m=i(t+O,P),L=_(_(_(_(_(D(l[k],O*C[0]),D(h,O*C[2])),D(p,O*C[3])),D(d,O*C[4])),D(v,O*C[5])),D(m,O*C[6])),typeof L=="number"?H=F(L):H=I(L);if(H>s){O=.2*O*q(s/H,.25);if(t+O===t){J.msg="Step size became too small";break}continue}g[k]=_(_(_(_(_(_(r,D(l[k],O*T[0])),D(h,O*T[2])),D(p,O*T[3])),D(d,O*T[4])),D(v,O*T[5])),D(m,O*T[6])),++k,a[k]=t+O,f[k]=P,l[k]=m;if(typeof u=="function"){var K,Q=t,G=t+.5*O,Y;V=u(G,g[k-1]),$=z(U(X,0),U(0,V)),R($)||(Q=G,G=t+O,X=V,V=u(G,P),$=z(U(X,0),U(0,V)));if(R($)){var Z,et,tt,nt,rt=0,it=1,st=1;for(;;){if(typeof X=="number")Y=(st*V*Q-it*X*G)/(st*V-it*X);else{Y=G;for(A=X.length-1;A!==-1;--A)X[A]<0&&V[A]>0&&(Y=j(Y,(st*V[A]*Q-it*X[A]*G)/(st*V[A]-it*X[A])))}if(Y<=Q||Y>=G)break;K=J._at(Y,k-1),nt=u(Y,K),tt=z(U(X,0),U(0,nt)),R(tt)?(G=Y,V=nt,$=tt,st=1,rt===-1?it*=.5:it=1,rt=-1):(Q=Y,X=nt,it=1,rt===1?st*=.5:st=1,rt=1)}return P=J._at(.5*(t+Y),k-1),J.f[k]=i(Y,K),J.x[k]=Y,J.y[k]=K,J.ymid[k-1]=P,J.events=$,J.iterations=M,J}}t+=O,r=P,X=V,O=j(.8*O*q(s/H,.25),4*O)}return J.iterations=M,J},numeric.LU=function(e,t){t=t||!1;var n=Math.abs,r,i,s,o,u,a,f,l,c,h=e.length,p=h-1,d=new Array(h);t||(e=numeric.clone(e));for(s=0;s<h;++s){f=s,a=e[s],c=n(a[s]);for(i=s+1;i<h;++i)o=n(e[i][s]),c<o&&(c=o,f=i);d[s]=f,f!=s&&(e[s]=e[f],e[f]=a,a=e[s]),u=a[s];for(r=s+1;r<h;++r)e[r][s]/=u;for(r=s+1;r<h;++r){l=e[r];for(i=s+1;i<p;++i)l[i]-=l[s]*a[i],++i,l[i]-=l[s]*a[i];i===p&&(l[i]-=l[s]*a[i])}}return{LU:e,P:d}},numeric.LUsolve=function(t,n){var r,i,s=t.LU,o=s.length,u=numeric.clone(n),a=t.P,f,l,c,h;for(r=o-1;r!==-1;--r)u[r]=n[r];for(r=0;r<o;++r){f=a[r],a[r]!==r&&(h=u[r],u[r]=u[f],u[f]=h),l=s[r];for(i=0;i<r;++i)u[r]-=u[i]*l[i]}for(r=o-1;r>=0;--r){l=s[r];for(i=r+1;i<o;++i)u[r]-=u[i]*l[i];u[r]/=l[r]}return u},numeric.solve=function(t,n,r){return numeric.LUsolve(numeric.LU(t,r),n)},numeric.echelonize=function(t){var n=numeric.dim(t),r=n[0],i=n[1],s=numeric.identity(r),o=Array(r),u,a,f,l,c,h,p,d,v=Math.abs,m=numeric.diveq;t=numeric.clone(t);for(u=0;u<r;++u){f=0,c=t[u],h=s[u];for(a=1;a<i;++a)v(c[f])<v(c[a])&&(f=a);o[u]=f,m(h,c[f]),m(c,c[f]);for(a=0;a<r;++a)if(a!==u){p=t[a],d=p[f];for(l=i-1;l!==-1;--l)p[l]-=c[l]*d;p=s[a];for(l=r-1;l!==-1;--l)p[l]-=h[l]*d}}return{I:s,A:t,P:o}},numeric.__solveLP=function(t,n,r,i,s,o,u){var a=numeric.sum,f=numeric.log,l=numeric.mul,c=numeric.sub,h=numeric.dot,p=numeric.div,d=numeric.add,v=t.length,m=r.length,g,y=!1,b,w=0,E=1,S,x,T=numeric.transpose(n),N=numeric.svd,C=numeric.transpose,k=numeric.leq,L=Math.sqrt,A=Math.abs,O=numeric.muleq,M=numeric.norminf,_=numeric.any,D=Math.min,P=numeric.all,H=numeric.gt,B=Array(v),j=Array(m),F=numeric.rep([m],1),I,q=numeric.solve,R=c(r,h(n,o)),U,z=h(t,t),W;for(U=w;U<s;++U){var X,V,$;for(X=m-1;X!==-1;--X)j[X]=p(n[X],R[X]);var J=C(j);for(X=v-1;X!==-1;--X)B[X]=a(J[X]);E=.25*A(z/h(t,B));var K=100*L(z/h(B,B));if(!isFinite(E)||E>K)E=K;W=d(t,l(E,B)),I=h(J,j);for(X=v-1;X!==-1;--X)I[X][X]+=1;$=q(I,p(W,E),!0);var Q=p(R,h(n,$)),G=1;for(X=m-1;X!==-1;--X)Q[X]<0&&(G=D(G,-0.999*Q[X]));g=c(o,l($,G)),R=c(r,h(n,g));if(!P(H(R,0)))return{solution:o,message:"",iterations:U};o=g;if(E<i)return{solution:g,message:"",iterations:U};if(u){var Y=h(t,W),Z=h(n,W);y=!0;for(X=m-1;X!==-1;--X)if(Y*Z[X]<0){y=!1;break}}else o[v-1]>=0?y=!1:y=!0;if(y)return{solution:g,message:"Unbounded",iterations:U}}return{solution:o,message:"maximum iteration count exceeded",iterations:U}},numeric._solveLP=function(t,n,r,i,s){var o=t.length,u=r.length,a,f=numeric.sum,l=numeric.log,c=numeric.mul,h=numeric.sub,p=numeric.dot,d=numeric.div,v=numeric.add,m=numeric.rep([o],0).concat([1]),g=numeric.rep([u,1],-1),y=numeric.blockMatrix([[n,g]]),b=r,a=numeric.rep([o],0).concat(Math.max(0,numeric.sup(numeric.neg(r)))+1),w=numeric.__solveLP(m,y,b,i,s,a,!1),E=numeric.clone(w.solution);E.length=o;var S=numeric.inf(h(r,p(n,E)));if(S<0)return{solution:NaN,message:"Infeasible",iterations:w.iterations};var x=numeric.__solveLP(t,n,r,i,s-w.iterations,E,!0);return x.iterations+=w.iterations,x},numeric.solveLP=function(t,n,r,i,s,o,u){typeof u=="undefined"&&(u=1e3),typeof o=="undefined"&&(o=numeric.epsilon);if(typeof i=="undefined")return numeric._solveLP(t,n,r,o,u);var a=i.length,f=i[0].length,l=n.length,c=numeric.echelonize(i),h=numeric.rep([f],0),p=c.P,d=[],v;for(v=p.length-1;v!==-1;--v)h[p[v]]=1;for(v=f-1;v!==-1;--v)h[v]===0&&d.push(v);var m=numeric.getRange,g=numeric.linspace(0,a-1),y=numeric.linspace(0,l-1),b=m(i,g,d),w=m(n,y,p),E=m(n,y,d),S=numeric.dot,x=numeric.sub,T=S(w,c.I),N=x(E,S(T,b)),C=x(r,S(T,s)),k=Array(p.length),L=Array(d.length);for(v=p.length-1;v!==-1;--v)k[v]=t[p[v]];for(v=d.length-1;v!==-1;--v)L[v]=t[d[v]];var A=x(L,S(k,S(c.I,b))),O=numeric._solveLP(A,N,C,o,u),M=O.solution;if(M!==M)return O;var _=S(c.I,x(s,S(b,M))),D=Array(t.length);for(v=p.length-1;v!==-1;--v)D[p[v]]=_[v];for(v=d.length-1;v!==-1;--v)D[d[v]]=M[v];return{solution:D,message:O.message,iterations:O.iterations}},numeric.MPStoLP=function(t){function y(e){throw new Error("MPStoLP: "+e+"\nLine "+s+": "+t[s]+"\nCurrent state: "+r[n]+"\n")}t instanceof String&&t.split("\n");var n=0,r=["Initial state","NAME","ROWS","COLUMNS","RHS","BOUNDS","ENDATA"],i=t.length,s,o,u,a=0,f={},l=[],c=0,h={},p=0,d,v=[],m=[],g=[];for(s=0;s<i;++s){u=t[s];var b=u.match(/\S*/g),w=[];for(o=0;o<b.length;++o)b[o]!==""&&w.push(b[o]);if(w.length===0)continue;for(o=0;o<r.length;++o)if(u.substr(0,r[o].length)===r[o])break;if(o<r.length){n=o,o===1&&(d=w[1]);if(o===6)return{name:d,c:v,A:numeric.transpose(m),b:g,rows:f,vars:h};continue}switch(n){case 0:case 1:y("Unexpected line");case 2:switch(w[0]){case"N":a===0?a=w[1]:y("Two or more N rows");break;case"L":f[w[1]]=c,l[c]=1,g[c]=0,++c;break;case"G":f[w[1]]=c,l[c]=-1,g[c]=0,++c;break;case"E":f[w[1]]=c,l[c]=0,g[c]=0,++c;break;default:y("Parse error "+numeric.prettyPrint(w))}break;case 3:h.hasOwnProperty(w[0])||(h[w[0]]=p,v[p]=0,m[p]=numeric.rep([c],0),++p);var E=h[w[0]];for(o=1;o<w.length;o+=2){if(w[o]===a){v[E]=parseFloat(w[o+1]);continue}var S=f[w[o]];m[E][S]=(l[S]<0?-1:1)*parseFloat(w[o+1])}break;case 4:for(o=1;o<w.length;o+=2)g[f[w[o]]]=(l[f[w[o]]]<0?-1:1)*parseFloat(w[o+1]);break;case 5:break;case 6:y("Internal error")}}y("Reached end of file without ENDATA")},numeric.seedrandom={pow:Math.pow,random:Math.random},function(e,t,n,r,i,s,o){function u(e){var t,r,i=this,s=e.length,o=0,u=i.i=i.j=i.m=0;i.S=[],i.c=[],s||(e=[s++]);while(o<n)i.S[o]=o++;for(o=0;o<n;o++)t=i.S[o],u=l(u+t+e[o%s]),r=i.S[u],i.S[o]=r,i.S[u]=t;i.g=function(t){var r=i.S,s=l(i.i+1),o=r[s],u=l(i.j+o),a=r[u];r[s]=a,r[u]=o;var f=r[l(o+a)];while(--t)s=l(s+1),o=r[s],u=l(u+o),a=r[u],r[s]=a,r[u]=o,f=f*n+r[l(o+a)];return i.i=s,i.j=u,f},i.g(n)}function a(e,t,n,r,i){n=[],i=typeof e;if(t&&i=="object")for(r in e)if(r.indexOf("S")<5)try{n.push(a(e[r],t-1))}catch(s){}return n.length?n:e+(i!="string"?"\0":"")}function f(e,t,n,r){e+="",n=0;for(r=0;r<e.length;r++)t[l(r)]=l((n^=t[l(r)]*19)+e.charCodeAt(r));e="";for(r in t)e+=String.fromCharCode(t[r]);return e}function l(e){return e&n-1}t.seedrandom=function(c,h){var p=[],d;return c=f(a(h?[c,e]:arguments.length?c:[(new Date).getTime(),e,window],3),p),d=new u(p),f(d.S,e),t.random=function(){var t=d.g(r),u=o,a=0;while(t<i)t=(t+a)*n,u*=n,a=d.g(1);while(t>=s)t/=2,u/=2,a>>>=1;return(t+a)/u},c},o=t.pow(n,r),i=t.pow(2,i),s=i*2,f(t.random(),e)}([],numeric.seedrandom,256,6,52),function(e){function t(e){if(typeof e!="object")return e;var n=[],r,i=e.length;for(r=0;r<i;r++)n[r+1]=t(e[r]);return n}function n(e){if(typeof e!="object")return e;var t=[],r,i=e.length;for(r=1;r<i;r++)t[r-1]=n(e[r]);return t}function r(e,t,n){var r,i,s,o,u;for(s=1;s<=n;s+=1){e[s][s]=1/e[s][s],u=-e[s][s];for(r=1;r<s;r+=1)e[r][s]=u*e[r][s];o=s+1;if(n<o)break;for(i=o;i<=n;i+=1){u=e[s][i],e[s][i]=0;for(r=1;r<=s;r+=1)e[r][i]=e[r][i]+u*e[r][s]}}}function i(e,t,n,r){var i,s,o,u;for(s=1;s<=n;s+=1){u=0;for(i=1;i<s;i+=1)u+=e[i][s]*r[i];r[s]=(r[s]-u)/e[s][s]}for(o=1;o<=n;o+=1){s=n+1-o,r[s]=r[s]/e[s][s],u=-r[s];for(i=1;i<s;i+=1)r[i]=r[i]+u*e[i][s]}}function s(e,t,n,r){var i,s,o,u,a,f;for(s=1;s<=n;s+=1){r[1]=s,f=0,o=s-1;if(o<1){f=e[s][s]-f;if(f<=0)break;e[s][s]=Math.sqrt(f)}else{for(u=1;u<=o;u+=1){a=e[u][s];for(i=1;i<u;i+=1)a-=e[i][s]*e[i][u];a/=e[u][u],e[u][s]=a,f+=a*a}f=e[s][s]-f;if(f<=0)break;e[s][s]=Math.sqrt(f)}r[1]=0}}function o(e,t,n,o,u,a,f,l,c,h,p,d,v,m,g,y){function V(){m[1]=m[1]+1,E=L;for(b=1;b<=h;b+=1){E+=1,P=-l[b];for(w=1;w<=o;w+=1)P+=f[w][b]*u[w];Math.abs(P)<U&&(P=0);if(b>p)g[E]=P;else{g[E]=-Math.abs(P);if(P>0){for(w=1;w<=o;w+=1)f[w][b]=-f[w][b];l[b]=-l[b]}}}for(b=1;b<=v;b+=1)g[L+d[b]]=0;O=0,D=0;for(b=1;b<=h;b+=1)g[L+b]<D*g[_+b]&&(O=b,D=g[L+b]/g[_+b]);return O===0?999:0}function $(){for(b=1;b<=o;b+=1){P=0;for(w=1;w<=o;w+=1)P+=e[w][b]*f[w][O];g[b]=P}S=N;for(b=1;b<=o;b+=1)g[S+b]=0;for(w=v+1;w<=o;w+=1)for(b=1;b<=o;b+=1)g[S+b]=g[S+b]+e[b][w]*g[w];q=!0;for(b=v;b>=1;b-=1){P=g[b],E=k+b*(b+3)/2,S=E-b;for(w=b+1;w<=v;w+=1)P-=g[E]*g[C+w],E+=w;P/=g[S],g[C+b]=P;if(d[b]<p)break;if(P<0)break;q=!1,T=b}if(!q){H=g[A+T]/g[C+T];for(b=1;b<=v;b+=1){if(d[b]<p)break;if(g[C+b]<0)break;D=g[A+b]/g[C+b],D<
H&&(H=D,T=b)}}P=0;for(b=N+1;b<=N+o;b+=1)P+=g[b]*g[b];if(Math.abs(P)<=U){if(q)return y[1]=1,999;for(b=1;b<=v;b+=1)g[A+b]=g[A+b]-H*g[C+b];return g[A+v+1]=g[A+v+1]+H,700}P=0;for(b=1;b<=o;b+=1)P+=g[N+b]*f[b][O];B=-g[L+O]/P,R=!0,q||H<B&&(B=H,R=!1);for(b=1;b<=o;b+=1)u[b]=u[b]+B*g[N+b],Math.abs(u[b])<U&&(u[b]=0);a[1]=a[1]+B*P*(B/2+g[A+v+1]);for(b=1;b<=v;b+=1)g[A+b]=g[A+b]-B*g[C+b];g[A+v+1]=g[A+v+1]+B;if(!R){P=-l[O];for(w=1;w<=o;w+=1)P+=u[w]*f[w][O];if(O>p)g[L+O]=P;else{g[L+O]=-Math.abs(P);if(P>0){for(w=1;w<=o;w+=1)f[w][O]=-f[w][O];l[O]=-l[O]}}return 700}v+=1,d[v]=O,E=k+(v-1)*v/2+1;for(b=1;b<=v-1;b+=1)g[E]=g[b],E+=1;if(v===o)g[E]=g[o];else{for(b=o;b>=v+1;b-=1){if(g[b]===0)break;j=Math.max(Math.abs(g[b-1]),Math.abs(g[b])),F=Math.min(Math.abs(g[b-1]),Math.abs(g[b])),g[b-1]>=0?D=Math.abs(j*Math.sqrt(1+F*F/(j*j))):D=-Math.abs(j*Math.sqrt(1+F*F/(j*j))),j=g[b-1]/D,F=g[b]/D;if(j===1)break;if(j===0){g[b-1]=F*D;for(w=1;w<=o;w+=1)D=e[w][b-1],e[w][b-1]=e[w][b],e[w][b]=D}else{g[b-1]=D,I=F/(1+j);for(w=1;w<=o;w+=1)D=j*e[w][b-1]+F*e[w][b],e[w][b]=I*(e[w][b-1]+D)-e[w][b],e[w][b-1]=D}}g[E]=g[v]}return 0}function J(){E=k+T*(T+1)/2+1,S=E+T;if(g[S]===0)return 798;j=Math.max(Math.abs(g[S-1]),Math.abs(g[S])),F=Math.min(Math.abs(g[S-1]),Math.abs(g[S])),g[S-1]>=0?D=Math.abs(j*Math.sqrt(1+F*F/(j*j))):D=-Math.abs(j*Math.sqrt(1+F*F/(j*j))),j=g[S-1]/D,F=g[S]/D;if(j===1)return 798;if(j===0){for(b=T+1;b<=v;b+=1)D=g[S-1],g[S-1]=g[S],g[S]=D,S+=b;for(b=1;b<=o;b+=1)D=e[b][T],e[b][T]=e[b][T+1],e[b][T+1]=D}else{I=F/(1+j);for(b=T+1;b<=v;b+=1)D=j*g[S-1]+F*g[S],g[S]=I*(g[S-1]+D)-g[S],g[S-1]=D,S+=b;for(b=1;b<=o;b+=1)D=j*e[b][T]+F*e[b][T+1],e[b][T+1]=I*(e[b][T]+D)-e[b][T+1],e[b][T]=D}return 0}function K(){S=E-T;for(b=1;b<=T;b+=1)g[S]=g[E],E+=1,S+=1;return g[A+T]=g[A+T+1],d[T]=d[T+1],T+=1,T<v?797:0}function Q(){return g[A+v]=g[A+v+1],g[A+v+1]=0,d[v]=0,v-=1,m[2]=m[2]+1,0}var b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X;M=Math.min(o,h),E=2*o+M*(M+5)/2+2*h+1,U=1e-60;do U+=U,z=1+.1*U,W=1+.2*U;while(z<=1||W<=1);for(b=1;b<=o;b+=1)g[b]=t[b];for(b=o+1;b<=E;b+=1)g[b]=0;for(b=1;b<=h;b+=1)d[b]=0;x=[];if(y[1]===0){s(e,n,o,x);if(x[1]!==0){y[1]=2;return}i(e,n,o,t),r(e,n,o)}else{for(w=1;w<=o;w+=1){u[w]=0;for(b=1;b<=w;b+=1)u[w]=u[w]+e[b][w]*t[b]}for(w=1;w<=o;w+=1){t[w]=0;for(b=w;b<=o;b+=1)t[w]=t[w]+e[w][b]*u[b]}}a[1]=0;for(w=1;w<=o;w+=1){u[w]=t[w],a[1]=a[1]+g[w]*u[w],g[w]=0;for(b=w+1;b<=o;b+=1)e[b][w]=0}a[1]=-a[1]/2,y[1]=0,N=o,C=N+o,A=C+M,k=A+M+1,L=k+M*(M+1)/2,_=L+h;for(b=1;b<=h;b+=1){P=0;for(w=1;w<=o;w+=1)P+=f[w][b]*f[w][b];g[_+b]=Math.sqrt(P)}v=0,m[1]=0,m[2]=0,X=0;for(;;){X=V();if(X===999)return;for(;;){X=$();if(X===0)break;if(X===999)return;if(X===700)if(T===v)Q();else{for(;;){J(),X=K();if(X!==797)break}Q()}}}}function u(e,r,i,s,u,a){e=t(e),r=t(r),i=t(i);var f,l,c,h,p,d=[],v=[],m=[],g=[],y=[],b;u=u||0,a=a?t(a):[undefined,0],s=s?t(s):[],l=e.length-1,c=i[1].length-1;if(!s)for(f=1;f<=c;f+=1)s[f]=0;for(f=1;f<=c;f+=1)v[f]=0;h=0,p=Math.min(l,c);for(f=1;f<=l;f+=1)m[f]=0;d[1]=0;for(f=1;f<=2*l+p*(p+5)/2+2*c+1;f+=1)g[f]=0;for(f=1;f<=2;f+=1)y[f]=0;return o(e,r,l,l,m,d,i,s,l,c,u,v,h,y,g,a),b="",a[1]===1&&(b="constraints are inconsistent, no solution!"),a[1]===2&&(b="matrix D in quadratic function is not positive definite!"),{solution:n(m),value:n(d),unconstrained_solution:n(r),iterations:n(y),iact:n(v),message:b}}e.solveQP=u}(numeric),numeric.svd=function(t){function g(e,t){return e=Math.abs(e),t=Math.abs(t),e>t?e*Math.sqrt(1+t*t/e/e):t==0?e:t*Math.sqrt(1+e*e/t/t)}var n,r=numeric.epsilon,i=1e-64/r,s=50,o=0,u=0,a=0,f=0,l=0,c=numeric.clone(t),h=c.length,p=c[0].length;if(h<p)throw"Need more rows than columns";var d=new Array(p),v=new Array(p);for(u=0;u<p;u++)d[u]=v[u]=0;var m=numeric.rep([p,p],0),y=0,b=0,w=0,E=0,S=0,x=0,T=0;for(u=0;u<p;u++){d[u]=b,T=0,l=u+1;for(a=u;a<h;a++)T+=c[a][u]*c[a][u];if(T<=i)b=0;else{y=c[u][u],b=Math.sqrt(T),y>=0&&(b=-b),w=y*b-T,c[u][u]=y-b;for(a=l;a<p;a++){T=0;for(f=u;f<h;f++)T+=c[f][u]*c[f][a];y=T/w;for(f=u;f<h;f++)c[f][a]+=y*c[f][u]}}v[u]=b,T=0;for(a=l;a<p;a++)T+=c[u][a]*c[u][a];if(T<=i)b=0;else{y=c[u][u+1],b=Math.sqrt(T),y>=0&&(b=-b),w=y*b-T,c[u][u+1]=y-b;for(a=l;a<p;a++)d[a]=c[u][a]/w;for(a=l;a<h;a++){T=0;for(f=l;f<p;f++)T+=c[a][f]*c[u][f];for(f=l;f<p;f++)c[a][f]+=T*d[f]}}S=Math.abs(v[u])+Math.abs(d[u]),S>E&&(E=S)}for(u=p-1;u!=-1;u+=-1){if(b!=0){w=b*c[u][u+1];for(a=l;a<p;a++)m[a][u]=c[u][a]/w;for(a=l;a<p;a++){T=0;for(f=l;f<p;f++)T+=c[u][f]*m[f][a];for(f=l;f<p;f++)m[f][a]+=T*m[f][u]}}for(a=l;a<p;a++)m[u][a]=0,m[a][u]=0;m[u][u]=1,b=d[u],l=u}for(u=p-1;u!=-1;u+=-1){l=u+1,b=v[u];for(a=l;a<p;a++)c[u][a]=0;if(b!=0){w=c[u][u]*b;for(a=l;a<p;a++){T=0;for(f=l;f<h;f++)T+=c[f][u]*c[f][a];y=T/w;for(f=u;f<h;f++)c[f][a]+=y*c[f][u]}for(a=u;a<h;a++)c[a][u]=c[a][u]/b}else for(a=u;a<h;a++)c[a][u]=0;c[u][u]+=1}r*=E;for(f=p-1;f!=-1;f+=-1)for(var N=0;N<s;N++){var C=!1;for(l=f;l!=-1;l+=-1){if(Math.abs(d[l])<=r){C=!0;break}if(Math.abs(v[l-1])<=r)break}if(!C){o=0,T=1;var k=l-1;for(u=l;u<f+1;u++){y=T*d[u],d[u]=o*d[u];if(Math.abs(y)<=r)break;b=v[u],w=g(y,b),v[u]=w,o=b/w,T=-y/w;for(a=0;a<h;a++)S=c[a][k],x=c[a][u],c[a][k]=S*o+x*T,c[a][u]=-S*T+x*o}}x=v[f];if(l==f){if(x<0){v[f]=-x;for(a=0;a<p;a++)m[a][f]=-m[a][f]}break}if(N>=s-1)throw"Error: no convergence.";E=v[l],S=v[f-1],b=d[f-1],w=d[f],y=((S-x)*(S+x)+(b-w)*(b+w))/(2*w*S),b=g(y,1),y<0?y=((E-x)*(E+x)+w*(S/(y-b)-w))/E:y=((E-x)*(E+x)+w*(S/(y+b)-w))/E,o=1,T=1;for(u=l+1;u<f+1;u++){b=d[u],S=v[u],w=T*b,b=o*b,x=g(y,w),d[u-1]=x,o=y/x,T=w/x,y=E*o+b*T,b=-E*T+b*o,w=S*T,S*=o;for(a=0;a<p;a++)E=m[a][u-1],x=m[a][u],m[a][u-1]=E*o+x*T,m[a][u]=-E*T+x*o;x=g(y,w),v[u-1]=x,o=y/x,T=w/x,y=o*b+T*S,E=-T*b+o*S;for(a=0;a<h;a++)S=c[a][u-1],x=c[a][u],c[a][u-1]=S*o+x*T,c[a][u]=-S*T+x*o}d[l]=0,d[f]=y,v[f]=E}for(u=0;u<v.length;u++)v[u]<r&&(v[u]=0);for(u=0;u<p;u++)for(a=u-1;a>=0;a--)if(v[a]<v[u]){o=v[a],v[a]=v[u],v[u]=o;for(f=0;f<c.length;f++)n=c[f][u],c[f][u]=c[f][a],c[f][a]=n;for(f=0;f<m.length;f++)n=m[f][u],m[f][u]=m[f][a],m[f][a]=n;u=a}return{U:c,S:v,V:m}};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var setImmediate;

    function addFromSetImmediateArguments(args) {
        tasksByHandle[nextHandle] = partiallyApplied.apply(undefined, args);
        return nextHandle++;
    }

    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    function partiallyApplied(handler) {
        var args = [].slice.call(arguments, 1);
        return function() {
            if (typeof handler === "function") {
                handler.apply(undefined, args);
            } else {
                (new Function("" + handler))();
            }
        };
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    task();
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function installNextTickImplementation() {
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            process.nextTick(partiallyApplied(runIfPresent, handle));
            return handle;
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            global.postMessage(messagePrefix + handle, "*");
            return handle;
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
    }

    function installSetTimeoutImplementation() {
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
            return handle;
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(new Function("return this")()));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ })
/******/ ]);
//# sourceMappingURL=vendor.js.map