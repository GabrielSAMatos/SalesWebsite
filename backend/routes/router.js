const Products = require('./products');
const Users = require('./users');

const routes = {
    '/products': {
        'GET': Products.list,
        'POST': Products.add,
        'PUT': Products.edit,
        'DELETE': Products.rem
    }
    ,
    '/users':{
        //'GET': Users.list(),
        //'POST': Users.add(),
        //'PUT': Users.edit(),
        //'DELETE': Users.rem()
    }
}

module.exports = routes;