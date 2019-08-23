import React, {Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


//use capital letters for the global constants
const INGREDIENT_PRICES = {
    salad:0.5,
    meat: 0.4,
    cheese: 0.7,
    bacon: 0.5
};

//class base component to use states
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable:false

    };
    //Handlers
    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
        .map(igkey=>{
            //access the property of key like value 0 for key meat
            return ingredients[igkey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchasable:sum>0});
    }
    addIngredientHandler = (type) => {
        //old ingredient count
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        //update state
        const updatedIngredients = {
            //distribute the properties of old ingredient state to new object
            ...this.state.ingredients
        };
        //updated state object
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newprice = oldPrice + priceAddition;
        this.setState({
            totalPrice:newprice,
            ingredients:updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);

    }
    removeIngredientHandler = (type) => {
        //old ingredient count
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        //update state
        const updatedIngredients = {
            //distribute the properties of old ingredient state to new object
            ...this.state.ingredients
        };
        //updated state object
        updatedIngredients[type] = updatedCount;
        const priceDeduct = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newprice = oldPrice - priceDeduct;
        this.setState({
            totalPrice: newprice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);

    }

    render() {
        // Anable/Disable button
        const disableinfo ={
            ...this.state.ingredients
        };
        //{slad:true, meat:false, ...}
        for(let key in disableinfo){
            disableinfo[key]=disableinfo[key] <=0
        }
        return (
            <Auxi>
                {/*<div>Burger</div>*/}
                <Burger ingredients = {this.state.ingredients}/>
                {/*<div>Build controls</div>*/}
                <BuildControls
                ingredientAdded ={this.addIngredientHandler}
                ingredientremove ={this.removeIngredientHandler}
                disable={disableinfo} 
                purchasable ={this.state.purchasable}
                price={this.state.totalPrice}/>
            </Auxi>
        );
    }
}

export default BurgerBuilder;