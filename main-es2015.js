(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kibernum\Documents\GitHub\appCocinaPrueba\src\main.ts */"zUnb");


/***/ }),

/***/ "8Ejy":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #D8AD3D;\n  border-color: #D8AD3D;\n}\n\n.list-group {\n  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);\n  border-radius: 10px;\n  margin-bottom: 16px;\n}\n\n.list-group-item {\n  border: none;\n}\n\n.card-img-top {\n  min-height: 177px;\n}\n\n.card {\n  width: 15rem;\n  margin-right: 24px;\n  transition: all 0.8s linear;\n  border-radius: 10px;\n}\n\n@media (max-width: 416px) {\n  .card {\n    width: 97%;\n  }\n}\n\n.card-skeleton {\n  width: 15rem;\n  margin-right: 24px;\n  padding: 16px;\n  border-radius: 10px;\n  border: 0;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);\n}\n\n@media (max-width: 416px) {\n  .card-skeleton {\n    width: 97%;\n  }\n}\n\n.title {\n  text-align: center;\n}\n\n.card-text-title {\n  font-weight: 700;\n}\n\n.profile-img-section {\n  height: 150px;\n  width: 100%;\n}\n\n.text1 {\n  height: 25px;\n  margin-top: 16px;\n  width: 75%;\n}\n\n.text2 {\n  height: 35px;\n  margin-top: 16px;\n  width: 100%;\n}\n\n.profile-img-section, .text1, .text2 {\n  animation: loading 1.1s infinite linear;\n  background: #dedfe1;\n  background-image: linear-gradient(to right, #dedfe1 0%, #f2f3f5 20%, #dedfe1 40%, #dedfe1 100%);\n  background-repeat: no-repeat;\n}\n\n@keyframes loading {\n  0% {\n    background-position: -100px;\n  }\n  100% {\n    background-position: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksNENBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUFJO0VBTEo7SUFNUSxVQUFBO0VBR047QUFDRjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBR0o7O0FBRkk7RUFYSjtJQVlRLFVBQUE7RUFLTjtBQUNGOztBQUhBO0VBQ0ksa0JBQUE7QUFNSjs7QUFIQTtFQUNJLGdCQUFBO0FBTUo7O0FBSEE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUhBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxBO0VBQ0ksdUNBQUE7RUFDQSxtQkFBQTtFQUVBLCtGQUFBO0VBQ0EsNEJBQUE7QUFRSjs7QUFMQTtFQUNJO0lBQ0UsMkJBQUE7RUFRSjtFQU5FO0lBQ0EsMEJBQUE7RUFRRjtBQUNGIiwiZmlsZSI6InByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4QUQzRDtcclxuICAgIGJvcmRlci1jb2xvcjogI0Q4QUQzRDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtIHsgICAgXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3B7XHJcbiAgICBtaW4taGVpZ2h0OiAxNzdweDtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjhzIGxpbmVhcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA0MTZweCkge1xyXG4gICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLXNrZWxldG9ue1xyXG4gICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDA7ICAgIFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IDBweCByZ2IoMCAwIDAgLyAyMCUpO1xyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNDE2cHgpIHtcclxuICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgfVxyXG59XHJcbi50aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtdGV4dC10aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltZy1zZWN0aW9ueyAgICBcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRleHQxe1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuLnRleHQye1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wcm9maWxlLWltZy1zZWN0aW9uLCAudGV4dDEsIC50ZXh0MntcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZyAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIGJhY2tncm91bmQ6ICNkZWRmZTE7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2RlZGZlMSAwJSwgI2YyZjNmNSAyMCUsICNkZWRmZTEgNDAlLCAjZGVkZmUxIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZGVkZmUxIDAlLCAjZjJmM2Y1IDIwJSwgI2RlZGZlMSA0MCUsICNkZWRmZTEgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xyXG4gICAgMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwcHg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMHB4O1xyXG4gICAgfVxyXG4gIH0iXX0= */");

/***/ }),

/***/ "93si":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./components.component.html */ "NPo9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ComponentsComponent = class ComponentsComponent {
    constructor() {
    }
    ngOnInit() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    }
    ngOnDestroy() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
};
ComponentsComponent.ctorParameters = () => [];
ComponentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-components',
        template: _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
    })
], ComponentsComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    url: 'https://5eed24da4cbc340016330f0d.mockapi.io/',
};


/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





let NavbarComponent = class NavbarComponent {
    constructor(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        const navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }
    ;
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    }
    ;
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * Componente del navbar
     */
], NavbarComponent);



/***/ }),

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact.component.html */ "jmJk");
/* harmony import */ var _contact_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component.scss */ "P7M0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_service_product_service_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/service-product/service-product.service */ "X3lP");






let ContactComponent = class ContactComponent {
    constructor(serviceProductos) {
        this.serviceProductos = serviceProductos;
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?")
            ]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])
        });
    }
    ngOnInit() {
    }
    /**
     * Esta funcion permite consumir el servicio del contacto del formulario
     */
    guardarContacto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = {
                'firstname': this.formulario.value.nombre,
                'lastname': this.formulario.value.apellido,
                'email': this.formulario.value.mail,
                'phone': this.formulario.value.telefono
            };
            yield this.serviceProductos.setFormulario(data).toPromise().then(response => {
            }).catch(error => {
                alert(error.statusText);
                console.log(error);
            });
        });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _core_service_product_service_product_service__WEBPACK_IMPORTED_MODULE_5__["ServiceProductService"] }
];
ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * Componente del formuluario de contacto
     */
], ContactComponent);



/***/ }),

/***/ "NPo9":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"page-header clear-filter\" >\r\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('assets/img/bgLista.png');\">\r\n\r\n    </div>\r\n    <div>\r\n        <img src=\"assets/img/marca.png\" class=\"img-branch\" alt=\"\" >\r\n    </div>\r\n    <div class=\"container \">\r\n        <div class=\"content-left brand\">              \r\n            <h1 class=\"h1-seo title-slider\">El secreto <br>de tu cocina</h1>                  \r\n        </div>  \r\n     </div>\r\n  </div>\r\n\r\n  <div class=\"main\">   \r\n      <app-products></app-products>\r\n      <app-contact></app-contact> \r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "OnnP":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_products_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./products.component.html */ "x3mF");
/* harmony import */ var _products_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component.scss */ "8Ejy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_service_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/service-product/service-product.service */ "X3lP");





let ProductsComponent = class ProductsComponent {
    constructor(serviceProductos) {
        this.serviceProductos = serviceProductos;
        this.skeleton = [1, 2, 3, 4, 5, 6];
        this.activeMenu = '';
    }
    ngOnInit() {
        this.getAllProductos();
    }
    /**
     * Obtiene todos los productos
     */
    getAllProductos() {
        this.loading = true;
        this.activeMenu = 'Todos';
        this.serviceProductos.getAllProduct().subscribe(response => {
            this.loading = false;
            this.dataProductos = response;
        }, (error) => {
            this.loading = false;
            console.log("ocurrio un error al precargar ***** ", error);
        });
    }
    /**
    *Funcion para consumir api por categoria
    */
    getProductCategories(type) {
        this.loading = true;
        this.activeMenu = type;
        let data = {
            'filter': type
        };
        this.serviceProductos.getCategoryProduct(data).toPromise().then(response => {
            this.loading = false;
            this.dataProductos = response;
        }).catch(error => {
            this.loading = false;
            console.log("error:", error);
        });
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _core_service_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ServiceProductService"] }
];
ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-products',
        template: _raw_loader_products_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_products_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * Componente del listado de producto y las categorias
     */
], ProductsComponent);



/***/ }),

/***/ "P7M0":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-bold {\n  font-weight: 600;\n}\n\n.title {\n  text-align: center;\n}\n\n.btn-primary.disabled, .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary.disabled:active, .btn-primary.disabled.active, .btn-primary:disabled, .btn-primary:disabled:hover, .btn-primary:disabled:focus, .btn-primary:disabled.focus, .btn-primary:disabled:active, .btn-primary:disabled.active, .btn-primary[disabled], .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus, .btn-primary[disabled]:active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary, fieldset[disabled] .btn-primary:hover, fieldset[disabled] .btn-primary:focus, fieldset[disabled] .btn-primary.focus, fieldset[disabled] .btn-primary:active, fieldset[disabled] .btn-primary.active {\n  background-color: #888888 !important;\n  border-color: #888888 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBR0E7RUFDSSxvQ0FBQTtFQUNBLGdDQUFBO0FBQUoiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmJ0bi1wcmltYXJ5LmRpc2FibGVkLCAuYnRuLXByaW1hcnkuZGlzYWJsZWQ6aG92ZXIsIC5idG4tcHJpbWFyeS5kaXNhYmxlZDpmb2N1cywgLmJ0bi1wcmltYXJ5LmRpc2FibGVkLmZvY3VzLCAuYnRuLXByaW1hcnkuZGlzYWJsZWQ6YWN0aXZlLCAuYnRuLXByaW1hcnkuZGlzYWJsZWQuYWN0aXZlLCAuYnRuLXByaW1hcnk6ZGlzYWJsZWQsIC5idG4tcHJpbWFyeTpkaXNhYmxlZDpob3ZlciwgLmJ0bi1wcmltYXJ5OmRpc2FibGVkOmZvY3VzLCAuYnRuLXByaW1hcnk6ZGlzYWJsZWQuZm9jdXMsIC5idG4tcHJpbWFyeTpkaXNhYmxlZDphY3RpdmUsIC5idG4tcHJpbWFyeTpkaXNhYmxlZC5hY3RpdmUsIC5idG4tcHJpbWFyeVtkaXNhYmxlZF0sIC5idG4tcHJpbWFyeVtkaXNhYmxlZF06aG92ZXIsIC5idG4tcHJpbWFyeVtkaXNhYmxlZF06Zm9jdXMsIC5idG4tcHJpbWFyeVtkaXNhYmxlZF0uZm9jdXMsIC5idG4tcHJpbWFyeVtkaXNhYmxlZF06YWN0aXZlLCAuYnRuLXByaW1hcnlbZGlzYWJsZWRdLmFjdGl2ZSwgZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeSwgZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeTpob3ZlciwgZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeTpmb2N1cywgZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeS5mb2N1cywgZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeTphY3RpdmUsIGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXByaW1hcnkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg4ODghaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODg4ODg4IWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");









let AppComponent = class AppComponent {
    constructor(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    ngOnInit() {
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]).subscribe((event) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();
            this.renderer.listen('window', 'scroll', (event) => {
                const number = window.scrollY;
                var _location = this.location.path();
                _location = _location.split('/')[2];
                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                }
                else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
AppComponent.propDecorators = {
    navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "X3lP":
/*!*************************************************************!*\
  !*** ./src/core/service-product/service-product.service.ts ***!
  \*************************************************************/
/*! exports provided: ServiceProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProductService", function() { return ServiceProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




let ServiceProductService = class ServiceProductService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.api_productos = this.url + 'api/'; //url del nombre del servicio
    }
    /**
     * Obtiene todos los productos
     * @returns
     */
    getAllProduct() {
        return this.http.get(this.api_productos + 'articles');
    }
    /**
     * Obtiene los productos por categoria
     * @param data
     * @returns
     */
    getCategoryProduct(data) {
        return this.http.get(this.api_productos + 'articles', { params: data });
    }
    /**
     * Envia el formulario de newslatter
     * @param data
     * @returns
     */
    setFormulario(data) {
        return this.http.post(this.api_productos + 'newsletter', data);
    }
};
ServiceProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ServiceProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ServiceProductService);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

 // this is needed!









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.component */ "93si");






const routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _components_components_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
        ],
        exports: [],
    })
], AppRoutingModule);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-youtube {\n  border-radius: 50px;\n  border: 3px solid #B72C2C;\n}\n\n.icon-instagram {\n  border-radius: 50px;\n  border: 3px solid #D8AD3D;\n}\n\n.icon-facebook {\n  border-radius: 50px;\n  border: 3px solid #009CD9;\n}\n\n.navbar .navbar-nav .nav-item.active .nav-link:not(.btn), .navbar .navbar-nav .nav-item .nav-link:not(.btn):focus, .navbar .navbar-nav .nav-item .nav-link:not(.btn):hover, .navbar .navbar-nav .nav-item .nav-link:not(.btn):active {\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBS0E7RUFDSSxtQkFBQTtBQUZKIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXlvdXR1YmV7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0I3MkMyQztcclxuXHJcbn1cclxuXHJcbi5pY29uLWluc3RhZ3JhbXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRDhBRDNEO1xyXG5cclxufVxyXG5cclxuLmljb24tZmFjZWJvb2t7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwOUNEOTtcclxuXHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtLmFjdGl2ZSAubmF2LWxpbms6bm90KC5idG4pLCAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6bm90KC5idG4pOmZvY3VzLCAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6bm90KC5idG4pOmhvdmVyLCAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6bm90KC5idG4pOmFjdGl2ZSB7ICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "yw8I");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "G2Gn");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/products.component */ "OnnP");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components.component */ "93si");











let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [
            _components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"]
        ],
        exports: [_components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"]]
    })
], ComponentsModule);



/***/ }),

/***/ "jmJk":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-basic\">\r\n    <div class=\"container\" >\r\n        <div>\r\n        <img src=\"assets/img/light-marca.png\" class=\"img-section-contact\" alt=\"\" >\r\n        </div>\r\n      <h3 class=\"title-section\">Contactanos</h3>   \r\n      <div id=\"inputs\">  \r\n        <form [formGroup]=\"formulario\" class=\"form\">     \r\n          <div class=\"row\">\r\n              <div class=\"col-sm-6 col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label id=\"name\" class=\"label-bold\">Nombre</label>\r\n                    <input type=\"text\" value=\"\" formControlName=\"nombre\" placeholder=\"Nombre\" class=\"form-control\" />\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-6 col-lg-6\">\r\n                <div class=\"form-group\">\r\n                    <label id=\"name\" class=\"label-bold\">Apellidos</label>\r\n                    <input type=\"text\" value=\"\" placeholder=\"Apellido\" formControlName=\"apellido\" class=\"form-control\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6 col-lg-6\">\r\n                <div class=\"form-group\">\r\n                    <label id=\"name\" class=\"label-bold\">Mail</label>\r\n                    <input type=\"text\" value=\"\" placeholder=\"Mail\" formControlName=\"mail\" class=\"form-control\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6 col-lg-6\">\r\n                <div class=\"form-group\">\r\n                    <label id=\"name\" class=\"label-bold\">Telefono</label>\r\n                    <input type=\"text\" value=\"\" placeholder=\"Telefono\" formControlName=\"telefono\" class=\"form-control\" />\r\n                </div>\r\n            </div>\r\n          \r\n    \r\n          </div>\r\n        </form>\r\n          <button class=\"btn btn-primary \" type=\"button\" (click)=\"guardarContacto()\" [disabled]=\"(formulario.invalid)\" >Enviar</button>\r\n         \r\n      </div>\r\n    \r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "x3mF":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-navbars\">\r\n    <div class=\"container\" style=\"padding-top: 3rem\" >\r\n        <div>\r\n            <img src=\"assets/img/light-marca.png\" class=\"img-section\" alt=\"\" >\r\n            </div>\r\n        <h3 class=\"title-section\">Nuestros artículos</h3>         \r\n        <div class=\"row\" style=\"padding-top: 5rem; padding-bottom: 5rem;\">\r\n            <div class=\"col-md-3\">                \r\n                <div class=\"list-group\">\r\n                    <button type=\"button\" class=\"list-group-item list-group-item-action\" [ngClass]=\"activeMenu === 'Todos'? 'active':'' \" (click)=\"getAllProductos()\">\r\n                      TODOS\r\n                    </button>\r\n                    <button type=\"button\" class=\"list-group-item list-group-item-action\" [ngClass]=\"activeMenu === 'Productos'? 'active':'' \" (click)=\"getProductCategories('Productos')\">PRODUCTOS</button>\r\n                    <button type=\"button\" class=\"list-group-item list-group-item-action\" [ngClass]=\"activeMenu === 'Recetas'? 'active':'' \"  (click)=\"getProductCategories('Recetas')\">RECETAS</button>\r\n                    <button type=\"button\" class=\"list-group-item list-group-item-action\" [ngClass]=\"activeMenu === 'Consejos'? 'active':'' \" (click)=\"getProductCategories('Consejos')\">CONSEJOS</button>                    \r\n                  </div>\r\n            </div>\r\n            <div class=\"col-md-9\" *ngIf=\"loading\">\r\n                <div class=\"card-skeleton\" *ngFor=\"let ske of skeleton \">\r\n                    <div class=\"profile-img-section\"></div>       \r\n                    <div class=\"text1\"> </div>\r\n                    <div class=\"text2\"></div>                              \r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9\" *ngIf=\"dataProductos != undefined && !loading\">               \r\n                <div class=\"card\" *ngFor=\"let producto of dataProductos\">\r\n                    <img class=\"card-img-top\" src=\"{{producto.image}}\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                      <p class=\"card-text-title\">{{producto.title}}</p>\r\n                      <p class=\"card-text\">{{producto.content}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-center {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-white fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n  <div class=\"container\">\r\n    <div class=\"dropdown button-dropdown\">\r\n  \r\n    </div>\r\n      <div class=\"navbar-translate\">\r\n          <a class=\"navbar-brand title-logo\" [routerLink]=\"['/index']\" placement=\"bottom\" >\r\n            Logo\r\n          </a>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n              <span class=\"navbar-toggler-bar bar1\"></span>\r\n              <span class=\"navbar-toggler-bar bar2\"></span>\r\n              <span class=\"navbar-toggler-bar bar3\"></span>\r\n          </button>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"white\">\r\n          <ul class=\"navbar-nav ml-auto\">      \r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link icon-facebook\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\"  target=\"_blank\">\r\n                  <i class=\"fab fa-facebook-square\" style=\"color: #009CD9\"></i>\r\n                  <p class=\"d-lg-none d-xl-none\">Facebook</p>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link icon-youtube\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\" target=\"_blank\">\r\n                  <i class=\"fab fa-youtube\" style=\"color: #B72C2C\"></i>\r\n                  <p class=\"d-lg-none d-xl-none\">Youtube</p>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link icon-instagram\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\"  target=\"_blank\">\r\n                  <i class=\"fab fa-instagram\" style=\"color: #D8AD3D\" ></i>\r\n                  <p class=\"d-lg-none d-xl-none\">Instagram</p>\r\n                </a>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n  </div>\r\n</nav>\r\n\r\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

=========================================================
* Now UI Kit Angular - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-angular
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map