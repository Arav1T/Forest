import React from 'react'

export default function Fotter() {
  return (
    <div>
      <div className='bg-emerald-700 pt-8 space-y-4'>
        <ul className='flex justify-center space-x-5'>
            <li>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/facebook--v1.png" alt="facebook--v1"/>
            </li>
            <li>
            <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/30/twitter--v1.png" alt="twitter--v1"/>
            </li>
            <li>
            <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" alt="instagram-new"/>
            </li>
            <li>
            <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/30/hub.png" alt="hub"/>
            </li>
        </ul>
        <p className='flex justify-center font-semibold text-xl'>Look deep into nature, and then you will understand everything better.</p>
        <h3 className='font-semibold text-2xl flex justify-center'> Thank you</h3>
      </div>
    </div>
  )
}
