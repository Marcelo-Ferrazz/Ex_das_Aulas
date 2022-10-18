// Exercício 02 //
var array = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995]
console.log(array)

console.log(array.length)

console.log(array[6])

var arrayS = array.toString()

console.log(typeof arrayS)

var s = array.join(" / ")

console.log(s)

var w = array.unshift("IOS");

console.log(array)



console.clear()
// Exercício 03 //
var array = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995], 
    ["React", 2013, "Java", 1995]
]
console.log(array)

console.log(array.length)

console.log(array[2][1])

array[1][2] = "JavaScript";

delete array[2][2];


var end = array.push("pipoca");
console.log(array)

