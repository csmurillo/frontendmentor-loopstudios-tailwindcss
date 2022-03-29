
import Image from 'next/image'

const MainSection = ({menuToggle})=>{
    return(
        <div className="px-5 py-10 h-[85vh] bg-gray-800 bg-mobile-image-hero bg-cover bg-no-repeat
                        md:px-36 md:py-20 md:bg-desktop-image-hero md:bg-center">
             <header className='flex place-content-between'>
                 <div className='w-40'>
                     <Image priority alt='logo' src="/images/logo.svg" width={162} height={26}/>
                 </div>
                 <div className='hidden lg:block'>
                    <nav>
                        <ul className='flex font-alata'>
                            <li className='relative sm:px-5'>
                                <p className='text-white hover:cursor-pointer highlight pb-2'>About</p>
                            </li>
                            <li className='relative sm:px-5'>
                                <p className='text-white hover:cursor-pointer highlight pb-2'>Careers</p>
                            </li>
                            <li className='relative sm:px-5'>
                                <p className='text-white hover:cursor-pointer highlight pb-2'>Events</p>
                            </li>
                            <li className='relative sm:px-5'>
                                <p className='text-white hover:cursor-pointer highlight pb-2'>Product</p>
                            </li>
                            <li className='relative sm:px-5'>
                                <p className='text-white hover:cursor-pointer highlight pb-2'>Support</p>
                            </li>
                        </ul>
                    </nav>
                 </div>
                 <div className='lg:hidden'>
                    <Image priority className='hover:cursor-pointer' alt='menu-hamburger' src="/images/icon-hamburger.svg" width={24} height={16} onClick={menuToggle}/>
                 </div>
             </header>
             <div className='mt-44 sm:mt-36'>
                 <div className='border-2 border-white p-5 md:w-[100%] lg:w-[75%] xl:w-7/12 sm:p-10'>
                     <h1 className='text-white text-4.5xl lg:text-7xl font-josefinSans font-light'>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                 </div>
             </div>
        </div>
    );
};


export default MainSection;



