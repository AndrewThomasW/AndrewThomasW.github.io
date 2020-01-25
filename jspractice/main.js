function deepEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    if (typeof (obj1) !== typeof (obj2)) {
      return false;
    }

    if (typeof (obj1) === "object") {
      for(let key in obj1) {
        return deepEqual(obj1[key], obj2[key]);
      }
    } else {
      if (obj1 === obj2) {
        return true;
      }
      else
      {
        return false;
    }

  }
}

  let student = {
    here : {
      is : "lam"
    },
    object : 2
  };

  describe("deepEqual", function () {
    it("deepEqual(obj, obj) -> true", function () {
      assert.equal(deepEqual(student, student), true);
    });

    it("deepEqual(obj, notequal) -> false", function () {
        assert.equal(deepEqual(student, {
          here : {
            is : "Jim"
          },
          object : 2
        }), false);
      });
});


/*.............................*/
(function () {
    "use strict";
  
    /**
     *
     * @param arr
     * @returns {[]}
     */
    function reverseArray(arr) {
      let newArray = [];
      for (let i = 0; i < arr.length; i++) {
        newArray[i] = arr[arr.length - i - 1];
      }
      return newArray;
    }
  
    /**
     *
     * @param arr
     * @returns {*}
     */
    function reverseArrayInPlace(arr) {
      for (let i = 0; i < arr.length / 2; i++) {
        let tmp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = tmp;
      }
      return arr;
  
    }
  
    /**
     *
     */
    Array.prototype.reverseArray = function () {
      let i = 0;
      let middle = Math.floor(this.length / 2);
      let temp = null;
  
      for (let i = 0; i < middle; i += 1) {
        temp = this[i];
        this[i] = this[n - 1 - i];
        this[n - 1 - i] = temp;
      }
    };
  
    describe("reverse", function () {
      it("reverseArray(Z,Y,X) returns XYZ", function () {
        assert.equal(reverseArray(["Z","Y","X"]).toString(), ["X","Y","Z"]);
      });
  
      it("reverseArrayInPlace(Z,Y,X) returns XYZ", function () {
        assert.equal(reverseArrayInPlace(["Z","Y","X"]).toString(), ["X","Y","Z"]);
      });
  
    });
  
  }());

  /*.......................................*/
  (function () {
    "use strict"
     /**
      *
      * @param number
      * @param list
      * @returns {{}}
      */
     function prepend(number, list) {
       let obj = {};
       obj.value = number;
       obj.rest = list;
       return obj;
     }
   
     console.log(prepend(100, prepend(50, null)).value);
   
     describe("prepend", function () {
       it("prepend(10, prepend(20, null))", function () {
         assert.equal(prepend(100, prepend(50, null)).value, 100);
       });
   
     });
   
   }());
   /*..................................................*/
   (function() {
    "use strict";
  
    /**
     *
     * @param arr
     * @returns {{rest: null}}
     */
  
    function arrayToList(arr) {
      let retVal = {
        rest : null
      };
  
      for (let i = 0; i < arr.length; i++) {
  
        if (retVal.rest === null) { // if its first element in list
          retVal.value = arr[i]; // dynamically adding value attribute to
          // retVal object
          retVal.rest = {
  
            rest : null
          };
        } else {
          let counter = retVal;
          while (counter.rest !== null) {
            counter = counter.rest;
          }
          counter.value = arr[i];
          counter.rest = {
  
            rest : null
          };
  
        }
  
      }
  
      return retVal;
    };
    console.log();
  
    /**
     *
     * @param list
     * @returns {[]}
     */
  
    function listToArray(list) {
  
      let arr = [];
  
      while (list !== null) {
        if (list.value !== undefined)
          arr.push(list.value);
        list = list.rest;
      }
  
      return arr;
  
    }
  
  
    describe("array -> List", function () {
      it("arrayToList([ 1, 2, 3 ]", function () {
        assert.equal(arrayToList([ 1, 2, 3 ]).toString(),"[object Object]")
      })
  
      it("listToArray({\n" +
        "        value : 1,\n" +
        "        rest : {\n" +
        "          value : 2,\n" +
        "          rest : {\n" +
        "            value : 3,\n" +
        "            rest : null\n" +
        "          }\n" +
        "        }\n" +
        "\n" +
        "      } -> 123", function () {
        assert.equal(listToArray({
          value : 1,
          rest : {
            value : 2,
            rest : {
              value : 3,
              rest : null
            }
          }
  
        }).toString(),"1,2,3")
      })
  
    });
  }());

  /*........................................*/

  (function () {
    "use strict";
  
  
    /**
     *
     * @param list
     * @param index
     * @returns {null|*}
     */
    function nth(list, index) {
      let i = 0;
      while (list != null && list.value != null) {
        if (i == index) {
          return list.value;
        }
        list = list.rest;
        i++;
      }
      return null;
    }
  
  
    /**
     *
     * @param list
     * @param index
     * @returns {*}
     */
    function recNth(list, index) {
      if (index === 0) {
        return list.value;
      }
      return recNth(list.rest, --index);
  
    }
  
    console.log(recNth({
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }
  
    }, 0));
    console.log(nth({
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }
  
    }), 0);
  
    describe("nth", function () {
      it("nth({\n" +
        "    value: 1,\n" +
        "    rest: {\n" +
        "      value: 2,\n" +
        "      rest: {\n" +
        "        value: 3,\n" +
        "        rest: null\n" +
        "      }\n" +
        "    }\n" +
        "\n" +
        "  }, 0) -> 1", function () {
        assert.equal(nth({
          value: 1,
          rest: {
            value: 2,
            rest: {
              value: 3,
              rest: null
            }
          }
  
        },0), 1)
      })
  
      it("recNth({\n" +
        "    value: 1,\n" +
        "    rest: {\n" +
        "      value: 2,\n" +
        "      rest: {\n" +
        "        value: 3,\n" +
        "        rest: null\n" +
        "      }\n" +
        "    }\n" +
        "\n" +
        "  }, 0) -> 1", function () {
        assert.equal(recNth({
          value: 1,
          rest: {
            value: 2,
            rest: {
              value: 3,
              rest: null
            }
          }
  
        }, 0),1)
      })
  
    });
  
  }());