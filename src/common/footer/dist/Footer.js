"use strict";
exports.__esModule = true;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var useGetPriceData_1 = require("hooks/useGetPriceData");
// import {useSelector} from "react-redux";
var bs_1 = require("react-icons/bs");
var useFetchMilk_1 = require("../useFetchMilk");
var logo_webp_1 = require("../../images/logo/logo.webp");
var Footer = function () {
    // const milk = useSelector((state) => state.milk.milkToken);
    var cakePriceUsd = useGetPriceData_1["default"]();
    var milk = useFetchMilk_1["default"]();
    return (react_1["default"].createElement("footer", { className: "footer" },
        react_1["default"].createElement("div", { className: "container-fluid white-bg" },
            react_1["default"].createElement("div", { className: "row justify-content-center text-center pt-100" },
                react_1["default"].createElement("div", { className: "row justify-content-center text-center mt-150" },
                    react_1["default"].createElement("div", { className: "col-xl-3" },
                        react_1["default"].createElement("ul", { className: "d-flex justify-content-between text-center" },
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement("a", { href: "" }, "FAQ")),
                            react_1["default"].createElement("li", null, "/"),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement("a", { href: "" }, "Tokenomics")),
                            react_1["default"].createElement("li", null, "/"),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement("a", { href: "https://milkshakeswap.gitbook.io/milkshake/" }, "Docs"))))),
                react_1["default"].createElement("div", { className: "row mt-50 row-cols-1 text-center justify-content-center" },
                    react_1["default"].createElement("div", { className: "col-xl-4 col-md-12 mt-5" },
                        react_1["default"].createElement("div", { className: "info" },
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "/", className: "logo" },
                                react_1["default"].createElement("img", { id: "site-logo", src: logo_webp_1["default"], alt: "logo", width: "300" })))),
                    react_1["default"].createElement("div", { className: "col-xl-4 col-md-12 mt-5" },
                        react_1["default"].createElement("ul", { className: "d-flex social" },
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement("a", { href: "" },
                                    react_1["default"].createElement(bs_1.BsTelegram, { className: "icon" }))),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement("a", { href: "https://twitter.com/milkshakeswap" },
                                    react_1["default"].createElement(bs_1.BsTwitter, { className: "icon" }))),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement("a", { href: "https://www.instagram.com/milkshakeswap.finance/" },
                                    react_1["default"].createElement(bs_1.BsInstagram, { className: "icon" }))),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement("a", { href: "https://milkshakeswap.medium.com/" },
                                    react_1["default"].createElement(bs_1.BsMedium, { className: "icon" }))),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement("a", { href: "https://discord.com/channels/1034058598784978964/1034058599804190741" },
                                    react_1["default"].createElement(bs_1.BsDiscord, { className: "icon" }))))),
                    react_1["default"].createElement("div", { className: "col-xl-3 col-md-12 mt-5" },
                        react_1["default"].createElement("div", { className: "copyright text-center" },
                            "\u00A92023 MilkShakeSwap Finance",
                            react_1["default"].createElement("br", null),
                            " All rights reserved.")))),
            react_1["default"].createElement("div", { className: "row justify-content-center footer-price mt-50" },
                react_1["default"].createElement("div", { className: "col-md-3 text-center mtf-150 mt-100" },
                    react_1["default"].createElement("a", { href: "", className: "btn-price" },
                        react_1["default"].createElement("div", { className: "footer-price-text" },
                            "$",
                            cakePriceUsd.toFixed(3))))))));
};
exports["default"] = Footer;
