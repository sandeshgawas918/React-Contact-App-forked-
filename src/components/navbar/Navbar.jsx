import { Link } from "react-router-dom"

let Navbar = ()=>{
    return(
        <>
        <nav className="navbar navbar-dark bg-dark text-white p-2" >
           <div className="container">
                <Link to={'/'} className="navbar-brand" > <i className="fa fa-mobile text-warning"></i> Contact Manager </Link>
           </div>
        </nav>
        </>
    )
}

export default Navbar