export class formmodel{
    projectname:string;
    startdate:Date;
    enddate:Date;
    efforthours:number;
    effortcost:number;
    constructor(projectname:string,startdate:Date,endDate:Date,effortHours:number,projectCost:number){
        this.projectname=projectname;
        this.startdate=startdate;
        this.enddate=endDate;
        this.efforthours=effortHours;
        this.effortcost=projectCost;
    }
}