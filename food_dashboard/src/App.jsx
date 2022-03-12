import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.scss';
import Sidebar from './Component/Sidebar/Sidebar';
import DiscountPage from './Pages/DiscountPage/DiscountPage';
import Home from './Pages/Home/Home';
 
function App() {
 return ( 
  <div className="app ">
        <Sidebar />
      <div className="app__content">
            <Switch>
                  
                  <Route path="/discount" exact >
                        <DiscountPage />
                  </Route>            
                        <Route path="/graph"exact >
                        graph  
                  </Route>                 
                   <Route path="/order"exact >
                        Order    
                  </Route>     

                     <Route path="/message" exact >
                        Message    
                  </Route>               
                   <Route path="/notification"exact >
                        Notification      
                  </Route>
                  <Route path="/settings"exact >
                        settings      
                  </Route>
                  <Route path="/"  >
                        <Home />      
                  </Route>
            </Switch>
      </div>
  </div>
 
);
}

export default App;