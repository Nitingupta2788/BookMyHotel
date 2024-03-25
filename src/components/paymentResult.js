import { useLocation } from "react-router-dom"

export const PaymentResult = () => {
    const location = useLocation()
    const data = location.state
    return (<h1>{data}</h1>)

    //return <h1>Payment Failed</h1>
}