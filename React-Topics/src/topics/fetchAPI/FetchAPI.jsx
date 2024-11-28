import { useEffect, useState } from 'react'
const FetchAPI = () => {
    let [dbData, setDbData] = useState([])
    useEffect(() => {
        async function fetchDB() {
            let resp = await fetch("https://jsonplaceholder.typicode.com/todos")
            let data = await resp.json()
            console.log(data);//[{},{},....]
            setDbData(data)//[{},{},....]
        }
        fetchDB()
    }, [])
    return (
        <div>
            {
            dbData.map((ele) => {
                console.log(ele);
                return (
                    <section key={ele.id}>
                        <h3>User ID : {ele.userId}</h3>
                        <h1>Title : {ele.title}</h1>
                        {ele.completed ? <span style={{ backgroundColor: "lightgreen" }}>completed</span> : <span style={{ backgroundColor: "red" }}>pending</span>}
                    </section>
                )
            })
            }
        </div>
    )
}

export default FetchAPI
