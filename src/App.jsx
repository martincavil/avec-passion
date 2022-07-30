import './app.scss';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Story from './components/story/Story'
import Journey from './components/journey/Journey'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <div className="sections">
        <Hero />
        <Story />
        <Journey />
      </div>
    </div>
  );
}

export default App;
