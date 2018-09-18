import React from 'react';
import { NavLink } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import Gravatar from 'react-gravatar';
import { withTracker } from 'meteor/react-meteor-data';
import { Accounts } from "meteor/accounts-base";

const Header = (props) => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand" href="#">Auth</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                    {!!props.curtrentUser 
                    ?
                        <ul className="navbar-nav ml-md-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <Gravatar email={props.curtrentUser.emails[0].address} default="monsterid" />
                                    <span className="ml-1">{props.curtrentUser.profile.username}</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#" onClick={() => Accounts.logout()}>Logout</a>
                                </div>
                            </li>
                        </ul>
                    : 
                        <ul className="navbar-nav ml-md-auto">
                            <li className="nav-item">
                                <NavLink exact to="/login" className="nav-link">login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/signup" className="nav-link">Signup</NavLink>
                            </li> 
                        </ul>   
                    }   
            </div>
        </nav>
    </div>
)

export default withTracker(() => {
    const curtrentUser = Meteor.user();
    return {curtrentUser}
})(Header);