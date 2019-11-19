export class addmembermodel{
    name:string;
    eid:string;
    rolename:string;
    hide :boolean
    constructor(name:string,eid:string,rolename:string){
        this.eid=eid;
        this.name=name;
        this.rolename=rolename;
        this.hide=true;
    }
}
