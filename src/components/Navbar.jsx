import 'bootstrap/dist/css/bootstrap.min.css';
import logonav from '../img/logotamachicoo.png';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light">
          <Link to='/'><img className= "logo" src={logonav}/></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link to='/category/Electrica' style={{textDecoration: "none", color: '#0000008c',}}>Herramientas Eléctricas<span class="sr-only"></span></Link>
            </li>
            <li class="nav-item">
            <Link to='/category/Manual' style={{textDecoration: "none", color: '#0000008c'}}>Herramientas Manuales</Link>
            </li>   
            <li class="nav-item">
             <Link to='/cart' style={{textDecoration: "none", color: "black"}}><CartWidget/></Link>
            </li>         
          </ul>
               </div>
        </nav>
  </div>
    );
}

export default Navbar;