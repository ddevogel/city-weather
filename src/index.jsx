import React    from 'react';
import Main     from './app/components/main';

import Router   from 'react-router';

//import { Navigation } from 'react-router';

let Route = Router.Route;
//let DefaultRoute = Router.DefaultRoute;

// import Router, { Route } from 'react-router';
// import { Navigation } from 'react-router';
//import City from 'app/screens/City';


let routes = (
  <Route>
    <Route name="main" path="/" handler={Main}/>
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Main />, document.getElementById('container'));
});