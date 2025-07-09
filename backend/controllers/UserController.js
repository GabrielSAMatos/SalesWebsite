const UserModel = require('../models/UsersModel');

class UserController{
    findAll(req, res){
        const data = UserModel.findAll();
        return res.json(data);
    }

    findByID(req, res){
        return UserModel.findByID();
    }

    create(req, res){
        const body = req.body;
        UserModel.create(body);

        return res.status(200).json({
            message: "User registred successfully."
        });
    }

    update(req, res){
        return UserModel.update();
    }

    delete(req, res){
        return UserModel.delete();
    }
}

module.exports = UserController;