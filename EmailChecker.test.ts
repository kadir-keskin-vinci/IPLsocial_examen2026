import { EmailChecker } from "./EmailChecker";

describe("EmailCheck", () => {
  describe("verif method", () => {
    it("should return false when given don't contains @", () => {
      const emailChecker = new EmailChecker();
      const actual = emailChecker.verif("lolo");
      expect(actual).toBe(false);
    });
    
      it("should return false when given  don't contains dot in domains", () =>{
            
      const emailChecker = new EmailChecker();
      const actual = emailChecker.verif("lolo@domainecom");
      expect(actual).toBe(false);
    })

  });
});
