import { connect } from 'react-redux';
import App from '@/src/components/app';
import actionTypes from "@/src/components/app/action/actionTypes";
const mapStateToProps = (state:any) => {
    const {app:{auth}}=state
    const {router:{location}}=state
    return {
        auth,
        location
    }
};
function mapDispatchToProps(dispatch:any) {
    return {
        getAuth: () => dispatch({ type: actionTypes.GETAUTH })
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);