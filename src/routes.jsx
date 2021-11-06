import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Register from "./pages/Register";
import Teste from './pages/Teste';
import Form from './pages/Form';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewHeader from "./components/NewHeader";

const Router = () => {
  return (
    <BrowserRouter>
     <NewHeader />

      <Switch>
        <Route path="/perfil" component={Perfil} />

        <Route path="/register" component={Form}/>

        <Route path ="/teste" component={Teste} />

        <Route exact path="/" render={(props) => <Home {...props} />} />

        <Route path="/path">
          <input placeholder="Say Hello!"></input>
        </Route>
      </Switch>


    </BrowserRouter>
  );
};

export default Router;
