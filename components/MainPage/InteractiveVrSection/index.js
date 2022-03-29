
import Image from 'next/image'

const InteractiveVrSection = ()=>{
    return(
        <section className='relative mb-10 sm:mb-20'>
            <div className='relative h-56 lg:hidden'>
                <Image alt='interactive-image' src='/images/mobile/image-interactive.jpg' layout='fill'/>
            </div>
            <div className='relative h-96 w-8/12 hidden lg:block'>
                <Image alt='ineractive-image' src='/images/desktop/image-interactive.jpg' layout='fill'/>
            </div>
            <div className='py-8 px-8 
                            xl:pl-20 xl:pr-32
                           lg:pl-14 lg:pr-14
                           sm:pb-0 sm:pl-20 sm:pr-32 lg:absolute lg:bottom-0 lg:right-0 sm:h-[65%] sm:bg-white lg:w-2/4
                            flex flex-col place-content-end'>
                <div className='mb-2'>
                    <h1 className='text-3xl font-josefinSans font-light text-center lg:text-left uppercase'>The Leader in interactive vr</h1>
                </div>
                <div>
                    <p className='font-alata text-veryDarkGray text-sm text-center lg:text-left leading-6'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects
                        for some of the best companies around the globe. Our award-winning creations have 
                        transformed businesses through digital experiences that bind to their brand.
                    </p>
                </div>
            </div>
        </section>
    );
};


export default InteractiveVrSection;