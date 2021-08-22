import './App.css';
import SiteBar from './components/SiteBar'
import Footer from './components/Footer'
import Auth from './components/Auth/Auth.jsx'

function App() {

  return (
    <div >
      Hello from App
      <SiteBar />
      <Auth />      
      <Footer />
    </div>
  );
}

export default App;
