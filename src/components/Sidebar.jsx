import { useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import Krish_Patel_Resume from '../assets/Resume/Krish_Patel_Resume.pdf'

export default function Sidebar({currentTab}) {

  const Tabs = ["Home","Experience","Projects" ,"About Me"]

  function decideActive(name){
    return name === currentTab? "border-[1px] rounded border-gray-700" : null
  }

  const navigate = useNavigate()
  const switchTab = (name)=>{
    if(name === "Home"){
      navigate('/')
    }
    if(name === "Experience"){
      navigate('/experience')
    }
    if(name === "Projects"){
      navigate('/projects')
    }
    if(name === "About Me"){
      navigate('/aboutme')
    }
  }

  return (
    <div className='flex flex-col items-center justify-center gap-2 sm:h-full md:h-full'>
        {
          Tabs.map((data,i)=>
            <button 
              key={i} 
              className={`w-40 h-10 ${decideActive(`${data}`)}`} 
              onClick={()=>{switchTab(`${data}`)}}
            >
              {data}
            </button>
          )
        }
        <a href={Krish_Patel_Resume} download="Krish_Patel_Resume">
          <button className='w-40 h-10'>Download CV</button>          
        </a>

    </div>
  )
}
