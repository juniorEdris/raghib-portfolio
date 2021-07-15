import ContactDetails from './ContactDetails';
import Logo from './Logo'
import MessageBtn from './MessageBtn';

const Header = (props) => {
    return ( 
        <div className=" py-2">
                <div className="grid grid-auto md:grid-cols-3 gap-4 text-gray-50">
                <Logo/>
                <ContactDetails />
                <MessageBtn/>
                </div>
        </div>
     );
}
 
export default Header;