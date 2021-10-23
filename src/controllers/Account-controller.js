const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const createAccount = (req, res) => {
    const {
        email, password,
    } = req.body;


    const salt = bcrypt.genSaltSync(2);
    const hash = bcrypt.hashSync(password, salt);
    try {
        let createdAccount = await Account.create({
            email,
            password: hash,
        });
        res.status(200).json({
            message: 'Account created successfully',
            createdAccount,

        });
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({
                message: 'Account already exists',
            });
        } else {

            res.status(500).json({
                message: 'Error creating account',
                err
            });
        }
    }

};

const makeSome = (req, res) =>{
    console.log("Midkjdbfndskjgb sfdjlnvñklsdmgldfionhljgfcihsdg iduhgdfukhv");
    res.status(200);

}

module.exports = {
    createAccount,
    makeSome,
};


