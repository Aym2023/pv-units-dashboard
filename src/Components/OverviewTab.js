 export default function OverviewTab({ units }) {
    // calclate summary information
  
    // const totalPvunits = units.lenght;

    const totalPvunits = units.map(
      () =>  units.lenght);

  
    const totalPowerOutput = units.reduce(
      (acc, unit) => acc + unit.power_output,
      0
    );
    const onlineUnits = units.filter((unit) => unit.status === "online").lenght;
    const offlineUnits = totalPvunits - onlineUnits;
  
    return (
      <div>
        <h2>Overview</h2>
        <p>Total PV Units :{totalPvunits}</p>
        <p>Total Power Output:{totalPowerOutput}</p>
        <p>Online Units:{onlineUnits}</p>
        <p>Offline Units:{offlineUnits}</p>
      </div>
    );
  }
  


