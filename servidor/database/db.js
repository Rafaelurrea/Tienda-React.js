//Importamos Sequelize para facilitar la conexion e interracion con la base de datos
import { Sequelize } from 'sequelize';

//Se conecta a la base de datos usando sequlize, con los parametros de esta misma "nombre base de datos" "usuario" "constrasena"
const db = new Sequelize('bbe517cqsgckmm0tnjhi', 'ucjxignenfveteax', 'HM2ovaoDIRlCVuszlqM', {
    host:'bbe517cqsgckmm0tnjhi-mysql.services.clever-cloud.com',
    port: "20506",
    dialect:'mysql'
});
export default db;