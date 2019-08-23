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
        <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl =>(
          <BuildControl key={ctrl.ingredientLabel}
           label={ctrl.ingredientLabel} 
        //    type={ctrl.type}
                added={()=>props.ingredientAdded(ctrl.type)}
                remove={() => props.ingredientremove(ctrl.type)}
                disable={props.disable[ctrl.type]}/>
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>

    </div>

);




export default buildControls;