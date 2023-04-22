const TopFilter = () => {
  return (
    <div className="filters">
      <select name="" id="filterOptions">
        <option value="Relevantie">Relevantie</option>
        <option value="Prijs laag-hoog">Prijs laag-hoog</option>
        <option value="Prijs hoog-laag">Prijs hoog-laag</option>
        <option value="Naam a-z">Naam a-z</option>
        <option value="Naam z-a">Naam z-a</option>
      </select>
    </div>
  );
};

export default TopFilter;
