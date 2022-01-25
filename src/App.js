import { useState } from 'react';
import NavBar from './components/UI/NavBar';
import Main from './components/UI/Main';
import './App.css'
const App = () => {
  const [pageName, setPageName] = useState('add-guest')

  const chosePage = (chosenPageName) => {
    setPageName(chosenPageName)
  }
  return <div>
    <NavBar onChosePage={chosePage} chosenPage={pageName}/>
    <Main pageName={pageName}/>
  </div>
};

export default App;
