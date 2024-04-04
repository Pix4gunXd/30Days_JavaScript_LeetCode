/**
 * @param {string} val
 * @return {Object}
 */

var expect = function(val) {
   
    let object = {

        toBe: function(n){
            if(val === n){
                return true;
            }else {
                throw new Error("Not Equal");
            }
        },

        notToBe: function(n){
            if(val !== n){
                return true;
            }else {
                throw new Error("Equal");
            }
        }


    };

    return object;

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */