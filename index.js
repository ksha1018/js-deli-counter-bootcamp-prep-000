var katzDeli = [];

function takeANumber(array1, name){
  array1.push(name);
  console.log("Welcome, ${name} You are number "+array1.length+" in line.")
  return array1;
}

console.log(takeANumber(katzDeli, "kwon"));
console.log(takeANumber(katzDeli, "park"));
console.log(takeANumber(katzDeli, "lee"));
console.log(takeANumber(katzDeli, "han"));

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
  if(array3.length ===0){
    console.log("The line is currently empty.");
  } else{
    console.log("The line is currently: ");
    for(var i=0; i<array3.length; i++){
      console.log(i+1 +". "+ array3[i]);
    }
  }
}

console.log(currentLine(katzDeli));





"The line is currently: 1. Bill, 2. Jane, 3. Ann"