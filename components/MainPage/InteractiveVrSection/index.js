
import Image from 'next/image'

const InteractiveVrSection = ()=>{
    return(
        <section className='mb-10'>
            <div className='relative h-56'>
                <Image src='/images/mobile/image-interactive.jpg' layout='fill'/>
            </div>
            <div className='py-8 px-8'>
                <div className='mb-2'>
                    <h1 className='text-3xl font-josefinSans font-light text-center uppercase'>The Leader in interactive vr</h1>
                </div>
                <div>
                    <p className='font-alata text-veryDarkGray text-sm text-center leading-6'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects
                        for some of the best companies around the globe. Our award-winning creations have 
                        transformed businesses through digital experiences that bind to their brand.
                    </p>
                </div>
            </div>
        </section>
    );
};


export default InteractiveVrSection;