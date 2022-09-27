import { connect } from 'react-redux';
import Home from '@/src/components/app/home';
import actionTypes from '@/src/components/app/home/action/actionTypes'
import dashboardActionTypes from '@/src/components/app/dashboard/action/actionTypes'
const {GET_PRODUCTIONS,GET_PHOTOS}=actionTypes
const {GET_CATEGORY}=dashboardActionTypes
const mapStateToProps = (state:any) => {
      const{home,dashboard:{data}}=state
      return {
         home:home,
         category:data
      }
};
function mapDispatchToProps(dispatch:any) {
    return {
        getProductions: (param) => dispatch({ type: GET_PRODUCTIONS,payload:param }),
        getCategory: () => dispatch({ type: GET_CATEGORY }),
        getPhotos:(param)=>dispatch({type:GET_PHOTOS,payload:param})
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);