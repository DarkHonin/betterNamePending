var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomColor = function (_React$Component) {
    _inherits(CustomColor, _React$Component);

    function CustomColor(props) {
        _classCallCheck(this, CustomColor);

        var _this = _possibleConstructorReturn(this, (CustomColor.__proto__ || Object.getPrototypeOf(CustomColor)).call(this, props));

        _this.state = {
            new_color_selection: '',
            preview_colors: [],
            active_color_selection: 0
        };

        _this.preview_new_color = _this.preview_new_color.bind(_this);
        _this.active_color_select = _this.active_color_select.bind(_this);
        return _this;
    }

    _createClass(CustomColor, [{
        key: 'update_state',
        value: function update_state(_ref) {
            var newCol = _ref.newCol,
                _ref$previwCol = _ref.previwCol,
                previwCol = _ref$previwCol === undefined ? '#FFFFFF' : _ref$previwCol,
                _ref$actCol = _ref.actCol,
                actCol = _ref$actCol === undefined ? -1 : _ref$actCol;


            var preview_cols = [].concat(_toConsumableArray(this.state ? this.state.preview_colors : []));
            if (newCol) preview_cols.push(newCol);

            if (actCol != -1) {
                // () => {
                var activeCollor = preview_cols[actCol];
                console.log("Active color: ", activeCollor);
                console.log(this.props.onChange);
                this.props.onChange(this.props.child.tag, this.props.child.rule ? this.props.child.rule : 'color', activeCollor);
            }

            this.setState({
                new_color_selection: previwCol ? previwCol : this.state.new_color_selection,
                preview_colors: preview_cols,
                active_color_selection: actCol
            });
        }
    }, {
        key: 'append_preview_color',
        value: function append_preview_color(color) {

            console.log('Append preview color', color);
            this.update_state({ newCol: color });
        }
    }, {
        key: 'preview_new_color',
        value: function preview_new_color(color) {
            console.log('Update preview color', color);
            this.update_state({ previwCol: color });
        }
    }, {
        key: 'active_color_select',
        value: function active_color_select(index) {
            console.log('Setting active Color', index);
            this.update_state({ actCol: index });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { className: 'custom color', id: this.props.id },
                React.createElement(
                    'span',
                    { className: 'title' },
                    this.props.title
                ),
                React.createElement('input', { onChange: function onChange(e) {
                        return _this2.preview_new_color(e.target.value);
                    }, style: { backgroundColor: this.state.new_color_selection }, onKeyDown: function onKeyDown(e) {
                        return e.key === 'Enter' ? _this2.append_preview_color(e.target.value) : '';
                    } }),
                React.createElement(
                    'div',
                    { className: 'palet' },
                    this.state.preview_colors.map(function (v, k) {
                        return React.createElement(
                            'div',
                            { onClick: function onClick(e) {
                                    return _this2.active_color_select(k);
                                }, key: k, className: 'color ' + (k == _this2.state.active_color_selection ? 'active' : '') },
                            React.createElement('div', { style: { backgroundColor: v } }),
                            ' '
                        );
                    })
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                new_color_selection: "",
                preview_colors: this.props.child.colors.map(function (v) {
                    return v;
                }),
                active_color_selection: -1
            });
        }
    }]);

    return CustomColor;
}(React.Component);

export default CustomColor;