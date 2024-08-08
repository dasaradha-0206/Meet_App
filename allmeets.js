import { useEffect, useState } from "react"
const Card = (props) => {
    return <div className="card">
        <img className="mymeet-img" src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"></img>
        <h3 className="card-text">{props.data.meetRoll}</h3>
        <h3 className="card-text">{props.data. meetName}</h3>
        <h3 className="card-text">{props.data.meetClass}</h3>
        <h3 className="card-text">{props.data.meetDate}</h3>
        
    </div>
}
const Body = () => {
    const [meeting, setmeet] = useState([])
    async function meet() {
        const data = await fetch('https://let-s-meet-d0647-default-rtdb.firebaseio.com/letsmeet.json')
        const originaldata = await data.json()
        const array = []
        for (let x in originaldata) {
            if (originaldata.hasOwnProperty(x)) {
                array.push(originaldata[x])

            }
        }
        setmeet(array)

    }
    useEffect(() => {
        meet()

    }, [])
    return <div className="body">
        <h1 className="allmeet-head">Welcome to your meetings !!</h1>
        <div className="card-container">
            {
                meeting.map((y) => {
                    return <Card data={y} />
                })
            }

        </div>

    </div>
}
export default Body;