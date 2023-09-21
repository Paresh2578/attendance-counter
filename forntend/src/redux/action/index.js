export const Add_data = (data)=>{
    return(dispatch)=>{
        dispatch({type : 'ADD' , payload : data})
    }
}

export const Remove_data = (id)=>{
    return(dispatch)=>{
        dispatch({type : 'REMOVE' , payload : id})
    }
}
export const Update_data = (index , newData)=>{
    return(dispatch)=>{
        dispatch({type : 'UPDATE' , payload : {index ,newData}})
    }
}