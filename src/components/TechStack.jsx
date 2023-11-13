import ReactLogo from '../assets/react.svg'
import Tailwind from '../assets/Tailwind.svg'
import Javascript from '../assets/Javascript.svg'
import Redux from '../assets/Redux.svg'
import SocketIo from '../assets/SocketIo.svg'
import Docker from '../assets/Docker.svg'
import NodeJS from '../assets/NodeJS.svg'
import Express from '../assets/Express.svg'
import MongoDB from '../assets/MongoDB.svg'
import Firebase from '../assets/Firebase.svg'
import Multer from '../assets/Multer.svg'
import Git from '../assets/Git.svg'
import Github from '../assets/Github.svg'
import HTML from '../assets/HTML.svg'
import CSS from '../assets/CSS.svg'

export default function TechStack() {
  return (
    <>
    <h1 className='text-3xl font-semibold'>Tech Stack</h1>
    <div className='w-full flex flex-wrap mt-8 gap-4'>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={ReactLogo} alt="" />
            <span>React</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={Tailwind} alt="" />
            <span>Tailwind CSS</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={Docker} alt="" />
            <span>Docker</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={NodeJS} alt="" />
            <span>Node JS</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={Express} alt="" />
            <span>Express JS</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={MongoDB} alt="" />
            <span>MongoDB</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={Firebase} alt="" />
            <span>Firebase</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={Redux} alt="" />
            <span>Redux</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={ReactLogo} alt="" />
            <span>Context API</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={SocketIo} alt="" />
            <span>Socket.io</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-6 h-6' src={Multer} alt="" />
            <span>Multer</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={Git} alt="" />
            <span>Git</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={Github} alt="" />
            <span>Github</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={HTML} alt="" />
            <span>HTML</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={CSS} alt="" />
            <span>CSS</span>
        </div>
        <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4'>
            <img className='w-8 h-8' src={Javascript} alt="" />
            <span>Javascript</span>
        </div>
    </div>
    </>
  )
}