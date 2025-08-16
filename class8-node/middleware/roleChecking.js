
const roleChecking = (role) => (req, res, next) => {
    if(req.userRole != role){
        return res.status(400).send({ message: "Access Denied", });
    }
    next();
} 

module.exports = roleChecking