import {  Switch } from 'react-router-dom';
import React from 'react';

import GoogleMapsContainer from '../containers/GoogleMapsContainer'
import UserContainer from '../containers/UserContainer'
import AsksContainer from '../containers/AsksContainer'
import OffersContainer from '../containers/OffersContainer'
import NewsFeedContainer from '../containers/NewsFeedContainer';

import { PrivateRoute } from '../components/PrivateRoute';
import { PublicRoute } from '../components/PublicRoute';

export default class RouterHelper extends React.Component {
    render() {
      return (  
        <>
        <  Switch>
                <PrivateRoute exact path="/home" component={NewsFeedContainer} />
                <PrivateRoute exact path="/displaymap" component={GoogleMapsContainer} />
                <PrivateRoute exact path="/asks" component={AsksContainer} />
                <PrivateRoute exact path="/offers" component={OffersContainer} />
                <PrivateRoute exact path="/user" component={UserContainer} />
                <PublicRoute path="/"/>
            </Switch>
        </>
        )
      }
    }
