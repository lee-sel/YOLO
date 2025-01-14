import React from "react";
import { Switch, Route } from "react-router";

export default (
  <Switch> 
    <Route path= "/"/>
    <Route path= "/special" />
    <Route path= "/reservation"/>
    <Route path= "/room" />
    <Route path="/details/:roomNumber" />
    <Route path="/location"/>
    <Route />
  </Switch>
);
