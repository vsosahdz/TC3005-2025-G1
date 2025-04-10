import {Model} from "sequelize";

interface ColaboradorProyectoAttributes {
    ProjectId:number,
    ColaboradorId:number,
    tarea:string
}

module.exports = (sequelize:any, DataTypes:any) => {
    class ColaboradorProyecto extends Model<ColaboradorProyectoAttributes> implements ColaboradorProyectoAttributes{
        ProjectId!:number;
        ColaboradorId!:number;
        tarea!:string;

        static associate(models:any) {
            
        }
    }
    ColaboradorProyecto.init({
        ProjectId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            references:{
                model:"Projecto",
                key:'id'
            }
        },
        ColaboradorId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            references:{
                model:"Colaborador",
                key:'id'
            }
        },
        tarea:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        sequelize,
        modelName:'ColaboradorProyecto'
    });
    return ColaboradorProyecto;
}