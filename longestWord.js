             "use strict";
             /**
              * @param  {number} arr - is a string;
              * @returns {String} total - sr
              */
             function islongestWordLength(arr){

                    let arrayword=arr;
                    //let wordlength=0;
                   return arrayword.length;
             }

             "use strict";
            /**
             * @param {number} longestWordLength is
             * @returns {number} total
             */
            function findLongestWord(){
                let array=["civilEngineering","maharishi","computerScience","MasterSoftwareDevelopment","economics","physics"];

                let longestWordLength=0;

                // eslint-disable-next-line id-length
                for(let i=0;i<array.length;i++){
                    islongestWordLength(array[i]);
                    if(longestWordLength<islongestWordLength(array[i])){
                        longestWordLength=islongestWordLength(array[i]);
                    }
                }
                return (longestWordLength);
           }
           

           describe("isLongest", function () {

            it("firstTrial", function () {
                // eslint-disable-next-line no-undef
                assert.equal(findLongestWord("haile", "tekles","zer", "xige","fkrimariam", " tesfom"), 10);
            });
        
            it("seconTriall", function () {
                // eslint-disable-next-line no-undef
                assert.equal(findLongestWord("hail", "tekle","ze", "xig","fkrimaria", " tesfo"), 9);
            });
            it("thirdTrial", function () {
                // eslint-disable-next-line no-undef
                assert.equal(findLongestWord("haile", "tekles","zer", "xige","fkrimaria", " tesfo"), 8);
            });
            
        });
          
  




