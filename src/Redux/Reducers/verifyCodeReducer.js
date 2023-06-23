export const verifyCodeReducer=(state='' , action)=>{
    switch(action.type){
        case 'VERIFY_CODE' : return action.payload
        default : return state
    }

}