import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Reducer } from '../Context/Context'

export default function Navbar(props) {
    const {setuserdata,setloading} = useContext(Reducer)
   const navigat = useNavigate()
   const GetUser =async ()=>{
    console.log("chl")
    
           
    await  setloading(true)
    navigat('/user')
    setTimeout(async () => {
        const data =await fetch('https://reqres.in/api/users?page=1')
        const value = await data.json()
        setuserdata(value.data)
        setloading(false)
        }, 500);
   }
  return (
    <div>
      <nav className={`bg-transparent  fixed w-screen ${props.Naval && "shadow-lg shadow-black z-20 bg-emerald-100" }`}>
        <div className='flex justify-between items-center px-8'>
            <div className='animate-pulse '> 
            <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/forest.png" alt="forest"/>
            </div>
            <div>
                <ul className='flex space-x-4 pr-4 '>
                    <li onClick={()=>navigat('/')} className='cursor-pointer hover:border-b hover:border-emerald-500'>Home</li>
                    <li onClick={()=>navigat('/about')} className='cursor-pointer hover:border-b hover:border-emerald-500'>About</li>
                    
                    <li onClick={GetUser} className='cursor-pointer hover:border-b hover:border-emerald-500'>Get User</li>
                    <li onClick={()=>navigat('/enroll')} className='cursor-pointer hover:border-b hover:border-emerald-500'>Enroll</li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}
