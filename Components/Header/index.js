import Container from '../Primary/Container';
import ContactDetails from './ContactDetails';
import Logo from './Logo'
import MessageBtn from './MessageBtn';

const Header = (props) => {
    return ( 
        <div className="bg-gray-800 py-2">
            <Container>
                {/* <div className="flex justify-center flex-col md:flex-row md:justify-between text-gray-50"> */}
                <div className="grid grid-auto md:grid-cols-3 gap-4 text-gray-50">
                <Logo/>
                <ContactDetails />
                <MessageBtn/>
                </div>
            </Container>
        </div>
     );
}
 
export default Header;