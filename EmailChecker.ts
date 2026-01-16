export class EmailChecker{
    verif(input:string): boolean{
       if(input.includes(' '))return false;
       if(!/@/.test(input)) return false;
       if(!/^[^@]+@[^@]+\.[^@.]+$/.test(input)) return false;
       
       
       
        return true;
       
    }
}