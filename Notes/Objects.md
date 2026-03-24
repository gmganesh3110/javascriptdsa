Objects are unordered key pair values
O(N) Complexity
insert O(1)
update O(1)
delete O(1)
search 0(n)

Object.keys O(N)
Object.values O(N)
Object.entries O(N)
hasOwnProperty O(1)

let instructor={
firstName:"Ganesh",
isInstructor:true,
favouriteNumbers:[1,2,3,4,5,6]
}
console.log(Object.entries(instructor));
console.log(Object.values(instructor));
console.log(Object.keys(instructor));
console.log(instructor.hasOwnProperty("firstName"))
