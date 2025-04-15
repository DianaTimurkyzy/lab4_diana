const Product = require("../models/Product");
const { MENU_LINKS } = require("../constants/navigation");

const getHomeView = (req, res) => {
    const products = Product.getAll();
    res.render("home", {
        headTitle: "Shop - Home",
        path: "/",
        menuLinks: MENU_LINKS,
        activeLinkPath: "/",
        products,
    });
};

module.exports = { getHomeView };