import { Model } from "sequelize";

interface ColaboradorAttributes {
    id:number,
    nombre:string,
    rol:string,
    email:string,
}

export enum ColaboradorRoles{
    ADMIN = 'ADMIN',
    SUPERVISOR = 'SUPERVISOR',
    DESARROLLADOR = 'DESARROLLADOR',
    QA = 'QA',
    CLIENTE = 'CLIENTE'
}

module.exports = (sequelize:any, DataTypes:any) => {
    class Colaborador extends Model<ColaboradorAttributes> implements ColaboradorAttributes{
        id!:number;
        nombre!:string;
        rol!:string;
        email!:string;

        static associate(models:any) {
            Colaborador.belongsToMany(models.Projecto, {
                through: 'ColaboradorProyecto'
            })
        }
    }
    Colaborador.init({
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
            unique:true
        },
        nombre: DataTypes.STRING,
        rol: {
            type:DataTypes.ENUM,
            values: Object.values(ColaboradorRoles),
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        sequelize,
        modelName:'Colaborador'
    });
    return Colaborador;
}