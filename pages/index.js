import react, {useState} from 'react';
import Head from 'next/head'
import CreationSection from '../components/MainPage/CreationSection'
import InteractiveVrSection from '../components/MainPage/InteractiveVrSection'
import MainSection from '../components/MainPage/MainSection'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

export const getStaticProps = async () => {

  const data=[
    {
        id:1,
        title:'Deep Earth',
        mobileUrl:'/images/mobile/image-deep-earth.jpg',
        desktopUrl:'/images/desktop/image-deep-earth.jpg'
    },
    {
        id:2,
        title:'Night Arcade',
        mobileUrl:'/images/mobile/image-night-arcade.jpg',
        desktopUrl:'/images/desktop/image-night-arcade.jpg'
    },
    {
        id:3,
        title:'Soccer Team Vr',
        mobileUrl:'/images/mobile/image-soccer-team.jpg',
        desktopUrl:'/images/desktop/image-soccer-team.jpg'
    },
    {
        id:4,
        title:'The Grid',
        mobileUrl:'/images/mobile/image-grid.jpg',
        desktopUrl:'/images/desktop/image-grid.jpg'
    },
    {
        id:5,
        title:'From Up Above Vr',
        mobileUrl:'/images/mobile/image-from-above.jpg',
        desktopUrl:'/images/desktop/image-from-above.jpg'
    },
    {
        id:6,
        title:'Pocket Borealis',
        mobileUrl:'/images/mobile/image-pocket-borealis.jpg',
        desktopUrl:'/images/desktop/image-pocket-borealis.jpg'
    },
    {
        id:7,
        title:'The Curiosity',
        mobileUrl:'/images/mobile/image-curiosity.jpg',
        desktopUrl:'/images/desktop/image-curiosity.jpg',
    },
    {
        id:8,
        title:'Make It Fisheye',
        mobileUrl:'/images/mobile/image-fisheye.jpg',
        desktopUrl:'/images/desktop/image-fisheye.jpg'
    }
];

  return {
      props: {creations:data}
  }
}

export default function Home({creations}) {

  const [menuActive,setMenuActive] = useState(false);

  const menuToggle = ()=>{
    setMenuActive(!menuActive);
  };

  return (
    <>
      <Head>
        <title>Frontend Mentor | Loopstudios landing page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"></link>
      </Head>
      <div className={menuActive?'block lg:hidden':'hidden'}>
        <Menu menuToggle={menuToggle}/>
      </div>
      <div className={menuActive?'hidden lg:block':''}>
        <MainSection menuToggle={menuToggle}></MainSection>
          <div className='px-5 py-24 lg:px-36 lg:py-28 md:px-36 '>
            <InteractiveVrSection></InteractiveVrSection>
            <CreationSection creations={creations}></CreationSection>
          </div>
        <Footer></Footer>
      </div>
      <div className="attribution bg-black text-white flex place-content-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer"> Frontend Mentor</a>. 
        Coded by <a href="#">Angel Murillo</a>.
      </div>
    </>
  )
}
