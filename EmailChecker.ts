export class EmailChecker{
    verif(input:string): boolean{
       if(this.emailNotValid(input))return false;
     
       
       
       
        return true;
       
    }

    private emailNotValid(input: string) {
        return input.includes(' ') || !/@/.test(input) || !/^[^@]+@[^@]+\.[^@.]+$/.test(input);
    }
}