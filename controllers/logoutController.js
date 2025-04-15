const { MENU_LINKS, LOGOUT_LINKS } = require("../constants/navigation");
const logger = require("../utils/logger");

const getLogoutView = (req, res) => {
    res.render("logout", {
        headTitle: "Shop - Logout",
        path: "/logout",
        menuLinks: LOGOUT_LINKS,
        activeLinkPath: "/logout",
    });
};

const killApplication = (req, res) => {
    logger.getProcessLog();
    res.send("Server terminated");
    process.exit(0);
};

module.exports = { getLogoutView, killApplication };