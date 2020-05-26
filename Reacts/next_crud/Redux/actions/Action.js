import  {ACTION_TYPES} from './actionType'

export const getEmployee=()=>{
    return dispatch=> {

        return dispatch({
        type:ACTION_TYPES.GET_EMPLOYEE,
        
        })
    }
};

export const addEmployee=(data)=>{  
    return dispatch => {  
        return dispatch({  
            type: ACTION_TYPES.ADD_EMPLOYEE,  
            payload: data  
        });  
    }  
};

export const editEmployee=(data)=> {  
    return dispatch => {  
        return dispatch({  
            type: ACTION_TYPES.EDIT_EMPLOYEE,  
            payload: data  
        });  
    }  
};  

  
export const deleteEmployee=(employeeId)=> {  
    return dispatch => {  
        return dispatch({  
            type: ACTION_TYPES.DELETE_EMPLOYEE,  
            payload: employeeId  
        });  
    }  
}; 