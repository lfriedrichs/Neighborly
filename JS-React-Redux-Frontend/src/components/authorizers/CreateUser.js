import React from "react";
import { connect } from 'react-redux';
import { authActions } from '../../actions/user';
import Message from './Message'

class Create extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          username: '',
          password: '',
          email: '',
          firstName: '',
          lastName: '',
          phoneNumber: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zipcode: '',
          submitted: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }

  handleSubmit(e) {
      e.preventDefault();

      this.setState({ submitted: true });
      const { username, password, firstName, lastName, addressLine1, addressLine2, city, state, zipcode, email, phoneNumber} = this.state;
      const { dispatch } = this.props;
      if (username && password && firstName && lastName && addressLine1 && addressLine2 && city && state && zipcode && email && phoneNumber) {
          dispatch(authActions.create(username, password, firstName, lastName, addressLine1, addressLine2, city, state, zipcode, email, phoneNumber));
          this.props.handleFormSwitch()
      }
  }

  render() {
    const { username, password, firstName, lastName, addressLine1, addressLine2, city, state, zipcode, email, phoneNumber, submitted} = this.state;
    return (
        
          <div className="login">
              <Message/>
              <form name="form" onSubmit={this.handleSubmit}>
                  <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                      <label htmlFor="username">Username</label>
                      <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                      {submitted && !username &&
                          <div className="help-block">Username is required</div>
                      }
                  </div>
                  <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                      {submitted && !password &&
                          <div className="help-block">Password is required</div>
                      }
                  </div>

                  <div className={'form-group' + (submitted && !firstName ? ' has-error' : '')}>
                      <label htmlFor="firstName">First Name</label>
                      <input type="firstName" className="form-control" name="firstName" value={firstName} onChange={this.handleChange} />
                      {submitted && !firstName &&
                          <div className="help-block">First name is required</div>
                      }
                  </div>

                  <div className={'form-group' + (submitted && !lastName ? ' has-error' : '')}>
                      <label htmlFor="lastName">Last Name</label>
                      <input type="lastName" className="form-control" name="lastName" value={lastName} onChange={this.handleChange} />
                      {submitted && !lastName &&
                          <div className="help-block">Last name is required</div>
                      }
                  </div>

                  <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} />
                      {submitted && !email &&
                          <div className="help-block">Email is required</div>
                      }
                  </div>

                  <div className={'form-group' + (submitted && !phoneNumber ? ' has-error' : '')}>
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input type="phoneNumber" className="form-control" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} />
                      {submitted && !phoneNumber &&
                          <div className="help-block">Phone Number is required</div>
                      }
                  </div>


                  <div className={'form-group' + (submitted && !addressLine1 ? ' has-error' : '')}>
                      <label htmlFor="addressLine1">Address</label>
                      <input type="addressLine1" className="form-control" name="addressLine1" value={addressLine1} onChange={this.handleChange} />
                      {submitted && !addressLine1 &&
                          <div className="help-block">Address is required</div>
                      }
                  </div>

                  <div className={'form-group' + (submitted ? ' has-error' : '')}>
                      <label htmlFor="addressLine2">Address</label>
                      <input type="addressLine2" className="form-control" name="addressLine2" value={addressLine2} onChange={this.handleChange} />
                  </div>

                  <div className={'form-group' + (submitted && !city ? ' has-error' : '')}>
                      <label htmlFor="city">City</label>
                      <input type="city" className="form-control" name="city" value={city} onChange={this.handleChange} />
                      {submitted && !city &&
                          <div className="help-block">City is required</div>
                      }
                  </div>

                  <div className={'form-group' + (submitted && !state ? ' has-error' : '')}>
                      <label htmlFor="state">State</label>
                      <input type="state" className="form-control" name="state" value={state} onChange={this.handleChange} />
                      {submitted && !state &&
                          <div className="help-block">State is required</div>
                      }
                  </div>

                  <div className={'form-group' + (submitted && !zipcode ? ' has-error' : '')}>
                      <label htmlFor="zipcode">Zipcode</label>
                      <input type="zipcode" className="form-control" name="zipcode" value={zipcode} onChange={this.handleChange} />
                      {submitted && !zipcode &&
                          <div className="help-block">Zipcode is required</div>
                      }
                  </div>

                  <div className="form-group">
                      <button className="btn btn-primary">Create Account</button>
                  </div>
                  <div className="switch-form">
                      <button className="btn btn-primary" onClick={this.props.handleFormSwitch}>Need to Login?</button>
                  </div>
              </form>
          </div>
      );
  }
}

export default connect()(Create);