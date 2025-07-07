const UserModel = require('../models/UsersModel');

const userModel = new UserModel();

class UserController{
    findAll(){
        return userModel.findAll();
    }

    findByID(){
        return userModel.findByID();
    }

    create(){
        return userModel.create();
    }

    update(){
        return userModel.update();
    }

    delete(){
        return userModel.delete();
    }
}

module.exports = UserController;