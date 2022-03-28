import Image from 'next/image'

const CreationSection = ({ creations })=>{

    return(
        <section>
            <div className='py-8'>
                <h1 className='text-3xl text-center uppercase font-josefinSans'>Our Creations</h1>
            </div>
            <div className='mb-10'>
                {
                   creations.map(creation=>(
                    <section className='mb-5 relative flex h-36 p-5 items-end'>
                        <div className='absolute top-0 left-0 h-full w-2/4 bg-gradient-to-r from-black to-bg-slate-200 opacity-50 -z-10'></div>
                        <div className=''>
                            <Image className='absolute -z-20' src={creation.mobileUrl} layout='fill'/>
                        </div>
                        <div className='hidden'>
                            <Image className='absolute -z-20' src={creation.desktopUrl} layout='fill'/>
                        </div>
                        <h2 className='text-white font-josefinSans text-2xl uppercase w-36'>{creation.title}</h2>
                    </section>
                   ))
                }
            </div>
            <div className='flex place-content-center'>
                <button className='px-10 py-2 uppercase border-2 border-black font-alata text-[1.025rem] tracking-widest'>See All</button>
            </div>
        </section>
    );

};


export default CreationSection;







