// import logo from './logo.svg';

import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';


class Main extends Component {
    constructor(props) 
    {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    // change state
    onDishSelect = (dishId) => {
        this.setState({ selectedDish: dishId });                                                                    // ony track dishId not the whole dish
    }

    render() 
    {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} 
                    onClick={(dishId) => this.onDishSelect(dishId)}/>                                                      {/*  pass */}
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>            {/* filter operates on each dish in the array and select first item(the only item)*/}            
                <Footer />
            </div>
        );
    }  
}

export default Main;
