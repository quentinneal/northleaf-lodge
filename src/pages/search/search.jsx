import { useState } from "react";
import './search.scss';

import { roomsData } from './roomsData';
import Filters from '../../components/filters/filters';
import Rooms from '../../components/rooms/rooms';

const Search = () => {

    const filterData = [
        {property: 'bedType', value: ''},
        {property: 'persons', value: ''},
        {property: 'wifi', value: false},
        {property: 'breakfast', value: false}
    ];

    const [rooms, setRooms] = useState(roomsData.sort((a, b) => a.price - b.price));
    const [roomsCopy, setRoomsCopy] = useState(roomsData);
    const [filters, setFilters] = useState(filterData);
    const [priceSort, setPriceSort] = useState('ascending');

    const filterRooms = () => {
        const trueFilters = filters.filter(filter => filter.value);
        let filteredRooms = rooms
            filteredRooms = roomsCopy.filter(room => {
            return trueFilters.every(filter => {
                return filter.value === room[filter.property]
            })
        })
        handleSort(priceSort, filteredRooms)
    }

    const handleSort = (priceSortState, modifiedRooms) => {
        switch (priceSortState) {
            case 'ascending':
                modifiedRooms.sort((a, b) => a.price - b.price);
                setRooms(modifiedRooms);
                break;
            case 'descending':
                modifiedRooms.sort((a, b) => b.price - a.price);
                setRooms(modifiedRooms);
                break;
            default:
                setRooms(modifiedRooms);
                break;
        }
    }

    const handleRoomType = (e) => {
        const roomTypeChange = [...filters];
        roomTypeChange[0].value = e.target.value;
        setFilters(roomTypeChange);
        filterRooms();

    }

    const handlePersons = (e) => {
        const personsChange = [...filters];
        personsChange[1].value = e.target.value;
        setFilters(personsChange);
        filterRooms();
    }

    const handleWifi = (e) => {
        const wifiChange = [...filters];
        wifiChange[2].value = e.target.checked;
        setFilters(wifiChange);
        filterRooms();
    }

    const handleBreakfast = (e) => {
        const breakfastChange = [...filters];
        breakfastChange[3].value = e.target.checked;
        setFilters(breakfastChange);
        filterRooms();
    }

    const handlePriceSort = (e) => {
        const {value} = e.target
        setPriceSort(value)
        const roomsCopy = [...rooms]
        handleSort(value, roomsCopy)
    }

    const handleReset = () => {
        setFilters(filterData);
        setRooms(roomsData);  
        setPriceSort('ascending');
    }

    return (
        <div className="search">
            <Filters filters={filters} 
                priceSort={priceSort} 
                handleRoomType={handleRoomType} 
                handlePersons={handlePersons} 
                handleWifi={handleWifi} 
                handleBreakfast={handleBreakfast} 
                handlePriceSort={handlePriceSort} 
                handleSort={handleSort} 
                handleReset={handleReset}
            />
            <Rooms rooms={rooms}/>
        </div>
    );
}

export default Search;