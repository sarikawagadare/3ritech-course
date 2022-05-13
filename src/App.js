
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCompo from './Components/NavbarCompo';
import SliderComp from './Components/SliderComp';
import CardCompo from './Components/CardCompo';



function App() {
  return (
    <div className="App">
     <NavbarCompo/>
     <SliderComp/><br></br>
     <CardCompo/>
    </div>
  );
}

export default App;
