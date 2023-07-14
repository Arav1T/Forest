import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Reducer } from '../Context/Context'

export default function User() {
    const { userdata, setuserdata, loading,setloading } = useContext(Reducer)
    const [val, setval] = useState(1)
    useEffect(() => {
      
    
      return async() => {
        // await  setloading(true)
    
    
        const data =await fetch('https://reqres.in/api/users?page=1')
        const value = await data.json()
        setuserdata(value.data)
        // setloading(false)
    
      }
    }, [])
    

    const OnNext = async () => {
        const data = await fetch(`https://reqres.in/api/users?page=${val+1}`)
        setloading(true)
        const value = await data.json()
        setuserdata(value.data)
        if (val > 0) {
            setval(1)

        } else {
            setval(val + 1)
            console.log(val)

        }
        setloading(false)

    }
    const OnPrev = async () => {

        const data = await fetch(`https://reqres.in/api/users?page=${val-1}`)
        setloading(true)
        const value = await data.json()
        setuserdata(value.data)
        if (val < 1) {
            setval(1)

        } else {
            setval(val - 1)
            console.log(val)

        }
        setloading(false)

    }
    return (
        <div>
            {loading ? <div className="flex bg-opacity-25 bg-[url('https://wallpaperaccess.com/full/128828.jpg')] h-screen w-screen">
            <div className='opacity-25'><Navbar /></div>
                <div className='flex items-center justify-center pl-[50%]'>
                <img width="50" height="50" src="https://img.icons8.com/quill/50/spinner-frame-5.png" alt="spinner-frame-5" className='animate-spin  '/>
                </div>
            </div> : <div className="bg-[url('https://wallpaperaccess.com/full/128828.jpg')] h-screen w-screen">
                <Navbar />
                <div className='grid grid-cols-3   p-36 space-x-3 space-y-3'>

                    {userdata.map(e => {
                        return <>
                            <div key={e.id} className='flex border rounded-lg bg-emerald-200 space-x-2 p-2 items-center'>
                                <div >
                                    <img src={e.avatar} alt="avatar" className='rounded-full h-36 w-36' />
                                </div>
                                <div  className='space-y-2'>
                                    <h2 className='font-medium text-xl'>{e.first_name} {e.last_name}</h2>
                                    <p className='font-normal text-lg'>{e.email}</p>
                                </div>
                            </div>
                        </>
                    })}
                </div>
                <div className='flex justify-between px-40'>
                    <button onClick={OnPrev} className='bg-emerald-300'>Prev</button>
                    <button onClick={OnNext} className='bg-emerald-300'>Next</button>
                </div>
            </div>}
        </div>
    )
}
