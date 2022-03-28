import Image from 'next/image'

const Footer = ()=>{
    return(
        <footer className='py-16 px-10 bg-black'>
            <div className='flex place-content-center mb-6'>
                <Image src="/images/logo.svg" width={170} height={28}/>
            </div>
            <ul className='flex flex-col text-white py-4 font-alata text-lg mb-12'>
                <li className='text-center mb-4'>About</li>
                <li className='text-center mb-4'>Careers</li>
                <li className='text-center mb-4'>Events</li>
                <li className='text-center mb-4'>Products</li>
                <li className='text-center'>Support</li>
            </ul>
            <div className='flex place-content-center mb-8'>
                <div className='flex w-3/5 justify-between'>
                    <div>
                        <Image src='/images/icon-facebook.svg' width={25} height={25}/>
                    </div>
                    <div>
                        <Image src='/images/icon-twitter.svg' width={25} height={25}/>
                    </div>
                    <div>
                        <Image src='/images/icon-pinterest.svg' width={25} height={25}/>
                    </div>
                    <div>
                        <Image src='/images/icon-instagram.svg' width={25} height={25}/>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-darkGray text-sm font-alata text-center'>
                    &copy; 2021 Loopstudios. All rights reserved.
                </div>
            </div>
        </footer>
    );
};


export default Footer;