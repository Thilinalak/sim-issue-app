module.exports= (sequelize, DataTypes)=>{
    
    const User =  sequelize.define('user',{
        fullname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        mobile:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        deviceFCMToken:{
            type: DataTypes.STRING,
            allowNull: true
        },

    },{
        timestamps:false
    })

    return User
}