
import './App.css';
import DashboardHome from './components/body/Dashboard';
import NavBar from './components/header/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingButton from './components/body/Fab';
import AddDashboard from './components/body/AddDashboard'
import { useState } from 'react';

function App() {
  const [show, setshow] = useState(false);

  const handleclose = ()=> setshow(false);
  const handleopen= () => setshow(true);

  return (
    <div className='container'>
      <NavBar/>    
      <DashboardHome/>
      <FloatingButton handleclose={handleclose} handleopen={handleopen}/>
      <AddDashboard show={show} handleclose={handleclose} handleopen={handleopen} />

    </div>
  );
}

export default App;
