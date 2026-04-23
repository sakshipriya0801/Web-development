//1 Write a function greet() that prints "Hello JavaScript" in the console
function greet()
{
    console.log("Hello JavaScript")
}

//2 Create a function square(n) that returns the square of a number
function square(n)
{
    console.log("Square of the give number is "+ n*n);

}

//3 Write a function add(a, b) that returns the sum of two numbers
function add(a,b)
{

    console.log("Sum of two numbers are "+(a+b));
}

//4 Write a function isEven(num) that returns true if even, otherwise false.
function isEven(num){
    return num % 2 === 0;
}

//5 Write a function sayName(name) that displays an alert "Welcome <name>"
function sayName(name) {
    alert("Welcome " + name);
}

//6. Write a function areaOfRectangle(length, width) that returns area.
function areaOfRectangle(length, width){
    return (length*width)
}

//7. Create a function maxOfTwo(a, b) that returns the larger number
function maxOfTwo(a, b){
    if(a>b)
        return console.log(a,"is greater")
    else
       return console.log(b,"is greater")
}


//8. Write a function convertToUpper(text) that returns uppercase text
 function convertToUpper(text){
    return text.toUpperCase()
 }


 //9. Create a function calculateBill(price, quantity) that returns total
function calculateBill(price, quantity){
    return price*quantity
}

//10. Write a function grade(marks) that returns A/B/C based on marks
function grade(marks){
    if(marks<=100 && marks>=80)
        grade="A"
    else if(marks<80 && marks>=60)
        grade="B"
    else if(marks<60 && marks>=40)
        grade="C"
    else 
        grade="fail"
    return(grade)
}


greet()
square(6)
add(66,98.87)
console.log(isEven(76))
console.log(areaOfRectangle(78,65))
maxOfTwo(63745,75389)
console.log(convertToUpper( "hello world"))
console.log(calculateBill(600,5))
console.log(grade(56))