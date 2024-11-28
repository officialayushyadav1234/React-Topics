import { useEffect, useState } from 'react'
const FBCLifeCycle = () => {
    let [count, setCount] = useState(0)
    let [count2, setCount2] = useState(5)

    //! SYNTAX--> useEffect(()=>{},[dependency array])

    useEffect(() => {
        console.log("RENDER");
    })

    useEffect(() => {
        //! componentDidMount()
        console.log("MOUNTING PHASE");
        return ()=>{
            //! componentWillUnmount()
            // CLEAN-UP FUNCTION
            console.log("UNMOUNTING PHASE");
        }
    }, [])
    useEffect(() => {
        //! componentDidUpdate()
        console.log("UPDATING PHASE");
        return ()=>{
            //! getSnapshotBeforeUpdate()
            console.log("PREV COUNT WAS ",count);
            console.log("PREV COUNT2 WAS ",count2);
        }
    }, [count, count2])

    return (
        <div>
            <h1>Life Cycle in FBC {count} {count2}</h1>
            <button onClick={() => setCount(count + 1)}>update</button>
            <button onClick={() => setCount2(count2 + 5)}>update 2</button>
        </div>
    )
}

export default FBCLifeCycle
