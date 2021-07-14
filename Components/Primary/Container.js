const Container = ({children }) => {
    return ( 
        <div className="container px-4 md:px-0 m-auto">
            {children}
        </div>
     );
}
 
export default Container;