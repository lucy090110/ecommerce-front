import { connect } from 'react-redux';
import Signup from '../index';
import {SIGNUP} from '../action/actionTypes'
const mapStateToProps = (state:any) => {
      return {}
};
function mapDispatchToProps(dispatch:any) {
    return {
        signup: (param) => dispatch({ type: SIGNUP,payload:param })
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);