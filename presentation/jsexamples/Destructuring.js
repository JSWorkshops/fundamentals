var person = {
	firstName: "Bob",
	lastName: "Smith",
	address: {}
}

/*Syntax
[a, b] = [1, 2]
{a, b} = {a:1, b:2}
*/

function getName({firstName, lastName}){
	console.log(firstName, lastName)
}

function getFullName({firstName, lastName, middleName || "foo"}){
	console.log(firstName, lastName, middleName)
}

getFullName(person)
person.middleName = "James"
getFullName(person)