'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Television extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Television.init({
    show:{
      type: DataTypes.STRING,
      validate: {equals: 'That 70s Show'}
    },
    released: DataTypes.INTEGER,
    lead: DataTypes.STRING,
    type:{
      type: DataTypes.STRING,
      validate: {notEmpty: true}
    },
  },{
    sequelize,
    modelName: 'Television',
  });
  return Television;
};