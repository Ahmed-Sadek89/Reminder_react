import { add_reminder_type , remove_reminder_type , clearall_reminder_type } from '../type';

export const add_reminder_fn = (text ,date)=>{
    const action =  {
        type : add_reminder_type,
        text,
        date
    }
    console.log('add',action)
    return action;
}

export const remove_reminder_fn = (id)=>{
    const action = {
        type : remove_reminder_type ,
        id
    }
    console.log('remove',action);
    return action;
}

export const clearall_reminder_fn = ()=>{
    const action = {
        type : clearall_reminder_type ,
    }
    console.log('clear',action);
    return action;
}


