import './App.css';
import Home from '../src/components/Home';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className='App'>
      <Home/>
      <About/>
      <Process/>
      <Testimonials/>
    </div>
  );
}

export default App;
