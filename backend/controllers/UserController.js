const UserModel = require('../models/UsersModel');

class UserController{
    findAll(req, res){
        const data = UserModel.findAll();
        return res.json(data);
    }

    findByID(req, res){
        const id = req.params.id;
        const data = UserModel.findByID(id);

        if(id > UserModel.list.length){
            return res.status(404).json({
                message: "User not found."
            });
        }

        return res.json(data);
    }

    create(req, res){
        const body = req.body;
        UserModel.create(body);

        return res.status(201).json({
            message: "User registred successfully."
        });
    }

    update(req, res){
        const id = req.params.id;
        const body = req.body;
        
        if(id > UserModel.list.length){
            return res.status(404).json({
                message: "User not found."
            });
        }

        UserModel.update(id, body);
        return res.status(200).json({
            message: "User updated successfully."
        });
    }

    delete(req, res){
        const id = req.params.id;

        if(id > UserModel.list.length){
            return res.status(404).json({
                message: "User not found."
            });
        }
        
        UserModel.delete(id);
        return res.status(200).json({
            message: "User deleted successfully."
        });
    }
}

module.exports = UserController;