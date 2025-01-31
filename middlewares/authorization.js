

;
const {User} = require("../models")

async function authorizationUser(req, res, next){

const dataUserToken = res.locals.user.id
// console.log(dataUserToken,"<< data user token");





const dataUser = await User.findOne({
where :{

    id : dataUserToken
}


})

// console.log(dataUser,"data user");

// next()

let dataUserManipulate = await dataUser.toJSON()

console.log(dataUserManipulate.id,"<== data user cek1" );
console.log(dataUserToken,"<=== data user cek 2");



if (dataUserManipulate.id == dataUserToken) {
next()

}
else {
    res.status(402).json({
        message: "Authorization ERROR.."
    })
}

// console.log(dataUser,"<==== ini data akhir");


// console.log("++++++++++++++++++++++++++++++++++");

// console.log(dataUser,"<<= data user by param ID")
// console.log("++++++++++++++++++++++++++++++++++");

}

module.exports = authorizationUser