import React, { Component } from "react";
import { connect } from "react-redux";
import { signoutUser } from "../../actions/authActions";

class Signout extends Component {

  componentWillMount(){
    this.props.signout();
    this.props.history.push("/");
  }

  render() {
    return(
      <div>
        Sorry to see you go...
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    signout: () => dispatch(signoutUser())
  }
};
export default connect(null, mapDispatchToProps)(Signout);