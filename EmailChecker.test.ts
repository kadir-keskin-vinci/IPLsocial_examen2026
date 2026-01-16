import { EmailChecker } from "./EmailChecker";

describe("EmailCheck", () => {
  describe("verif method", () => {
     const emailChecker = new EmailChecker();
    it("should return false when given don't contains @", () => {
      
      const actual = emailChecker.verif("lolo");
      expect(actual).toBe(false);
    });
    
      it("should return false when given  don't contains dot in domains", () =>{
            
      const actual = emailChecker.verif("lolo@domainecom");
      expect(actual).toBe(false);
    })

    it("should return false when given contains space", () =>{

      const actual = emailChecker.verif("lolo@do.main  ecom");
      expect(actual).toBe(false);
    })

    it("should return true when given correct email", () =>{

      const actual = emailChecker.verif("lolo@de.com");
      expect(actual).toBe(true);
    })
  });
});
