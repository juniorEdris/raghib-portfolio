import classes from '../../styles/Home.module.css'

const ContactDetails = () => {
    return ( 
        <div className=" flex items-center justify-center md:justify-end text-sm">
            <span className={`mr-3 ${classes.contact_span}`}>+8801846029691</span>
            <span className={`${classes.contact_span}`}>mdraghib17@gmail.com</span>
        </div>
     );
}
 
export default ContactDetails;