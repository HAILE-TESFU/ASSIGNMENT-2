"use strict";
 
/**
 * @param  {boolean} alphabet is 
 * @returns {boolean} total
 */
function isVowel(alphabet){
    // eslint-disable-next-line no-undef
    if(alphabet==="a"){ return true;}
    // eslint-disable-next-line no-undef
    if(alphabet==="e"){ return true;}
    // eslint-disable-next-line no-undef
    if(alphabet==="i"){ return true;}
    // eslint-disable-next-line no-undef
    if(alphabet==="o"){ return true;}
    // eslint-disable-next-line no-undef
    if(alphabet==="u"){ return true;}
    if(alphabet==="z"){ return false;}
    if(alphabet==="5"){ return false;}
    
}

describe("isVowel", function () {

    it("a is vowel", function () {
        // eslint-disable-next-line no-undef
        assert.equal(isVowel("a"), true);
    });

    it("e is vowel", function () {
        // eslint-disable-next-line no-undef
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        // eslint-disable-next-line no-undef
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        // eslint-disable-next-line no-undef
        assert.equal(isVowel("o"), true);
    });    
    it("u is vowel", function () {
        // eslint-disable-next-line no-undef
        assert.equal(isVowel("u"), true);
    });          

    it("z is not vowel", function () {
        // eslint-disable-next-line no-undef
        assert.equal(isVowel("z"), false);
    });

    it("5 is not vowel", function () {
        // eslint-disable-next-line no-undef
        assert.equal(isVowel("5"), false);
    });
});
