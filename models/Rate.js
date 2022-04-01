const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rate extends Model {}

Rate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            //figure out how to make it 1-5
          }
      },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'rate'
  }
);

module.exports = Rate;
