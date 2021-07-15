import Link from 'next/link'
import Image from 'next/image'
const Menu = () => {
    return ( 
        <div className="menu_wrapper fixed inline right-11 bottom-2">
            <Link href='/about'>
                <a >
                    <Image src={'/assets/images/icons/menus.png'} alt={''} height={50} width={50}/>
                </a>
            </Link>
        </div>
     );
}
 
export default Menu;