console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
if(count < 0){
    console.log("the count is less than 0");
}

    for (let i = 0; i <= count; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}

printOdds(125);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    if (userName == null){
        console.log("No username entered");
        return;
    }

    if (age <= 0 || age == null){
        console.log('Theres no way youre younger than 0, pick again.');
        return;
    }

    let aboveSixteen = "Congrats ${userName}, you can drive.";
    let belowSixteen = "Sorry ${userName}, you can't drive.";

    if(age >= 16){
        console.log(aboveSixteen);
    }else{
        console.log(belowSixteen);
    }
}

checkAge('Jake', 20);

checkAge('Braeden', 13);

checkAge(null, 16);

checkAge("Jake", -1);
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function quadrant(x,y){
if(x > o && y > 0){
    return "Quadrant 1";
}else if (x < 0 && y > 0){
    return "Quadrant 2";
}else if (x < 0 && y < 0){
    return "Quadrant 3";
}else if (x > 0 && y < 0){
    return "Quadrant 4";
}else if (x == 0 && y != 0){
    return "X-axis";
}else if (x != 0 && y == 0){
    return "Y-axis";
}else if (x == 0 && y == 0){
    return "Origin";
}
}
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangle (a,b,c) {
    if (!(a + b > c) || !(a + c > b) || !(b + c > a)){
        console.log('This is not a triangle');
    }

    if(a == b && a == c && b == c){
        console.log('This is an equilateral triangle.')
    }else if (a == b || a == c || b == c){
        console.log('This is an isosceles triangle.')
    }else{
        console.log("This is a scalene triangle.")
    }
}





