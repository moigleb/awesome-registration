import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signinUser } from "../../actions/authActions";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.trim().length < 6) {
    errors.password = "Bad Password!!!";
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error }}) => (
  <div className="input-wrap">
    <label>{ label }</label>
    <div className="input-item">
      <input { ...input } type={ type } placeholder={ label } autoComplete="off"/>
      { touched && error && <span className="error-message">{ error }</span> }
    </div>
  </div>
);

class Signin extends Component {

  componentDidMount() {
    console.log(this.props);

  }

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


  handleFormSubmit = ({ email, password }) => {
    this.props.signin({ email, password })
  };

  renderAlert = () => {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Ooops!</strong>{this.props.errorMessage}
        </div>
      )
    }
  };



  render() {
    const {error, handleSubmit, submitting} = this.props;

    return (
      <div className="form-wrap">
        <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
          <div className="input-group-wrap">
            <div className="link-wrap">
              <Link to="/signin" className="active-link">Sign In</Link>
              <Link to="/signup" className="none-active-link">Sign Up</Link>
            </div>
            <Field
              name="email"
              type="text"
              component={ renderField }
              label="Email"
            />
            <Field
              name="password"
              type="password"
              component={ renderField }
              label="Password"
            />
            { error && <strong>{ error }</strong> }
            {this.renderAlert()}
            <div className="button-wrap">
              <button type="submit" disabled={ submitting }>
                Sign In
              </button>

            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signin: ({email, password}) => dispatch(signinUser({ email, password }))
  }
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error
  }
};


Signin = connect(mapStateToProps, mapDispatchToProps)(Signin);

export default reduxForm({
  form: "signin",
  validate,
}, null, mapDispatchToProps)(Signin);