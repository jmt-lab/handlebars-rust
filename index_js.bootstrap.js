"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcreate_wasm_app"] = self["webpackChunkcreate_wasm_app"] || []).push([["index_js"],{

/***/ "../pkg/playground.js":
/*!****************************!*\
  !*** ../pkg/playground.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__wbg_set_wasm\": () => (/* reexport safe */ _playground_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   \"__wbg_stringify_4039297315a25b00\": () => (/* reexport safe */ _playground_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_stringify_4039297315a25b00),\n/* harmony export */   \"__wbindgen_is_undefined\": () => (/* reexport safe */ _playground_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_is_undefined),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* reexport safe */ _playground_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_string_get\": () => (/* reexport safe */ _playground_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_string_get),\n/* harmony export */   \"__wbindgen_string_new\": () => (/* reexport safe */ _playground_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_string_new),\n/* harmony export */   \"__wbindgen_throw\": () => (/* reexport safe */ _playground_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw),\n/* harmony export */   \"render\": () => (/* reexport safe */ _playground_bg_js__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _playground_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playground_bg.wasm */ \"../pkg/playground_bg.wasm\");\n/* harmony import */ var _playground_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playground_bg.js */ \"../pkg/playground_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n(0,_playground_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://create-wasm-app/../pkg/playground.js?");

/***/ }),

/***/ "../pkg/playground_bg.js":
/*!*******************************!*\
  !*** ../pkg/playground_bg.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__wbg_set_wasm\": () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   \"__wbg_stringify_4039297315a25b00\": () => (/* binding */ __wbg_stringify_4039297315a25b00),\n/* harmony export */   \"__wbindgen_is_undefined\": () => (/* binding */ __wbindgen_is_undefined),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_string_get\": () => (/* binding */ __wbindgen_string_get),\n/* harmony export */   \"__wbindgen_string_new\": () => (/* binding */ __wbindgen_string_new),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst heap = new Array(128).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 132) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length, 1) >>> 0;\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len, 1) >>> 0;\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n/**\n* @param {string} template_str\n* @param {any} data\n* @returns {string}\n*/\nfunction render(template_str, data) {\n    let deferred3_0;\n    let deferred3_1;\n    try {\n        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n        const ptr0 = passStringToWasm0(template_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        const len0 = WASM_VECTOR_LEN;\n        wasm.render(retptr, ptr0, len0, addHeapObject(data));\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        var r2 = getInt32Memory0()[retptr / 4 + 2];\n        var r3 = getInt32Memory0()[retptr / 4 + 3];\n        var ptr2 = r0;\n        var len2 = r1;\n        if (r3) {\n            ptr2 = 0; len2 = 0;\n            throw takeObject(r2);\n        }\n        deferred3_0 = ptr2;\n        deferred3_1 = len2;\n        return getStringFromWasm0(ptr2, len2);\n    } finally {\n        wasm.__wbindgen_add_to_stack_pointer(16);\n        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);\n    }\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        wasm.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\n\nfunction __wbindgen_is_undefined(arg0) {\n    const ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_string_get(arg0, arg1) {\n    const obj = getObject(arg1);\n    const ret = typeof(obj) === 'string' ? obj : undefined;\n    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    var len1 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len1;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr1;\n};\n\nfunction __wbg_stringify_4039297315a25b00() { return handleError(function (arg0) {\n    const ret = JSON.stringify(getObject(arg0));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack://create-wasm-app/../pkg/playground_bg.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var hbs_playground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hbs-playground */ \"../pkg/playground.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hbs_playground__WEBPACK_IMPORTED_MODULE_0__]);\nhbs_playground__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ndocument.getElementById(\"rust-render\").addEventListener(\"click\", (event) => {\n    var template = document.getElementById(\"template\").value;\n    var data = document.getElementById(\"data\").value;\n    var json_data = JSON.parse(data);\n\n    try {\n        var result = hbs_playground__WEBPACK_IMPORTED_MODULE_0__.render(template, json_data);\n        document.getElementById(\"rust-output\").value = result;\n        document.getElementById(\"rust-error\").innerText = \"\";\n    } catch (e) {\n        document.getElementById(\"rust-error\").innerText = e.toString();\n    }\n});\n\ndocument.getElementById(\"js-render\").addEventListener(\"click\", (event) => {\n    var template = document.getElementById(\"template\").value;\n    var data = document.getElementById(\"data\").value;\n    var json_data = JSON.parse(data);\n\n    try {\n        var template = Handlebars.compile(template);\n        var result = template(json_data);\n        document.getElementById(\"js-output\").value = result;\n        document.getElementById(\"js-error\").innerText = \"\";\n    } catch (e) {\n        document.getElementById(\"js-error\").innerText = e.toString();\n    }\n});\n\nvar onload = () => {\n    let params = new URL(document.location).searchParams;\n    let tpl = params.get(\"tpl\");\n    let data = params.get(\"data\");\n\n    if (tpl) {\n        document.getElementById(\"template\").value = tpl;\n    }\n    if (data) {\n        document.getElementById(\"data\").value = data;\n    }\n};\n\ndocument.getElementById(\"share\").addEventListener(\"click\", (event) => {\n    var template = encodeURIComponent(\n        document.getElementById(\"template\").value\n    );\n    var data = encodeURIComponent(document.getElementById(\"data\").value);\n\n    var link =\n        window.location.origin +\n        window.location.pathname +\n        `?tpl=${template}&data=${data}`;\n\n    document.getElementById(\"content-error\").innerText = link;\n});\n\nonload();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://create-wasm-app/./index.js?");

/***/ }),

/***/ "../pkg/playground_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/playground_bg.wasm ***!
  \*********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./playground_bg.js */ \"../pkg/playground_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"b87a82003bdbf359ebb9\", {\n\t\"./playground_bg.js\": {\n\t\t\"__wbindgen_is_undefined\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,\n\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\"__wbindgen_string_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,\n\t\t\"__wbindgen_string_get\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_get,\n\t\t\"__wbg_stringify_4039297315a25b00\": WEBPACK_IMPORTED_MODULE_0.__wbg_stringify_4039297315a25b00,\n\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t}\n});\n\n//# sourceURL=webpack://create-wasm-app/../pkg/playground_bg.wasm?");

/***/ })

}]);