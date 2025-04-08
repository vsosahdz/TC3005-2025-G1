import { Model } from "sequelize";

interface ProjectoAttributes {
    id:number,
    title:string,
    estado:string
}

module.exports = (sequelize:any, DataTypes:any) => {
    class Projecto extends Model<ProjectoAttributes> implements ProjectoAttributes{
        id!:number;
        title!:string;
        estado!: string;
        static associate(models:any) {
            Projecto.belongsToMany(models.Colaborador, {
                through: 'ColaboradorProyecto'
            })
        }
    }
    Projecto.init({
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
            unique:true
        },
        title:{ 
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        estado:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        sequelize,
        modelName:'Projecto'
    });
    return Projecto;
}