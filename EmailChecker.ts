export class EmailChecker{
    verif(input:string): boolean{
       
        return /@/.test(input);
       
    }
}