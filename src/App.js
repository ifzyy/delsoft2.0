
import Navigation from './components/Nav';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navigation />
     <Hero />
     <Main />
     <Footer />
    </div>
  );
}

export default App;
