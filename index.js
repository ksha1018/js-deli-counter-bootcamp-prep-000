var katzDeli = [];

function takeANumber(array1, name){
  array1.push(name);
  return "Welcome, "+ name +" You are number "+array1.length+" in line.";
}

console.log(takeANumber(katzDeli, "kwon"));
console.log(takeANumber(katzDeli, "park"));
console.log(takeANumber(katzDeli, "lee"));
console.log(takeANumber(katzDeli, "han"));

function nowServing(array2){
  if(array2.length === 0){
    return "There is nobody waiting to be served!";
  } else{
    var na = array2[0];
    array2.shift();    
    return "Currently serving " + na;
  }
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

console.log(katzDeli.length);
console.log(currentLine(katzDeli));


