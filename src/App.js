import Login from './Container/Login'
import Homepage from './Container/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Friends from './Container/Friends';
import Events from './Container/Events';
import ContactUs from './Container/ContactUs';
import Settings from './Container/Settings';

const isSidebarMax = true;
let isSelected = [true, false, false, false, false];

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={ Login }/>
          <Route path="/the_quad_website" component={ Login }/>
          <Route path="/login" component={ Login }/>
          <Route path="/homepage" render={(props) => (<Homepage isSidebarMax={isSidebarMax} isSelected={isSelected}/>)} />
          <Route path="/events" render={(props) => (<Events isSidebarMax={isSidebarMax} isSelected={isSelected}/>)} />
          <Route path="/friends" render={(props) => (<Friends isSidebarMax={isSidebarMax} isSelected={isSelected}/>)} />
          <Route path="/contact" render={(props) => (<ContactUs isSidebarMax={isSidebarMax} isSelected={isSelected}/>)} />
          <Route path="/settings" render={(props) => (<Settings isSidebarMax={isSidebarMax} isSelected={isSelected}/>)} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
