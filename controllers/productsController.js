const Product = require("../models/Product");
const { STATUS_CODE } = require("../constants/statusCode");
const { MENU_LINKS } = require("../constants/navigation");

const getProductsView = (req, res) => {
    const products = Product.getAll();
    res.render("products", {
        headTitle: "Shop - Products",
        path: "/",
        menuLinks: MENU_LINKS,
        activeLinkPath: "/products",
        products,
    });
};

const getAddProductView = (req, res) => {
    res.render("add-product", {
        headTitle: "Shop - Add product",
        path: "/add",
        menuLinks: MENU_LINKS,
        activeLinkPath: "/products/add",
    });
};

const addNewProduct = (req, res) => {
    const { name, description } = req.body;
    Product.add({ name, description });
    res.status(STATUS_CODE.FOUND).redirect("/products/new");
};

const getNewProductView = (req, res) => {
    const newestProduct = Product.getLast();
    res.render("new-product", {
        headTitle: "Shop - New product",
        path: "/new",
        menuLinks: MENU_LINKS,
        activeLinkPath: "/products/new",
        newestProduct,
    });
};

const getProductView = (req, res) => {
    const { name } = req.params;
    const product = Product.findByName(name);
    res.render("product", {
        headTitle: `Shop - ${product ? product.name : "Product Not Found"}`,
        path: `/${name}`,
        menuLinks: MENU_LINKS,
        activeLinkPath: `/products/${name}`,
        product,
    });
};

const deleteProduct = (req, res) => {
    const { name } = req.params;
    Product.deleteByName(name);
    res.status(STATUS_CODE.OK).json({ success: true });
};

module.exports = {
    getProductsView,
    getAddProductView,
    addNewProduct,
    getNewProductView,
    getProductView,
    deleteProduct,
};