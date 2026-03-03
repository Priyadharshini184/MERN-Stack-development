/* Create a JavaScript object representing a product (for example: name, price, brand, inStock) and print all its
properties using template literals.*/

let product = {
    name :"Laptop",
    price : 50000,
    brand : "Lenovo",
    inStock : true
};
console.log(`${product.brand} ${product.name} costs ${product.price} and is ${product.inStock?"available":"not available"} in stock`);

/* Write a function that takes a student's marks in 3 subjects as parameters and returns both the total and the
average marks.*/

function marks(sub1,sub2,sub3){
    let sum = sub1+sub2+sub3;
    let average = sum/3;
    return `Total marks: ${sum},Average marks:${average}`;
   
}
console.log(marks(92,85,95));

/* Create an array of 5 favorite movies and print each movie name using a loop.
*/

let movies = ["Frozen1","Frozen2","Moana", "Sleeping Beauty","Chronicles of Narnia"]
for (let i=0 ; i < movies.length ; i++){
    console.log(movies[i]);
}

/* Write an arrow function that takes a number as input and prints whether it is even or odd.
*/

let num =(n) => {
    if(n % 2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(num(6));

/* Create a “profile card” string using template literals that includes your name, college, course, and at least
two hobbies, then print it.*/

let profileCard = {
    name : "Priyadharshini",
    college :"AURCC",
    course : "BE-CSE",
    hobby1 : "Reading books",
    hobby2 : "Watching movies"
}
console.log(`I am ${profileCard.name} and I am currently pursuing ${profileCard.course} at ${profileCard.college}.I enjoy ${profileCard.hobby1} and ${profileCard.hobby2}`);

/* Create a timetable object where each key is a weekday (e.g., "Monday", "Tuesday") and the value is an
array of subjects for that day. Print the subjects for any one chosen day.*/

let timetable = {
    "Monday" : ["OS","DBMS","DSA"],
    "Tuesday" : ["AIML","CN","DSA"],
    "Wednesday" : ["OS","DBMS","CN"],
    "Thursday" : ["AIML","CN","DSA"],
    "Friday" : ["DSA","DBMS","DSA"],
    "Saturday" : ["OS","AIML","DSA"],
}
console.log(`The periods for Wednesday are ${timetable.Wednesday}`);


/*Spotify CRUD Task:
Create an array of song objects to simulate a simple Spotify playlist. Each song should
have properties like id, title, artist, and duration. Using basic JavaScript:*/

let song = [
    {id : 101,title:"Dandelions",artist :"Ruth B.",duration :"3:53"},
    {id : 102,title:"Vienna",artist :"Billy Joel",duration :"3:34"},
    {id : 103,title:"The fate of Ophelia",artist :"Taylor Swift",duration :"3:46"},
    {id : 104,title:"The Prophecy",artist :"Taylor Swift",duration :"4:09"},
    {id : 105,title:"Perfect",artist :"Ed Sheeran",duration :"4:23"},
]

// • Add a new song to the playlist (Create)

song.push({id : 106,title:"A Thousand years",artist :"Taylor Swift",duration :"4:45"});

//• Display all songs using a loop (Read)

for (let i=0; i < song.length; i++){
    console.log(`${song[i].id} : ${song[i].title} by ${song[i].artist},duration:${song[i].duration}`);
}

    //• Update the title or artist of a specific song using its id (Update)

for (let k=0; k < song.length; k++){
    if (song[k].id === 106){
        song[k].artist= "Christina Perri";
        console.log(`Updated song:${song[k].id}:${song[k].title} by ${song[k].artist},duration:${song[k].duration}`);
    }
}   

    //• Remove a song from the playlist using its id (Delete)
for (let i=0; i < song.length; i++){
    if(song[i].id === 105){
        let removed = song.splice(i,1);
        console.log(`Removed ${removed[0].title} from the playlist`);
    }
}

    console.log(`Final playlist:`);

    for (let j=0 ; j < song.length ; j++){
        console.log(`${song[j].id} : ${song[j].title} by ${song[j].artist},duration:${song[j].duration}`);
    }


