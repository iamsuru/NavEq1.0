import React, { useRef, useState } from 'react'
import Locations from '../data/Locations'


function Navigation() {
    const [currentLocation, setCurrentLocation] = useState('');
    const [destinationLocation, setDestinationLocation] = useState('');

    const currentLocationRef = useRef(null);
    const destinationLocationRef = useRef(null);

    const findPath = (event) => {
        event.preventDefault();
        console.log('c', currentLocation);
        console.log('d', destinationLocation);

        if (currentLocationRef.current) {
            currentLocationRef.current.value = '';
        }
        if (destinationLocationRef.current) {
            destinationLocationRef.current.value = '';
        }
    }
    return (
        <div className='navigation-panel'>
            <form onSubmit={findPath}>
                <h1>Navigation</h1>

                <label htmlFor='from' className='mt-3 mb-3 current-label'>Current Location</label>
                <div className="input-with-icon d-flex align-items-center">
                    <input
                        type='search'
                        list='current_location'
                        name='current_location'
                        ref={currentLocationRef}
                        required
                        className='form-select mt-3 mb-3'
                        placeholder='Choose Room Number/Location'
                        onChange={function (e) { setCurrentLocation(e.target.value) }}
                    />
                    <i className="fa-solid fa-location-dot icon ms-3"></i>
                    <datalist id="current_location">
                        <option value="Entry Exit">Enterance OR Exit of College</option>
                        {Locations.map((location, key) => (
                            <option key={key} value={location.value}>{location.description}</option>
                        ))}
                    </datalist>
                </div>

                <label htmlFor='destination' className='mt-3 mb-3 destination-label'>Destination Location</label>
                <div className="input-with-icon d-flex align-items-center">
                    <input
                        type='search'
                        list='destination_location'
                        name='destination_location'
                        ref={destinationLocationRef}
                        required
                        className='form-select mt-3 mb-3'
                        placeholder='Choose Room Number/Location'
                        onChange={function (e) { setDestinationLocation(e.target.value) }} />
                    <i className="fa-solid fa-location-dot icon ms-3"></i>
                    <datalist id="destination_location">
                        <option value="Entry Exit">Enterance OR Exit of College</option>
                        {Locations.map((location, key) => (
                            <option key={key} value={location.value}>{location.description}</option>
                        ))}
                    </datalist>
                </div>
                <button type="submit" className="btn btn-warning mt-3">Find Path</button>
            </form>
        </div>
    )
}

export default Navigation