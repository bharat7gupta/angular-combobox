webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>\n    Angular 2 Combobox\n  </h3>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <combo-box \n        [list]=\"options\" \n        [displayFieldName]=\"'full_name'\" \n        [valueFieldName]=\"'id'\" \n        [(ngModel)]=\"selectedValue\">\n      </combo-box>\n    </div>\n    <div class=\"col-md-6\">\n      <p>Selected Value: </p>\n      {{selectedValue | json: 4}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.options = [{
                "id": 1001,
                "first_name": "Cris",
                "last_name": "Leate",
                "full_name": "Cris Leate",
                "gender": "Female"
            }, {
                "id": 1002,
                "first_name": "Baily",
                "last_name": "Janouch",
                "full_name": "Baily Janouch",
                "gender": "Male"
            }, {
                "id": 1003,
                "first_name": "Burtie",
                "last_name": "Pyle",
                "full_name": "Burtie Pyle",
                "gender": "Male"
            }, {
                "id": 1004,
                "first_name": "Dalila",
                "last_name": "Sandiland",
                "full_name": "Dalila Sandiland",
                "gender": "Female"
            }, {
                "id": 1005,
                "first_name": "Enoch",
                "last_name": "Conquest",
                "full_name": "Enoch Conquest",
                "gender": "Male"
            }, {
                "id": 1006,
                "first_name": "Klarika",
                "last_name": "Simonsen",
                "full_name": "Klarika Simonsen",
                "gender": "Female"
            }, {
                "id": 1007,
                "first_name": "Marijn",
                "last_name": "Lamberto",
                "full_name": "Marijn Lamberto",
                "gender": "Male"
            }, {
                "id": 1008,
                "first_name": "Wilow",
                "last_name": "Grocott",
                "full_name": "Wilow Grocott",
                "gender": "Female"
            }, {
                "id": 1009,
                "first_name": "Alasteir",
                "last_name": "Blanch",
                "full_name": "Alasteir Blanch",
                "gender": "Male"
            }, {
                "id": 1010,
                "first_name": "Elane",
                "last_name": "Humes",
                "full_name": "Elane Humes",
                "gender": "Female"
            }, {
                "id": 1011,
                "first_name": "Renato",
                "last_name": "Aves",
                "full_name": "Renato Aves",
                "gender": "Male"
            }, {
                "id": 1012,
                "first_name": "Diann",
                "last_name": "McKinless",
                "full_name": "Diann McKinless",
                "gender": "Female"
            }, {
                "id": 1013,
                "first_name": "Monti",
                "last_name": "McIntee",
                "full_name": "Monti McIntee",
                "gender": "Male"
            }, {
                "id": 1014,
                "first_name": "Pinchas",
                "last_name": "Lovemore",
                "full_name": "Pinchas Lovemore",
                "gender": "Male"
            }, {
                "id": 1015,
                "first_name": "Stephen",
                "last_name": "Rawlingson",
                "full_name": "Stephen Rawlingson",
                "gender": "Male"
            }, {
                "id": 1016,
                "first_name": "Mychal",
                "last_name": "Fawlkes",
                "full_name": "Mychal Fawlkes",
                "gender": "Male"
            }, {
                "id": 1017,
                "first_name": "Inesita",
                "last_name": "Saffon",
                "full_name": "Inesita Saffon",
                "gender": "Female"
            }, {
                "id": 1018,
                "first_name": "Betteanne",
                "last_name": "Leet",
                "full_name": "Betteanne Leet",
                "gender": "Female"
            }, {
                "id": 1019,
                "first_name": "Abrahan",
                "last_name": "Kimblen",
                "full_name": "Abrahan Kimblen",
                "gender": "Male"
            }, {
                "id": 1020,
                "first_name": "Gabbi",
                "last_name": "Swepstone",
                "full_name": "Gabbi Swepstone",
                "gender": "Female"
            }, {
                "id": 1021,
                "first_name": "Ingram",
                "last_name": "Hamber",
                "full_name": "Ingram Hamber",
                "gender": "Male"
            }, {
                "id": 1022,
                "first_name": "Chicky",
                "last_name": "Behrens",
                "full_name": "Chicky Behrens",
                "gender": "Male"
            }, {
                "id": 1023,
                "first_name": "Forbes",
                "last_name": "Rubinovici",
                "full_name": "Forbes Rubinovici",
                "gender": "Male"
            }, {
                "id": 1024,
                "first_name": "Clayson",
                "last_name": "Dies",
                "full_name": "Clayson Dies",
                "gender": "Male"
            }, {
                "id": 1025,
                "first_name": "Etan",
                "last_name": "Scamal",
                "full_name": "Etan Scamal",
                "gender": "Male"
            }];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__combo_box_combo_box_component__ = __webpack_require__("./src/app/combo-box/combo-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__combo_box_combo_box_component__["a" /* ComboBoxComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/combo-box/combo-box.component.css":
/***/ (function(module, exports) {

module.exports = ".list {\n    min-width: 100%;\n    max-height: 250px;\n    overflow: auto;\n}\n\n.list li a{\n    padding-left: 12px;\n}\n\n.btn-show-list{\n    cursor: pointer;\n}\n\n.form-control {\n    height: 38px;\n}\n\n.invalid-input {\n    border: 1px solid #a94442;\n    border-right: none;\n}\n\n.invalid-caret {\n    border: 1px solid #a94442;\n    border-left: none;\n}"

/***/ }),

/***/ "./src/app/combo-box/combo-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\">\n  <div class=\"input-group\" [class.open]=\"showList\">\n      <input type=\"text\" autocomplete=\"off\" #searchBox\n              class=\"form-control\" [(ngModel)]=\"searchTerm\"\n              (keyup)=\"navigateList($event);\" \n              (keydown)=\"handleKeyDown($event);\" \n              [class.invalid-input]=\"invalid\" />\n      <ul class=\"dropdown-menu list\" #list>\n          <li *ngFor=\"let listItem of currentList\" #listItemEls\n                      [class.active]=\"this.tempCurrent && this.tempCurrent[this.valueFieldName]===listItem[this.valueFieldName]\"\n                      (mousemove)=\"tempCurrent = listItem\">\n              <a href=\"javascript:void(0);\" (click)=\"setValue(listItem)\">{{listItem[this.displayFieldName]}}</a>\n          </li>\n      </ul>\n      <span class=\"input-group-addon btn-show-list\" \n          (click)=\"searchBox.focus(); toggleListDisplay()\" [class.invalid-caret]=\"invalid\">\n              <span class=\"caret dropdown-toggle\"></span>\n      </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/combo-box/combo-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComboBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// combo-box to select from a list of items
var ComboBoxComponent = /** @class */ (function () {
    function ComboBoxComponent(elementRef) {
        this.elementRef = elementRef;
        this.initialValue = {};
        // Implementing ControlValueAccessor interface
        this.propagateChange = function (_) { };
    }
    ComboBoxComponent_1 = ComboBoxComponent;
    // get index of selected item from the available list. search param will be applicable on list, if any
    ComboBoxComponent.prototype.getSelectedIndex = function () {
        for (var i = 0; i < this.currentList.length; i++) {
            if (this.tempCurrent && this.tempCurrent !== null
                && this.tempCurrent[this.valueFieldName] === this.currentList[i][this.valueFieldName])
                return i;
        }
        return -1;
    };
    // Handles navigation through the list on arrow up or arrow down keys
    ComboBoxComponent.prototype.moveCurrentIndex = function (moveDirection) {
        var currentIndex = this.getSelectedIndex();
        var listSize = this.currentList.length;
        if (currentIndex === -1)
            this.tempCurrent = this.initialValue;
        else {
            if (moveDirection === "down")
                currentIndex = (currentIndex + 1) % listSize;
            else
                currentIndex = currentIndex === 0 ? listSize - 1 : --currentIndex;
            this.tempCurrent = this.currentList[currentIndex];
        }
    };
    ComboBoxComponent.prototype.ngOnInit = function () {
        if (!this.displayFieldName || this.displayFieldName === null)
            throw "Invalid displayFieldName";
        if (!this.valueFieldName || this.valueFieldName === null)
            throw "Invalid valueFieldName";
        this.currentList = this.list;
        this.initialValue[this.displayFieldName] = "--- Please select ---";
        this.initialValue[this.valueFieldName] = null;
    };
    // Checks if the searchTerm has changed and updates the UI accordingly
    ComboBoxComponent.prototype.ngDoCheck = function () {
        if (this.searchTerm !== this.oldSearchTerm) {
            this.refreshList();
            this.oldSearchTerm = this.searchTerm;
            var currentIndex = this.getSelectedIndex();
            if (currentIndex === -1 && this.currentList[0]) {
                this.tempCurrent = this.currentList[0];
            }
        }
    };
    ComboBoxComponent.prototype.ngAfterViewChecked = function () {
        if (this.showList) {
            var elementToFocus = this.listItemEls.find(function (listItem, i, array) {
                return listItem.nativeElement.className.indexOf("active") >= 0;
            });
            var viewableWindow = {
                start: this.listEl.nativeElement.scrollTop,
                end: this.listEl.nativeElement.scrollTop + this.listEl.nativeElement.offsetHeight
            };
            var itemOffset = {
                start: elementToFocus.nativeElement.offsetTop,
                end: elementToFocus.nativeElement.offsetTop + elementToFocus.nativeElement.offsetHeight
            };
            // scroll if item is not already within viewable window
            if (itemOffset.end > viewableWindow.end) {
                this.listEl.nativeElement.scrollTop += itemOffset.end - viewableWindow.end + 5;
            }
            else if (viewableWindow.start > itemOffset.start) {
                this.listEl.nativeElement.scrollTop -= viewableWindow.start - itemOffset.start + 5;
            }
        }
    };
    // searches by the searchTerm and updates the list
    ComboBoxComponent.prototype.refreshList = function () {
        var _this = this;
        if (this.list && this.list.length > 0) {
            var searchBy_1 = this.searchTerm.toLowerCase();
            var tempList = this.list.filter(function (listItem) {
                return listItem[_this.displayFieldName].toLowerCase().indexOf(searchBy_1) >= 0;
            });
            tempList.unshift(this.initialValue);
            this.currentList = tempList;
        }
    };
    // saves the item selected by user
    ComboBoxComponent.prototype.setValue = function (value) {
        this.showList = false;
        this.tempCurrent = value;
        this.currentVal = value;
        this.searchTerm = value[this.displayFieldName];
    };
    // Toggles show-hide of list on dropdown arrow click
    ComboBoxComponent.prototype.toggleListDisplay = function () {
        this.showList = !this.showList;
        this.searchTerm = this.showList ? "" : this.currentVal[this.displayFieldName];
    };
    // Helps in navigation through the list
    ComboBoxComponent.prototype.navigateList = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.keyCode === 27) {
            this.showList = false;
        }
        else if (event.keyCode === 38) {
            this.showList && this.moveCurrentIndex("up");
        }
        else if (event.keyCode === 40) {
            if (this.showList)
                this.moveCurrentIndex("down");
            else
                this.searchTerm = "";
        }
        // if not tab, shift or keys
        if ([9, 16, 17, 13, 27].indexOf(event.keyCode) === -1) {
            this.showList = true;
            this.refreshList();
        }
    };
    // handles tab events
    ComboBoxComponent.prototype.handleKeyDown = function (event) {
        var _this = this;
        if (event.keyCode === 9 || event.keyCode === 13) {
            this.setValue(this.tempCurrent);
            setTimeout(function () { return _this.showList = false; }, 200);
        }
    };
    // Hides the list if the user clicks outside of the component
    ComboBoxComponent.prototype.onClickOutside = function (event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.searchTerm = this.currentVal[this.displayFieldName];
            this.showList = false;
        }
    };
    Object.defineProperty(ComboBoxComponent.prototype, "currentVal", {
        get: function () {
            return this._currentVal;
        },
        set: function (value) {
            this._currentVal = value;
            this.propagateChange(this.currentVal);
        },
        enumerable: true,
        configurable: true
    });
    ComboBoxComponent.prototype.writeValue = function (value) {
        if ((value && value !== null) || this.currentList.length > 0) {
            this.currentVal = (value && value !== null) ? value : this.initialValue;
            this.searchTerm = this.currentVal[this.displayFieldName];
            this.oldSearchTerm = this.searchTerm;
            this.tempCurrent = this.currentVal;
        }
    };
    ComboBoxComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    ComboBoxComponent.prototype.registerOnTouched = function (fn) { };
    ComboBoxComponent.prototype.setDisabledState = function (isDisabled) { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], ComboBoxComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ComboBoxComponent.prototype, "invalid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], ComboBoxComponent.prototype, "displayFieldName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], ComboBoxComponent.prototype, "valueFieldName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])("list"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], ComboBoxComponent.prototype, "listEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChildren */])("listItemEls"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* QueryList */])
    ], ComboBoxComponent.prototype, "listItemEls", void 0);
    ComboBoxComponent = ComboBoxComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'combo-box',
            template: __webpack_require__("./src/app/combo-box/combo-box.component.html"),
            styles: [__webpack_require__("./src/app/combo-box/combo-box.component.css")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* forwardRef */])(function () { return ComboBoxComponent_1; }),
                    multi: true
                }
            ],
            host: {
                '(document:click)': 'onClickOutside($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], ComboBoxComponent);
    return ComboBoxComponent;
    var ComboBoxComponent_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map