const MessageBtn = (props) => {
    return ( 
        <div className={`${props.parentClasses}`}>
            <button className={`capitalize font-semibold py-2 px-4 border rounded ${props.classes}`} type='button'>
                let's talk
                <svg className='ml-2 inline' width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 10.5C24 16.299 18.627 21 12 21C10.8115 21.0016 9.62788 20.8473 8.4795 20.541C7.6035 20.985 5.592 21.837 2.208 22.392C1.908 22.44 1.68 22.128 1.7985 21.849C2.3295 20.595 2.8095 18.924 2.9535 17.4C1.116 15.555 0 13.14 0 10.5C0 4.701 5.373 0 12 0C18.627 0 24 4.701 24 10.5ZM7.5 10.5C7.5 10.1022 7.34196 9.72064 7.06066 9.43934C6.77936 9.15804 6.39782 9 6 9C5.60218 9 5.22064 9.15804 4.93934 9.43934C4.65804 9.72064 4.5 10.1022 4.5 10.5C4.5 10.8978 4.65804 11.2794 4.93934 11.5607C5.22064 11.842 5.60218 12 6 12C6.39782 12 6.77936 11.842 7.06066 11.5607C7.34196 11.2794 7.5 10.8978 7.5 10.5ZM13.5 10.5C13.5 10.1022 13.342 9.72064 13.0607 9.43934C12.7794 9.15804 12.3978 9 12 9C11.6022 9 11.2206 9.15804 10.9393 9.43934C10.658 9.72064 10.5 10.1022 10.5 10.5C10.5 10.8978 10.658 11.2794 10.9393 11.5607C11.2206 11.842 11.6022 12 12 12C12.3978 12 12.7794 11.842 13.0607 11.5607C13.342 11.2794 13.5 10.8978 13.5 10.5ZM18 12C18.3978 12 18.7794 11.842 19.0607 11.5607C19.342 11.2794 19.5 10.8978 19.5 10.5C19.5 10.1022 19.342 9.72064 19.0607 9.43934C18.7794 9.15804 18.3978 9 18 9C17.6022 9 17.2206 9.15804 16.9393 9.43934C16.658 9.72064 16.5 10.1022 16.5 10.5C16.5 10.8978 16.658 11.2794 16.9393 11.5607C17.2206 11.842 17.6022 12 18 12Z" fill="white"/>
                </svg>

            </button>
        </div>
     );
}
 
export default MessageBtn;