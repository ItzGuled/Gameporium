// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Comment extends Model {}

// Comment.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     comment_text: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id'
//       }
//     },
//     game_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     }
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     timestamps: true,
//     underscored: true,
//     modelName: 'comment'
//   }
// );

// module.exports = Comment;
