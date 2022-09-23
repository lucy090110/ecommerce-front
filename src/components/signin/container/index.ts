import { connect } from 'react-redux';
import Signin from '@/src/components/core/signin';
import actionTypes from '@/src/components/core/signin/action/actionTypes'
const {SIGNIN,SIGNIN_RESET}=actionTypes
const mapStateToProps = (state:any) => {
      return {state}
};
function mapDispatchToProps(dispatch:any) {
    return {
        signinAction: (param) => dispatch({ type: SIGNIN,payload:param })
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);