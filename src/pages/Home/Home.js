import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import Featured from '../../components/Featured/Featured'
import PropertyList from '../../components/propertlist/propertylist'
import FeaturedProp from '../../components/FeaturedProp/FeaturedProp'
import Mail from '../../components/Mail/Mail'
import Footer from '../../components/Footer/Footer'
import './Home.css'

export default function Home() {

    return (
        <div>
            <Navbar />
            <Header />
            <div className='homeContainer'>
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className='homeTitle'>Homes guests love</h1>
                <FeaturedProp />
                <Mail />
                <Footer />
            </div>

        </div>

    )
}