import { createContext, useState } from "react";

export const Reducer =createContext()

export const Mainreducer =(({children})=>{
    const [userdata, setuserdata] = useState([])
    const [loading, setloading] = useState(false)
    return (
        <Reducer.Provider value={{userdata,setuserdata,loading,setloading}}>
            { children}
        </Reducer.Provider>

    )
})
