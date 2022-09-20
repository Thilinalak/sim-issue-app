module.exports = (sequelize,DataTypes)=>{

    const UserIssues = sequelize.define('user_issues',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        issue:{
            type:DataTypes.STRING,
            allowNull:false
        },
        ongoing_queue_no:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        isIssueComplete:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
    },)
    return UserIssues
}