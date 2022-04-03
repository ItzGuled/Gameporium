// import all models
const Rate = require('./Rate');
const User = require('./User');
const Comment = require('./Comment');


User.hasMany(Comment, {
    foreignKey: 'user_id'
  });

  Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

  User.belongsToMany(Comment, {
    through: Rate,
    as: 'rated_posts',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

  // Comment.belongsToMany(Rate, {
  //   through: Rate,
  //   as: 'rated_posts',
  //   foreignKey: 'comment_id'
  //  // onDelete: 'SET NULL'
  // });

  Rate.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

  Rate.belongsTo(Comment, {
    foreignKey: 'comment_id'
   // onDelete: 'SET NULL'
  });

  User.hasMany(Rate, {
    foreignKey: 'user_id'
  });

  Comment.hasMany(Rate, {
    foreignKey: 'comment_id'
  });
  
  module.exports = { User, Rate,  Comment };