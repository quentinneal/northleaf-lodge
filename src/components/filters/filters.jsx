import './filters.scss';

function Filters({ filters, priceSort, handleRoomType, handlePersons, handleWifi, handleBreakfast, handlePriceSort, handleReset}) {
    return (
        <div className="filters">
                <div className="filter-element">
                    <label className="filter-label" htmlFor="roomType">Room Type</label>
                    <select className="filter-input" id="roomType" name="roomType" value={filters[0].value} onChange={(e) => handleRoomType(e)}>
                        <option value="">Select Type</option>
                        <option value="king">King</option>
                        <option value="queen">Queen</option>
                    </select>
                </div>
                <div className="filter-element">
                    <label className="filter-label" htmlFor="persons">Persons (Maximum)</label>
                    <select className="filter-input" id="persons" name="persons" value={filters[1].value} onChange={(e) => handlePersons(e)}>
                        <option value="">Select Persons</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="filter-element">
                    <label className="filter-label" htmlFor="priceSort">Price Sort</label>
                    <select className="filter-input" id="priceSort" name="priceSort" value={priceSort} onChange={(e) => handlePriceSort(e)}>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
                <div className="filter-element">
                    <label className="filter-checkbox-container" htmlFor="wifi">
                        <input  className="filter-checkbox-input" id="wifi" name="wifi" type="checkbox" checked={filters[2].value} onChange={(e) => handleWifi(e)}></input>
                        <span className="filter-checkbox-text">Wifi</span>
                    </label>
                </div>
                <div className="filter-element">
                    <label className="filter-checkbox-container" htmlFor="breakfast">
                        <input  className="filter-checkbox-input" id="breakfast" name="breakfast" type="checkbox" checked={filters[3].value} onChange={(e) => handleBreakfast(e)}></input>
                        <span className="filter-checkbox-text">Breakfast</span>
                    </label>
                </div>
                <div className="filter-element">
                    <input type="reset" value="Reset" className="filter-reset" onClick={handleReset} />
                </div>
                
            </div>
    );
}

export default Filters
