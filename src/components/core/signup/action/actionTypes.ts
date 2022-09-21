
export const SIGNUP='SIGNUP'
export const SIGNUP_SUCCESS='SIGNUP_SUCCESS'
export const SIGNUP_FAIL='SIGNUP_FAIL'
export interface SignupPayload{
    email:string
    name:string
    password:string

}
export interface SignupAction{
    payload: SignupPayload
}
export interface SignupSuccessAction{
}
export interface SignupFailAction{
    message:string
}