module.exports = (sequelize,DataTypes)=>{

    const IssueType = sequelize.define('issue_type',{
            issue_type:{
                type:DataTypes.STRING,
                allowNull:false         
            }
    },{
        timestamps:false
    })
    return IssueType
}
