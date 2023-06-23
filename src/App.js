
import './App.css';
import Index from './pages/Home'
import Form from './pages/Form';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path= '/' element = {<Home/>} />
    <Route path= '/form' element = {<Form/>} />
  </Routes>
</Router>
      
    </div>
  );
}

export default App;
