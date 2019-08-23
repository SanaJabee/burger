import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

//this is like a wrapper around the ingredients
const burger = (props)=>{
    let transforming = Object.keys(props.ingredients)
        .map(igkey =>{
            // console.log(igkey);
            // console.log(props.ingredients['cheese']);
            // console.log([...Array(props.ingredients[igkey])]);
           return [...Array(props.ingredients[igkey])].map((_,i) =>{
               //key={igkey+i} to avoid warning for each element with unique key
              return <BurgerIngredient key={igkey+i} type={igkey}/>;
           });
        }).reduce((arr,el)=>{
            // arr is previous value and el is the current value of the given array
            return arr.concat(el);
        },[]);
    console.log(transforming);
    if(transforming.length === 0){
        transforming = <p>Please start adding ingredients</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transforming}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;