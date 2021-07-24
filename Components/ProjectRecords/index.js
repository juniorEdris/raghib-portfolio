import { HeadingOne } from '../Primary/Utility'
import Link from 'next/link'
import classes from '../../styles/ProjectRecords.module.css'
import ProjectMain from "./ProjectMain";
import MessageBtn from "../Header/MessageBtn";
const ProjectRecords = (props) => {
    return (
        <div className={`project_record_wrapper py-10`}>
            <header>
                <HeadingOne title={'Projects'} />
            </header>
            <ProjectMain />
            <footer className='mb-4 mt-8'>
                <h2 className="py-3 font-semibold text-lg text-center">
                   <span className='text-xl primary_color'>Interested</span> in collaborating with me?
                </h2>
                <p className='mb-4 text-center'>
                    I’m always open to discussing product design work or partnership opportunities.
                </p>
                <div className="">
                    <MessageBtn
                        classes={'text-gray-50 bg-primary hover:bg-gray-800'}
                        parentClasses={'mt-3 text-center'}
                    />
                </div>
            </footer>
        </div>
     );
}
 
export default ProjectRecords;