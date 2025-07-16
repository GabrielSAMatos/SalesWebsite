class UserModel{

    static list = [
        {
            name: 'Gabriel',
            surname: 'Matos'
        },
        {
            name: 'Matos',
            surname: 'Online'
        },
        {
            name: 'wadwadwa',
            surname: 'wadwada'
        }
    ];


    static findAll(){
        return UserModel.list;
    }

    static findByID(id){
        return UserModel.list[id-1];
    }

    static create(body){
        UserModel.list.push(body);
    }

    static update(id, body){
        UserModel.list[id-1] = body;
    }

    static delete(id){
        const listAux = [];
        for(let i = 0; i < UserModel.list.length; i++){
            if(i != id-1){
                listAux.push(UserModel.list[i]);
            }
        }
        UserModel.list = listAux;
    }
}

module.exports = UserModel;