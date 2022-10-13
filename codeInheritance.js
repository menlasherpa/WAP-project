/************** Exercise 1 *******************/
String.prototype.filter = function(badWordsArray){
    if(arguments.length === 1){
        return this.split(/[\s,.!?]+/).filter(word => !(badWordsArray.includes(word))).join(" ");
    }
}



/************** Exercise 2 *******************/
Array.prototype.bubbleSort = function() {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    for (let j = i+1; j < length; j++) {
      if (this[j] < this[i]) {
        const temp = this[j];
        this[j] = this[i];
        this[i] = temp;
      }
    }
  }
  return this;
}



/************** Exercise 3 *******************/
var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}

// Student Function Constructor
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

// Teacher constructor
var Teacher = function(name, age){
    Person.call(this, name, age);
}
Teacher.prototype = new Person();
var teacher = new Teacher();
teacher.initialize("Lakpa", 25);

Teacher.prototype.teach = function(subject){
    return this.name + " is now teaching " + subject;
}
