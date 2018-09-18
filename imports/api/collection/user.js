import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';


Meteor.methods({
  'user.create'({email, password, username, fullname}){

    new SimpleSchema({
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        required: true,
      },
      password: {type: String, min: 5, required: true},
      username:{type: String, min: 3, required: true},
      fullname: {type: String, min: 3, required: true}
    }).validate({ email, password, username, fullname });

    Accounts.createUser({
      email, 
      password, 
      profile: {
        username, 
        fullname
      }
    })
  }
  
});