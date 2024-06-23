import logo from './logo.svg';
import './App.css';
// import ReCAPTCHA from "react-google-recaptcha";


function App() {
  const onChange = () => {
    console.log("Usuario verificado!");
  };

  return (
    <>
      {
        <div className="c formulario-contenedor">
          <div className="ctn-img">
          </div>

          <form className="formulario">
            <div className="logo">
              {/* <img src="src/img/logo.png" alt="Logo" className="logo-img"/> */}
            </div>

            <div className="texto-formulario">
              <h1 className="title">Iniciar Sesión</h1>
            </div>

            <div className="input">
              <label htmlFor="usuario">Usuario</label>
              <input type="text" id="usuario" name="usuario" placeholder="Ingresa tu usuario" required aria-label="Usuario" />
            </div>

            <div className="input">
              <label htmlFor="contraseña">Contraseña</label>
              <input type="password" id="contraseña" name="contraseña" placeholder="Ingresa tu contraseña" required aria-label="Contraseña" />
            </div>


            <div className="password-olvidada">
              <a href="#">Olvidé mi contraseña</a>
            </div>
            {/* <div className="Recaptcha"><ReCAPTCHA sitekey="6Lf5GP8pAAAAAFUV0Am96-8eMyUcuRr8AbY76vzF
          "onChange={onChange} /></div> */}


            <div className="parrafo">
              <p>Para ingresar al sistema es necesario que te encuentres registrado como trabajador</p>
            </div>


            <div className="input">
              <input type="submit" value="Ingresar" />
            </div>

            <div className="text-rgs">
              <span className="text-rgs">¿Aún no te has registrado?
                <a href="#">Regístrate</a>
              </span>
            </div>

          </form>
        </div>
      }
    </>
  );
}

export default App;
