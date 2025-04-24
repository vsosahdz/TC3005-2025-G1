import Table from "./Table";
import attribute from 'dynamode/decorators';
import TableManager from "dynamode/table";

class User extends Table {
    private static GeneralManager = new TableManager(Table,{
        tableName: 'User',
        partitionKey: 'pk',
        sortKey: 'sk'
    });
    private static _UserManager = User.GeneralManager.entityManager(User);
    
    @attribute.string()
    name: string;

    @attribute.number()
    workingYears: number;

    constructor(props: { pk: string; sk: string; name: string; workingYears: number }) {
        super(props);
        this.name = props.name;
        this.workingYears = props.workingYears;
    }

    public static async init(){
        try{
            await User.GeneralManager.createTable();
            console.log('Table created');
        }catch(e){
            console.log("Error creating table", e);
        }
    }

    public static get UserManager(){
        return User._UserManager;
    }
}

//Run once
//User.init();

export default User;