import React , {Component} from 'react';
import {connect} from 'react-redux';
import { add_reminder_fn , remove_reminder_fn , clearall_reminder_fn } from '../action/index';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from './reminder.png'

class App extends Component{

    state = {
        text:'',
        date: new Date()
    }

    mapAllReminders = ()=>{
        const {reminder_state} = this.props;
        console.log(this.props);
        return (
            <ul className='list-group'>
                {
                  reminder_state.map(reducer =>{
                      return(
                          <li className='list-group-item' key={reducer.id}>
                              <div>{reducer.text}</div>
                              <div>{moment(new Date(reducer.date)).fromNow()}</div>
                              <button className='btn btn-danger closeIcon' onClick={()=> this.props.remove_reminder_fn(reducer.id)}>X</button>
                          </li>
                      )
                  })  
                }
            </ul>
        )
    }

    render(){
        //console.log(this.props.reminder_state)
        return(
            
            <div className='App'>
                <img src={logo} alt=''/>
                <div className='reminder-title'>
                    <h2>what shoud u do ?</h2>
                </div>
                <input
                     type='text'
                      placeholder='what would you think ..?' 
                      className='form-control'
                      onChange={(e) =>{this.setState({text:e.target.value})} } 
                      value={this.state.text}
                    
                />
                
                <DatePicker
                    className='form-control' 
                    value={this.state.date}
                    selected={this.state.date}
                    onChange={(date) => {this.setState({date})}}
                    showTimeSelect
                    timeFormat='HH : mm'
                    dateFormat='MMMM d, yyyy h:mm aa'
                    timeCaption='time'
                    placeholderText='enter date'
                />
                <div className="d-grid">
                    <button
                        type='submit'
                        className="btn btn-primary" 
                        onClick={ () => {
                                         this.props.add_reminder_fn( this.state.text , this.state.date );
                                         this.setState({text:'',date:''})
                                         } 
                                }  
                        >
                        Add reminder
                    </button>
                    {
                        this.mapAllReminders()
                    }
                    <button 
                        className="btn btn-danger" 
                        type="button"
                        onClick={ this.props.clearall_reminder_fn }
                        >
                        clear reminder
                    </button>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        reminder_state:state
    }
}

export default connect( mapStateToProps ,{ add_reminder_fn , remove_reminder_fn , clearall_reminder_fn } )(App);