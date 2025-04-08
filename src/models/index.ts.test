

import fs from 'fs';
import path from 'path';

const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
import config from '../config/config';


const db:any = {};
let sequelize:any;

if (env==='development') {
  sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,{
      dialect:config.development.dialect,
      host:config.development.host,
      define:{
        timestamps:false, //Si es True agrega a la tabla 2 atributos CreatedAt, UpdatedAt
        freezeTableName:true //Evitar pluralizar el nombre de la tabla
      }
    });
} 

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => { //Las tablas se agregar al objeto de conexión
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });
//Se cargan las relaciones entre las tablas
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
