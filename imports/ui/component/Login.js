import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Header from './Header';

export default class Signup extends Component {

  state = {
    error: ''
  }

  onSubmit = (e) => {
    e.preventDefault();

    const email = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
        if (err) {
           return this.setState({error: 'Unable to login. Check email and password.'});
        } else {
           return this.setState({error: ''});
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
                    <h1 className="display-4">Login</h1>
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
                      <input type="email" ref="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="password" ref="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">Login</button>
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
