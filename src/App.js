import Login from './Container/Login'
import Homepage from './Container/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Friends from './Container/Friends';
import Events from './Container/Events';
import ContactUs from './Container/ContactUs';
import Settings from './Container/Settings';
import { useState } from 'react'

let isSelected = [true, false, false, false, false];

function App() {
  const [sidebarStyle, setsidebarStyle] = useState(true)
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={ Login }/>
          <Route path="/the_quad_website" component={ Login }/>
          <Route path="/login" component={ Login }/>
          <Route path="/homepage" render={(props) => (<Homepage sidebarStyle={sidebarStyle} isSelected={isSelected} setsidebarStyle={setsidebarStyle}/>)} />
          <Route path="/events" render={(props) => (<Events sidebarStyle={sidebarStyle} isSelected={isSelected} setsidebarStyle={setsidebarStyle}/>)} />
          <Route path="/friends" render={(props) => (<Friends sidebarStyle={sidebarStyle} isSelected={isSelected} setsidebarStyle={setsidebarStyle}/>)} />
          <Route path="/contact" render={(props) => (<ContactUs isSelected={isSelected}/>)} />
          <Route path="/settings" render={(props) => (<Settings sidebarStyle={sidebarStyle} isSelected={isSelected} setsidebarStyle={setsidebarStyle}/>)} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
