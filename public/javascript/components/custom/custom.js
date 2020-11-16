function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Toggle from '../toggle.js';

var customs = 0;

var Custom = function (_React$Component) {
    _inherits(Custom, _React$Component);

    function Custom(props) {
        _classCallCheck(this, Custom);

        var _this = _possibleConstructorReturn(this, (Custom.__proto__ || Object.getPrototypeOf(Custom)).call(this, props));

        _this.child = _this.props.child ? _this.props.child : {
            class: "",
            id: "",
            title: "",
            type: "",
            fonts: [],
            tag: "",
            rule: "",
            children: [],
            colors: []
        };
        _this.props.id = _this.props.id ? _this.props.id : "'custom_" + customs++ + "'";
        return _this;
    }

    return Custom;
}(React.Component);

export default Custom;