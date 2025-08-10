const logReqBody = (req, res, next) => {
    console.log("----------------------");
    console.log("req.path = ",req.path, ", req.originalUrl = ", req.originalUrl);
    console.table(req.body);
    console.log("----------------------");
    next()
}

module.exports = logReqBody