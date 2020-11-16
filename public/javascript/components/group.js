var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Custom from './custom/custom.js';
import CustomColor from './customColor.js';
import CustomFont from './customFont.js';

var groups = 0;

var Group = function (_Custom) {
    _inherits(Group, _Custom);

    function Group(props) {
        _classCallCheck(this, Group);

        var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, Object.assign({}, props, { className: 'group' })));

        _this.state = {
            styleList: {}
        };


        _this.body_id = groups++ + '_group_body';

        _this.generate = _this.props.gen ? _this.props.gen : [];

        _this.fontlist = {};
        _this.handleChange = _this.handleChange.bind(_this);

        return _this;
    }

    _createClass(Group, [{
        key: 'handleChange',
        value: function handleChange(tag, rule, attr) {
            var _this2 = this;

            console.log(tag, { rule: rule, attr: attr });
            var styles = {};
            styles[tag] = [attr];
            if (!this.state.styleList[tag]) {
                this.state.styleList[tag] = {};
                this.state.styleList[tag][rule] = attr;
            } else this.state.styleList[tag][rule] = attr;

            this.setState(this.state);
            var css = "";
            css = Object.keys(this.state.styleList).map(function (k) {
                var rules = Object.keys(_this2.state.styleList[k]).map(function (n) {
                    return ';' + n + ' : ' + _this2.state.styleList[k][n] + ';\n';
                });
                return k + '{' + rules + '}\n';
            });
            var style = document.getElementById('styles_' + this.body_id);
            if (!style) {
                style = document.createElement('style');
                style.setAttribute('id', 'styles_' + this.body_id);
                document.head.appendChild(style);
            }
            style.innerHTML = "";
            css.map(function (v) {
                return style.innerHTML += v;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var childrenWithProps = React.Children.map(this.props.children, function (index, child) {
                // checking isValidElement is the safe way and avoids a typescript error too
                var props = {};
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, props);
                }
                return child;
            });

            var elements = this.props.customs.map(function (child, index) {
                switch (child.type) {
                    case 'font':
                        return React.createElement(CustomFont, { key: index, child: child, onChange: _this3.handleChange });
                    case 'group':
                        return React.createElement(CustomGroup, { key: index, child: child });
                    case 'color':
                        return React.createElement(CustomColor, { key: index, child: child, onChange: _this3.handleChange });
                    default:
                        return React.createElement(
                            'span',
                            { key: index },
                            'No customs'
                        );
                }
            }.bind(this));

            return React.createElement(
                'div',
                { className: 'custom ' + this.child.class + ' ' + this.props.className, id: this.child.id },
                React.createElement(
                    'div',
                    { className: 'header' },
                    React.createElement(
                        'span',
                        { className: 'title' },
                        this.child.title
                    ),
                    React.createElement(Toggle, { target: this.props.id, icon: 'fas fa-edit' })
                ),
                React.createElement(
                    'div',
                    { className: 'body', id: this.props.id },
                    React.createElement(
                        'div',
                        { className: 'custom group toggle body vert', id: this.body_id },
                        childrenWithProps,
                        elements
                    )
                )
            );
        }
    }, {
        key: 'attatch_style',
        value: function attatch_style(name, sheet) {
            this['style_' + name] = sheet;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // const style = document.createElement('style')

            // style.setAttribute("id", `style_${this.id}`)
            // let select = document.querySelector(`#style_${this.id}`)
            // if(!select){
            //     document.head.appendChild(style)
            //     this.style = style
            // }else{
            //     this.style = select
            // }

        }
    }]);

    return Group;
}(Custom);

export default Group;