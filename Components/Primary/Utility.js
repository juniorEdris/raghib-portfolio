import classes from '../../styles/Primary.module.css'

export const HeadingOne = ({title}) => {
    return (
        <div className={`${classes.primary_page_heading_one} text-center mb-3`}>
            <span className={`capitalize bg-primary text-white py-2 px-8 text-xl font-medium`}>{title}</span>
        </div>
     );
}
