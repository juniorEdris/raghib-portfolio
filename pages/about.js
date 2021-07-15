import Link from 'next/link'
const about = () => {
    return ( 
        <div className="flex flex-col justify-center items-center h-screen">
            <h3 className='text-4xl'>ABOUT PAGE COMING SOON</h3>
            <Link href="/" className='text-2xl'>
                <a >Home</a>
            </Link>
        </div>
     );
}
 
export default about;