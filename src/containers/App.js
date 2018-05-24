import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/WithClass';

class App extends Component {

	constructor(props){
		super(props);
		console.log('[App.js]Inside constructor',props);

	}



	state={
		persons:[
			
			{id:'1',name:'max',age:24 },
			{id:'2',name:'manu',age:29 },
			{id:'3',name:'miek',age:20 }
			
		],
		showPersons:false
	}
	

	
	nameChangeHandler=(event,id)=>{
		const personIndex=this.state.persons.findIndex(p=>{

			return p.id===id;
		});

		const person={...this.state.persons[personIndex]};


		person.name=event.target.value;


		const persons=[...this.state.persons];

		persons[personIndex]=person;

		this.setState({persons: persons})
		
	}

	deletePersonHandler=(personIndex)=> {
		// const persons=this.state.persons.slice();
		const persons=[...this.state.persons];
		persons.splice(personIndex,1);
		this.setState({persons:persons});


	}

    togglePersonsHandler=()=>{

		const doesShow= this.state.showPersons;

		this.setState({showPersons:!doesShow});

	}

	shouldComponentUpdate(nextProps, nextState){

		console.log('[Update App.js] inside shouldComponentUpdate', nextProps);
		return true;
	}
  render() {
	  


	let persons=null;

	if (this.state.showPersons){

        persons=
				<Persons

					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangeHandler}

				/>;




	}


	
    return (






      <Aux>
				<button onClick={()=>this.setState({showPersons:true})}>Show Person</button>


				<Cockpit
					appTitle={this.props.title}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}/>
				{persons}

      </Aux>

     
    );
  }
}

export default withClass(App, classes.App);
