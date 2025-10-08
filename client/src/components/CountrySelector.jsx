import { useState, useEffect } from "react";
import flags from "country-flag-icons/react/3x2";

const countries = [
  { name: "Argentina", code: "AR" },
  { name: "Brazil", code: "BR" },
  { name: "England", code: "GB" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
];

const CountrySelector = ({ selectedCountry, onSelectCountry }) => {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down after 100px
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex gap-4 overflow-x-auto py-4 px-4 shadow bg-gray-900">
        {countries.map(({ name, code }) => {
          const Flag = flags[code];
          return (
            <div
              key={name}
              onClick={() => onSelectCountry(name)}
              className={`flex flex-col flex-1 items-center cursor-pointer ${
                name === selectedCountry
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-90"
              }`}
            >
              <Flag className="w-10 h-10 rounded" />
              <span className="text-sm mt-1">{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountrySelector;
