var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomFont = function (_React$Component) {
    _inherits(CustomFont, _React$Component);

    function CustomFont(props) {
        _classCallCheck(this, CustomFont);

        var _this = _possibleConstructorReturn(this, (CustomFont.__proto__ || Object.getPrototypeOf(CustomFont)).call(this, props));

        _this.update_font = _this.update_font.bind(_this);
        return _this;
    }

    _createClass(CustomFont, [{
        key: 'update_font',
        value: function update_font(e) {
            this.setState({
                font: e,
                fonts: this.state.fonts
            });
            var font = this.state.fonts[e];
            this.props.onChange(this.props.child.tag, 'font-family', font);
            // debugStyles.innerHTML = `.title{font-family: ${this.fonts.fonts[this.state.font]}}`
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { className: 'custom font', id: this.props.id },
                React.createElement(
                    'span',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'div',
                    { className: 'preview' },
                    React.createElement(
                        'select',
                        { onChange: function onChange(e) {
                                return _this2.update_font(e.target.value);
                            } },
                        this.font_options
                    )
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            var getFontThings = function () {
                var font_options = _this3.props.child.fonts.map(function (value, index) {
                    return React.createElement(
                        'option',
                        { className: 'font_' + index, key: index, value: index },
                        value
                    );
                });
                var font_refrence = _this3.props.child.fonts.map(function (v) {
                    return v;
                });

                _this3.font_options = font_options;
                _this3.font_refrence = font_refrence;

                _this3.setState({
                    font: 0,
                    fonts: font_refrence
                });
            }.bind(this);

            new Promise(getFontThings);
        }
    }]);

    return CustomFont;
}(React.Component);

export default CustomFont;