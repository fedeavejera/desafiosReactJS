import 'bootstrap/dist/css/bootstrap.min.css';
import logonav from '../img/logotamachicoo.png'
import CartWidget from './CardWidget';
const Navbar = () => {
    return (
        <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="index.html"><img className= "logo" src={logonav}/></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Herramientas Eléctricas<span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Herramientas Manuales</a>
            </li>   
            <li class="nav-item">
              <CartWidget/>
            </li>         
          </ul>
               </div>
        </nav>
  </div>
    );
}

export default Navbar;