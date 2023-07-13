import { Sequelize } from 'sequelize';

//Se conecta a la base de datos usando sequlize, con los parametros de esta misma "nombre base de datos" "usuario" "constrasena"
const db = new Sequelize('bxqxgbfvtjpgvh9utl5i', 'uy5ly7om5vxkgjdr', 'gKiraOnGCh7Zx86ixa6r', {
    host:'bxqxgbfvtjpgvh9utl5i-mysql.services.clever-cloud.com',
    dialect:'mysql'
});
export default db;