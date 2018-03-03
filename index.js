var katzDeli = [];

function takeANumber(array1, name){
  array1[array1.length] = name;
  console.log("Welcome, ${name} You are number "+array1.length+" in line.")
  return array1;
}

console.log(takeANumber(katzDeli, "kwon"));
console.log(takeANumber(katzDeli, "park"));

function nowServing(array2){
  if(array2.length === 0){
    console.log("There is nobody waiting to be served!");
  } else{
    console.log("Currently serving " + array2[0]);
    array2.shift();
  }
  return array2;
}

console.log(nowServing(katzDeli));
console.log(nowServing(katzDeli));

function currentLine(array3){
  
}

"The line is currently: 1. Bill, 2. Jane, 3. Ann"