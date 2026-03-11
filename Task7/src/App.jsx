import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlayerCard from "./components/PlayerCard";
import "./App.css";

function App() {
 const [showProfiles, setShowProfiles] = useState(true);

 const [name, setName] = useState("");
 const [sport, setSport] = useState("");
 const [team, setTeam] = useState("");
 const [status, setStatus] = useState("");

 const [players, setPlayers] = useState([
 { id: 1, name: "MS.Dhoni", sport: "Cricket", team: "India", status: "Retired" },
 { id: 2, name: "Ruturaj Gaikwad", sport: "Cricket", team: "India", status: "Active" },
 { id: 3, name: "Sanju Samson", sport: "Cricket", team: "India", status: "Active" }
 ]);

const handleSubmit = (e) => {
 e.preventDefault();

    const newPlayer = {
        id: players.length + 1,name,sport,team,status  
    };
    
 setPlayers([...players, newPlayer]);
 setName("");
 setSport("");
 setTeam("");
 setStatus("");
 };

 return (
   <div>
      <Header/>
        <h2>Cricket Players</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Player name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type="text"
            placeholder="Sport"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
        />
        <input
            type="text"
            placeholder="Team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
        />
        <input
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
        />
        <button type="submit">Add Profile</button>
       </form>
 <button onClick={() => setShowProfiles(!showProfiles)}>
 Toggle Profiles
 </button>
 {showProfiles && players.map((player) => (
   <PlayerCard
       key={player.id}
       name={player.name}
       sport={player.sport}
       team={player.team}
       status={player.status}
   />
 ))}
 <Footer />
 </div>
 );
}
export default App;