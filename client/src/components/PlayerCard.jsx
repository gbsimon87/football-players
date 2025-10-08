const PlayerCard = ({ player }) => (
  <div className="bg-gray-800 p-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
    <img
      src={player.image}
      alt={player.name}
      className="w-full h-40 object-contain rounded-lg mb-3"
    />
    <h3 className="text-lg font-bold text-white">{player.name || "N/A"}</h3>
    <p className="text-sm text-gray-400 mb-2">{player.position || "N/A"}</p>

    <div className="text-sm text-gray-300 space-y-1">
      <p><span className="text-gray-400">🇦🇷 Country:</span> {player.country || "N/A"}</p>
      <p><span className="text-gray-400">🎂 DOB:</span> {player.date_of_birth || "N/A"}</p>
      <p><span className="text-gray-400">📅 Age:</span> {player.current_age || "N/A"}</p>
      <p><span className="text-gray-400">🏁 Pro Since:</span> {player.year_became_pro || "N/A"}</p>
      <p><span className="text-gray-400">📆 Years Pro:</span> {player.years_playing_professionally || "N/A"}</p>
    </div>

    <div className="flex justify-between text-yellow-400 mt-3 text-sm font-medium">
      <span>⚽ Goals: {player.career_goals || "N/A"}</span>
      <span>🎯 Assists: {player.career_assists || "N/A"}</span>
    </div>
  </div>
);

export default PlayerCard;
