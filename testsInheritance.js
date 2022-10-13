describe("String.filter(badWords)", function(){
    it("Filters the word 'not' from the string 'This house is not nice!", function(){
        assert.equal("This house is nice", "This house is not nice!".filter("not"));
    })
})

describe("Array.bubbleSort", function(){
    it("Sorts the given array in ascending order", function(){
        assert.equal("-2,0,1,3,4,6", [6,4,0, 3,-2,1].bubbleSort().toString());
    })
})

describe("Teacher.teach", function(){
    it("It prints the string 'Lakpa is now teaching WAP' when invoked by teacher named 'Lakpa' and passed 'WAP' as subject argument", function(){
        assert.equal("Lakpa is now teaching WAP", teacher.teach("WAP"));
    })
})
