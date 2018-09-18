import React from 'react'
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import '../imports/startup/simple_schema_config';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import AppRoute from '../imports/ui/routes/AppRoute';

Meteor.startup(() => {
    ReactDOM.render(<AppRoute />, document.getElementById('app'))
});
