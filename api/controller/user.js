const helper = require('../helpers/Id_code_generator');
const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports = {
    userSignup: async (req, res) => {

        const user = await User.find({
            email:req.body.email
        });
        if(user.length >= 1){
            return  res.status(409).json({
                message:"Mail exist"
            });
        }else{
           bcrypt.hash(req.body.password,10, (err, hash) =>{
                if(err){
                    return res.status(500).json({
                        error:err
                    });
                }else{

                    const newUser = new User({
                        code: helper.randomStr(5),
                        email: req.body.email,
                        password: hash
                    });
                    newUser.save();
                }
            })
        }
        res.status(200).json({
            message:"User Created"
        });
    },
/*    userLogin: async (req, res) => {

        const user = await User.find({
            email: req.body.email
        });

        if (user.length < 1) {
            return res.status(401).json({
                message: 'invalid email'
            });
        }
        await bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: "invalid password"
                });
            }
/!*            if (result) {
                const token = jwt.sign({
                        email: user[0].email,
                        userId: user[0]._id
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    }
                );
                return res.status(200).json({
                    message: "Auth successful",
                    token: token
                });
            }*!/

        });



        console.log('Please login');
        res.status(200).json();
    },*/

    userLogin: ("/login", (req, res, next) => {
        User.find({ email: req.body.email })
            .exec()
            .then(user => {
                if (user.length < 1) {
                    return res.status(401).json({
                        message: "invalid Email"
                    });
                }
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: "Invalid Password"
                        });
                    }
                    if (result) {
                        const token = jwt.sign(
                            {
                                email: user[0].email,
                                userId: user[0]._id
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "1h"
                            }
                        );
                        return res.status(200).json({
                            message: "Auth successful",
                            token: token
                        });
                    }
                    res.status(401).json({
                        message: "Auth failed"
                    });
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    }),

    deleteUser: (req, res, next) => {
    User.remove({ code: req.params.code})
        .exec()
        .then(result => {
            res.status(200).json({
                message: "User deleted"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
},

};
