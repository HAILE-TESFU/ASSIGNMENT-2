"use strict";
/**
 * @param  {String} str is
 * @returns {String} total
 */
function reverseAString(str){
  str="haile weldemariam";
  let reversed="";
  // eslint-disable-next-line id-length
  for(let i=str.length-1;i>=0;i--){
     
      reversed+=str[i];
  }
  return str;
}


describe("isMax", function () {

    it("firstTrial", function () {
        // eslint-disable-next-line no-undef
        assert.equal(reverseAString("haile"), "eliah");
    });

    it("seconTriall", function () {
        // eslint-disable-next-line no-undef
        assert.equal(reverseAString("tekle"), "elket");
    });
    it("thirdTrial", function () {
        // eslint-disable-next-line no-undef
        assert.equal(reverseAString("haben"),"nebah");
    });
    
});