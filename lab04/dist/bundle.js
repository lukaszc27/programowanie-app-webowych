/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var LocalNote_1 = __importDefault(__webpack_require__(/*! ./LocalNote */ "./src/LocalNote.ts"));
var Notes_1 = __importDefault(__webpack_require__(/*! ./Notes */ "./src/Notes.ts"));
var Application = /** @class */ (function () {
    function Application() {
        var _this = this;
        this.currentColor = 'orange';
        /**
         * main function
         */
        this.main = function () {
            Notes_1.default.render();
            var button = document.querySelector('button[role="button"]');
            if (button != null)
                button.addEventListener('click', _this.addButtonHandle);
            var colorButtons;
            colorButtons = document.querySelectorAll('button[class^="colorPicker"]');
            colorButtons.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    var color = btn.dataset.color;
                    if (color != undefined) {
                        _this.currentColor = color;
                    }
                });
            });
        };
        /**
         * obsługa przyciksu 'dodaj'
         */
        this.addButtonHandle = function () {
            var inputCaption = document.querySelector('input[name="caption"]');
            var inputContent = document.querySelector('textarea[name="content"]');
            if (inputCaption != null && inputCaption.value.length > 0 &&
                inputContent != null && inputContent.value.length > 0) {
                var note = new LocalNote_1.default(inputCaption.value, inputContent.value, _this.currentColor);
                Notes_1.default.addNote(note);
                inputCaption.value = '';
                inputContent.value = '';
                _this.currentColor = 'orange';
            }
            else {
                alert('Nie wszystkie pola formularza zostały uzupełnione!');
                return;
            }
        };
    }
    return Application;
}());
;
exports.default = Application;


/***/ }),

/***/ "./src/LocalNote.ts":
/*!**************************!*\
  !*** ./src/LocalNote.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var LocalNote = /** @class */ (function () {
    function LocalNote(caption, content, bg) {
        this.caption = caption;
        this.content = content;
        this.background = bg;
    }
    return LocalNote;
}());
exports.default = LocalNote;


/***/ }),

/***/ "./src/Notes.ts":
/*!**********************!*\
  !*** ./src/Notes.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Notes = /** @class */ (function () {
    function Notes() {
    }
    /**
     * renderuje wszystkie notatki w kontenerze
     */
    Notes.render = function () {
        var container = document.querySelector('#container');
        var data = Notes.getData();
        if (container != null) {
            container.innerHTML = '';
            data.forEach(function (item) {
                var card = document.createElement('div');
                card.classList.add(item.background);
                card.classList.add('card');
                var caption = document.createElement('h4');
                caption.innerHTML = item.caption;
                card.appendChild(caption);
                var content = document.createElement('p');
                content.innerHTML = item.content;
                card.appendChild(content);
                container === null || container === void 0 ? void 0 : container.appendChild(card);
            });
        }
    };
    /**
     * Dodaje nową notatkę do listy notatek
     * oraz ponownie renderuje notatki
     * @param note obiekt który należy dodać do listy
     */
    Notes.addNote = function (note) {
        var data = Notes.getData();
        data.push(note);
        localStorage.setItem('notes', JSON.stringify(data));
        // ponowne wyrysowanie notatek
        Notes.render();
    };
    /**
     * Pobiera dane z localStorage
     * @returns tablica elementów interfejsu INote
     */
    Notes.getData = function () {
        var data = localStorage.getItem('notes');
        return data ? JSON.parse(data) : [];
    };
    return Notes;
}());
exports.default = Notes;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var App_1 = __importDefault(__webpack_require__(/*! ./App */ "./src/App.ts"));
window.addEventListener('load', function () {
    var app = new App_1.default;
    app.main();
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWIwMy8uL3NyYy9BcHAudHMiLCJ3ZWJwYWNrOi8vbGFiMDMvLi9zcmMvTG9jYWxOb3RlLnRzIiwid2VicGFjazovL2xhYjAzLy4vc3JjL05vdGVzLnRzIiwid2VicGFjazovL2xhYjAzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2xhYjAzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xhYjAzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxrQ0FBa0MsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2RCw4QkFBOEIsbUJBQU8sQ0FBQywrQkFBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGVBQWU7Ozs7Ozs7Ozs7O0FDckRGO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGVBQWU7Ozs7Ozs7Ozs7O0FDVkY7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxlQUFlOzs7Ozs7Ozs7OztBQ2pERjtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELDRCQUE0QixtQkFBTyxDQUFDLDJCQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7VUNURDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VDdEJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIExvY2FsTm90ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0xvY2FsTm90ZVwiKSk7XG52YXIgTm90ZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Ob3Rlc1wiKSk7XG52YXIgQXBwbGljYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBwbGljYXRpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3VycmVudENvbG9yID0gJ29yYW5nZSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBtYWluIGZ1bmN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1haW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBOb3Rlc18xLmRlZmF1bHQucmVuZGVyKCk7XG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3JvbGU9XCJidXR0b25cIl0nKTtcbiAgICAgICAgICAgIGlmIChidXR0b24gIT0gbnVsbClcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpcy5hZGRCdXR0b25IYW5kbGUpO1xuICAgICAgICAgICAgdmFyIGNvbG9yQnV0dG9ucztcbiAgICAgICAgICAgIGNvbG9yQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbltjbGFzc149XCJjb2xvclBpY2tlclwiXScpO1xuICAgICAgICAgICAgY29sb3JCdXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yID0gYnRuLmRhdGFzZXQuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIG9ic8WCdWdhIHByenljaWtzdSAnZG9kYWonXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbkhhbmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dENhcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiY2FwdGlvblwiXScpO1xuICAgICAgICAgICAgdmFyIGlucHV0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9XCJjb250ZW50XCJdJyk7XG4gICAgICAgICAgICBpZiAoaW5wdXRDYXB0aW9uICE9IG51bGwgJiYgaW5wdXRDYXB0aW9uLnZhbHVlLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICBpbnB1dENvbnRlbnQgIT0gbnVsbCAmJiBpbnB1dENvbnRlbnQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBub3RlID0gbmV3IExvY2FsTm90ZV8xLmRlZmF1bHQoaW5wdXRDYXB0aW9uLnZhbHVlLCBpbnB1dENvbnRlbnQudmFsdWUsIF90aGlzLmN1cnJlbnRDb2xvcik7XG4gICAgICAgICAgICAgICAgTm90ZXNfMS5kZWZhdWx0LmFkZE5vdGUobm90ZSk7XG4gICAgICAgICAgICAgICAgaW5wdXRDYXB0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgaW5wdXRDb250ZW50LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudENvbG9yID0gJ29yYW5nZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnTmllIHdzenlzdGtpZSBwb2xhIGZvcm11bGFyemEgem9zdGHFgnkgdXp1cGXFgm5pb25lIScpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIEFwcGxpY2F0aW9uO1xufSgpKTtcbjtcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcGxpY2F0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTG9jYWxOb3RlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExvY2FsTm90ZShjYXB0aW9uLCBjb250ZW50LCBiZykge1xuICAgICAgICB0aGlzLmNhcHRpb24gPSBjYXB0aW9uO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBiZztcbiAgICB9XG4gICAgcmV0dXJuIExvY2FsTm90ZTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2NhbE5vdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBOb3RlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb3RlcygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogcmVuZGVydWplIHdzenlzdGtpZSBub3RhdGtpIHcga29udGVuZXJ6ZVxuICAgICAqL1xuICAgIE5vdGVzLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICAgICAgdmFyIGRhdGEgPSBOb3Rlcy5nZXREYXRhKCk7XG4gICAgICAgIGlmIChjb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoaXRlbS5iYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgICAgICAgICB2YXIgY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICAgICAgICAgY2FwdGlvbi5pbm5lckhUTUwgPSBpdGVtLmNhcHRpb247XG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXB0aW9uKTtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGl0ZW0uY29udGVudDtcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9PT0gbnVsbCB8fCBjb250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEb2RhamUgbm93xIUgbm90YXRrxJkgZG8gbGlzdHkgbm90YXRla1xuICAgICAqIG9yYXogcG9ub3duaWUgcmVuZGVydWplIG5vdGF0a2lcbiAgICAgKiBAcGFyYW0gbm90ZSBvYmlla3Qga3TDs3J5IG5hbGXFvHkgZG9kYcSHIGRvIGxpc3R5XG4gICAgICovXG4gICAgTm90ZXMuYWRkTm90ZSA9IGZ1bmN0aW9uIChub3RlKSB7XG4gICAgICAgIHZhciBkYXRhID0gTm90ZXMuZ2V0RGF0YSgpO1xuICAgICAgICBkYXRhLnB1c2gobm90ZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgLy8gcG9ub3duZSB3eXJ5c293YW5pZSBub3RhdGVrXG4gICAgICAgIE5vdGVzLnJlbmRlcigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUG9iaWVyYSBkYW5lIHogbG9jYWxTdG9yYWdlXG4gICAgICogQHJldHVybnMgdGFibGljYSBlbGVtZW50w7N3IGludGVyZmVqc3UgSU5vdGVcbiAgICAgKi9cbiAgICBOb3Rlcy5nZXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpO1xuICAgICAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcbiAgICB9O1xuICAgIHJldHVybiBOb3Rlcztcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBOb3RlcztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFwcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0FwcFwiKSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXBwID0gbmV3IEFwcF8xLmRlZmF1bHQ7XG4gICAgYXBwLm1haW4oKTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==