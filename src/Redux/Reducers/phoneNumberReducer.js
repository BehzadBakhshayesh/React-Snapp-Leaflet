export const phoneNumberReducer=(state='' , action)=>{
    switch(action.type){
        case 'PHONE_NUMBER' : return action.payload
        default : return state
    }

}