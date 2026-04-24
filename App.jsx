import img from './pc.jpg';
import './App.css';
import Frase from './Components/Frase';
function App() {
 function multiplicar(a, b){
  return a * b;
 }
  
  return (
    <div>
      <h1>Prova de LPBE</h1>
      <img src={img} alt="" width ="600" />
      <p>PC retrô</p>
      <p>O resultado de 200 x 300 é: {multiplicar(200, 300)}</p>
      <Frase texto="Micro Computador"/>
      <Frase texto="Game Boy Color"/>
      <Frase texto="Fita Cassete"/>
    </div>
  );
}

export default App;
