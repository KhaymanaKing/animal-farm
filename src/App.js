import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import { animals } from './services/data.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header name='Khayman'/>
      <Footer email='khaymanaking@gmail.com'/>
    </div>
  );
}

export default App;
