const mongoose = require("mongoose");

// Create a MongoDB Database

mongoose.connect("mongodb://localhost:27017/gameDB")
 .then(() => console.log("MongoDB connected"))
 .catch(err => console.log(err));

 // Create Player Schema (Mongoose)
const playerSchema = new mongoose.Schema({
 username: {
 type: String,
 required: true,
 unique:true
 },
 level : Number,
 score : Number,
 createdAt : {
    type : Date,
    default : Date.now
 }
});

const Player =mongoose.model("Player",playerSchema);

// Insert at least 3 players.

const addPlayers = async () => {
    const player1 = new  Player(
        { username : "Aaron",level : 5,score : 1200}
    );
    const player2 = new  Player(
        { username : "Boby",level : 3,score : 850}
    );
    const player3 = new  Player(
        { username : "Chloe",level : 7,score : 1800}
    );
    await player1.save();
    await player2.save();
    await player3.save();
    console.log("Players inserted");
};
// Update Player Score

const updatePlayer = async () => {
    await Player.updateOne(
        { username : "Aaron"},{$set :{ score : 1500 }}
    );
    await Player.updateOne(
        { username : "Chloe"},{$set :{ level : 8 }}
    );
    console.log("Player updated");
};

// Fetch Leaderboard

const leaderboard = async () => {
 const players = await Player.find( {},{
    username :1 ,score :1}).sort({score : -1});
 console.log("Leaderboard:");
 console.log(players);
};

/* Find all players:
• Level greater than 3
• Score greater than 1000
*/

const findPlayers = async() => {
    const players = await Player.find(
        { level : {$gt : 3},score : {$gt : 1000}}
    );
    console.log("Players with Level > 3 and Score > 1000 are:");
    console.log(players);
}

const run = async () => {
  await addPlayers();
  await updatePlayer();
  await leaderboard();
  await findPlayers();

  mongoose.connection.close();
};

run();
findPlayers();


