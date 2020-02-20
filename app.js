// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var proGrad1="sushma";
console.log("The driver's name is:" + proGrad1);
var proGrad2="sush";
console.log("The navigators's name is:" + proGrad2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if(proGrad1.length<proGrad2.length){
    console.log("It seems that the navigator has the longest name, it has"+proGrad2.length+" "+"characters");
}
else if(proGrad1.length>proGrad2.length){
    console.log("The driver has the longest name, it has "+proGrad1.length+" "+"characters");
}
else{
    console.log("Wow, you both have equally long names, "+proGrad1.length +" "+"characters!");
}


// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels

function checkvowel(name){
    var s=0;
    var vowel=['a','e','i','o','u'];   
    for(var i=0;i<name.length;i++){
        for(var j=0;j<name.length;j++){
        if(vowel[j]==name[i]){
            console.log(vowel[j]);
            s=s+1;
        }
}
}
if(s==0){
    console.log("no vowels");
}
else{
    console.log(name,s);
}
}
 checkvowel(proGrad1);
 checkvowel(proGrad2);
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function upperlower(name){
    var capital=0;
    var small=0;
    for(var i=0;i<name.length;i++){
        if(/[A-Z]/.test(name.charAt(i))){
            capital++;
        }
        else if(/[a-z]/.test(name.charAt(i))){
            small++;
        }
    }
    console.log("capitalletter:"+ capital+","+"smallletter"+small);
}
upperlower(proGrad1);
upperlower(proGrad2);


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
function upper(name){
    var up="";
    var splitchar=name.split("");
    console.log(splitchar);
for(i=0;i<name.length;i++){
    up=up+splitchar[i]+" ";
}
up=up.toLocaleUpperCase();
console.log(up);
}
upper(proGrad1);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
function navigatorreverse(name){
    var splitvar;
     splitvar=name.split("").reverse().join("");
     console.log(splitvar);
}
navigatorreverse(proGrad2);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(proGrad1+" "+proGrad2);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

function lexicograph(name){
     console.log(name.toUpperCase().split("").sort().join("").toLowerCase());
 }
 lexicograph(proGrad1);
 lexicograph(proGrad2);
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and: