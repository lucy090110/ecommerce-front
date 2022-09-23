export const isAuth=()=>{
    const auth=JSON.parse(localStorage.getItem('auth'))
    if(auth){
       return auth
    }
    return false
}