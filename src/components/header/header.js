import './header.css'
import { DateRange } from 'react-date-range';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
    faMap
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // we used font aswesome

const Header = ({ type }) => {
    const [showCalendar, setShowCalendar] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const [options, setOptions] = useState({
        Adult: 1,
        Children: 0,
        Room: 1
    })

    const [showOption, setShowOption] = useState(false)
    const [destination, setDestination] = useState('')
    function IncrementorDecrement(opt, operation) {
        setOptions(prev => ({ ...prev, [opt]: operation === 'i' ? prev[opt] + 1 : prev[opt] - 1 }))


    }
    const hotelNavigate = useNavigate()
    const { dispatch } = useContext(SearchContext)
    const login = useContext(AuthContext)
    const handleSearch = () => {
        dispatch({ type: 'NEW_SEARCH', payload: { destination, date, options } })
        hotelNavigate('/hotel', { state: { destination, date, options } })
    }
    return (<div className='header'>
        <div className={type !== 'list' ? 'headerContainer' : 'headerContainer listmode'}>
            <div className='headerList'>
                <div className='headerListItem active'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>

                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rental</span>

                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faMap} />
                    <span>Attraction</span>

                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>

                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxi</span>

                </div>
            </div>
            {type !== 'list' &&
                <>
                    <h1 className='headerTitle'>
                        Find exclusive Genius rewards in every corner of the world!.
                    </h1>
                    <p className='headerDesc'>
                        Get rewarded for your travels – unlock instant savings of 10% or
                        more with a free BookMyHotel account
                    </p>
                    {login ? login.user.username : <button className='headerBtn'>Sign In/Register</button>}
                    <div className='headerSearch'>
                        <div className='headerSearchItem'>
                            <FontAwesomeIcon icon={faBed} className='headerIcon' />
                            <input type='text' onChange={(e) => { setDestination(e.target.value) }} placeholder='Where are you going?' className='headerSearchInput' />
                        </div>


                        <div className='headerSearchItem'>
                            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                            <span onClick={() => setShowCalendar(!showCalendar)} className='headerSearchText' >{`${(date[0].startDate.toLocaleDateString('en-US'))} to ${date[0].endDate.toLocaleDateString('en-US')} `}</span>
                            {showCalendar && <DateRange editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date} className='date' minDate={new Date()}
                            />}
                        </div>
                        <div className='headerSearchItem'>
                            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                            <span onClick={() => setShowOption(!showOption)} className='headerSearchText' >{` Adult ${options.Adult} . Children ${options.Children} .Rooms ${options.Room}`}</span>
                            {showOption && <div className='options'>

                                <div className='optionItem'>
                                    <span className='optionText'>Adult</span>
                                    <div className='optionCounter'>

                                        <button disabled={options.Adult <= 1} onClick={() => IncrementorDecrement('Adult', 'd')} className='optionCounterButton'>-</button>
                                        <span className='optionCounterNumber'>{options.Adult}</span>
                                        <button onClick={() => IncrementorDecrement('Adult', 'i')} className='optionCounterButton'>+</button>

                                    </div>
                                </div>
                                <div className='optionItem'>
                                    <span className='optionText'>Children</span>
                                    <div className='optionCounter'>

                                        <button disabled={options.Children == 0} onClick={() => IncrementorDecrement('Children', 'd')} className='optionCounterButton'>-</button>
                                        <span className='optionCounterNumber'>{options.Children}</span>
                                        <button onClick={() => IncrementorDecrement('Children', 'i')} className='optionCounterButton'>+</button>

                                    </div>
                                </div>
                                <div className='optionItem' >
                                    <span className='optionText'>Rooms</span>
                                    <div className='optionCounter'>

                                        <button disabled={options.Room <= 1} onClick={() => IncrementorDecrement('Room', 'd')} className='optionCounterButton'>-</button>
                                        <span className='optionCounterNumber'>{options.Room}</span>
                                        <button onClick={() => IncrementorDecrement('Room', 'i')} className='optionCounterButton'>+</button>

                                    </div>
                                </div>
                            </div>
                            }

                        </div>
                        <div className="headerSearchItem">
                            <button onClick={handleSearch} className="headerBtn">
                                Search
                            </button>
                        </div>
                    </div>
                </>
            }
        </div>

    </div>)
}

export default Header