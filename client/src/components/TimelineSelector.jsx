const TimelineSelector = ({ selectedYear, onSelectYear }) => {
  const years = Array.from({ length: 26 }, (_, i) => 2000 + i);

  return (
    <div className="flex gap-3 overflow-x-auto py-4 border-b border-gray-700">
      {years.map(year => (
        <button
          key={year}
          onClick={() => onSelectYear(year)}
          className={`px-4 py-2 rounded-md ${
            year === selectedYear
              ? "bg-yellow-400 text-black font-bold"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
};

export default TimelineSelector;