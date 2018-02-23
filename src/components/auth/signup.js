import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signupUser } from "../../actions/authActions";

const validate = values => {
  const errors = {};

  if(!values.email) {
    errors.email = "Required";
  } else if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if(!values.password) {
    errors.password = "Required";
  } else if (values.password.trim().length < 6) {
    errors.password = "Bad Password!!!";
  }

  if(!values.confirmPassword) {
    errors.confirmPassword = "Required"
  } else if ( values.confirmPassword !== values.password ) {
    errors.confirmPassword = "Passwords not equal"
  }

  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error} }) => (
  <div className="input-wrap">
    <label>{ label }</label>
    <div className="input-item">
      <input { ...input } type={ type } placeholder={ label } autoComplete="off"/>
      { touched && error && <span className="error-message">{ error }</span> }
    </div>
  </div>
);


class Signup extends Component {

  componentWillUpdate(nextProps) {
    if(nextProps.authenticated) {
      this.props.history.push("/")
    }
  };

  componentDidUpdate(nextProps) {
    if(nextProps.authenticated) {
      this.props.history.push("/")
    }
  };

  handleSubmitForm = ({email, password}) => {
    this.props.signup({email, password})
  };

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
  render() {
    const { error, submitting, handleSubmit } = this.props;
    return (
      <div className="form-wrap">
        <form onSubmit={ handleSubmit(this.handleSubmitForm ) }>
          <div className="input-group-wrap">
            <div className="link-wrap">
              <Link to="/signin" className="none-active-link">Sign In</Link>
              <Link to="/signup" className="active-link">Sign Up</Link>
            </div>
            <Field
              name="email"
              type="text"
              label="Email"
              component={renderField}
            />
            <Field
              name="password"
              type="password"
              label="Password"
              component={renderField}
            />
            <Field
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              component={renderField}
            />
            { error && <strong>{ error }</strong> }
            {this.renderAlert()}

            <div className="button-wrap">
              <button type="submit" disabled={submitting} >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>

    )
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: ({email, password}) => dispatch(signupUser({email, password}))
  }
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error
  }
};

Signup = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default reduxForm({
  form: "signup",
  validate
})(Signup);