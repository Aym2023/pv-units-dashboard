export default function PVUnitCard({  unit }) {
  return (
    <div className="pv-unit-card">
      <h3>{unit.name}</h3>
      <p>Location: {unit.location}</p>
      <p>Status: {unit.status}</p>
      <p>Power Output: {unit.power_output}</p>
      <p>Last Update Time: {unit.last_update_time}</p>
      {/* Action buttons can be added here */}
    </div>
  );
}
