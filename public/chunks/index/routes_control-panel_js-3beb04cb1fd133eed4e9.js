/*!  */
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(this["__webpack_jsonp_uun_seminarone_maing01_hi_0_1_0_index"] = this["__webpack_jsonp_uun_seminarone_maing01_hi_0_1_0_index"] || []).push([["routes_control-panel_js"],{

/***/ "./calls.js":
/*!******************!*\
  !*** ./calls.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var uu5g05__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uu5g05 */ \"uu5g05\");\n/* harmony import */ var uu5g05__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uu5g05__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uu_plus4u5g02__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uu_plus4u5g02 */ \"uu_plus4u5g02\");\n/* harmony import */ var uu_plus4u5g02__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uu_plus4u5g02__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../target/webpack-tmp/__webpack-react-refresh-overlay-module.js */ \"../target/webpack-tmp/__webpack-react-refresh-overlay-module.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../node_modules/react-refresh/runtime.js */ \"../node_modules/react-refresh/runtime.js\");\n\n\n\n\n// NOTE During frontend development it's possible to redirect uuApp command calls elsewhere, e.g. to production/staging\n// backend, by configuring it in *-hi/env/development.json:\n//   \"uu5Environment\": {\n//     \"callsBaseUri\": \"https://uuapp-dev.plus4u.net/vnd-app/awid\"\n//   }\n\nconst Calls = {\n  call(method, url, dtoIn, clientOptions) {\n    return (uu_plus4u5g02__WEBPACK_IMPORTED_MODULE_1___default().Utils).AppClient[method](url, dtoIn, clientOptions);\n  },\n  // // example for mock calls\n  // loadDemoContent(dtoIn) {\n  //   const commandUri = Calls.getCommandUri(\"loadDemoContent\");\n  //   return Calls.call(\"cmdGet\", commandUri, dtoIn);\n  // },\n\n  loadIdentityProfiles() {\n    const commandUri = Calls.getCommandUri(\"sys/uuAppWorkspace/initUve\");\n    return Calls.call(\"cmdGet\", commandUri);\n  },\n  initWorkspace(dtoInData) {\n    const commandUri = Calls.getCommandUri(\"sys/uuAppWorkspace/init\");\n    return Calls.call(\"cmdPost\", commandUri, dtoInData);\n  },\n  getWorkspace() {\n    const commandUri = Calls.getCommandUri(\"sys/uuAppWorkspace/get\");\n    return Calls.call(\"cmdGet\", commandUri);\n  },\n  async initAndGetWorkspace(dtoInData) {\n    await Calls.initWorkspace(dtoInData);\n    return await Calls.getWorkspace();\n  },\n  getCommandUri(useCase, baseUri = uu5g05__WEBPACK_IMPORTED_MODULE_0__.Environment.appBaseUri) {\n    return (!baseUri.endsWith(\"/\") ? baseUri + \"/\" : baseUri) + (useCase.startsWith(\"/\") ? useCase.slice(1) : useCase);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calls);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jYWxscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvLi9jYWxscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCJ1dTVnMDVcIjtcbmltcG9ydCBQbHVzNFU1IGZyb20gXCJ1dV9wbHVzNHU1ZzAyXCI7XG5cbi8vIE5PVEUgRHVyaW5nIGZyb250ZW5kIGRldmVsb3BtZW50IGl0J3MgcG9zc2libGUgdG8gcmVkaXJlY3QgdXVBcHAgY29tbWFuZCBjYWxscyBlbHNld2hlcmUsIGUuZy4gdG8gcHJvZHVjdGlvbi9zdGFnaW5nXG4vLyBiYWNrZW5kLCBieSBjb25maWd1cmluZyBpdCBpbiAqLWhpL2Vudi9kZXZlbG9wbWVudC5qc29uOlxuLy8gICBcInV1NUVudmlyb25tZW50XCI6IHtcbi8vICAgICBcImNhbGxzQmFzZVVyaVwiOiBcImh0dHBzOi8vdXVhcHAtZGV2LnBsdXM0dS5uZXQvdm5kLWFwcC9hd2lkXCJcbi8vICAgfVxuXG5jb25zdCBDYWxscyA9IHtcbiAgY2FsbChtZXRob2QsIHVybCwgZHRvSW4sIGNsaWVudE9wdGlvbnMpIHtcbiAgICByZXR1cm4gUGx1czRVNS5VdGlscy5BcHBDbGllbnRbbWV0aG9kXSh1cmwsIGR0b0luLCBjbGllbnRPcHRpb25zKTtcbiAgfSxcblxuICAvLyAvLyBleGFtcGxlIGZvciBtb2NrIGNhbGxzXG4gIC8vIGxvYWREZW1vQ29udGVudChkdG9Jbikge1xuICAvLyAgIGNvbnN0IGNvbW1hbmRVcmkgPSBDYWxscy5nZXRDb21tYW5kVXJpKFwibG9hZERlbW9Db250ZW50XCIpO1xuICAvLyAgIHJldHVybiBDYWxscy5jYWxsKFwiY21kR2V0XCIsIGNvbW1hbmRVcmksIGR0b0luKTtcbiAgLy8gfSxcblxuICBsb2FkSWRlbnRpdHlQcm9maWxlcygpIHtcbiAgICBjb25zdCBjb21tYW5kVXJpID0gQ2FsbHMuZ2V0Q29tbWFuZFVyaShcInN5cy91dUFwcFdvcmtzcGFjZS9pbml0VXZlXCIpO1xuICAgIHJldHVybiBDYWxscy5jYWxsKFwiY21kR2V0XCIsIGNvbW1hbmRVcmkpO1xuICB9LFxuXG4gIGluaXRXb3Jrc3BhY2UoZHRvSW5EYXRhKSB7XG4gICAgY29uc3QgY29tbWFuZFVyaSA9IENhbGxzLmdldENvbW1hbmRVcmkoXCJzeXMvdXVBcHBXb3Jrc3BhY2UvaW5pdFwiKTtcbiAgICByZXR1cm4gQ2FsbHMuY2FsbChcImNtZFBvc3RcIiwgY29tbWFuZFVyaSwgZHRvSW5EYXRhKTtcbiAgfSxcblxuICBnZXRXb3Jrc3BhY2UoKSB7XG4gICAgY29uc3QgY29tbWFuZFVyaSA9IENhbGxzLmdldENvbW1hbmRVcmkoXCJzeXMvdXVBcHBXb3Jrc3BhY2UvZ2V0XCIpO1xuICAgIHJldHVybiBDYWxscy5jYWxsKFwiY21kR2V0XCIsIGNvbW1hbmRVcmkpO1xuICB9LFxuXG4gIGFzeW5jIGluaXRBbmRHZXRXb3Jrc3BhY2UoZHRvSW5EYXRhKSB7XG4gICAgYXdhaXQgQ2FsbHMuaW5pdFdvcmtzcGFjZShkdG9JbkRhdGEpO1xuICAgIHJldHVybiBhd2FpdCBDYWxscy5nZXRXb3Jrc3BhY2UoKTtcbiAgfSxcblxuICBnZXRDb21tYW5kVXJpKHVzZUNhc2UsIGJhc2VVcmkgPSBFbnZpcm9ubWVudC5hcHBCYXNlVXJpKSB7XG4gICAgcmV0dXJuICghYmFzZVVyaS5lbmRzV2l0aChcIi9cIikgPyBiYXNlVXJpICsgXCIvXCIgOiBiYXNlVXJpKSArICh1c2VDYXNlLnN0YXJ0c1dpdGgoXCIvXCIpID8gdXNlQ2FzZS5zbGljZSgxKSA6IHVzZUNhc2UpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsbHM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./calls.js\n");

/***/ }),

/***/ "./routes/control-panel.js":
/*!*********************************!*\
  !*** ./routes/control-panel.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ControlPanel: () => (/* binding */ ControlPanel),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"../node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uu5g05__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uu5g05 */ \"uu5g05\");\n/* harmony import */ var uu5g05__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uu5g05__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uu5g05_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uu5g05-elements */ \"uu5g05-elements\");\n/* harmony import */ var uu5g05_elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uu5g05_elements__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uu_plus4u5g02_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uu_plus4u5g02-app */ \"uu_plus4u5g02-app\");\n/* harmony import */ var uu_plus4u5g02_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uu_plus4u5g02_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var calls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! calls */ \"./calls.js\");\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/config.js */ \"./routes/config/config.js\");\n/* harmony import */ var _core_route_bar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/route-bar.js */ \"./core/route-bar.js\");\n/* harmony import */ var _lsi_import_lsi_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lsi/import-lsi.js */ \"./lsi/import-lsi.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../target/webpack-tmp/__webpack-react-refresh-overlay-module.js */ \"../target/webpack-tmp/__webpack-react-refresh-overlay-module.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../node_modules/react-refresh/runtime.js */ \"../node_modules/react-refresh/runtime.js\");\n\n\n//@@viewOn:imports\n\n\n\n\n\n\n\n//@@viewOff:imports\n\n//@@viewOn:constants\n//@@viewOff:constants\n\n//@@viewOn:css\n//@@viewOff:css\n\n//@@viewOn:helpers\n//@@viewOff:helpers\n\nlet ControlPanel = (0,uu5g05__WEBPACK_IMPORTED_MODULE_1__.createVisualComponent)({\n  //@@viewOn:statics\n  uu5Tag: _config_config_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].TAG + \"ControlPanel\",\n  //@@viewOff:statics\n\n  //@@viewOn:propTypes\n  propTypes: {},\n  //@@viewOff:propTypes\n\n  //@@viewOn:defaultProps\n  defaultProps: {},\n  //@@viewOff:defaultProps\n\n  render(props) {\n    //@@viewOn:private\n    const {\n      state,\n      data,\n      errorData\n    } = (0,uu5g05__WEBPACK_IMPORTED_MODULE_1__.useDataObject)({\n      handlerMap: {\n        load: calls__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getWorkspace\n      }\n    });\n    //@@viewOff:private\n\n    //@@viewOn:render\n    let child;\n    let territoryBaseUri;\n    let artifactId;\n    if (state === \"error\" || state === \"errorNoData\") {\n      child = Uu5g05.Utils.Element.create((uu_plus4u5g02_app__WEBPACK_IMPORTED_MODULE_3___default().Error), {\n        error: errorData?.error\n      }, Uu5g05.Utils.Element.create(uu5g05__WEBPACK_IMPORTED_MODULE_1__.Lsi, {\n        import: _lsi_import_lsi_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        path: [\"ControlPanel\", \"rightsError\"]\n      }));\n    } else if (state === \"pending\" || state === \"pendingNoData\") {\n      child = Uu5g05.Utils.Element.create((uu_plus4u5g02_app__WEBPACK_IMPORTED_MODULE_3___default().SpaPending), null);\n    } else if (data.artifactUri) {\n      const url = new URL(data.artifactUri);\n      url.pathname = url.pathname.split(\"/\", 3).join(\"/\");\n      territoryBaseUri = url.href.split(\"?\")[0];\n      artifactId = url.searchParams.get(\"id\");\n      child = Uu5g05.Utils.Element.create(uu5g05__WEBPACK_IMPORTED_MODULE_1__.LevelProvider, {\n        level: 0\n      }, Uu5g05.Utils.Element.create(uu5g05__WEBPACK_IMPORTED_MODULE_1__.DynamicLibraryComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n        uu5Tag: \"UuTerritory.ArtifactIfc.Bricks.PermissionSettings\",\n        style: {\n          margin: 24,\n          width: \"auto\"\n        },\n        territoryBaseUri: territoryBaseUri,\n        artifactId: artifactId\n      })));\n    } else {\n      child = Uu5g05.Utils.Element.create((uu5g05_elements__WEBPACK_IMPORTED_MODULE_2___default().HighlightedBox), {\n        icon: \"mdi-alert-circle\",\n        colorScheme: \"negative\"\n      }, Uu5g05.Utils.Element.create(uu5g05__WEBPACK_IMPORTED_MODULE_1__.Lsi, {\n        import: _lsi_import_lsi_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        path: [\"ControlPanel\", \"btNotConnected\"]\n      }));\n    }\n    return Uu5g05.Utils.Element.create(Uu5g05.Fragment, null, Uu5g05.Utils.Element.create(_core_route_bar_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), child);\n    //@@viewOff:render\n  }\n});\nControlPanel = (0,uu_plus4u5g02_app__WEBPACK_IMPORTED_MODULE_3__.withRoute)(ControlPanel, {\n  authenticated: true\n});\n\n//@@viewOn:exports\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlPanel);\n//@@viewOff:exports\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvY29udHJvbC1wYW5lbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvLi9yb3V0ZXMvY29udHJvbC1wYW5lbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0BAdmlld09uOmltcG9ydHNcbmltcG9ydCB7IGNyZWF0ZVZpc3VhbENvbXBvbmVudCwgdXNlRGF0YU9iamVjdCwgTHNpLCBMZXZlbFByb3ZpZGVyLCBEeW5hbWljTGlicmFyeUNvbXBvbmVudCB9IGZyb20gXCJ1dTVnMDVcIjtcbmltcG9ydCBVdTVFbGVtZW50cyBmcm9tIFwidXU1ZzA1LWVsZW1lbnRzXCI7XG5pbXBvcnQgUGx1czRVNUFwcCwgeyB3aXRoUm91dGUgfSBmcm9tIFwidXVfcGx1czR1NWcwMi1hcHBcIjtcbmltcG9ydCBDYWxscyBmcm9tIFwiY2FsbHNcIjtcblxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9jb25maWcvY29uZmlnLmpzXCI7XG5pbXBvcnQgUm91dGVCYXIgZnJvbSBcIi4uL2NvcmUvcm91dGUtYmFyLmpzXCI7XG5pbXBvcnQgaW1wb3J0THNpIGZyb20gXCIuLi9sc2kvaW1wb3J0LWxzaS5qc1wiO1xuLy9AQHZpZXdPZmY6aW1wb3J0c1xuXG4vL0BAdmlld09uOmNvbnN0YW50c1xuLy9AQHZpZXdPZmY6Y29uc3RhbnRzXG5cbi8vQEB2aWV3T246Y3NzXG4vL0BAdmlld09mZjpjc3NcblxuLy9AQHZpZXdPbjpoZWxwZXJzXG4vL0BAdmlld09mZjpoZWxwZXJzXG5cbmxldCBDb250cm9sUGFuZWwgPSBjcmVhdGVWaXN1YWxDb21wb25lbnQoe1xuICAvL0BAdmlld09uOnN0YXRpY3NcbiAgdXU1VGFnOiBDb25maWcuVEFHICsgXCJDb250cm9sUGFuZWxcIixcbiAgLy9AQHZpZXdPZmY6c3RhdGljc1xuXG4gIC8vQEB2aWV3T246cHJvcFR5cGVzXG4gIHByb3BUeXBlczoge30sXG4gIC8vQEB2aWV3T2ZmOnByb3BUeXBlc1xuXG4gIC8vQEB2aWV3T246ZGVmYXVsdFByb3BzXG4gIGRlZmF1bHRQcm9wczoge30sXG4gIC8vQEB2aWV3T2ZmOmRlZmF1bHRQcm9wc1xuXG4gIHJlbmRlcihwcm9wcykge1xuICAgIC8vQEB2aWV3T246cHJpdmF0ZVxuICAgIGNvbnN0IHsgc3RhdGUsIGRhdGEsIGVycm9yRGF0YSB9ID0gdXNlRGF0YU9iamVjdCh7IGhhbmRsZXJNYXA6IHsgbG9hZDogQ2FsbHMuZ2V0V29ya3NwYWNlIH0gfSk7XG4gICAgLy9AQHZpZXdPZmY6cHJpdmF0ZVxuXG4gICAgLy9AQHZpZXdPbjpyZW5kZXJcbiAgICBsZXQgY2hpbGQ7XG4gICAgbGV0IHRlcnJpdG9yeUJhc2VVcmk7XG4gICAgbGV0IGFydGlmYWN0SWQ7XG4gICAgaWYgKHN0YXRlID09PSBcImVycm9yXCIgfHwgc3RhdGUgPT09IFwiZXJyb3JOb0RhdGFcIikge1xuICAgICAgY2hpbGQgPSAoXG4gICAgICAgIDxQbHVzNFU1QXBwLkVycm9yIGVycm9yPXtlcnJvckRhdGE/LmVycm9yfT5cbiAgICAgICAgICA8THNpIGltcG9ydD17aW1wb3J0THNpfSBwYXRoPXtbXCJDb250cm9sUGFuZWxcIiwgXCJyaWdodHNFcnJvclwiXX0gLz5cbiAgICAgICAgPC9QbHVzNFU1QXBwLkVycm9yPlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBcInBlbmRpbmdcIiB8fCBzdGF0ZSA9PT0gXCJwZW5kaW5nTm9EYXRhXCIpIHtcbiAgICAgIGNoaWxkID0gPFBsdXM0VTVBcHAuU3BhUGVuZGluZyAvPjtcbiAgICB9IGVsc2UgaWYgKGRhdGEuYXJ0aWZhY3RVcmkpIHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZGF0YS5hcnRpZmFjdFVyaSk7XG4gICAgICB1cmwucGF0aG5hbWUgPSB1cmwucGF0aG5hbWUuc3BsaXQoXCIvXCIsIDMpLmpvaW4oXCIvXCIpO1xuICAgICAgdGVycml0b3J5QmFzZVVyaSA9IHVybC5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgICAgIGFydGlmYWN0SWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImlkXCIpO1xuICAgICAgY2hpbGQgPSAoXG4gICAgICAgIDxMZXZlbFByb3ZpZGVyIGxldmVsPXswfT5cbiAgICAgICAgICA8RHluYW1pY0xpYnJhcnlDb21wb25lbnRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHV1NVRhZz1cIlV1VGVycml0b3J5LkFydGlmYWN0SWZjLkJyaWNrcy5QZXJtaXNzaW9uU2V0dGluZ3NcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAyNCwgd2lkdGg6IFwiYXV0b1wiIH19XG4gICAgICAgICAgICB0ZXJyaXRvcnlCYXNlVXJpPXt0ZXJyaXRvcnlCYXNlVXJpfVxuICAgICAgICAgICAgYXJ0aWZhY3RJZD17YXJ0aWZhY3RJZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0xldmVsUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZCA9IChcbiAgICAgICAgPFV1NUVsZW1lbnRzLkhpZ2hsaWdodGVkQm94IGljb249XCJtZGktYWxlcnQtY2lyY2xlXCIgY29sb3JTY2hlbWU9XCJuZWdhdGl2ZVwiPlxuICAgICAgICAgIDxMc2kgaW1wb3J0PXtpbXBvcnRMc2l9IHBhdGg9e1tcIkNvbnRyb2xQYW5lbFwiLCBcImJ0Tm90Q29ubmVjdGVkXCJdfSAvPlxuICAgICAgICA8L1V1NUVsZW1lbnRzLkhpZ2hsaWdodGVkQm94PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxSb3V0ZUJhciAvPlxuICAgICAgICB7Y2hpbGR9XG4gICAgICA8Lz5cbiAgICApO1xuICAgIC8vQEB2aWV3T2ZmOnJlbmRlclxuICB9LFxufSk7XG5cbkNvbnRyb2xQYW5lbCA9IHdpdGhSb3V0ZShDb250cm9sUGFuZWwsIHsgYXV0aGVudGljYXRlZDogdHJ1ZSB9KTtcblxuLy9AQHZpZXdPbjpleHBvcnRzXG5leHBvcnQgeyBDb250cm9sUGFuZWwgfTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xQYW5lbDtcbi8vQEB2aWV3T2ZmOmV4cG9ydHNcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./routes/control-panel.js\n");

/***/ })

}]);