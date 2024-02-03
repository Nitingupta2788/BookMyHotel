import useFetch from "../../hooks/fetchData"
import './Rooms.css'
import { useContext, useState } from "react"
import { SearchContext } from "../../context/SearchContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Rooms = ({ setOpen, hotelid }) => {
    const navigate = useNavigate();
    const [selectedRooms, setSelectedRooms] = useState([])
    const { date } = useContext(SearchContext)
    const { data, error, loading } = useFetch(`http://localhost:3000/rooms/${hotelid}`)
    const start = new Date(date[0].startDate).getTime()
    const end = new Date(date[0].endDate).getTime()



    const getDateRange = (startDate, endDate) => {
        let currentDate = new Date(startDate)

        const dateRange = []
        while (currentDate <= endDate) {
            dateRange.push(new Date(currentDate).toDateString())
            currentDate.setDate(currentDate.getDate() + 1)
        }
        return dateRange
    }
    const alldates = getDateRange(start, end)
    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
            checked
                ? [...selectedRooms, value]
                : selectedRooms.filter((item) => item !== value)
        );
    };
    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
            alldates.includes(new Date(date).getTime())
        );

        return !isFound;
    };
    const handleClick = async () => {
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                    const res = axios.put(`http://localhost:3000/rooms/availability/${roomId}`, {
                        dates: alldates,
                    });
                    return res.data;
                })
            );
            setOpen(false);
            navigate("/");
        } catch (err) { }
    };
    return <div className="reserve">
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} onClick={() => setOpen(false)} className="rClose" />
            <span>Select your Rooms:</span>
            {
                data.map((item) => (
                    <div className="rItem" key={item._id}>
                        <div className="rItemInfo">

                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">
                                Max people: <b>{item.maxPeople}</b>
                            </div>
                            <div className="rPrice">{item.price}</div>
                        </div>
                        <div className="rSelectRooms">
                            {item.roomNumbers.map((roomNumber) => (
                                <div className="room">
                                    <label>{roomNumber.number}</label>
                                    <input
                                        type="checkbox"
                                        value={roomNumber._id}
                                        onChange={handleSelect}
                                        disabled={!isAvailable(roomNumber)}
                                    />
                                </div>
                            ))}
                        </div>
                        <button onClick={handleClick} className="rButton">
                            Reserve Now!
                        </button>
                    </div>
                ))
            }

        </div>


    </div>

}

export default Rooms