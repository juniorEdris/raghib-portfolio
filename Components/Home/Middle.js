import Image from 'next/image'
import Link from 'next/link';
const Middle = () => {
    return ( 
            <div className="middle_wrapper grid grid-auto md:grid-cols-2" >
                <div className="text-white flex flex-col space-y-5 items-start">
                    <div className="text-4xl">
                        <h2>Hi,Folks</h2>
                    </div>
                    <div className="text-8xl">
                        <h2>I'm Raghib</h2>
                    </div>
                    <div className="text-5xl">
                        <h2>a Frontend Developer</h2>
                    </div>
                    <div className="text-2xl">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus suscipit beatae voluptate, velit aliquam molestias cupiditate. Ipsa recusandae molestiae voluptas esse hic excepturi, eveniet dolores tempora. Praesentium nesciunt similique, aperiam placeat atque perferendis. Provident eligendi ut fugit quaerat impedit dolore obcaecati, laborum repellendus consectetur voluptate voluptatum saepe minus voluptas.
                        </p>
                    </div>
                    <div className="text-2xl">
                    <Link href='https://drive.google.com/file/d/1BHCYDh0v1MZZ-wHoXlu87_G3FBTNDXmJ/view?usp=sharing' className='capitalize btn bg-primary hover:bg-gray-500 py-2 px-4 rounded drop-shadow-md' type='button'>
                        <a>
                            see resume
                            <svg className='inline ml-2' width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.155 0H3.33333C2.44928 0 1.60143 0.35119 0.976311 0.976311C0.351189 1.60143 0 2.44928 0 3.33333V23.3333C0 24.2174 0.351189 25.0652 0.976311 25.6904C1.60143 26.3155 2.44928 26.6667 3.33333 26.6667H16.6667C17.5507 26.6667 18.3986 26.3155 19.0237 25.6904C19.6488 25.0652 20 24.2174 20 23.3333V7.845C19.9999 7.40301 19.8242 6.97915 19.5117 6.66667L13.3333 0.488333C13.0208 0.175751 12.597 9.43957e-05 12.155 0V0ZM12.5 5.83333V2.5L17.5 7.5H14.1667C13.7246 7.5 13.3007 7.3244 12.9882 7.01184C12.6756 6.69928 12.5 6.27536 12.5 5.83333ZM4.16667 15C3.94565 15 3.73369 14.9122 3.57741 14.7559C3.42113 14.5996 3.33333 14.3877 3.33333 14.1667C3.33333 13.9457 3.42113 13.7337 3.57741 13.5774C3.73369 13.4211 3.94565 13.3333 4.16667 13.3333H15.8333C16.0543 13.3333 16.2663 13.4211 16.4226 13.5774C16.5789 13.7337 16.6667 13.9457 16.6667 14.1667C16.6667 14.3877 16.5789 14.5996 16.4226 14.7559C16.2663 14.9122 16.0543 15 15.8333 15H4.16667ZM3.33333 17.5C3.33333 17.279 3.42113 17.067 3.57741 16.9107C3.73369 16.7545 3.94565 16.6667 4.16667 16.6667H15.8333C16.0543 16.6667 16.2663 16.7545 16.4226 16.9107C16.5789 17.067 16.6667 17.279 16.6667 17.5C16.6667 17.721 16.5789 17.933 16.4226 18.0893C16.2663 18.2455 16.0543 18.3333 15.8333 18.3333H4.16667C3.94565 18.3333 3.73369 18.2455 3.57741 18.0893C3.42113 17.933 3.33333 17.721 3.33333 17.5ZM4.16667 21.6667C3.94565 21.6667 3.73369 21.5789 3.57741 21.4226C3.42113 21.2663 3.33333 21.0543 3.33333 20.8333C3.33333 20.6123 3.42113 20.4004 3.57741 20.2441C3.73369 20.0878 3.94565 20 4.16667 20H10.8333C11.0543 20 11.2663 20.0878 11.4226 20.2441C11.5789 20.4004 11.6667 20.6123 11.6667 20.8333C11.6667 21.0543 11.5789 21.2663 11.4226 21.4226C11.2663 21.5789 11.0543 21.6667 10.8333 21.6667H4.16667Z" fill="white"/>
                            </svg>
                        </a>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <Image src='/assets/images/middle_body/cartoon.png' alt='' height={600} width={700}/>
                </div>
            </div>
     );
}
 
export default Middle;