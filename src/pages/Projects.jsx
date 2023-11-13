import React from 'react'
import Sidebar from '../components/Sidebar'
import ProjectsComponent from '../components/ProjectsComponent'
import Close from '../assets/Close.svg'
import Menu from '../assets/Menu.svg'
export default function Projects() {

    function showDrawer(status){
        if(status === false){
            document.getElementById('drawer-navigation').style.left="0%"
        }
        if(status === true){
            document.getElementById('drawer-navigation').style.left="100%"
        }
    }
  return (
    // <div className='w-screen max-w-[1519px] flex justify-evenly mt-20'>
    //   <div className='w-[15%]'>
    //     <Sidebar
    //         currentTab={"Projects"}
    //     />
    //   </div>
    //   <div className='w-[75%]'>
        
    //   </div>
    // </div>

    <>
        <div className='mb-16 flex flex-col items-center'>
        <div className="w-full text-start ml-4 mt-4 hidden md:block">
            <button type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation"
            onClick={()=>showDrawer(true)}
            >
            <img className='w-6 h-6' src={Menu} alt="" />
            </button>
        </div>
        <div className='w-full max-w-[1519px] flex justify-evenly mt-20 md:justify-center md:mt-10'>
            <div className='w-[15%] md:hidden'>
                <Sidebar
                    currentTab={"Projects"}
                />
            </div>
            <div className='w-[75%] md:w-[90%] flex flex-col items-start'>
                <ProjectsComponent/>
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
                currentTab={"Projects"}
            />
        </div>
        </div>
    </>
  )
}
