////////////////////////   Alerts ( Chapter 1 )  /////////////////////////////////////////////////////

// 1.
// alert("Welcome to Our Page");

// 2.
// alert("Error! Please enter a valid password");

// 3.
// alert("Welcome to JS Land \n Happy Coding!");

// // 4. not completed
// alert("Welcome to JS Land");
// alert("Happy Coding! \n <input type="checkbox"> ");

// 5. 
// do in console
// alert("Hello... I can run JS through my web browser console");


////////////////////////////   Variables for strings ( Chapter 2 )   ///////////////////////


// 1.
// var username;

// 2.
// var myName;
// myName = "Bisma Naz";

// 3.
// var message;
// message ="Hello World";
// alert(message);

// 4.
// var studentName ="Johne Doe";
// var studentAge="15 years old";
// var studentProfession = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentProfession);

// 5. 
// alert("PIZZA \nPIZZ \nPIZ \nPI \nP");

// 6.
// var email = "Bisma.Naz99@gmail.com"
// var someString ="My email address is "
// var add = someString + email;
// alert(add);

// 7.
// var book = "A smarter way to learn JavaScript" ;
// var x = "I am trying to learn from the Book ";
// var z= x + book;
// alert(z);

// 8.
// document.write("Yah! I can write HTML content through JavaScript");

// 9.
// var x="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(x);


///////////////////////      Variables for numbers ( Chapter 3 )    ///////////////////////////////////////////////////


// 1.
// var age = 21;
// alert("i am " + age + " years old");

// 2.
// var a=14;
// alert("you have visited. This site "+a+"times");


// 3.
// var birthYear = 1998;
// document.write("My Birth Year is " + birthYear + " <br>" + "Datatype of my declare varible is number");

// 4.
// var VisitorName = "John Doe";
// var ProductTitle = "T-shirt(s)";
// var Quantity = 5;
// document.write("<b>" + VisitorName + "</b>" + " ordered " + "<b>" + Quantity + "</b> " + " <b> " + ProductTitle + "</b>" + " on XYZ Clothing store");



//////////////////////////   Legal and illegal ( Chapter 4 )   ///////////////////////////

// 1. 
// var a ,b, c;

// 2.
// var a, $b, _c, bismaNaz , bisma1 ; // legal variable
// var 1a, ?b, stu dent, alert, function ; // illegal variable

// 3.
// var a= "numbers";
// var b= $;
// var c= _;
// document.write("<h2>" + "Rules for naming JS variables" +"</h2>");
// document.write("Variable names can only contain , and For example $my_1stVariable");
// document.write("<br> Variables must begin with a letter, $ or _. For example $name, _name or name");
// document.write("<br> Variable names are case sensitive");
// document.write("Variable names should not be JS keywords");


///////////////////////////// Math Expression ( Chapter 5 )  ///////////////////////////////////////////////////////////////////////////////////



// 1.
// var num1 = +prompt("enter a number");
// var num2 = +prompt("enter second number");
// var result = num1 + num2;
// document.write("Sum of " +num1+"and"+num2+"is"+result);

// 2.
// var num1 = +prompt("enter a number");
// var num2 = +prompt("enter second number");
// var result = num1 - num2;
// document.write("Subtraction of " +num1+"and"+num2+"is"+result);

// var result = num1 * num2;
// document.write("Mult of " +num+"and"+num2+"is"+result);

// var result = num1 / num2;
// document.write("Div of " +num1+"and"+num2+"is"+result);

// var result = num1 % num2;
// document.write("Mod of " +num1+"and"+num2+"is"+result);

// 3.
// var x;
// document.write("Value after variable declaration is:" + x);
// x = 5;
// document.write("<br> Initial value: "+ x);
// x++;
// document.write("<br> Value after increment is: "+ x);
// x=x+7;
// document.write("<br> value after addition is:" + x);
// x--;
// document.write("<br> Value after decrement is: "+ x);
// x= x%3;
// document.write("<br> the remainder is "+ x);

// 4.
// var ticketPrice = 600;
// var x=5;
// document.write("Total cost of Buying "+ x + "tickets to a movie is " + ticketPrice*x +"PKR");

// 5.
// var j;
// for (var i =1 ; i<=10 ; i++)
// {
//  j=i*2;
//     document.write("<br> 2 *" +i+ "=" + j);   
// }

// 6.
// var celciusTemp = +prompt("enter temperature");
// var farenheit = (celciusTemp * (9/5)+32);
// document.write("<br> temperature in "+celciusTemp+ " oC is " + farenheit+ " oF");
// var farenheitTemp = +prompt("enter temperature");
// var celcius = ((farenheitTemp-32)*(5/9));
// document.write("<br> temperature in "+farenheitTemp+ " oF is " + celcius+ " oc");

// 7.
// var Price_of_item_1 = 650;
// var Price_of_item_2 =100;
// var Ordered_quantity_of_item_1 = 3;
// var Ordered_quantity_of_item_2 = 7;
// var Shipping_charges =100;
// var totalCost = ((Price_of_item_1*Ordered_quantity_of_item_1) + (Price_of_item_2*Ordered_quantity_of_item_2) + Shipping_charges);

// document.write("Price_of_item_1 is: " + Price_of_item_1);
// document.write(" <br> Ordered_quantity_of_item_1: "+ Ordered_quantity_of_item_1);

// document.write(" <br> Price_of_item_2 is: " + Price_of_item_2);
// document.write(" <br> Ordered_quantity_of_item_2: "+ Ordered_quantity_of_item_2);
// document.write(" <br> Shipping_charges: "+ Shipping_charges);
// document.write("<br> Total cost of your order is: "+ totalCost);

// 8.
// var student1 = +prompt("enter marks");
// var student2 = +prompt("enter marks");
// var totalMarks = 980;
// var marksObtained = student1+student2;
// var per = ((marksObtained / totalMarks) * 100);
// document.write(" <br> total marks : "+totalMarks);
// document.write(" <br> marks obtained:" +marksObtained);
// document.write(" <br> percentage:" +per + "%");

// 9.
// var US_dollars = 10;
// var SaudiRiyals = 25;
// var pakistaniRupees = ((104.80*US_dollars)+(28*SaudiRiyals));
// document.write("<h2>" + "Currency in PKR" + "</h2>")
// document.write("Total Currency in PKR: "+pakistaniRupees);

// 10.
// var num = 2;
// num  = ((num +5)*10)/2 ;

// 11.
// var currentYear = 2016;
// var  birthYear = 1992;
// var age = currentYear - birthYear ;
// document.write("Current Year: "+currentYear);
// document.write("Birth Year: "+birthYear);
// document.write("Your Age is : "+age);

// 12.
// var radius = 20;
// const pi = 3.142
// document.write( " <br> Radius of a circle is "+radius);
// document.write("<br> Circumference: "+(2*pi*radius));
// var Area = (pi*(radius*radius));
// document.write(" <br> Area: "+Area);

// 13.
// var snack ="lays";
// var c_age = 15;
// var maxAge = 65;
// var estimatedAmount = 3;
// var total =( maxAge - c_age) * estimatedAmount;
// document.write("Favourite snack:" + snack);
// document.write(" <br> current age : "+c_age);
// document.write("  <br> max age; "+maxAge);
// document.write("  <br> amount f snacks per day"+estimatedAmount);
// document.write(" <br> you will need "+ total + " lays to last you until the ripe old age of " +maxAge);




//////////////////////////////////////////    math  expressions ( Chapter 6 - 9 )    //////////////////////////////////////////////////////////////





// 1.
// var a = +prompt("enter the number");
// document.write("Result : <br> the value of a is :"+a);
// document.write("<br> the value of ++a is :"+ (++a));
// document.write(" <br> Now the value of a is :"+a);

// document.write("<br> <br> the value of a++ is :"+(a++));
// document.write("<br> Now the value of a is :"+a);

// document.write("<br> <br> the value of --a is :"+(--a));
// document.write("<br> Now the value of a is :"+a);

// document.write("<br> <br> the value of a-- is :"+(a--));
// document.write("<br> Now the value of a is :"+a);

// 2.
// var a= 2;
// var b=1;
// document.write("<br> the value of a is :"+a);
// document.write("<br> the value of b is :"+b);
// var result = --a - --b + ++b + b--;
// // //         1  -  0  +  1  +  1;
// document.write("<br> Result is :"+result);

// 3.
// var name = prompt("enter your name");
// alert("welcome "+name);

// 5.
// var number = +prompt("enter a number");
// var j;
// var num = number;
// if (num===number) {
//     for (var i =1 ; i<=10 ; i++)
// {
//  j=i*number;
//     document.write("<br>" +number+ " * " +i+ " = " + j);   
// }
// }

// else {
//     var j;
// for (var i =1 ; i<=10 ; i++)
// {
//  j=i*5;
//     document.write("<br> 5 *" +i+ "=" + j);   
// }
// }

// 6.
// var subject1 = prompt("enter subject1");
// var subject2 = prompt("enter subject2");
// var subject3 = prompt("enter subject3");
// var totalMarks1 = 100;
// var totalMarks2 = 100;
// var totalMarks3 = 100;
// var totalMarks = 300;
// var obtainedMarks1 = +prompt("enter obtained marks of first subject1");
// var obtainedMarks2 = +prompt("enter obtained marks of  subject2");
// var obtainedMarks3 = +prompt("enter obtained marks of  subject3");
// var marksObtained = obtainedMarks1+obtainedMarks2+obtainedMarks3;
// var per1 = (obtainedMarks1 / totalMarks1 ) *100;
// var per2 = (obtainedMarks2 / totalMarks2 ) *100;
// var per3 = (obtainedMarks3 / totalMarks3 ) *100;
// var per = (marksObtained / totalMarks ) *100;
// document.write(" <table><tr><th>Subject</th><th>Total marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>English</td><td>"+totalMarks1+"</td><td>"+obtainedMarks1+"</td><td>"+per1+"%</td></tr><tr><td>Math</td><td>"+totalMarks2+"</td><td>"+obtainedMarks2+"</td><td>"+per2+"%</td></tr><tr><td>Urdu</td><td>"+totalMarks3+"</td><td>"+obtainedMarks3+"</td><td>"+per3+"%</td></tr><tr><td></td><td>"+totalMarks+"</td><td>"+marksObtained+"</td><td>"+per+"%</td></tr></table>");






////////////////////////////////  User input and conditional statements ( Chapter 9 - 11 )  //////////////////////////////////////////////////////////////////



// 1.
// var city = prompt("Enter city name");
// if (city === "karachi"){
//     alert("Welcome to city of lights")

// }

// 2.
// var gender = prompt("Enter gender");
// if (gender==="male"){
//     alert(" Good Morning Sir.")
// }
// else{
//     alert(" Good Morning Maam.")
// }

// 3.
// var color =  prompt("Enter traffic signal color");
// if (color === "red"){
//     alert("Must Stop")
// }
// else if (color===yellow){
//     alert("Ready to move")
// }
// else if (color ===green){
//     alert("Move now")
// }

// 4.
// var remFuel = +prompt("Enter remaining fuel in car ");
// if (remFuel < 0.25 ){
//     alert("Please refill the fuel in your car")
// }

// 5a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// 5b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// 5c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// 5d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// 5e
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }    

// 5f
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// 6.
// var obtainedMarks1 = +prompt("enter obtained marks of first subject1");
// var obtainedMarks2 = +prompt("enter obtained marks of  subject2");
// var obtainedMarks3 = +prompt("enter obtained marks of  subject3");
// var marksObtained = obtainedMarks1+obtainedMarks2+obtainedMarks3;
// var totalMarks = +prompt("enter total marks");
// var per = (marksObtained / totalMarks ) *100;
// document.write("Total Marks :"+totalMarks);
// document.write("<br> Marks Obtained:"+marksObtained+"<br>");

// if (per >=80){
//     document.write("Grade: A-one <br>")
//     document.write("Remarks: Excellent")

// }
// else if (per >=70){
//     document.write("Grade: A <br>")
//     document.write("Remarks: Good")
// }
// else if (per >=60){
//     document.write("Grade: B <br>")
//     document.write("Remarks: You need to improve")
// }
// else{
//     document.write("Fail <br>")
//     document.write("Remarks: Sorry")
// }

// 7.
// var  secretNumber = 7;
// var guess = +prompt("guess the number (ranging from 1 to 10)");
// if (secretNumber===guess){
//     alert("Bingo! Correct answer.")
// }

// else if (secretNumber===++guess){
//     alert("Close enough to the correct answer");
// }

// 8.
// var number =  +prompt("Enter the number ");
// if (number % 3 == 0){
//     alert("number is divisible by 3")
// }

// 9.
// var number =  +prompt("Enter the number ");
//  if(number % 2 == 0) {
//     document.write('Number is even!');
// } 
// else {
//    document.write('Number is odd!');
// }
 
// 10.
// var temp =  +prompt("Enter the temperature ");
// if (temp>40){
//     alert("“It is too hot outside.”")
// }
// else if(temp>30){
//     alert("“The Weather today is Normal.”")
// }
// else if (temp>20){
//     alert("“Today’s Weather is cool.”")
// }
// else if (temp>10){
//     alert("“OMG! Today’s weather is so Cool.”")
// }

// 11.
// var number1 =  +prompt("Enter the number1 ");
// var number2 =  +prompt("Enter the number 2");
// var operator =  prompt("Enter the operator ");
// if (operator==="+"){
//     document.write(number1+ "+"+number2+"="+(number1+number2))
// }
// else if (operator==="-"){
//     document.write(number1+ "-"+number2+"="+(number1-number2))
// }
// else if (operator==="*"){
//     document.write(number1+ "*"+number2+"="+(number1*number2))
// }
// else if (operator==="/"){
//     document.write(number1+ "/"+number2+"="+(number1/number2))
// }
// else if (operator==="%"){
//     document.write(number1+ "%"+number2+"="+(number1%number2))
// }



//////////////////////////////////     IF Else , else if ,testing condition  ( Chapter 12 - 13 ) //////////////////////////////////////


// 1.
// var ch = prompt("eneter character");
// if (ch >= 'A' && ch <= 'Z') {
//         document.write(ch +" is an UpperCase character\n"); 
// }
//     else if (ch >= 'a' && ch <= 'z') {
//     document.write(ch +" is an LowerCase character\n"); 
//     }
  
//     else{
//           document.write(ch +" is a number \n"); 
//     }

// 2.
// var number1 =  +prompt("Enter the number1 ");
// var number2 =  +prompt("Enter the number 2");
// if (number1>number2){
//     document.write(""+number1+">"+number2)

// }
// else if (number1<number2){
//     document.write(""+number1+"<"+number2)

// }
// else if (number1===number2){
//     document.write(""+number1+"="+number2)

// }

// 3.
// var number =  +prompt("Enter the number ");
// if(number>0){
//     document.write("num is +ve")
// }
// else if(number<0){
//     document.write("num is -ve")
// }
// if(number==0){
//     document.write("num is 0")
// }

// 4.
// var char =  prompt("Enter the character");
// if (char==="a" | char==="e" |char==="i" | char==="o" | char==="u")
// {
//     document.write("true");
// }
// else{
//     document.write("false");

// }

// 5.
// var password = "pakistan";
// var user_paswd = prompt("enter password");
// if (user_paswd===password){
//     alert("Correct! The password you entered matches the original password")
// }

// else if (user_paswd===""){
//     alert("Please enter your password")
// }
// else{
//     alert("“Incorrect password”")
// }

// 6.
// var greeting ;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else {
// greeting = "Good evening";
// }

// 7.
// var time =  +prompt("Enter the time in formal of 00000 to 2359 ");
// // var time = 1900;

// if(time>=0000  && time <1200){
//     alert("Good Morning")
// }
// else if (time>= 1200 && time <1700){
//     alert("Good afternoon")
// }
// else if (time>= 1700 && time<2100){
//     alert("Good evening")
// }
// else if (time>=2100 && time<=2359){
//     alert("Good night")
// }




/////////////////////////////////   Arrays( Chapter 14 - 16 )  ////////////////////////////////////////////////////////




// 1.
// var studentsNames = []; // literal method


// 2.
// var studentsNames = new Array(); // literal method
// studentsNames = ["arroba", "soiba"];

// 3.
// var studentsNames = [];
// var studentsNames = ["arroba", "soiba"];

// 4.
// var num = [];
// num =[1,2,3];

// 5.
// var boolean = [];
// boolean=[true,false];

// 6.
// var mixed_array = ["soiba", 10,true];

// 7.
// var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.write("Qualification");
// for (var i=0; i<qualification.length; i++){
//     document.write("<br>"+i+")  "+qualification[i] )
// }

// 8.
//  var studentsNames = ["Michael", "John","Tony"];
//  var score = [320,230,480];
//  var totalMarks = [500,500,500];
//  var per1 = (score[0]/totalMarks[0])*100;
//  var per2 = (score[1]/totalMarks[1])*100;
//  var per3 = (score[2]/totalMarks[2])*100;
// var per = [per1,per2,per3]
//  for (var i=0; i< studentsNames.length;i++){
//      document.write("<br>Score of "+studentsNames[i]+" is "+score[i]+". Percentage:"+per[i]+"%");
//  }

// 9.

// var color =[" red ", " blue ", " green "];
// document.write(color);
// // a
// var begColor = prompt("enter color what you wants to add in begining");
// color.unshift(begColor);
// document.write("<br>"+color);
// // b
// var endColor = prompt("enter color what you wants to add");
// color.push(endColor);
// document.write("<br>"+color);
// // c
// var begColor1 = prompt("enter color what you wants to add in begining");
// var begColor2 = prompt("enter color what you wants to add in begining");
// color.unshift(begColor1,begColor2);
// document.write("<br>"+color);
// // d
// color.shift();
// document.write("<br>"+color);
// // e
// color.pop();
// document.write("<br>"+color);
// // f
// var color_index = +prompt("enter index number");
// var Color1 = prompt("enter color what you wants to add");
// color.splice(color_index,0,Color1);
// document.write("<br>"+color);
// // g
// var color_index_del = +prompt("enter index number");
// var Color_many_del = +prompt("enter how many delete colors");
// color.splice(color_index_del,Color_many_del);
// document.write("<br>"+color);

// 10.
// var score = [320,230,480,120];
// document.write("Scores of students :" +score);
// score.sort();document.write("<br>Ordered Scores of students :" +score);

// 11.
// var city = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities list:  "+city);
// document.write("<br>Selected Cities list:  "+city.slice(2,4));

// 12.
// var arr = [" This ", " is ", " my ", " cat "];
// document.write("Array:  "+arr);
// var a = arr.join(" ");
// document.write("<br>String:  "+a);

// 13.
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse")
// arr.push("printer","monitor");
// document.write("Devices:"+arr);
// document.write("<br>Out:<br>"+arr.shift());
// document.write("<br>Out:<br>"+arr.shift());
// document.write("<br>Out:<br>"+arr.shift());
// document.write("<br>Out:<br>"+arr.shift());

// // 14.
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse")
// arr.push("printer","monitor");
// document.write("Devices:"+arr);
// document.write("<br>Out:<br>"+arr.pop());
// document.write("<br>Out:<br>"+arr.pop());
// document.write("<br>Out:<br>"+arr.pop());
// document.write("<br>Out:<br>"+arr.pop());

// 15.
// var manufactures =["Apple", "Samsung", "Motorola", "Nokia", "Sony ", "Haier"];
// document.write("<select><option>"+manufactures[0]+"</option><option>"+manufactures[1]+"</option><option>"+manufactures[2]+"</option><option>"+manufactures[3]+"</option><option>"+manufactures[4]+"</option><option>"+manufactures[5]+"</option></select>");



/////////////////////////       Arrays And Loops ( Chapter 17 - 20 )  ////////////////////////////////////////////////////////





// 1.
// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];


// 2. 
// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// var str1 = matrix[0].join(" ");
// var str2 = matrix[1].join(" ");
// var str3 = matrix[2].join(" ");

// document.write("<br>"+str1);
// document.write("<br>"+str2);
// document.write("<br>"+str3);

// 3.
// for(var i=1;i<=10;i++){
//     document.write("<br>",i);
// }

// 4.
// var number = +prompt("enter the number to show its multiplication table");
// var length = +prompt("enter the length multiplication table");

// for (var i =1 ; i<=length ; i++)
// {
//  j=i*number;
//     document.write("<br>" +number+ " * " +i+ " = " + j);   
// }

// 5.
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i =0; i<fruits.length;  i++){
//     document.write("<br>"+fruits[i]);
// }

// for (var j =0 ; j<fruits.length; j++){
//     document.write("<br>Elements at index"+j+ " is "+fruits[j])
// }

// 6.
// a
// document.write("Counting<br>");
// for (var i=1; i<=15;i++){
//     document.write(i+" , ")
// }
// // b
// document.write("<br> Reverse Counting<br>");
// for (var j=10; j>=1;j--){
//     document.write(j+" , ")
// }
// // c
// document.write("<br> Reverse Counting<br>");
// for (var j=10; j>=1;j--){
//     document.write(j+" , ")
// }
// d
// document.write("<br>Even Counting<br>");
// for (var k=0; k<=20;k=k+2){
//     document.write(k+" , ")
// }
// e
// document.write("<br>Odd Counting<br>");
// for (var k=1; k<=20;k=k+2){
//     document.write(k+" , ")
// }
// f
// document.write("<br>Series: <br>");
// for (var k=2; k<=20;k=k+2){
//     document.write(k+"k , ")
// }

// 7.
// var a = ["cake", "apple_pie", "cookie", "chips", "patties"];
// var search = prompt('what do you want to order?');

// var flag=0;
// if (search!=0){
//     for (var i=0; i<a.length;i++){
//         if (a[i]===search){
//                     document.write(a[i]+" is available at index "+i+" in our bakery")
//                     ++flag;
//                     break;
//                 }

//     }
// }

// if(flag===0){
//     document.write("We are sorry"+search+" is not available in our bakery");
// }

// 8.
// var a = [24, 53, 78, 91, 12];
// var suppose_largest = a[3];
// for (var i=0; i<a.length; i++){
//     if (a[i]===suppose_largest){
//         document.write("largest number is "+a[i])
//     }
// }

// 9. 
// var a = [24, 53, 78, 91, 12];
// var suppose_smallest = a[0];
// for (var i=0; i<a.length; i++){
//     if (suppose_smallest>a[i]){
//         document.write("smallest number is "+a[i])
//     }
// }

// 10.
// for (var i = 5 ; i<=100 ; i=i+5){
//     document.write(i+ " , ");   

// }


































