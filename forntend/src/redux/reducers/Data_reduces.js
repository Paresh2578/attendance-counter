import { formetTime } from "../../util/FormentTime"

const reducer = (state = [] , action)=>{
    if(action.type == 'ADD'){
        let data = {...action.payload}
        return [...state , data]

    }else if(action.type == 'REMOVE'){
        state = state.filter(data => data._id != action.payload)
        return state;

    }else if(action.type == 'UPDATE'){
        state[action.payload.index] = action.payload.newData;
         let data = action.payload.newData;
         const updatedArray = [];
         state.map((item)=>{
             if(item._id === data._id){
                item.semester = data.semester;
                item.subject = data.subject;
                item.className = data.className;
                item.date = data.date;
                item.time = formetTime(new Date());
                item.topic = data.topic;

                if(!Array.isArray(data.absentNum)){
                    item.absentNum = data.absentNum.split(',');
                }

                if(!Array.isArray(data.presentNum)){
                    item.presentNum = data.presentNum.split(',');
                }
             }
             updatedArray.push(item);
         })
        return updatedArray;
    }
    else{
        return state;
    }
}

export default reducer