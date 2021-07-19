import Image from 'next/image';
import classes from '../../styles/About.module.css'
import { HeadingOne } from '../Primary/Utility'
const About = () => {
    const images = [
        {
            id: 5,
            image: '/assets/images/about_page/icons/html.png',
            name:'html'
        },
        {
            id: 6,
            image: '/assets/images/about_page/icons/css.png',
            name:'css'
        },
        {
            id: 1,
            image: '/assets/images/about_page/icons/react.png',
            name:'react js'
        },
        {
            id: 2,
            image: '/assets/images/about_page/icons/next.png',
            name:'next js'
        },
        {
            id: 3,
            image: '/assets/images/about_page/icons/nodejs.png',
            name:'nodejs'
        },
        {
            id: 4,
            image: '/assets/images/about_page/icons/javascript.png',
            name:'javascript'
        },
    ]
    return (
        <div className={`about_wrapper py-10`}>
            <header>
                <HeadingOne title={'what i do'}/>
            </header>
            <main>
                <div className="grid grid-auto md:grid-cols-2 items-center">
                    <div className={`left_section mb-2 md:mb-0`}>
                        <Image src='/assets/images/about_page/about01.png' alt='' width={'645px'} height={'471px'}/>
                    </div>
                    <div className={`right_section`}>
                        <div className={`stack_container flex flex-wrap items-center justify-center md:justify-start`}>
                            {images.map(image => (
                                <Image key={image.id} src={image.image} alt={image.name} height={120} width={120}/>
                            ))}
                        </div>
                        <div className={`${classes.lists} px-3`}>
                            <ul className={`text-xs `}>
                                <li>
                                    Develop highly interactive Frontend/User Interface(UI) for your web application and Mobile responsive design
                                </li>
                                <li>
                                    Proggressive Web Application(PWA) in normal and SPA Stacks
                                </li>
                                <li>
                                    Integration of third party services such as Firebase/AWS/Digital Ocean
                                </li>
                                <li>
                                    API Creation and integration Service.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
     );
}
 
export default About;