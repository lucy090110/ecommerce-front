import { connect } from 'react-redux';
import Signin from '@/src/components/app/signin';
import signinActionTypes from '@/src/components/app/signin/action/actionTypes'
const {SIGNIN}=signinActionTypes
const mapStateToProps = (state:any) => {
      return {state}
};
function mapDispatchToProps(dispatch:any) {
    return {
        signinAction: (param:any) => dispatch({ type: SIGNIN,payload:param })
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);