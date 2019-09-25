            "use strict";

            /**
             * @param  {number} array is
             * @returns {number} total
             */           
            function sumAndMultArray(array){
                array=[1,2,3,4];
               let  sum=0;
              
               // eslint-disable-next-line id-length
               for(let i=0;i<array.length;i++){
               sum+=array[i];

        }
      return sum;
   }


   describe("isSum", function () {

    it("firstTrial", function () {
        // eslint-disable-next-line no-undef
        assert.equal(sumAndMultArray([1,2,3,4]), 10);
    });

    it("seconTriall", function () {
        // eslint-disable-next-line no-undef
        assert.equal(sumAndMultArray([1,2,3,4,5]), 15);
    });
    it("thirdTrial", function () {
        // eslint-disable-next-line no-undef
        assert.equal(sumAndMultArray([1,2,3]), 6);
    });
    
});







