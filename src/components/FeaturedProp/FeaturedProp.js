import './featuredprop.css'
import useFetch from '../../hooks/fetchData';

const FeaturedProp = () => {
    const { data, loading, err } = useFetch('http://localhost:3000/hotels?min=50&max=400&featured=true')
    const img = ["https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"

    ]

    return (<div className="fp">
        {loading ? ("Please wait") : (<>
            {data.map((fea, idx) => {
                return <div className="fpItem" key={fea._id}>
                    <img
                        src={img[idx]}
                        alt=""
                        className="fpImg"
                    />
                    <span className="fpName">{fea.name}</span>
                    <span className="fpCity">{fea.city}</span>
                    <span className="fpPrice">Starting from ${fea.cheapestPrice}</span>
                    {fea.rating && <div className="fpRating">
                        <button>8.9</button>
                        <span>Excellent</span>
                    </div>}
                </div>
            })}
        </>)}
    </div>)


};


export default FeaturedProp;