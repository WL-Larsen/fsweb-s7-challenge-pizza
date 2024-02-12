import { useState } from "react";
import { Switch, Route } from 'react-router-dom'
import OrderConfirmation from "../components/OrderConfirmation.jsx"
import Order from "../components/Order.jsx"
import Home from "../components/Home.jsx";

function Main(props) { 
    const [currentOrder, setCurrentOrder] = useState({})
    return (
      <>   
      <div className="main-container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/orderconfirmation" exact>
            <OrderConfirmation currentOrder={currentOrder} />
          </Route>

          <Route path="/order" exact>
            <Order setCurrentOrder={setCurrentOrder} />
          </Route>
        </Switch>
        
        </div>          
      </>
    )
  }


  export default Main;