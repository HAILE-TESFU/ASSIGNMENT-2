        "use strict";
        /**
         * @param  {number} num1 is
         * @param  {number} num2 is 
         * @param  {number} num3 is 
         * @returns {number} total
         */
        function maxOfThree(num1, num2, num3) {
            //INPUT:THE ARGUEMENTS GIVE (a,b,c) are the inputs.
            // PROCESSING: THE PROCESS OF COMPARING BETWEEN THEM IS PROCESSING.
            //OUTPUT: THE MAXIMUM NUMBER.

            let maximumNumber = num1;
            if (maximumNumber < num2) {
                maximumNumber = num2;
                if (maximumNumber < num3) {
                maximumNumber = num3;
            }
            }
            if (maximumNumber < num3) {
                maximumNumber = num3;
            }
            
            return maximumNumber;
        }
        


        describe("isMax", function () {

            it("firstTrial", function () {
                // eslint-disable-next-line no-undef
                assert.equal(maxOfThree(2, 3, 4), 4);
            });
        
            it("seconTriall", function () {
                // eslint-disable-next-line no-undef
                assert.equal(maxOfThree(4,5,2), 5);
            });
            it("thirdTrial", function () {
                // eslint-disable-next-line no-undef
                assert.equal(maxOfThree(6, 7, 8), 8);
            });
            
        });
        

