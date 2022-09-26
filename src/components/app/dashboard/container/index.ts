import { connect } from 'react-redux';
import Dashboard from '@/src/components/app/dashboard';
import actionTypes from '@/src/components/app/dashboard/action/actionTypes'
const {GET_CATEGORY}=actionTypes
const mapStateToProps = (state:any) => {
      return {state}
};
function mapDispatchToProps(dispatch:any) {
    return {
        getCategory: () => dispatch({ type: GET_CATEGORY })
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);