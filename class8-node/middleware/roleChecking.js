
// ["admin"].includes("teacher")
// teacher


const roleChecking = (role=[]) => (req, res, next) => {
    if(!role.includes(req.userRole)){
        return res.status(400).send({ message: "Access Denied", });
    }
    next();
} 

module.exports = roleChecking