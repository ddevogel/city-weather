import React    from 'react';
import City     from './app/components/city/city';

import Router   from 'react-router';

//import { Navigation } from 'react-router';

let Route = Router.Route;
//let DefaultRoute = Router.DefaultRoute;

// import Router, { Route } from 'react-router';
// import { Navigation } from 'react-router';
//import City from 'app/screens/City';


let routes = (
  <Route>
    <Route name="city" path="/" handler={City}/>
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<City/>, document.getElementById('container'));
});