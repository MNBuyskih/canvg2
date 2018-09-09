
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.CanVG2 = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var Property = /** @class */ (function () {
        function Property(_value) {
            this._value = _value;
        }
        Object.defineProperty(Property.prototype, "value", {
            get: function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        Property.prototype.toString = function () {
            return this._value;
        };
        return Property;
    }());
    //# sourceMappingURL=Property.js.map

    var Attribute = /** @class */ (function () {
        function Attribute(name, value) {
            this.name = name;
            this.value = this.getValue(value);
        }
        Attribute.prototype.getValue = function (value) {
            switch (this.name) {
                default:
                    return new Property(value);
            }
        };
        return Attribute;
    }());
    //# sourceMappingURL=Attribute.js.map

    var Attributes = /** @class */ (function () {
        function Attributes(attributes) {
            this.attributes = {};
            this.fillAttributes(attributes);
        }
        Attributes.create = function (attributes) {
            // @ts-ignore
            var attrs = new Attributes(attributes);
            // @ts-ignore
            return new Proxy(attrs, {
                get: function (target, name) {
                    return target.get(name);
                },
            });
        };
        Attributes.prototype.get = function (name) {
            return this.attributes[name];
        };
        Attributes.prototype.fillAttributes = function (attributes) {
            this.attributes = Array.from(attributes)
                .reduce(function (memo, attribute) {
                var name = attribute.name, value = attribute.value;
                memo[name] = new Attribute(name, value);
                return memo;
            }, this.attributes);
        };
        return Attributes;
    }());
    //# sourceMappingURL=Attributes.js.map

    var AbstractElements = /** @class */ (function () {
        function AbstractElements(element) {
            this.element = element;
            // static create: (element: HTMLElement) => (ElementsSvg | ElementsDummy);
            this.root = false;
            this.getAttributes();
        }
        AbstractElements.prototype.getAttributes = function () {
            this.attributes = Attributes.create(this.element.attributes);
        };
        return AbstractElements;
    }());
    //# sourceMappingURL=AbstractElements.js.map

    var ElementsDummy = /** @class */ (function (_super) {
        __extends(ElementsDummy, _super);
        function ElementsDummy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ElementsDummy;
    }(AbstractElements));
    //# sourceMappingURL=ElementsDummy.js.map

    var ElementsSvg = /** @class */ (function (_super) {
        __extends(ElementsSvg, _super);
        function ElementsSvg() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ElementsSvg;
    }(AbstractElements));
    //# sourceMappingURL=ElementsSvg.js.map

    //# sourceMappingURL=index.js.map

    var ElementsFactory = /** @class */ (function () {
        function ElementsFactory() {
        }
        ElementsFactory.create = function (element) {
            var newElement;
            switch (element.nodeName) {
                case "svg":
                    newElement = new ElementsSvg(element);
                    break;
                default:
                    console.warn("Unknown element " + element.nodeName);
                    newElement = new ElementsDummy(element);
                    break;
            }
            newElement.children = ElementsFactory.getChildren(element);
            return newElement;
        };
        ElementsFactory.getChildren = function (element) {
            return Array.from(element.children)
                .map(function (child) { return ElementsFactory.create(child); });
        };
        return ElementsFactory;
    }());

    var CanVG2 = /** @class */ (function () {
        function CanVG2(canvas, svg) {
            this.canvas = canvas;
            var context = this.canvas.getContext("2d");
            if (!context) {
                throw new Error("Can`t get context from target");
            }
            this.context = context;
            this.source = svg;
            this.parseXml();
        }
        CanVG2.prototype.draw = function () {
            // this.rootElement.render(this.context);
        };
        CanVG2.prototype.parseXml = function () {
            this.rootElement = ElementsFactory.create(this.source.documentElement);
            this.rootElement.root = true;
        };
        return CanVG2;
    }());
    //# sourceMappingURL=CanVG2.js.map

    //# sourceMappingURL=index.js.map

    return CanVG2;

})));
//# sourceMappingURL=canvg2.js.map
