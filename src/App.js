import './App.css';
import Hero from './components/hero/Hero'
import Programs from './components/Programs/programs'
import Reason from './components/Reasons/Reasons'
import Plans from './components/Plans/Plans'
import Join from './components/Join/Join'
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Reason />
          <Plans />
          <Testimonials />
          <Join />
          <Footer />
    </div>
  );
}

export default App;
