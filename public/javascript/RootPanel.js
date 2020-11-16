var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const { faGrinTongueSquint } = require("@fortawesome/free-solid-svg-icons");

import Toggle from './components/toggle.js';
import CustomGroup from './components/customGroup.js';

var json_fetch = function json_fetch(url) {
    return fetch(url, { headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        } }).then(function (e) {
        return Object(e.json());
    }, function (Err) {
        return console.log(Err);
    });
};

var config = json_fetch("./config.json");
config.then(function (e) {
    var DEBUG_STRUCT = e;return DEBUG_STRUCT;
});

var RootPanel = function (_React$Component) {
    _inherits(RootPanel, _React$Component);

    function RootPanel(props) {
        _classCallCheck(this, RootPanel);

        var _this = _possibleConstructorReturn(this, (RootPanel.__proto__ || Object.getPrototypeOf(RootPanel)).call(this, Object.assign({}, props, { id: "headgroup", title: "Custom" })));

        _this.state = {
            components: []
        };
        return _this;
    }

    _createClass(RootPanel, [{
        key: 'render',
        value: function render() {
            var customs = this.state.components.map(function (child, index) {
                switch (child.type) {
                    case 'group':
                        return React.createElement(CustomGroup, { key: index, title: child.title, id: child.id, customs: child.children, child: child });
                }
            });
            return React.createElement(
                'div',
                { id: 'debug_panel' },
                React.createElement('link', { rel: 'stylesheet', href: '/stylesheets/debug.css' }),
                React.createElement('link', { rel: 'stylesheet', href: '/stylesheets/toggle.css' }),
                React.createElement('link', { rel: 'stylesheet', href: '/stylesheets/custom.css' }),
                React.createElement(
                    'div',
                    { id: 'debugMain', className: 'main toggle body' },
                    React.createElement('div', { id: 'littleMenu' }),
                    customs ? customs : React.createElement(
                        'span',
                        null,
                        'No customs'
                    )
                ),
                React.createElement(Toggle, { target: 'debugMain', icon: 'fas fa-edit', id: 'mainToggle' })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            config.then(function (json) {
                return _this2.setState(Object.assign({}, json));
            });
        }
    }]);

    return RootPanel;
}(React.Component);

/** Mounts the app to the context */

ReactDOM.render(React.createElement(RootPanel, null), document.querySelector('#Root'));