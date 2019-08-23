import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {ingredientLabel:'Salad', type:'salad'},
    {ingredientLabel:'Bacon', type:'bacon'},
    {ingredientLabel:'Cheese', type:'cheese'},
    {ingredientLabel:'Meat', type:'meat'},
];

const buildControls=(props)=>(
    <div className={classes.BuildControls}>
        {controls.map(ctrl =>(
          <BuildControl key={ctrl.ingredientLabel}
           label={ctrl.ingredientLabel} 
        //    type={ctrl.type}
                added={()=>props.ingredientAdded(ctrl.type)}
                remove={() => props.ingredientremove(ctrl.type)}
                disable={props.disable[ctrl.type]}/>
        ))}

    </div>

);




export default buildControls;