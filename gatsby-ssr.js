"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _jsxFileName = "/home/me/dev/gatsby-remark-images/src/gatsby-ssr.js";

const {
  imageClass
} = require(`./constants`);

exports.onRenderBody = ({
  setHeadComponents
}) => {
  const style = `
  .${imageClass} {
    width: 100%;
    height: 100%;
    margin: 0;
    vertical-align: middle;
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
  }`.replace(/\s*\n\s*/g, ``).replace(/: /g, `:`).replace(/ \{/g, `{`);
  setHeadComponents([_react.default.createElement("style", {
    type: "text/css",
    key: "gatsby-remark-images-styles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: void 0
  }, style)]);
};