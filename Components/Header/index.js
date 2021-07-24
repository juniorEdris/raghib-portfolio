import Container from '../Primary/Container';
import ContactDetails from './ContactDetails';
import Logo from './Logo'
import MessageBtn from './MessageBtn';
import classes from '../../styles/Home.module.css';

const Header = (props) => {
    return (
        <div className={`${classes.home_bg}`}>
            <Container>
                <div className=" py-4">
                        <div className="grid grid-auto md:grid-cols-3 gap-4 text-gray-50">
                        <Logo/>
                        <ContactDetails />
                        <MessageBtn
                            // classes={'hover:bg-white hover:border-white-500 text-gray-50 hover:text-gray-700 border-white-500 hover:border-white-500 bg-transparent'}
                            classes={' text-gray-50  bg-primary hover:bg-gray-800'}
                            parentClasses={'text-center md:text-right'}
                        />
                        </div>
                </div>
            </Container>
        </div>
     );
}
 
export default Header;