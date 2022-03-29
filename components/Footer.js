import Image from 'next/image'

const Footer = ()=>{
    return(
        <footer className='py-16 px-10 lg:py-10 lg:px-36 bg-black 
                            lg:grid lg:grid-rows-2 lg:grid-cols-4 lg:gap-5'>
            <div className='flex place-content-center mb-6 lg:mb-0 lg:col-start-1 lg:col-end-4 lg:row-span-1 lg:place-content-start'>
                <Image src="/images/logo.svg" width={150} height={28}/>
            </div>
            <ul className='flex flex-col text-white py-4 font-alata text-lg mb-12 
            lg:py-0 lg:mb-0 lg:flex-row lg:row-start-2 lg:row-end-2 lg:col-start-1 lg:col-end-4 lg:items-end'>
                <div className='flex place-content-center'>
                    <li className='relative text-center mb-4 lg:mb-0 lg:mr-5'>
                        <p className='highlight-50 cursor-pointer pb-2'>About</p>
                    </li>
                </div>
                <div className='flex place-content-center'>
                    <li className='relative text-center mb-4 lg:mb-0 lg:mr-5'>
                        <p className='highlight-50 cursor-pointer pb-2'>Careers</p>
                    </li>
                </div>
                <div className='flex place-content-center'>
                    <li className='relative text-center mb-4 lg:mb-0 lg:mr-5'>
                        <p className='highlight-50 cursor-pointer pb-2'>Events</p>
                    </li>
                </div>
                <div className='flex place-content-center'>
                    <li className='relative text-center mb-4 lg:mb-0 lg:mr-5'>
                        <p className='highlight-50 cursor-pointer pb-2'>Products</p>
                    </li>
                </div>
                <div className='flex place-content-center'>
                    <li className='relative text-center mb-4 lg:mb-0 lg:mr-5'>
                        <p className='highlight-50 cursor-pointer pb-2'>Support</p>
                    </li>
                </div>
            </ul>
            <div className='flex place-content-center mb-8 lg:justify-end lg:mb-0 lg:row-start-1 lg:row-end-1 lg:col-start-4 lg:col-end-5'>
                <div className='flex w-3/5 sm:w-1/3 lg:w-[90%] xl:w-3/5 justify-between'>
                    <div className='relative'>
                        <div className='hover:cursor-pointer iconHighlight pb-2'>
                            <Image src='/images/icon-facebook.svg' width={25} height={25}/>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='hover:cursor-pointer iconHighlight pb-2'>
                            <Image className='hover:border-b-4 hover:cursor-pointer' src='/images/icon-twitter.svg' width={25} height={25}/>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='hover:cursor-pointer iconHighlight pb-2'>
                            <Image className='hover:border-b-4 hover:cursor-pointer' src='/images/icon-pinterest.svg' width={25} height={25}/>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='hover:cursor-pointer iconHighlight pb-2'>
                        <Image className='hover:border-b-4 hover:cursor-pointer' src='/images/icon-instagram.svg' width={25} height={25}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:flex lg:justify-end lg:items-end lg:row-start-2 lg:row-end-2 lg:col-start-3 lg:col-end-5'>
                <div className='text-darkGray text-sm font-alata text-center pb-2'>
                    &copy; 2021 Loopstudios. All rights reserved.
                </div>
            </div>
        </footer>
    );
};


export default Footer;