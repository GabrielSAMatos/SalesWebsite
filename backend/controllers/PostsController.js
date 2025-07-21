const PostsModel = require('../models/PostsModel');

class PostsController{
    findAll(req, res){
        const data = PostsModel.findAll();
        return res.json(data);
    }

    findByID(req, res){
        const id = req.params.id;
        const data = PostsModel.findByID(id);

        if(id > PostsModel.list.length){
            return res.status(404).json({
                message: "Post not found."
            });
        }

        return res.json(data);
    }

    create(req, res){
        const body = req.body;
        PostsModel.create(body);

        return res.status(201).json({
            message: "Post registred successfully."
        });
    }

    update(req, res){
        const id = req.params.id;
        const body = req.body;
        
        if(id > PostsModel.list.length){
            return res.status(404).json({
                message: "Post not found."
            });
        }

        PostsModel.update(id, body);
        return res.status(200).json({
            message: "Post updated successfully."
        });
    }

    delete(req, res){
        const id = req.params.id;

        if(id > PostsModel.list.length){
            return res.status(404).json({
                message: "Post not found."
            });
        }
        
        PostsModel.delete(id);
        return res.status(200).json({
            message: "Post deleted successfully."
        });
    }
}

module.exports = PostsController;