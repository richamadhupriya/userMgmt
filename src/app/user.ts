export class User
{
    name:string;
    id:string;
    email:string;
    mobile:string;
    location:string;

    constructor(name:string,id:string,email:string,mobile:string,location:string)
    {
        this.name= name;
        this.id = id;
        this.email = email;
        this.mobile = mobile;
        this.location = location;
    }
}