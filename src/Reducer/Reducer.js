import { add_reminder_type , remove_reminder_type , clearall_reminder_type } from '../type';
import { bake_cookie , read_cookie } from 'sfcookies';
let reminders = null;

const Reducer = ( state = [] , action ) => {
    state = read_cookie('reminders');
    if( action.type === add_reminder_type )
    {
        reminders = [ ...state, { type:action.type , text:action.text , date:action.date , id:Math.random() }]
        bake_cookie( 'reminders',reminders );
        console.log( 'reminders',reminders );
        return reminders;
    }
    else if( action.type === remove_reminder_type )
    {
        reminders = state.filter( reminder => reminder.id !== action.id );
        console.log( 'reminder',reminders );
        bake_cookie( 'reminders',reminders );
        return reminders;
    }
    else if( action.type === clearall_reminder_type )
    {
        reminders = [];
        console.log( 'reminder',reminders );
        bake_cookie( 'reminders',reminders );
        return reminders;
    }
    else
    {
        return state
    }
}


export default Reducer;