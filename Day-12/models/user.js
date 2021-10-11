const{DataTypes} =require('sequelize');
const sequelize=require('../database');

const User=sequelize.define('User',{
    fullname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=User;