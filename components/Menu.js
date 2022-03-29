import Image from 'next/image'

const Menu = ({menuToggle})=>{
    return(
        <div className="px-5 py-10 md:px-36 md:py-20 absolute h-full w-full z-40 bg-black">
            <div>
                <header className='flex place-content-between'>
                    <div className="relative">
                        <Image alt='logo' src="/images/logo.svg" width={162} height={26}/>
                    </div>
                    <div>
                        <Image className='hover:cursor-pointer' alt='close' src="/images/icon-close.svg" width={24} height={24} onClick={menuToggle}/>
                    </div>
                </header>
            </div>
            <div className='mt-40'>
                <nav>
                    <ul className="text-white text-2xl font-josefinSans">
                        <li className="uppercase mb-4">About</li>
                        <li className="uppercase mb-4">Careers</li>
                        <li className="uppercase mb-4">Events</li>
                        <li className="uppercase mb-4">Products</li>
                        <li className="uppercase mb-4">Support</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Menu;



