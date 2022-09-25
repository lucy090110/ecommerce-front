import { connect } from 'react-redux';
import Signin from '@/src/components/app/signin';
import signinActionTypes from '@/src/components/app/signin/action/actionTypes'
import appActionTypes from "@/src/components/app/action/actionTypes";
const {SIGNIN,SIGNIN_RESET}=signinActionTypes
const {GETAUTH}=appActionTypes
const mapStateToProps = (state:any) => {
      return {state}
};
function mapDispatchToProps(dispatch:any) {
    return {
        signinAction: (param:any) => dispatch({ type: SIGNIN,payload:param }),
        getAuth: () => dispatch({ type: GETAUTH })
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);