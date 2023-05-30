"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var home_png_1 = require("../../images/icon/home.png");
var trade_png_1 = require("../../images/icon/trade.png");
var farms_png_1 = require("../../images/icon/farms.png");
var pool_png_1 = require("../../images/icon/pool.png");
var lotto_png_1 = require("../../images/icon/lotto.png");
var soon_png_1 = require("../../images/icon/soon.png");
var MobileFooter = function () {
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var _b = react_1.useState(false), openNew = _b[0], setOpenNew = _b[1];
    var openHandle = function () {
        setOpen(!open);
        setOpenNew(false);
    };
    var openNewHandle = function () {
        setOpen(false);
        setOpenNew(!openNew);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("nav", { className: "mobile-nav" },
            react_1["default"].createElement("li", { className: "mobile-nav-li" },
                react_1["default"].createElement("a", { href: "https://milkshakeswap.finance/", target: "_parent", rel: "noreferrer" },
                    react_1["default"].createElement("img", { src: home_png_1["default"], alt: "home", className: "menu-img" }),
                    react_1["default"].createElement("div", { style: { fontSize: '8px' } }, "Home"))),
            react_1["default"].createElement("li", { style: { cursor: 'pointer' }, className: "mobile-nav-li" },
                react_1["default"].createElement("span", { onClick: openHandle, "aria-hidden": "true" },
                    react_1["default"].createElement("img", { src: trade_png_1["default"], alt: "home", className: "menu-img" }),
                    react_1["default"].createElement("div", { style: { fontSize: '8px' } }, "Trade"))),
            react_1["default"].createElement("li", { className: "mobile-nav-li" },
                react_1["default"].createElement("a", { href: "https://milkshakeswap.finance/farm", target: "_parent", rel: "noreferrer" },
                    react_1["default"].createElement("img", { src: farms_png_1["default"], alt: "home", className: "menu-img" }),
                    react_1["default"].createElement("div", { style: { fontSize: '8px' } }, "Milking"))),
            react_1["default"].createElement("li", { className: "mobile-nav-li" },
                react_1["default"].createElement("a", { href: "https://milkshakeswap.finance/pool", target: "_parent", rel: "noreferrer" },
                    react_1["default"].createElement("img", { src: pool_png_1["default"], alt: "home", className: "menu-img" }),
                    react_1["default"].createElement("div", { style: { fontSize: '8px' } }, "Flavour Poll"))),
            react_1["default"].createElement("li", { className: "mobile-nav-li" },
                react_1["default"].createElement("a", { href: "https://milkshakeswap.finance/stake", target: "_parent", rel: "noreferrer" },
                    react_1["default"].createElement("img", { src: lotto_png_1["default"], alt: "home", className: "menu-img" }),
                    react_1["default"].createElement("div", { style: { fontSize: "8px" } }, "staking"))),
            react_1["default"].createElement("li", { style: { cursor: 'pointer' }, className: "mobile-nav-li" },
                react_1["default"].createElement("span", { onClick: openNewHandle, "aria-hidden": "true" },
                    react_1["default"].createElement("img", { src: soon_png_1["default"], alt: "home", className: "menu-img" }),
                    react_1["default"].createElement("div", { style: { fontSize: '8px' } }, "coming Soon")))),
        open ? (react_1["default"].createElement("nav", { className: "mobile-nav2" },
            react_1["default"].createElement("li", { className: "open-li" },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/swap" }, "Exchange")),
            react_1["default"].createElement("li", { className: "open-li" },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/pool" }, "Liquidity")))) : (''),
        openNew ? (react_1["default"].createElement("nav", { className: "mobile-nav3" },
            react_1["default"].createElement("li", { className: "open-li" },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/launchpad" }, "Launchpad")),
            react_1["default"].createElement("li", { className: "open-li" },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/nft-marketplace" }, "NFT MarketPlace")),
            react_1["default"].createElement("li", { className: "open-li" },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/m-el-dorado" }, "M El Dorado")))) : ('')));
};
exports["default"] = MobileFooter;
