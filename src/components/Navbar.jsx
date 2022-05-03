import 'bootstrap/dist/css/bootstrap.min.css';
import logonav from '../img/logotamachicoo.png';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to='/'><img className= "logo" src={logonav}/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to='/category/Electrica' style={{textDecoration: "none", color: '#0000008c',}}>Herramientas Eléctricas<span class="sr-only"></span></Link>
            </li>
            <li className="nav-item">
            <Link to='/category/Manual' style={{textDecoration: "none", color: '#0000008c'}}>Herramientas Manuales</Link>
            </li>   
            <li className="nav-item">
             <Link to='/cart' style={{textDecoration: "none", color: "black"}}><CartWidget/></Link>
            </li>         
          </ul>
               </div>
        </nav>
  </div>
    );
}

export default Navbar;