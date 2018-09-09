
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CanVG2 = factory());
}(this, (function () { 'use strict';

  var ElementsSvg = /** @class */ (function () {
      function ElementsSvg(element) {
          this.element = element;
          this.root = false;
          this.getAttributes();
      }
      ElementsSvg.prototype.render = function (context) {
      };
      ElementsSvg.prototype.getAttributes = function () {
      };
      return ElementsSvg;
  }());

  var CanVG2 = /** @class */ (function () {
      function CanVG2(canvas, svg) {
          this.canvas = canvas;
          var context = this.canvas.getContext("2d");
          if (!context) {
              throw new Error("Can`t get context from target");
          }
          this.context = context;
          this.svg = svg;
          this.parseXml();
      }
      CanVG2.prototype.draw = function () {
          this.rootElement.render(this.context);
      };
      CanVG2.prototype.parseXml = function () {
          this.rootElement = this.createElement(this.svg.documentElement);
          this.rootElement.root = true;
      };
      CanVG2.prototype.createElement = function (element) {
          return new ElementsSvg(element);
      };
      return CanVG2;
  }());

  return CanVG2;

})));
//# sourceMappingURL=canvg2.js.map
