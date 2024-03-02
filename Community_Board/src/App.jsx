import './App.css';
import BillyBronco from "../src/assets/Bronco.png";

const App = () => {
  return (
    <div className="App">
      <img className="Billy" id="left" src={BillyBronco} alt="Billy" />
      <img className="Billy" id="right" src={BillyBronco} alt="Billy" />
      <h1 className="Title">Cal Poly Pomona Clubs</h1>
    </div>
  )
}

export default App
