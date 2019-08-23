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

    };
    //Handlers
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

    }
    removeIngredientHandler = (type) => {

    }

    render() {
        return (
            <Auxi>
                {/*<div>Burger</div>*/}
                <Burger ingredients = {this.state.ingredients}/>
                {/*<div>Build controls</div>*/}
                <BuildControls />
            </Auxi>
        );
    }
}

export default BurgerBuilder;