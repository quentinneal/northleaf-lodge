import { useState, useEffect } from "react";

import './search.scss';

import { roomsData } from '../../data/roomsData';

import Filters from '../../components/filters/filters';
import Rooms from '../../components/rooms/rooms';

const Search = () => {

    const filterData = {
        bedType: '',
        persons: '',
        wifi: false,
        breakfast: false,
    };

    const [rooms, setRooms] = useState(roomsData);
    const [roomsDisplay, setRoomsDisplay] = useState(roomsData);
    const [filters, setFilters] = useState(filterData);
    const [priceSort, setPriceSort] = useState('ascending');

    // Dynamic filtering of rooms
    useEffect(() => {

            const trueFilters: Record<string, string | boolean> = {} ;

            // Collect true attributes from filters state object and add to trueFilters object
            Object.keys(filters).forEach(key => {
                if (filters[key as keyof typeof filters]) {
                    trueFilters[key] = filters[key as keyof typeof filters];
                } 
            })

            // Only display rooms where every truefilter attribute matches contents of any room attributes
            let filteredRooms = [...rooms]
            filteredRooms = rooms.filter(room => {
                return Object.keys(trueFilters).every(property => {
                    return trueFilters[property as keyof typeof trueFilters] === room[property as keyof typeof room]
                })
            })

            // Sort filtered rooms based on priceSort state and set results as roomsDisplay state
            switch (priceSort) {
                case 'ascending':
                    filteredRooms.sort((a, b) => a.price - b.price);
                    setRoomsDisplay(filteredRooms);
                    break;
                case 'descending':
                    filteredRooms.sort((a, b) => b.price - a.price);
                    setRoomsDisplay(filteredRooms);
                    break;
                default:
                    setRoomsDisplay(filteredRooms);
                    break;
            }
            

    }, [filters, rooms, priceSort])
    

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setFilters(prevFilters => ({...prevFilters, [name]: value }));
    }

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target
        setFilters(prevFilters => ({ ...prevFilters, [name]: checked }));
    }

    const handlePriceSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target
        setPriceSort(value)
    }

    const handleReset = () => {
        setFilters(filterData);
        setRoomsDisplay(roomsData);  
        setPriceSort('ascending');
    }

    return (
        
        <main className="search">
            <Filters filters={filters} 
                priceSort={priceSort} 
                handleSelect={handleSelect} 
                handleCheckbox={handleCheckbox}
                handlePriceSort={handlePriceSort} 
                handleReset={handleReset}
            />
            <Rooms roomsDisplay={roomsDisplay}/>
        </main>
    );
}

export default Search;