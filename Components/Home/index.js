import classes from '../../styles/Home.module.css'
import Middle from './Middle';
import Container from '../Primary/Container';
const Home = () => {
    return (
        <div className={``}>
            <main className={`${classes.home_bg}`}>
                <Container>
                    <Middle/>
                </Container>
            </main>
        </div>
     );
}
 
export default Home;