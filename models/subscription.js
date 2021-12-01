'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subscription.init({
    name: DataTypes.STRING,
    offers:{
      type: DataTypes.STRING,
      validate:{isAlpha: true}
    },
    cost:{ 
      type: DataTypes.INTEGER,
      validate:{isAlphanumeric: true}
    },
  }, {
    sequelize,
    modelName: 'Subscription',
  });
  return Subscription;
};