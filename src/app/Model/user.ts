export class User{
    id:number|null;
    userName: string|null;
    email: string|null;
    password: string|null;
    roles: string[]|null;
    nom : string|null ;
    prenom : string|null ;
    adress : string |null;

    constructor(id:number|null,userName: string|null, email: string|null, password: string|null, roles: string[] |null, nom : string|null , prenom : string|null, adress: string|null ) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.roles  = roles;
        this.adress =adress;
        this.nom = nom ;
        this.prenom = prenom;
        this.id=id;
        
    }
   
}