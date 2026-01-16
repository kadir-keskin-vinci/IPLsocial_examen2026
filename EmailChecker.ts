export class EmailChecker{
    verif(input:string): boolean{
       if(!/@/.test(input)) return false;
       if(!/^[^@]+@[^@]+\.[^@.]+$/.test(input)) return false;
       
       
        return true;
       
    }
}