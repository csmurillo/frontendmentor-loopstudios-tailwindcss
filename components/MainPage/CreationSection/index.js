import Image from 'next/image'

const CreationSection = ({ creations })=>{

    return(
        <section className='sm:grid sm:grid-cols-3 sm:relative'>
            <div className='py-8 sm:col-start-1 sm:col-end-3 sm:row-span-1 flex items-end'>
                <h1 className='text-3xl text-center sm:text-left uppercase font-josefinSans'>Our Creations</h1>
            </div>
            <div className='mb-10 sm:grid sm:grid-cols-4 sm:grid-rows-2 sm:col-span-3 sm:row-span-2 sm:gap-4'>
                {
                   creations.map(creation=>(
                    <section key={creation.id} className='group mb-5 relative flex h-36 sm:h-96 p-5 items-end'>
                        <div className='absolute top-0 left-0 h-full w-2/4 bg-gradient-to-r from-black to-bg-slate-200 opacity-50 sm:bg-none -z-10'></div>
                        <div className='sm:hidden group-hover:opacity-50 group-hover:cursor-pointer'>
                            <Image alt='creation-image' className='absolute -z-20' src={creation.mobileUrl} layout='fill'/>
                        </div>
                        <div className='hidden sm:block group-hover:opacity-50 group-hover:cursor-pointer'>
                            <Image alt='creation-image' className='absolute -z-20' src={creation.desktopUrl} layout='fill'/>
                        </div>
                        <h2 className='text-white font-josefinSans text-2xl sm:text-lg lg:text-2xl uppercase w-36 group-hover:text-black group-hover:z-40 group-hover:cursor-pointer'>{creation.title}</h2>
                    </section>
                   ))
                }
            </div>
            <div className='sm:py-8 flex justify-center sm:justify-end sm:row-start-1 sm:row-end-1 sm:col-start-3 sm:col-end-5'>
                <div>
                    <button className='px-10 py-2 uppercase border-2 border-black hover:bg-black hover:text-white font-alata text-[1.025rem] tracking-widest'>See All</button>
                </div>
            </div>
        </section>
    );

};


export default CreationSection;







