import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{


    shouldComponentUpdate(nextProps, nextState){

        console.log('[Update Persons.js] inside shouldComponentUpdate', nextProps);
        return true;
    }

    render(){
        return this.props.persons.map((person,index)=>{

            return <Person
                click={()=>this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event)=>this.props.changed(event,person.id)}/>
        });


    }
}

export default Persons;