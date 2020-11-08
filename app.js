// Using the formular half base times height.

// let b = 5;
// let h = 7;
// let areaOfTri =  1/2 * b * 7;

// console.log(areaOfTri);

//Using heron's formular

let a = 5;
let b = 6;
let c = 7;

let s = (a + b + c)/2;

let areaOfTri = Math.sqrt(s*((s-a) * (s-b) * (s-c)));


console.log(areaOfTri);