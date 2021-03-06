'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var className = props.className,
      children = props.children;

  var cls = (0, _classnames2.default)('component-button-group-wrap', className);
  return _react2.default.createElement(
    'div',
    { className: cls },
    children
  );
};