"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var uikit_1 = require("@pancakeswap-libs/uikit");
var TranslatedText_1 = require("../TranslatedText");
var StyledNav = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 40px;\n  margin-top: 32px;\n"], ["\n  margin-bottom: 40px;\n  margin-top: 32px;\n"])));
var Nav = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b;
    return (react_1["default"].createElement(StyledNav, null,
        react_1["default"].createElement("div", { className: "lottery" },
            react_1["default"].createElement(uikit_1.ButtonMenu, { activeIndex: activeIndex, size: "md", variant: "subtle" },
                react_1["default"].createElement(uikit_1.ButtonMenuItem, { id: "pool-nav-link", className: "lottery-link", to: "/swap", as: react_router_dom_1.Link },
                    react_1["default"].createElement(TranslatedText_1["default"], { translationId: 8 }, "Swap")),
                react_1["default"].createElement(uikit_1.ButtonMenuItem, { id: "pool-nav-link", className: "lottery-link", to: "/pool", as: react_router_dom_1.Link },
                    react_1["default"].createElement(TranslatedText_1["default"], { translationId: 74 }, "Liquidity")),
                react_1["default"].createElement(uikit_1.ButtonMenuItem, { id: "pool-nav-link", className: "lottery-link", as: "a", href: "https://www.binance.org/en/panama", target: "_parent", rel: "noreferrer noopener" }, "Bridge")))));
};
exports["default"] = Nav;
var templateObject_1;
