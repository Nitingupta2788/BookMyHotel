import "./searchItem.css";
import { useNavigate } from "react-router-dom";

const SearchItem = (props) => {
    const Navigation = useNavigate()
    function handleAvailabilty(id) {
        Navigation(`/hotel/${id}`)
    }
    return (
        props.result.map((res) => {
            return <div className="searchItem" key={res._id}>
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                    alt=""
                    className="siImg"
                />
                <div className="siDesc">
                    <h1 className="siTitle">{res.name}</h1>
                    <span className="siDistance">{res.distance}m from center</span>
                    <span className="siTaxiOp">Free airport taxi</span>
                    <span className="siSubtitle">
                        {res.title}
                    </span>
                    <span className="siFeatures">
                        {res.desc}
                    </span>
                    <span className="siCancelOp">Free cancellation </span>
                    <span className="siCancelOpSubtitle">
                        You can cancel later, so lock in this great price today!
                    </span>
                </div>
                <div className="siDetails">
                    {res.rating &&
                        <div className="siRating">

                            <span>Excellent</span>
                            <button>8.9</button>
                        </div>}
                    <div className="siDetailTexts">
                        <span className="siPrice">${res.cheapestPrice}</span>
                        <span className="siTaxOp">Includes taxes and fees</span>
                        <button onClick={() => handleAvailabilty(res._id)} className="siCheckButton">See availability</button>
                    </div>
                </div>
            </div>
        })

    );
};

export default SearchItem;