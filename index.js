var katzDeli = [];

function takeANumber(array1, name){
  array1[array1.length] = name;
  console.log("Welcome, ${name} You are number "+array1.length+" in line.")
  return array1;
}

console.log(takeANumber(katzDeli, "kwon"));
console.log(takeANumber(katzDeli, "park"));
