

const page = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-between gap-4 p-4 mt-8'>
        <div className='w-[30vw] min-h-screen from-white to-neutral-300 border-2 rounded-md  border-neutral-500/45 text-black shadow-accent flex flex-col'>
            <div className='bg-slate-900 text-neutral border rounded-t-md p-4 flex items-center justify-between border-b-black'>
                <h1 className='scroll-m-20 text-3xl font-medium  tracking-tight text-balance text-white'>
                  Cyrx
                </h1>
            </div>
              <input className=" mt-auto flex items-end rounded-full bg-black text-white p-4 mb-4 ml-4 mr-4" placeholder="Type Something..."/>

        
          
        </div>
        <div className='w-[70vw] min-h-screen  from-white to-neutral-300 border-2 rounded-md  border-neutral-500/45 text-black shadow-accent'>
            
        </div>
    </div>
  )
}

export default page