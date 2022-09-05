module.exports = (sequelize,DataTypes) =>{

    const Notification = sequelize.define('notification',{
        notificationText:{
            type:DataTypes.STRING,
            allowNull:false
        },
        isRead:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    })
    return Notification
}