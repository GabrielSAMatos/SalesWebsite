class UserModel{

    static list = [
        {
            name: 'Gabriel',
            surname: 'Matos'
        },
        {
            name: 'Matos',
            surname: 'Online'
        }
    ];

    static findAll(){
        return UserModel.list;
    }

    static findByID(){

    }

    static create(body){
        UserModel.list.push(body);
    }

    static update(){

    }

    static delete(){

    }
}

module.exports = UserModel;