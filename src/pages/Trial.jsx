import React from 'react'
import Sidebar from '../components/Sidebar'

import Close from '../assets/Close.svg'
import Menu from '../assets/Menu.svg'
import HomeComponent from '../components/HomeComponent'
export default function Trial() {

    function showDrawer(status){
        if(status === false){
            document.getElementById('drawer-navigation').style.left="0%"
        }
        if(status === true){
            document.getElementById('drawer-navigation').style.left="100%"
        }
    }
  return (
    <>
    <div className="text-start ml-4 mt-4 hidden md:block">
        <button type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation"
        onClick={()=>showDrawer(true)}
        >
        <img className='w-6 h-6' src={Menu} alt="" />
        </button>
    </div>
    <div className='w-screen max-w-[1519px] flex justify-evenly mt-20 md:justify-center'>
      <div className='w-[15%] md:hidden'>
        <Sidebar
            currentTab={"Home"}
        />
      </div>
      <div className='w-[75%] md:w-[90%]'>
        <HomeComponent/>
      </div>
    </div>

    <div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-full h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white" tabIndex="-1" aria-labelledby="drawer-navigation-label">
        <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
            onClick={()=>{showDrawer(false)}}
        >
            <img className="w-6 h-6" src={Close} alt=''/>
            <span className="sr-only">Close menu</span>
        </button>

        <Sidebar
            currentTab={"Home"}
        />
    </div>

    </>
  )
}
