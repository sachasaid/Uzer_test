import logo from './assets/Logo.png';
import './App.css';
import { Title } from './Component/Title/Title';
import { Input } from './Component/Input/Input';

export const App = () => {
  return (
    <div className="app" >
            <div className="container">
                <div className="interface">
                  <div className="interface-container">
                      <img src={logo} alt="" style={{width: '70px', height: '70px'}}/>
                      <Title/>
                      <Input/>
                  </div>
                </div>
                <div className="graphic">
                  <h1>GRAPHIC</h1>
                </div>
            </div>
        </div>
  );
}

export default App;
