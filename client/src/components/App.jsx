// import { Outlet } from 'react-router'

import { useState } from "react";
import TimelineSelector from "./TimelineSelector";
import CountrySelector from "./CountrySelector";
import PlayerList from "./PlayerList";

function App() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedCountry, setSelectedCountry] = useState("Argentina");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* <h1 className="text-3xl font-bold mb-4">Football Timeline Explorer</h1> */}
      {/* <TimelineSelector selectedYear={selectedYear} onSelectYear={setSelectedYear} /> */}
      <CountrySelector selectedCountry={selectedCountry} onSelectCountry={setSelectedCountry} />
      <PlayerList selectedYear={selectedYear} selectedCountry={selectedCountry} />
    </div>
  );
}

export default App