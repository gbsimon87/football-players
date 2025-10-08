import mockPlayers from "../data/mockPlayers";
import PlayerCard from "./PlayerCard";

const PlayerList = ({ selectedCountry, selectedYear }) => {
  // Filter logic based on what is currently selected
  const players = mockPlayers.filter((p) => {
    // Case 1: both filters active
    if (selectedCountry && selectedYear) {
      return p.country === selectedCountry; // since mock data has no year
    }

    // Case 2: only country selected
    if (selectedCountry && !selectedYear) {
      return p.country === selectedCountry;
    }

    // Case 3: only year selected
    if (!selectedCountry && selectedYear) {
      return true; // show all players (no per-year data yet)
    }

    // Case 4: neither selected
    return false;
  });

  const displayPlayers = players.slice(0, 10);

  // Message for empty state or unselected state
  const noSelection = !selectedCountry && !selectedYear;

  return (
    <div className="p-6">
      {/* Dynamic heading */}
      <div className="mb-4 text-center">
        {noSelection ? (
          <p className="text-gray-400">
            Select a year or a country to explore top football players.
          </p>
        ) : (
          <h2 className="text-xl font-semibold text-gray-200">
            Showing{" "}
            {selectedCountry ? `players from ${selectedCountry}` : "players from all countries"}{" "}
            {selectedYear ? `in ${selectedYear}` : ""}
          </h2>
        )}
      </div>

      {/* Player cards or fallback message */}
      {displayPlayers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayPlayers.map((p) => (
            <PlayerCard key={p.id} player={p} />
          ))}
        </div>
      ) : (
        !noSelection && (
          <p className="text-gray-500 text-center mt-10">
            No player data found for this selection.
          </p>
        )
      )}
    </div>
  );
};

export default PlayerList;
