import Login from './Container/Login'
import Homepage from './Container/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Friends from './Container/Friends';
import Events from './Container/Events';
import ContactUs from './Container/ContactUs';
import Settings from './Container/Settings';
import { useState, useEffect } from 'react'

let isSelected = [true, false, false, false, false];
var startvalue;

function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  if (storedDarkMode === 'true'){
    startvalue = true;
  }
  else {
    startvalue = false;
  }
  const [sidebarStyle, setsidebarStyle] = useState(true)
  const [isDarkMode, setDarkMode] = useState(startvalue)

  useEffect(() => {
    localStorage.setItem("DARK_MODE", isDarkMode);
  }, [isDarkMode])

  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={ Login }/>
          <Route path="/the_quad_website" component={ Login }/>
          <Route path="/login" component={ Login }/>
          <Route path="/homepage" render={(props) => (<Homepage sidebarStyle={sidebarStyle} 
            isSelected={isSelected} 
            setsidebarStyle={setsidebarStyle}
            isDarkMode={isDarkMode}
            setDarkMode={setDarkMode}/>)} />
          <Route path="/events" render={(props) => (<Events sidebarStyle={sidebarStyle} 
            isSelected={isSelected} 
            setsidebarStyle={setsidebarStyle}
            isDarkMode={isDarkMode}
            setDarkMode={setDarkMode}/>)} />
          <Route path="/friends" render={(props) => (<Friends sidebarStyle={sidebarStyle} 
            isSelected={isSelected} 
            setsidebarStyle={setsidebarStyle}
            isDarkMode={isDarkMode}
            setDarkMode={setDarkMode}/>)} />
          <Route path="/settings" render={(props) => (<Settings sidebarStyle={sidebarStyle} 
            isSelected={isSelected} 
            setsidebarStyle={setsidebarStyle}
            isDarkMode={isDarkMode}
            setDarkMode={setDarkMode}/>)} />
          <Route path="/contact" render={(props) => (<ContactUs isSelected={isSelected}
            isDarkMode={isDarkMode}
            setDarkMode={setDarkMode}/>)} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
