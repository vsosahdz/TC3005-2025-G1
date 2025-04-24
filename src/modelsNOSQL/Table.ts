import attribute from 'dynamode/decorators';
import Entity from 'dynamode/entity';

export default class Table extends Entity{
    @attribute.partitionKey.string()
    pk:string;

    @attribute.sortKey.string()
    sk:string;

    constructor(props: { pk: string; sk: string }) {
        super(props);
        this.pk = props.pk;
        this.sk = props.sk;
    }
}