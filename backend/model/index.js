const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize.authenticate()
.then(()=>console.log('Connected...'))
.catch((err)=> console.log('ERROR '+ err))

const db ={}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./userModel')(sequelize, DataTypes)
db.issueTypes = require('./issueTypeModel')(sequelize,DataTypes)
db.userIssues = require('./user_issueModel')(sequelize,DataTypes)
db.notifications  = require('./notificationModel')(sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(()=> console.log('yes re-sync done'))


// M:M Relation (user : issueTypes)
db.users.belongsToMany(db.issueTypes,{through : db.userIssues})
db.issueTypes.belongsToMany(db.users,{through :db.userIssues})


// 1:M Relation (userIssues has many notification)
 db.users.hasMany(db.notifications)
 db.notifications.belongsTo(db.users,)
 db.issueTypes.hasMany(db.notifications)
 db.notifications.belongsTo(db.issueTypes,)

//  db.userIssues.hasMany(db.notifications)
//  db.notifications.belongsTo(db.userIssues);
module.exports = db

