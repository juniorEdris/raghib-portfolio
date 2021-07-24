import classes from '../../styles/ProjectRecords.module.css'
import Image from 'next/image'
const Main = () => {
    return (
        <main className={` w-full lg:w-9/12 lg:m-auto py-8`}>
                <div className={`grid grid-cols-1 md:grid-cols-3`}>
                    <div className={`${classes.project_card_wrapper} py-3 text-center mb-3 rounded-lg`}>
                        <div className={`${classes.project_card_img} text-center`}>
                            <Image src={'/assets/images/projects/emedilife.png'} height={250} width={250} />
                        </div>
                        <div className={`${classes.project_card_btn} bg-primary rounded-lg p-3 text-white`}>
                            <div className="mb-8">
                                <p>
                                    This site is a e-pharma e-commerce website. Owns by a Bangladesh based company. This application is written with React js, Redux and its data is controlled by Laravel API's. Which is been running since 2021.
                                </p>
                            </div>
                            <a  href='https://www.emedilife.com/' target='_blank' className='text-white capitalize py-2 px-4 border border-red-700 rounded-lg'>
                                visit site
                            </a>
                        </div>
                    </div>
                    {/* 2nd card started */}
                    <div className={`${classes.project_card_wrapper} py-3 text-center mb-3 rounded-lg`}>
                        <div className={`${classes.project_card_img} text-center`}>
                            <Image src={'/assets/images/projects/uparzon.png'} height={250} width={250} />
                        </div>
                        <div className={`${classes.project_card_btn} bg-primary rounded-lg p-3 text-white`}>
                            <div className="mb-8">
                                <p>
                                    This site is a multi-vendor e-commerce website. Owns by a Bangladesh based company. This application is written with React js, Redux and its data is controlled by Laravel API's. Right now it is under construction but it has an active mobile application. Which is been running since 2014.
                                </p>
                            </div>
                            <a href='https://www.uparzon.com.bd/' target='_blank' className='text-white capitalize py-2 px-4 border border-red-700 rounded-lg'>
                                visit site
                            </a>
                        </div>
                    </div>                  
                </div>
            </main>
     );
}
 
export default Main;