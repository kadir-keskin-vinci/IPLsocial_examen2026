export class EmailChecker{
    verif(input:string): boolean{
       if(input.includes(' ') || !/@/.test(input) || !/^[^@]+@[^@]+\.[^@.]+$/.test(input))return false;
     
       
       
       
        return true;
       
    }
}