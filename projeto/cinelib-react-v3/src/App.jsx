import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <>
      <NavBar />

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
