export const isAuth=()=>{
    const auth=null
    if(auth){
       return JSON.parse(<string>localStorage.getItem('auth'))
    }
    return false
}