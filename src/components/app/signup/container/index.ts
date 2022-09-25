import { connect } from 'react-redux';
import Signup from '../index';
import actionTypes from '../action/actionTypes'
const {SIGNUP,SIGNUP_RESET}=actionTypes
const mapStateToProps = (state:any) => {
      return {state}
};
function mapDispatchToProps(dispatch:any) {
    return {
        signupAction: (param) => dispatch({ type: SIGNUP,payload:param }),
        signupResetAction:()=>dispatch({type:SIGNUP_RESET})
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);