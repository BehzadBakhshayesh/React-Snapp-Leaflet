export const verifyCodeAction =(data)=>{
    return{
        type: 'VERIFY_CODE',
        payload: data
    }
}