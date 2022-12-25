import { useState, useEffect } from "react";

import './search.scss';

import Filters from '../../components/filters/filters';
import Rooms from '../../components/rooms/rooms';

const Search = () => {

    const filterData = {
        bedtype: '',
        persons: '',
        wifi: false,
        breakfast: false,
    };

    const [roomsDisplay, setRoomsDisplay] = useState([]);
    const [filters, setFilters] = useState(filterData);
    const [priceSort, setPriceSort] = useState('ascending');
    const [loading, setLoading] = useState(true);

    // Dynamic filtering of rooms
    useEffect(() => {
        setLoading(true);

        (async () => {
            try {
                
            const trueFilters: Record<string, string | boolean> = {} ;

            // Collect true attributes from filters state object and add to trueFilters object
            Object.keys(filters).forEach(key => {
                if (filters[key as keyof typeof filters]) {
                    trueFilters[key] = filters[key as keyof typeof filters];
                } 
            })

            // Only display rooms where every truefilter attribute matches contents of any room attributes
            let fetchedRooms = await fetch(`/rooms_list`);
            let roomsList = await fetchedRooms.json();
            roomsList = roomsList.filter((room: any) => {
                return Object.keys(trueFilters).every(property => {
                    return trueFilters[property as keyof typeof trueFilters] === room[property as keyof typeof room]
                })
            })

            // Sort filtered rooms based on priceSort state and set results as roomsDisplay state
            switch (priceSort) {
                case 'ascending':
                    roomsList.sort((a: any, b: any) => a.price - b.price);
                    setRoomsDisplay(roomsList);
                    break;
                case 'descending':
                    roomsList.sort((a: any, b: any) => b.price - a.price);
                    setRoomsDisplay(roomsList);
                    break;
                default:
                    setRoomsDisplay(roomsList);
                    break;
            }

            setLoading(false);

        } catch(error) {
            console.log('Server not available');
        }
      })();
            

    }, [filters, priceSort])
    

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
        setRoomsDisplay(roomsDisplay);  
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
            {loading ?
                <div>Loading...</div>
            :
                <Rooms roomsDisplay={roomsDisplay}/>}
        </main>
    );
}

export default Search;