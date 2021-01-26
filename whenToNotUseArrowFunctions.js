var test1obj = {
    a: "a",
    b: () => console.log(this.a)
}

test1obj.b(); // undefined

var test2obj = {
    a: "a",
    b: function() { console.log(this.a); }
}

test2obj.b(); // "a"

// In addition, arrow functions do not have any notion of the arguments object and also cannot be used as function constructors and will throw an error when using the new operator (ie: Function is not a constructor).

// source: https://web322.ca/notes/week03
