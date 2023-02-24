"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; },\n/* harmony export */   \"projects\": function() { return /* binding */ projects; }\n/* harmony export */ });\nvar projects = [{\n  title: 'PGT ultrasound image segmentation and classification',\n  description: \"Using DL model for segment ultrasound PGT ROI image. Feature extraction using texture and morphological features. Using ML model for feature classification with RFECV feature selection.\",\n  image: '/images/p1.png',\n  tags: ['Machine learning', 'Python', 'Docker'],\n  source: 'https://github.com/CCChen19990820/PGT-ultrasound-image-segmentation-and-classification',\n  visit: 'https://github.com/CCChen19990820/PGT-ultrasound-image-segmentation-and-classification',\n  id: 0\n}, {\n  title: 'Cyber Warrior Detection on YouTube',\n  description: \"This is the college student plan of the Ministry of Science and Technology. Analyze account interaction behavior under videos on Taiwanese political channels. Using time series analysis and community analysis to group accounts and calculate the similarity of message content.\",\n  image: '/images/p2.png',\n  tags: ['Scrapy', 'Python', 'Node.js'],\n  source: 'https://github.com/CCChen19990820/Cyber_Warrior_Detection_on_YouTube',\n  visit: 'https://github.com/CCChen19990820/Cyber_Warrior_Detection_on_YouTube',\n  id: 1\n}, {\n  title: 'Brawl Fight Game',\n  description: \"This is a project to participate in the 2019 NTUST game competition. A PC two-player battle game designed with reference to the gameplay of the mobile game Brawl Stars.\",\n  image: '/images/p3.png',\n  tags: ['Unity3D', 'C#'],\n  source: 'https://github.com/CCChen19990820/Unity-Brawl-Fight',\n  visit: 'https://github.com/CCChen19990820/Unity-Brawl-Fight',\n  id: 2\n}, {\n  title: 'Job Platform',\n  description: \"This is a job vacancy website for python language developed with lab classmates. Writing crawler to grab python job vacancy information from major job search websites every day and build a website.\",\n  image: '/images/p4.png',\n  tags: ['Python', 'PostgreSQL', 'Docker'],\n  source: 'https://github.com/CCChen19990820/job-platform',\n  visit: 'https://github.com/CCChen19990820/job-platform',\n  id: 3\n}];\nvar TimeLineData = [{\n  year: 'Mar. 2022 - Jun. 2023',\n  job: 'Researcher',\n  company: 'National Cheng Kung University Hospital',\n  text1: '- Ultrasonic image analysis of parotid gland tumors. ',\n  text2: '- Develop models to automatically segment and classify ultrasound images.',\n  text3: '- Build clinical system and useriinterface .',\n  id: 0\n}, {\n  year: 'Mar. 2020 - July. 2021',\n  job: 'Teaching Assistant',\n  company: 'National Cheng Chi University CS',\n  text1: '- Assist students in program implementation.',\n  text2: '- Automation and execution of python code.',\n  text3: '- Teaching students python knowledge.',\n  id: 1\n}];\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtFQUNFQyxLQUFLLEVBQUUsc0RBRFQ7RUFFRUMsV0FBVyxFQUFFLDJMQUZmO0VBR0lDLEtBQUssRUFBRSxnQkFIWDtFQUlJQyxJQUFJLEVBQUUsQ0FBQyxrQkFBRCxFQUFxQixRQUFyQixFQUErQixRQUEvQixDQUpWO0VBS0VDLE1BQU0sRUFBRSx3RkFMVjtFQU1FQyxLQUFLLEVBQUUsd0ZBTlQ7RUFPRUMsRUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7RUFDRU4sS0FBSyxFQUFFLG9DQURUO0VBRUVDLFdBQVcsRUFBQyxxUkFGZDtFQUdFQyxLQUFLLEVBQUUsZ0JBSFQ7RUFJRUMsSUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsU0FBckIsQ0FKUjtFQUtFQyxNQUFNLEVBQUUsc0VBTFY7RUFNRUMsS0FBSyxFQUFFLHNFQU5UO0VBT0VDLEVBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtFQUNFTixLQUFLLEVBQUUsa0JBRFQ7RUFFRUMsV0FBVyxFQUFFLDBLQUZmO0VBR0VDLEtBQUssRUFBRSxnQkFIVDtFQUlFQyxJQUFJLEVBQUUsQ0FBQyxTQUFELEVBQVksSUFBWixDQUpSO0VBS0VDLE1BQU0sRUFBRSxxREFMVjtFQU1FQyxLQUFLLEVBQUUscURBTlQ7RUFPRUMsRUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNEJ0QjtFQUNFTixLQUFLLEVBQUUsY0FEVDtFQUVFQyxXQUFXLEVBQUUsdU1BRmY7RUFHRUMsS0FBSyxFQUFFLGdCQUhUO0VBSUVDLElBQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFYLEVBQXlCLFFBQXpCLENBSlI7RUFLRUMsTUFBTSxFQUFFLGdEQUxWO0VBTUVDLEtBQUssRUFBRSxnREFOVDtFQU9FQyxFQUFFLEVBQUU7QUFQTixDQTVCc0IsQ0FBakI7QUF1Q0EsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0VBQ0VDLElBQUksRUFBRSx1QkFEUjtFQUVFQyxHQUFHLEVBQUUsWUFGUDtFQUdFQyxPQUFPLEVBQUUseUNBSFg7RUFJRUMsS0FBSyxFQUFFLHVEQUpUO0VBS0VDLEtBQUssRUFBRSwyRUFMVDtFQU1FQyxLQUFLLEVBQUUsOENBTlQ7RUFPRVAsRUFBRSxFQUFFO0FBUE4sQ0FEMEIsRUFTeEI7RUFDQUUsSUFBSSxFQUFFLHdCQUROO0VBRUFDLEdBQUcsRUFBRSxvQkFGTDtFQUdBQyxPQUFPLEVBQUUsa0NBSFQ7RUFJQUMsS0FBSyxFQUFFLDhDQUpQO0VBS0FDLEtBQUssRUFBRSw0Q0FMUDtFQU1BQyxLQUFLLEVBQUUsdUNBTlA7RUFPQVAsRUFBRSxFQUFFO0FBUEosQ0FUd0IsQ0FBckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/MWMwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdQR1QgdWx0cmFzb3VuZCBpbWFnZSBzZWdtZW50YXRpb24gYW5kIGNsYXNzaWZpY2F0aW9uJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlVzaW5nIERMIG1vZGVsIGZvciBzZWdtZW50IHVsdHJhc291bmQgUEdUIFJPSSBpbWFnZS4gRmVhdHVyZSBleHRyYWN0aW9uIHVzaW5nIHRleHR1cmUgYW5kIG1vcnBob2xvZ2ljYWwgZmVhdHVyZXMuIFVzaW5nIE1MIG1vZGVsIGZvciBmZWF0dXJlIGNsYXNzaWZpY2F0aW9uIHdpdGggUkZFQ1YgZmVhdHVyZSBzZWxlY3Rpb24uXCIsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9wMS5wbmcnLFxyXG4gICAgICB0YWdzOiBbJ01hY2hpbmUgbGVhcm5pbmcnLCAnUHl0aG9uJywgJ0RvY2tlciddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0NDQ2hlbjE5OTkwODIwL1BHVC11bHRyYXNvdW5kLWltYWdlLXNlZ21lbnRhdGlvbi1hbmQtY2xhc3NpZmljYXRpb24nLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vQ0NDaGVuMTk5OTA4MjAvUEdULXVsdHJhc291bmQtaW1hZ2Utc2VnbWVudGF0aW9uLWFuZC1jbGFzc2lmaWNhdGlvbicsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQ3liZXIgV2FycmlvciBEZXRlY3Rpb24gb24gWW91VHViZScsXHJcbiAgICBkZXNjcmlwdGlvbjpcIlRoaXMgaXMgdGhlIGNvbGxlZ2Ugc3R1ZGVudCBwbGFuIG9mIHRoZSBNaW5pc3RyeSBvZiBTY2llbmNlIGFuZCBUZWNobm9sb2d5LiBBbmFseXplIGFjY291bnQgaW50ZXJhY3Rpb24gYmVoYXZpb3IgdW5kZXIgdmlkZW9zIG9uIFRhaXdhbmVzZSBwb2xpdGljYWwgY2hhbm5lbHMuIFVzaW5nIHRpbWUgc2VyaWVzIGFuYWx5c2lzIGFuZCBjb21tdW5pdHkgYW5hbHlzaXMgdG8gZ3JvdXAgYWNjb3VudHMgYW5kIGNhbGN1bGF0ZSB0aGUgc2ltaWxhcml0eSBvZiBtZXNzYWdlIGNvbnRlbnQuXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvcDIucG5nJyxcclxuICAgIHRhZ3M6IFsnU2NyYXB5JywgJ1B5dGhvbicsICdOb2RlLmpzJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vQ0NDaGVuMTk5OTA4MjAvQ3liZXJfV2Fycmlvcl9EZXRlY3Rpb25fb25fWW91VHViZScsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9DQ0NoZW4xOTk5MDgyMC9DeWJlcl9XYXJyaW9yX0RldGVjdGlvbl9vbl9Zb3VUdWJlJyxcclxuICAgIGlkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdCcmF3bCBGaWdodCBHYW1lJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBwcm9qZWN0IHRvIHBhcnRpY2lwYXRlIGluIHRoZSAyMDE5IE5UVVNUIGdhbWUgY29tcGV0aXRpb24uIEEgUEMgdHdvLXBsYXllciBiYXR0bGUgZ2FtZSBkZXNpZ25lZCB3aXRoIHJlZmVyZW5jZSB0byB0aGUgZ2FtZXBsYXkgb2YgdGhlIG1vYmlsZSBnYW1lIEJyYXdsIFN0YXJzLlwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3AzLnBuZycsXHJcbiAgICB0YWdzOiBbJ1VuaXR5M0QnLCAnQyMnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9DQ0NoZW4xOTk5MDgyMC9Vbml0eS1CcmF3bC1GaWdodCcsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9DQ0NoZW4xOTk5MDgyMC9Vbml0eS1CcmF3bC1GaWdodCcsXHJcbiAgICBpZDogMixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnSm9iIFBsYXRmb3JtJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBqb2IgdmFjYW5jeSB3ZWJzaXRlIGZvciBweXRob24gbGFuZ3VhZ2UgZGV2ZWxvcGVkIHdpdGggbGFiIGNsYXNzbWF0ZXMuIFdyaXRpbmcgY3Jhd2xlciB0byBncmFiIHB5dGhvbiBqb2IgdmFjYW5jeSBpbmZvcm1hdGlvbiBmcm9tIG1ham9yIGpvYiBzZWFyY2ggd2Vic2l0ZXMgZXZlcnkgZGF5IGFuZCBidWlsZCBhIHdlYnNpdGUuXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvcDQucG5nJyxcclxuICAgIHRhZ3M6IFsnUHl0aG9uJywgJ1Bvc3RncmVTUUwnLCAnRG9ja2VyJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vQ0NDaGVuMTk5OTA4MjAvam9iLXBsYXRmb3JtJyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0NDQ2hlbjE5OTkwODIwL2pvYi1wbGF0Zm9ybScsXHJcbiAgICBpZDogMyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcclxuICB7XHJcbiAgICB5ZWFyOiAnTWFyLiAyMDIyIC0gSnVuLiAyMDIzJyxcclxuICAgIGpvYjogJ1Jlc2VhcmNoZXInLFxyXG4gICAgY29tcGFueTogJ05hdGlvbmFsIENoZW5nIEt1bmcgVW5pdmVyc2l0eSBIb3NwaXRhbCcsXHJcbiAgICB0ZXh0MTogJy0gVWx0cmFzb25pYyBpbWFnZSBhbmFseXNpcyBvZiBwYXJvdGlkIGdsYW5kIHR1bW9ycy4gJyxcclxuICAgIHRleHQyOiAnLSBEZXZlbG9wIG1vZGVscyB0byBhdXRvbWF0aWNhbGx5IHNlZ21lbnQgYW5kIGNsYXNzaWZ5IHVsdHJhc291bmQgaW1hZ2VzLicsXHJcbiAgICB0ZXh0MzogJy0gQnVpbGQgY2xpbmljYWwgc3lzdGVtIGFuZCB1c2VyaWludGVyZmFjZSAuJyxcclxuICAgIGlkOiAwLFxyXG4gIH0seyBcclxuICAgIHllYXI6ICdNYXIuIDIwMjAgLSBKdWx5LiAyMDIxJyxcclxuICAgIGpvYjogJ1RlYWNoaW5nIEFzc2lzdGFudCcsXHJcbiAgICBjb21wYW55OiAnTmF0aW9uYWwgQ2hlbmcgQ2hpIFVuaXZlcnNpdHkgQ1MnLFxyXG4gICAgdGV4dDE6ICctIEFzc2lzdCBzdHVkZW50cyBpbiBwcm9ncmFtIGltcGxlbWVudGF0aW9uLicsXHJcbiAgICB0ZXh0MjogJy0gQXV0b21hdGlvbiBhbmQgZXhlY3V0aW9uIG9mIHB5dGhvbiBjb2RlLicsXHJcbiAgICB0ZXh0MzogJy0gVGVhY2hpbmcgc3R1ZGVudHMgcHl0aG9uIGtub3dsZWRnZS4nLFxyXG4gICAgaWQ6IDEsICBcclxuICB9LFxyXG5dO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsImpvYiIsImNvbXBhbnkiLCJ0ZXh0MSIsInRleHQyIiwidGV4dDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n"));

/***/ })

});