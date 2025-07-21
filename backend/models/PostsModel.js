class PostsModel{

    static list = [
        {
            text: 'text1',
            content: 'Content1'
        },
        {
            text: 'text2',
            content: 'Content2'
        },
        {
            text: 'text3',
            content: 'Content3'
        }
    ];


    static findAll(){
        return PostsModel.list;
    }

    static findByID(id){
        return PostsModel.list[id-1];
    }

    static create(body){
        PostsModel.list.push(body);
    }

    static update(id, body){
        PostsModel.list[id-1] = body;
    }

    static delete(id){
        const listAux = [];
        for(let i = 0; i < PostsModel.list.length; i++){
            if(i != id-1){
                listAux.push(PostsModel.list[i]);
            }
        }
        PostsModel.list = listAux;
    }
}

module.exports = PostsModel;