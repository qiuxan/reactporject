import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit=(props)=>{

    const asignedClasses=[];
    let btnClass=classes.Button;
    if(props.showPersons){
        btnClass=[classes.Red, classes.Button].join(' ');
    }


    if(props.persons.length<=2){

        asignedClasses.push(classes.red);
    }

    if(props.persons.length<=1){

        asignedClasses.push(classes.bold);
    }

    return(

        <Aux>
            <div className={classes.Cockpit}>
                <h1>{props.appTitle}</h1>
                <p className={asignedClasses.join(' ')}>It is ready to work</p>
                <button

                    className={btnClass}


                    onClick={props.clicked}

                >Switch name</button>
            </div>


        </Aux>);

};


export default cockpit;
// const cockpit=(props)=>{
//

//
// };
//
// export default cockpit;