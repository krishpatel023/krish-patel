import TechStack from '../Data/TechStack'

export default function FreelanceTechStack() {
  return (
    <>
    <h1 className='text-3xl font-semibold'>Tech Stack</h1>
    <div className='w-full flex flex-wrap mt-8 gap-4 justify-center'>
        {
            TechStack.map((data,i)=>
            <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4 shadow-lg' key={i}>
                <img className='w-8 h-8' src={data.logo} alt="" />
                <span>{data.name}</span>
            </div>            
            )   
        }
    </div>
    </>
  )
}