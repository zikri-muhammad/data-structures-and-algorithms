const { constant } = require("lodash");

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    let str = ''
    for (let i = 0; i < contacts.length; i++) {
        // const element = contacts[i];
        if(contacts[i].firstName == name){
            // if (contacts[i].hasOwnProperty(prop)) {
            //     return contacts[i][prop] 
            // }else{
            //     str = "No such property"
            //     break
            // }
            return contacts[i][prop] || 'No such property'
        }
        str = 'No such contact'
    }

    return str
    // Only change code above this line
  }
  
  console.log(lookUpProfile("Bob", "likes"));
  console.log(Math.random())