import Container from './Container'

const Footer = () => {
    return (
        <div className="bg-primary py-3">
            <Container>
                <div className="icons flex items-center justify-center">
                    <a href="https://www.facebook.com/raghib17/" target='_blank' className='mr-2'>
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7383 9.36495V11.2239H10.3775V13.4959H11.7383V20.25H14.5355V13.4959H16.412C16.412 13.4959 16.5889 12.4065 16.6739 11.2145H14.5463V9.66195C14.5463 9.4284 14.8514 9.11655 15.1538 9.11655H16.6766V6.75H14.6044C11.6695 6.75 11.7383 9.02475 11.7383 9.36495Z" fill="white"/>
                    <path d="M5.4 2.7C4.68392 2.7 3.99716 2.98446 3.49081 3.49081C2.98446 3.99716 2.7 4.68392 2.7 5.4V21.6C2.7 22.3161 2.98446 23.0028 3.49081 23.5092C3.99716 24.0155 4.68392 24.3 5.4 24.3H21.6C22.3161 24.3 23.0028 24.0155 23.5092 23.5092C24.0155 23.0028 24.3 22.3161 24.3 21.6V5.4C24.3 4.68392 24.0155 3.99716 23.5092 3.49081C23.0028 2.98446 22.3161 2.7 21.6 2.7H5.4ZM5.4 0H21.6C23.0322 0 24.4057 0.568927 25.4184 1.58162C26.4311 2.59432 27 3.96783 27 5.4V21.6C27 23.0322 26.4311 24.4057 25.4184 25.4184C24.4057 26.4311 23.0322 27 21.6 27H5.4C3.96783 27 2.59432 26.4311 1.58162 25.4184C0.568927 24.4057 0 23.0322 0 21.6V5.4C0 3.96783 0.568927 2.59432 1.58162 1.58162C2.59432 0.568927 3.96783 0 5.4 0Z" fill="white"/>
                    </svg>
                    </a>

                    <a href="https://twitter.com/webmaster502" target='_blank' className='mr-2'>
                    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9322 9.37844C20.4354 9.59444 19.9021 9.74294 19.3419 9.80774C19.9143 9.47024 20.3517 8.93564 20.5596 8.29979C20.0141 8.61767 19.419 8.8413 18.7992 8.96129C18.5385 8.68801 18.2248 8.47071 17.8774 8.32263C17.5299 8.17455 17.1559 8.09879 16.7782 8.09999C15.2487 8.09999 14.0094 9.32174 14.0094 10.827C14.0094 11.0403 14.0337 11.2482 14.0809 11.448C12.9838 11.3959 11.9096 11.1157 10.9269 10.6252C9.9441 10.1348 9.07436 9.44486 8.37314 8.59949C8.12685 9.01408 7.99718 9.48752 7.99784 9.96974C7.99784 10.9147 8.48789 11.7517 9.23039 12.2391C8.79089 12.2253 8.3608 12.1083 7.97489 11.8975V11.9313C7.97906 12.5651 8.20277 13.1778 8.60793 13.6652C9.01309 14.1525 9.57465 14.4844 10.197 14.6043C9.78842 14.7123 9.36092 14.728 8.94554 14.6502C9.12661 15.1954 9.47295 15.6707 9.93647 16.0101C10.4 16.3496 10.9577 16.5362 11.5321 16.5442C10.5466 17.3037 9.33655 17.714 8.09234 17.7106C7.86959 17.7106 7.64954 17.6971 7.43219 17.6728C8.70183 18.4765 10.174 18.9021 11.6766 18.9C16.7715 18.9 19.5565 14.7447 19.5565 11.1402L19.5471 10.7865C20.0902 10.4048 20.5595 9.92773 20.9322 9.37844Z" fill="white"/>
                    <path d="M6.08219 2.7C5.36611 2.7 4.67935 2.98446 4.173 3.49081C3.66665 3.99716 3.38219 4.68392 3.38219 5.4V21.6C3.38219 22.3161 3.66665 23.0028 4.173 23.5092C4.67935 24.0155 5.36611 24.3 6.08219 24.3H22.2822C22.9983 24.3 23.685 24.0155 24.1914 23.5092C24.6977 23.0028 24.9822 22.3161 24.9822 21.6V5.4C24.9822 4.68392 24.6977 3.99716 24.1914 3.49081C23.685 2.98446 22.9983 2.7 22.2822 2.7H6.08219ZM6.08219 0H22.2822C23.7144 0 25.0879 0.568927 26.1006 1.58162C27.1133 2.59432 27.6822 3.96783 27.6822 5.4V21.6C27.6822 23.0322 27.1133 24.4057 26.1006 25.4184C25.0879 26.4311 23.7144 27 22.2822 27H6.08219C4.65002 27 3.27651 26.4311 2.26381 25.4184C1.25112 24.4057 0.68219 23.0322 0.68219 21.6V5.4C0.68219 3.96783 1.25112 2.59432 2.26381 1.58162C3.27651 0.568927 4.65002 0 6.08219 0Z" fill="white"/>
                    </svg>
                    </a>

                    <a href="https://www.instagram.com/jr_edris/" target='_blank' className='mr-2'>
                    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.2641 0H8.36957C6.24083 0.00250164 4.20001 0.849342 2.69489 2.35472C1.18977 3.86009 0.343269 5.90106 0.341125 8.0298L0.341125 18.9243C0.343627 21.053 1.19047 23.0939 2.69584 24.599C4.20122 26.1041 6.24218 26.9506 8.37092 26.9527H19.2654C21.3942 26.9502 23.435 26.1034 24.9401 24.598C26.4452 23.0927 27.2917 21.0517 27.2939 18.9229V8.02845C27.2914 5.89971 26.4445 3.85889 24.9392 2.35376C23.4338 0.848641 21.3928 0.00214372 19.2641 0V0ZM24.5831 18.9229C24.5831 19.6215 24.4455 20.3131 24.1782 20.9584C23.9109 21.6038 23.5191 22.1901 23.0252 22.684C22.5313 23.178 21.9449 23.5698 21.2996 23.8371C20.6542 24.1044 19.9626 24.2419 19.2641 24.2419H8.36957C6.95912 24.2416 5.60656 23.681 4.60935 22.6836C3.61213 21.6861 3.05193 20.3334 3.05193 18.9229V8.02845C3.05228 6.618 3.61283 5.26544 4.6103 4.26822C5.60777 3.27101 6.96047 2.7108 8.37092 2.7108H19.2654C20.6759 2.71116 22.0284 3.27171 23.0257 4.26918C24.0229 5.26664 24.5831 6.61935 24.5831 8.0298V18.9243V18.9229Z" fill="white"/>
                    <path d="M13.8168 6.50586C11.9693 6.50872 10.1982 7.24402 8.89191 8.55058C7.5856 9.85714 6.85064 11.6283 6.84814 13.4759C6.85029 15.3239 7.58527 17.0957 8.89191 18.4026C10.1985 19.7095 11.9702 20.4448 13.8182 20.4473C15.6665 20.4452 17.4384 19.71 18.7454 18.4031C20.0523 17.0961 20.7874 15.3242 20.7896 13.4759C20.7867 11.6279 20.0511 9.8564 18.7439 8.55002C17.4368 7.24364 15.6649 6.50899 13.8168 6.50721V6.50586ZM13.8168 17.7365C12.6872 17.7365 11.6039 17.2878 10.8051 16.489C10.0063 15.6902 9.55759 14.6069 9.55759 13.4773C9.55759 12.3476 10.0063 11.2643 10.8051 10.4655C11.6039 9.66675 12.6872 9.21801 13.8168 9.21801C14.9465 9.21801 16.0298 9.66675 16.8286 10.4655C17.6274 11.2643 18.0761 12.3476 18.0761 13.4773C18.0761 14.6069 17.6274 15.6902 16.8286 16.489C16.0298 17.2878 14.9465 17.7365 13.8168 17.7365Z" fill="white"/>
                    <path d="M20.8017 8.22845C21.724 8.22845 22.4717 7.48079 22.4717 6.5585C22.4717 5.63621 21.724 4.88855 20.8017 4.88855C19.8794 4.88855 19.1318 5.63621 19.1318 6.5585C19.1318 7.48079 19.8794 8.22845 20.8017 8.22845Z" fill="white"/>
                    </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/eftekar-raghib/" target='_blank'>
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.6931 2.42871H5.119C3.4093 2.42871 2.02332 3.8147 2.02332 5.5244V24.0985C2.02332 25.8082 3.4093 27.1942 5.119 27.1942H23.6931C25.4028 27.1942 26.7888 25.8082 26.7888 24.0985V5.5244C26.7888 3.8147 25.4028 2.42871 23.6931 2.42871Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.21472 13.2635V21.0028" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.21472 8.62V8.63587" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.4061 21.0028V13.2635" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.1914 20.7392V16.0957C20.1914 15.2747 19.8652 14.4873 19.2847 13.9067C18.7041 13.3262 17.9167 13 17.0957 13C16.2747 13 15.4873 13.3262 14.9067 13.9067C14.3262 14.4873 14 15.2747 14 16.0957" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>
                </div>
            </Container>
        </div>
     );
}
 
export default Footer;