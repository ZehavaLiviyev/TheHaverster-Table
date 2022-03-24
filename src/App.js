import './css/App.css';
import MyTable from './components/MyTable'
import image from "./picture.png"


function App() {

  return (
    <div style={{ backgroundImage: `url(${image})` }} className="App-div">
      
      <MyTable></MyTable>
    </div>
  );
}

export default App;
