import { useState } from "react";
import { Switch, Route } from 'react-router-dom'
import OrderConfirmation from "../components/OrderConfirmation.jsx"
import Order from "../components/Order.jsx"
import Home from "../components/Home.jsx";
import Soru from "../components/Soru.jsx";

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

          <Route path="/soru" exact>
            <Soru />
          </Route>
        </Switch>
        
        </div>          
      </>
    )
  }


  export default Main;