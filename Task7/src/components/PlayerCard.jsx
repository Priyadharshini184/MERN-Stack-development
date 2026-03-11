import "./PlayerCard.css";
function PlayerCard({ name, sport, team, status }) {
 return (
 <div className="card">
 <h3>{name}</h3>
 <p>Sport:{sport}</p>
 <p>Team :{team}</p>
 <p>Status :{status}</p>
 </div>
 );
}
export default PlayerCard;
