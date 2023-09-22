import React, {useState} from 'react';
import './Home.css'; 

const Home = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Aquí puedes verificar si la contraseña es correcta
    if (user === "amor" && password === "1234") {
      setLoggedIn(true);
    }
  };

  
  return (
    <div className="home">
      
      
      {/* {!loggedIn ? (
        <form>
          <img src="./lo512.png" alt="" />

          <input
            type="user"
            value={user}
            onChange={handleUserChange}
            placeholder='👦 Usuario'  
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='🔑 Contraseña'
          />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </form>
      ) : (
        <div className="hero">
        <h1>{`Bienvenido ${user}`}</h1>
        
      

        <h1>Xoje </h1>
        <p>Nuestra app</p>
        <a href="#" className="cta-button">Ver más</a>
      </div>
      )} */}
      <h2><p className='h'>Xoje</p> es lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi impedit dolorem quos molestias dolores aspernatur iste placeat at delectus consectetur?</h2>
      <img src="./lo512.png" alt="" />
      <div className="elemento"></div>
    </div>
  );
}

export default Home;
