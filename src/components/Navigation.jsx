import React, { useRef, useState } from 'react'
import Locations from '../data/Locations'
import { useNavigate } from 'react-router-dom';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import SelectFromMap from './maps/SelectFromMap';

function Navigation() {
    const navigate = useNavigate();

    const [currentLocation, setCurrentLocation] = useState('');
    const [destinationLocation, setDestinationLocation] = useState('');

    const currentLocationRef = useRef(null);
    const destinationLocationRef = useRef(null);

    const [modal, setModal] = useState(false);
    const showModal = () => setModal(!modal);
    const closeModal= () => setModal(false);

    const [modalFor, setModalFor] = useState('');

    const openModalFor = (locationType) => {
        setModalFor(locationType);
        setModal(!modal);
    }

    let current = localStorage.getItem('current');
    let destination = localStorage.getItem('destination')
    if (modal === false && current !== null) {
        setCurrentLocation(current);
        currentLocationRef.current.value = current
        localStorage.clear();
    }
    if (modal === false && destination !== null) {
        setDestinationLocation(destination);
        destinationLocationRef.current.value = destination
        localStorage.clear();
    }

    const gfloor = ["Room G01", "Room G02", "Room G03", "Room G04", "Room G05", "WaterFilter", "Room G06", "Girls Washroom", "Room G07", "Room G08", "Room G09", "Room G10", "Room G11", "Room G12", "Room G13", "HOD ME", "Room G15", "Room G18", "Room G19", "Room G20", "Room G21", "Room G22", "Room G23", "Room G24", "Second College", "Auditorium", "Fountain", "HOD CE", "Room G25", "Room G26", "Room G27", "Room G28", "Room G29", "HOD IT", "Room G30", "Room G31", "Room G32", "Room G33", "Room G34", "Room G35", "WaterFilter", "Boys Washroom", "Room G36", "Room G37", "Room G38", "Room G39", "Room G40", "Room G41", "Room G42"];

    const ffloor = ["Room 101", "Room 102", "Room 103", "Room 105b", "Room 105", "Room 105a", "To Stairs1f", "Room 106", "Room 107", "Girls Washroom", "Room 108", "Room 109", "Room 110", "Room 111", "Room 112", "Room 113", "To Stairs2f", "Room 117a", "Room 117", "Room 114", "Boys Washroom", "Room 115", "Room 116", "Room 118", "Room 119", "Room 120", "To Ground Floor", "Room 121", "Room 122", "Room 123", "Room 124", "To Stairs3f", "Room 124a", "Room 125", "Room 126", "Room 127", "HOD CS", "Room 128", "Room 129", "Room 130", "Room 131", "Room 132", "Room 132", "Room 133b", "Room 133", "Room 133a", "To Stairs4f", "Room 134", "Room 135", "Room 136", "Stairs To Ground Floor"];


    const findPath = (event) => {
        event.preventDefault();

        if (currentLocationRef.current) {
            currentLocationRef.current.value = '';
        }
        if (destinationLocationRef.current) {
            destinationLocationRef.current.value = '';
        }

        if (gfloor.includes(currentLocation) && gfloor.includes(destinationLocation)) {
            navigate(`/ground-floor-map?current=${currentLocation}&destination=${destinationLocation}`);
            return;
        } else if (ffloor.includes(currentLocation) && ffloor.includes(destinationLocation)) {
            navigate(`/first-floor-map?current=${currentLocation}&destination=${destinationLocation}`);
            return;
        } else {
            navigate(`/combined-map?current=${currentLocation}&destination=${destinationLocation}`);
            return;
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
                        list='from'
                        name='current_location'
                        id='current_location'
                        ref={currentLocationRef}
                        required
                        className='form-select mt-3 mb-3'
                        placeholder='Choose Room Number/Location'
                        onChange={function (e) { setCurrentLocation(e.target.value) }}
                    />
                    <i
                        className="fa-solid fa-location-dot icon ms-3"
                        title='Pick location from map.'
                        onClick={() => openModalFor('current')}>
                    </i>
                    <datalist id="from">
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
                        list='to'
                        name='destination_location'
                        id='destination_location'
                        ref={destinationLocationRef}
                        required
                        className='form-select mt-3 mb-3'
                        placeholder='Choose Room Number/Location'
                        onChange={function (e) { setDestinationLocation(e.target.value) }} />
                    <i
                        className="fa-solid fa-location-dot icon ms-3"
                        title='Pick location from map.'
                        onClick={() => openModalFor('destination')}>
                    </i>
                    <datalist id="to">
                        <option value="Entry Exit">Enterance OR Exit of College</option>
                        {Locations.map((location, key) => (
                            <option key={key} value={location.value}>{location.description}</option>
                        ))}
                    </datalist>
                </div>
                <button type="submit" className="btn btn-warning mt-3">Find Path</button>
            </form>
            <Modal centered isOpen={modal} toggle={showModal} size="xl" className="fullscreen-modal">
                <ModalHeader toggle={showModal}></ModalHeader>
                <ModalBody>
                    <SelectFromMap modalFor={modalFor} closeModal={closeModal}/>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Navigation