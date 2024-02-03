import Navbar from "../../components/navbar/navbar"
import Header from "../../components/header/header"
import SearchItem from "../../components/searchItem/SearchItem"
import './list.css'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import useFetch from "../../hooks/fetchData"
const List = () => {

    const location = useLocation()
    const [showCalendar, setShowCalendar] = useState(false)
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(9999)
    const [dateCalender, setdateCalender] = useState([
        {
            startDate: date[0].startDate,
            endDate: date[0].endDate,
            key: 'selection'
        }
    ])
    const { data, loading, err } = useFetch(`http://localhost:3000/hotels?min=${minPrice}&max=${maxPrice}&city=${destination}`)

    return (<div>
        <Navbar />
        <Header type='list' />
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lsTitle"> Search</h1>
                    <div className="lsItem">
                        <label>Destination</label>
                        <input type="text" placeholder={destination} />

                    </div>
                    <div className="lsItem">
                        <label>Check-in Date</label>
                        <span onClick={() => { setShowCalendar(!showCalendar) }}>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                        {showCalendar && <DateRange editableDateInputs={true}
                            onChange={item => setdateCalender([item.selection])}
                            //  moveRangeOnFirstSelection={false}
                            ranges={date} minDate={new Date()}
                        />}
                    </div>

                    <div className="lsItem">
                        <label>Options</label>
                        <div className="lsOptions">
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Min Price <small>per night</small></span>
                                <input type="number" onChange={(e) => { setMinPrice(e.target.value) }} className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Max Price <small>per night</small></span>
                                <input type="number" onChange={(e) => setMaxPrice(e.target.value)} className="lsOptionInput" />
                            </div>

                            <div className="lsOptionItem">
                                <span className="lsOptionText">Adult</span>
                                <input type="number" min={1} placeholder={options.Adult} className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Children</span>
                                <input type="number" min={0} placeholder={options.Children} className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Room</span>
                                <input type="number" min={1} placeholder={options.Room} className="lsOptionInput" />
                            </div>



                        </div>
                    </div>
                    <button>Search</button>
                </div>
                <div className="listResult">

                    <SearchItem result={data} />

                </div>
            </div>
        </div>
    </div>
    )


}

export default List