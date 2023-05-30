"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("@web3-react/core");
var fa_1 = require("react-icons/fa");
var io_1 = require("react-icons/io");
var react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
var react_bootstrap_1 = require("react-bootstrap");
var md_1 = require("react-icons/md");
var ConnectWalletButton_1 = require("components/ConnectWalletButton");
var bsc_scan_svg_1 = require("../../images/icon/bsc-scan.svg");
// eslint-disable-next-line @typescript-eslint/ban-types
var Nav = function () {
    var _a = react_1.useState(false), show = _a[0], setShow = _a[1];
    var _b = react_1.useState(false), a = _b[0], setA = _b[1];
    var handleClose = function () { return setShow(false); };
    var handleShow = function () { return setShow(true); };
    var _c = core_1.useWeb3React(), account = _c.account, activate = _c.activate, deactivate = _c.deactivate;
    var bscScan = "https://bscscan.com/address/" + account;
    // console.log(account, 'accoun0navt')
    var logOut = function () {
        deactivate();
    };
    return (react_1["default"].createElement("nav", { className: "mainmenu-nav" },
        react_1["default"].createElement("ul", { className: "mainmenu" },
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "https://milkshakeswap.finance/" }, "Home")),
            react_1["default"].createElement("li", { className: "menu-item-has-children" },
                react_1["default"].createElement("div", null,
                    "Trade ",
                    react_1["default"].createElement(fa_1.FaAngleDown, null)),
                react_1["default"].createElement("ul", { className: "axil-submenu" },
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/swap" }, "Swap")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/pool" }, "Pool")))),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "https://milkshakeswap.finance/farm" }, "Milking")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "https://milkshakeswap.finance/pool" }, "Flavour Pool")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "https://milkshakeswap.finance/stake" }, "Staking")),
            react_1["default"].createElement("li", null, account ? (react_1["default"].createElement("div", { className: "d-flex" },
                react_1["default"].createElement("span", { className: "account", onClick: handleShow, "aria-hidden": "true" }, account),
                react_1["default"].createElement("span", { onClick: logOut, className: "logout", "aria-hidden": "true" },
                    react_1["default"].createElement(io_1.IoIosLogOut, null)))) : (react_1["default"].createElement(ConnectWalletButton_1["default"], null))),
            react_1["default"].createElement(react_bootstrap_1.Modal, { show: show, onHide: handleClose },
                react_1["default"].createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
                    react_1["default"].createElement(react_bootstrap_1.Modal.Title, { style: { fontSize: "20px" } }, "Account")),
                react_1["default"].createElement(react_bootstrap_1.Modal.Body, null,
                    react_1["default"].createElement("div", { className: "d-flex justify-content-center mt-4" },
                        react_1["default"].createElement("span", { className: "account" }, account),
                        react_1["default"].createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: account, onCopy: function () {
                                setA(true);
                                setTimeout(function () { return setA(false); }, 3000);
                            } },
                            react_1["default"].createElement(md_1.MdContentCopy, null)),
                        react_1["default"].createElement("a", { href: bscScan, target: "_parent", rel: "noreferrer" },
                            react_1["default"].createElement("img", { src: bsc_scan_svg_1["default"], alt: "bsc-scan", className: "bscscan-img" }))),
                    a ? (react_1["default"].createElement("div", { className: "copy" },
                        react_1["default"].createElement("span", null, "Copied"))) : (""),
                    react_1["default"].createElement("div", { className: "text-center mt-5", onClick: logOut, "aria-hidden": "true" },
                        "Disconnect ",
                        react_1["default"].createElement(io_1.IoIosLogOut, null)))))));
};
exports["default"] = Nav;
