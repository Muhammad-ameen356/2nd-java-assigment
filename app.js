// _____________chapter # 21-------25__________//


//__$ Question number 1___//

var a = prompt("Enter your first name");
var b = prompt("enter your last name");

alert("Hello" + " \n " + "Your Full Name is " + a + " " + b)


//__$ Question number 2___//


var mobile = prompt("enter your favourite mobile name", "Write here");
document.write("My Favourite Mobile Phone is: " + mobile + "<br>");
document.write(mobile.length);

//__$ Question number 3___//

var a = "Pakistani"
alert(a);
document.write("Index of 'n' is " + a.indexOf("n"));


//__$ Question number 4___//


var a = "Hello WOrld";
alert(a);
document.write("last Index of 'l' is " + a.lastIndexOf("l"));


// __$ Question number 5___//


var a = "Pakistnai";
alert(a);
document.write("Character at index of 3 is " + a.charAt("3"));

// __$ Question number 6___//


var first_name1 = prompt("enter first name")
var last_name1 = prompt("enter last name")
var full_name1 = first_name1.concat(' ' + last_name1)

alert("Your Full name is: " + full_name1)



//__$ Question number 7___//

var country = ["hyder", "abad"]
country.splice(0, 1, "islam");

document.write(country);


//__$ Question number 8___//

var message = "Ali and Sami are best friends. They play cricket and football together."

message.split("and").join("&")


//__$ Question number 9___//


var word = "472"

document.write("Value: ", word, "<br>", "Type: ", typeof(word), "<br>", "Value: ", word = +word, "<br>", "Type: ", typeof(word), )


//__$ Question number 10___//


var a = prompt("Enter small latter value", "Your value convert in capital latter");

document.write(a.toUpperCase(a))

//__$ Question number 11___//


function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    document.write(sentence.join(" "));
    return sentence;
}
titleCase(prompt("Write here"));


//__$ Question number 12___//

var numb = prompt('enter a value with point')
var reslt = numb.replace('.', "")

document.write("Number: ", numb, "<br> Result: ", reslt)

//__$ Question number 13___//


var name = prompt("Enter your name")

name = name.toLocaleLowerCase()
var check = false

for (i = 0; i < name.length; i++) {
    if (name.slice(i, i + 1).charCodeAt() == 33 || name.slice(i, i + 1).charCodeAt() == 44 || name.slice(i, i + 1).charCodeAt() == 46 || name.slice(i, i + 1).charCodeAt() == 64) {
        check = true;
    } else {
        check = false;
    }
}

if (check == true) {
    alert("please enter a correct user name")
} else {
    name
}

// __$ Question number 14 ___ //

var Bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var want = prompt("welcome to ABC bakery: What do you want to order sir/mam")
var isFound = false
want = want.toLocaleLowerCase()

for (i = 0; i < Bakery.length; i++) {

    if (want === Bakery[i]) {
        alert(want + " is avaliable at index " + i + " in our bakery")
    }
    isFound = true
    break
}

if (isFound === false) {
    alert("we are sorry " + want + " is not avaible in our bakery")
}

// __$ Question number 15 ___ //


var str = prompt();
var flag = 0
var count = 0
var ceck = +str.slice(0, 1)

if (ceck.toString() != "NaN") {
    flag++
} else {
    for (i = 0; i < str.length; i++) {
        var cc = +str.slice(i, i + 1)
        if (cc.toString() == "NaN") {
            count++
        }
    }
}

if (flag == 1 || count == str.length) {
    alert("password does not meet above requirements")
} else {
    console.log("ok")
}


// __$ Question number 16 ___ //


var university = "University of Karachi";
var univ = university.split("");

for (i = 0; i < univ.length; i++) {
    document.write(univ[i], "<BR>");
}


// __$ Question number 17 ___ //


var input = prompt();
var LastInput = input.slice(input.length - 1)

document.write("Input " + input + "<BR>" + "Last character of input: " + LastInput)

// __$ Question number 18 ___ //


var text1 = "The quick brown fox jumps over the lazy dog"
var flag = 0
var checker = "the "
var textcheck = text1.toLocaleLowerCase()

for (i = 0; i < textcheck.length; i++) {
    dd = textcheck.slice(i, (checker.length) + i)

    if (checker == dd) {
        flag++
    }
}

document.write(text1 + "<BR> there are " + flag + " occurrence(s) of world 'the'")


// _____________chapter # 26-------30__________//


// __$ Question number 1 ___ //


var a = prompt("enter positive number")
var b = ("the round of value is " + Math.round(a))
var c = ("the floor value is " + Math.floor(a))
var d = ("the ceil value is" + Math.ceil(a))

document.write("Your input is " + a + "<br>" + b + "<br>" + c + "<br>" + d)

// __$ Question number 2___ //

var a = prompt("enter negative number")
var b = ("the round of value is " + Math.round(a))
var c = ("the floor value is " + Math.floor(a))
var d = ("the ceil value is" + Math.ceil(a))

document.write("Your input is " + a + "<br>" + b + "<br>" + c + "<br>" + d)

// __$ Question number 3___ //

var mathAbs = prompt("Enter a number")

document.write("The absolute value of " + mathAbs + " is " + Math.abs(mathAbs))

// __$ Question number 4___ //

var dice = Math.floor(6 * Math.random() + 1)
document.write(dice)

// __$ Question number 5___ //

var diCe = Math.floor(2 * Math.random() + 1)
if (diCe === 2) {
    document.write(diCe + "<br>" + "head")
} else if (diCe === 1) {
    document.write(diCe + "<br>" + "tail")
}

// __$ Question number 6___ //

var rand100 = Math.floor(100 * Math.random() + 1)
document.write("random number between 1 and 100: " + rand100)


// __$ Question number 7___ //

var weight = prompt("Enter Your weight in Gram")
var kilo = (weight / 1000)

document.write("The weight of user in Kilogram: " + kilo)

// __$ Question number 8___ //

var user = prompt("enter the value between 1 t0 10")
var random = Math.floor(10 * Math.random() + 1)
if (random == user) {
    alert("congratulation")
} else {
    alert("Try Again")
}


// _____________chapter # 31-------34__________//




// __$ Question number 1___ //


var datime = new Date()
document.write(datime);


// __$ Question number 2___ //

var month = ['January', 'Febraury', 'March', 'April', 'May', 'june', 'July', 'August', 'September', 'October', 'November', 'December']
var date = new Date()
var curMonth = date.getMonth()
document.write("Current Month is: " + month[curMonth])


// __$ Question number 3___ //


var day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
var days = new Date()
var curDay = days.getDay()
document.write("Current Day is: " + day[curDay])

var three = days[curDay] = days[curDay].slice(0, 3)

document.write("Today is three letter" + days[curDay])


// __$ Question number 4___ //

var namday = prompt("ENter the day name", "Find the day work")
namday = namday.toLowerCase()
var sun = "sunday"
var sun = "saturday"
if (namday === sun) {
    alert("it is Fun day")
} else {
    alert("Today Is Work Day")
}


// __$ Question number 5___ //


var day = +prompt("Enter a Date")

if (day >= 1 && day <= 15) {
    alert("First fifteen day of the month")
} else if (day > 15 && day <= 31) {
    alert("last day of the month")
} else {
    alert("Invalid number")
}

// __$ Question number 6___ //




// __$ Question number 7 ___ //

var date = new Date()
var date2 = date.getHours()
if (date2 >= 0 && date2 <= 12) {
    alert("Its AM time")
} else if (date2 >= 13 && date2 >= 23) {
    alert("Its PM time")
}


// __$ Question number 8___ //

var laterDate = new Date("12/31/20")

document.write("Later Date: " + laterDate)

// __$ Question number 9 ___ //

var ramDate = new Date("06 / 18 / 2015")
var presDate = new Date()
var ramDate2 = ramDate.getTime()
var presDate2 = presDate.getTime()
var than = presDate2 - ramDate2
var total = than / (1000 * 60 * 60 * 24)
total = Math.round(total)


document.write(total + "have passed since 1st ramdan,2015")



// __$ Question number 10___ //



var pastDate = new Date("jan 1,2015")
var newDate = new Date("dec 5, 2015")
var days = newDate.getTime() - pastDate.getTime()
var day1 = days / (1000 * 3600 * 24)
var finalTime = day1 * 86400

document.write(
    "on the reference date : " + newDate + "<br>" + finalTime + " seconds had passed since the beinning of 2015"
)


// __$ Question number 11___ //



var checkTime = new Date();
var oneHour = new Date();
var oldHour = oneHour.setHours(oneHour.getHours() - 1);
var olddate = new Date(oldHour)

document.write("Curent Date: " + checkTime + "<br> 1 hour ago, it was " + olddate)


// __$ Question number 12___ //


var checkTime = new Date();
var oneHour = new Date();
var oldHour = oneHour.setFullYear(oneHour.getFullYear() - 100);
var olddate = new Date(oldHour)

document.write("Curent Date: " + checkTime + "<br> 1 hour ago, it was " + olddate)


// __$ Question number 13___ //


var age = prompt("enter your current age");
var d = new Date();
var ageCal = d.getFullYear() - age;
document.write("Your age is " + age + "<br>" + "Your birth year is" + ageCal);



// __$ Question number 14___ //

var name = "Muhammad Ameen Zahid";

var date = new Date();
var month = date.getMonth();

var unit = prompt("enter your bill unit");

var chargeUnit = 16;

var netAmount = unit * chargeUnit;

var lateDateCharge = 500;

var grossAmount = netAmount + lateDateCharge;

document.write("Customer Name: " + name + "<BR>");
document.write("Month: " + month + "<BR>");
document.write("Number of Units: " + unit + "<BR>");
document.write("Charge per init: " + chargeUnit + "<BR>");
document.write("Net Amount Payable(within due Date): " + netAmount + "<BR>");
document.write("Late payment surcharge: " + lateDateCharge + "<BR>");
document.write("Gross Amount payable(after due Date): " + grossAmount);


// _____________chapter # 35-------38__________//


// __$ Question number 1___ //


function date() {
    document.write(new Date())
}
date()


// __$ Question number 2___ //


function name(n1, n2) {
    document.write("Assalamualaikum! " + n1 + " " + n2)

}
name("Muhammad", "Ameen")


// __$ Question number 3___ //

var a = +prompt("enter first value for sum")
var b = +prompt("enter Second value for sum")

function myFunction(a, b) {
    alert(a + b)
}
myFunction(a, b)


// __$ Question number 4___ //


var value1 = +prompt("Enter the first value");
var sign = prompt("Enter the SIgn");
var value2 = +prompt("Enter the Second value");
if (sign === "+") {
    document.write(value1 + value2)
} else if (sign === "*") {
    document.write(value1 * value2)
} else if (sign === "/") {
    document.write(value1 / value2)
} else if (sign === "-") {
    document.write(value1 - value2)
} else {
    document.write("you are bekar")
}


// __$ Question number 5___ //


function square(num) {
    return num * num
}


// __$ Question number 6___ //

function factorial(num) {
    if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
factorial(5)


// __$ Question number 7___ //

function counting() {
    var start = +prompt("Enter counting start number")
    var end = +prompt("Enter counting end number")
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>")
    }
}



// __$ Question number 8___ //

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num
    }
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)
    return calculateSquare(hypotenuse)
}



// __$ Question number 9___ //



function areaRectangle(width, height) {
    return width * height
}
areaRectangle(4, 5)


// __$ Question number 10___ //


function isPalindrome(text) {
    var reverseText = text.split('').reverse().join('')

    if (reverseText === text) {
        alert(text + " is palindrome")
    } else {
        alert(text + " is not palindrome")
    }
}


// __$ Question number 11___ //


var line = "the quick brown fox jumps over the lazy dog"

function upperCase(string) {
    string = string.split(" ")
    var array = []
    for (var i = 0; i < string.length; i++) {
        array.push(string[i].charAt(0).toUpperCase() + string[i].slice(1))
    }
    return array.join(" ")
}
console.log("Line was: " + line)
console.log("After running function: " + upperCase(line))


// __$ Question number 12___ //


function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var i = 1; i < array1.length; i++) {
        if (result.length < array1[i].length) {
            result = array1[i];
        }
    }
    return result;
}
console.log(find_longest_word('Web Development Tutorial'));


// __$ Question number 13___ //


function Char_Counts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function(l) {
        uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);
    });
    return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));



// __$ Question number 14___ //


function circum(radius) {
    var circle = 2 * Math.PI * radius;
    alert("The circumference is " + Math.floor(circle))
}
circum(3)

function area(radius) {
    var circle = Math.PI * (radius * radius)
    alert("The area is: " + Math.round(circle))
}
area(3)