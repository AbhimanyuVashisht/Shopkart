

const sequelize = require('sequelize');

const db = new sequelize(/*dbName*/ 'shopKart', /*username*/'shopkart',/*password*/ 'shopkart',{
    host: 'localhost',
    dialect: 'mysql'
});


const productObj = db.define('product',{
    id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product: sequelize.DataTypes.STRING,
    description: sequelize.DataTypes.STRING,
    price: sequelize.DataTypes.FLOAT,
    prodId: {
        type: sequelize.DataTypes.INTEGER,
        unique: true
    }
},{
    timestamps: false
});

const userObj = db.define('user', {
    id:{
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: sequelize.DataTypes.STRING,
    email: sequelize.DataTypes.STRING,
    uuid:{
        type: sequelize.DataTypes.INTEGER,
        unique: true
    }
},{ timestamps: false });


const userProductObj = db.define('cart',{
    id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},{ timestamps: false });



productObj.belongsToMany(userObj, {through: 'userProductObj'});
userObj.belongsToMany(productObj, {through: 'userProductObj'});



db.sync({alter: true}).then(()=>{
    console.log("Database Ready");
});


module.exports = {
    productObj,
    userObj,
    userProductObj
};