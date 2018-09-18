import React, { Component } from 'react';
import { Meteor } from "meteor/meteor";
import Header from './Header';

export default class Signup extends Component {

  state = {
    error: ''
  }

  onSubmit = (e) => {
    e.preventDefault();

    const username = this.refs.username.value.trim();
    const fullname = this.refs.fullname.value.trim();
    const email = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();

    Meteor.call('user.create', {email, password, username, fullname}, (err) => {
      if (err) {
        return this.setState({error: err.reason})
      } else {
        Meteor.loginWithPassword({email}, password, (err) => {
          if (err) {
            console.log(err.reason)
          }
        })
      }
    })
    

  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="text-center mt-3 mb-5">
                    <h1 className="display-4">Signup</h1>
                  </div>
                  {this.state.error && (
                    <div className="alert alert-danger alert-dismissible fade show mb-4" role="alert">
                      <strong>{this.state.error}</strong>
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  )}
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input type="text" ref="username" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <input type="text" ref="fullname" className="form-control" placeholder="FullName" />
                    </div>
                    <div className="form-group">
                      <input type="email" ref="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="password" ref="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">SignUp</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
