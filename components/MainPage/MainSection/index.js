
import Image from 'next/image'

const MainSection = ()=>{
    return(
        <div className="px-5 py-10 h-screen bg-gray-800 bg-mobile-image-hero bg-cover bg-no-repeat sm:bg-desktop-image-hero">
             <header className='flex place-content-between'>
                 <div>
                     <Image src="/images/logo.svg" width={162} height={26}/>
                 </div>
                 <div className='hidden sm:block'>
                    <nav>
                        <ul className='flex'>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Events</li>
                            <li>Product</li>
                            <li>Support</li>
                        </ul>
                    </nav>
                 </div>
                 <div className='sm:hidden'>
                    <Image src="/images/icon-hamburger.svg" width={24} height={16}/>
                 </div>
             </header>
             <div className='mt-44'>
                 <div className='border-2 border-white p-5'>
                     <h1 className='text-white text-4.5xl font-josefinSans font-light'>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                 </div>
             </div>
        </div>
    );
};


export default MainSection;