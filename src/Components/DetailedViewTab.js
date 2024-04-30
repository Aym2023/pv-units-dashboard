import {useState} from 'react';
import Search from './Search';
import PVUnitCard from './PVUnitCard';

export default function DetailedViewTab({ units }) {
    // State for search query
    const [searchQuery, setSearchQuery] = useState("");
  
    // Filter PV units based on search query
    const filteredPVUnits = units.filter(
      (unit) =>
        unit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div> 
        <h2>Detailed View</h2>
        <Search setSearchQuery={setSearchQuery} />
        <div className="pv-unit-list">
          {filteredPVUnits.map((unit) => (
            <PVUnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </div>
    );
  }
  