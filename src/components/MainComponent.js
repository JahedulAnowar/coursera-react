// import logo from './logo.svg';

import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';

import { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

// map Redux store's state into props that become available to the component

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions,
    };
};

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promo={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dish={
                        this.props.dishes.filter(
                            (dish) => dish.id === parseInt(match.params.dishId, 10)
                        )[0]
                    }
                    comments={this.props.comments.filter(
                        (comment) => comment.dishId === parseInt(match.params.dishId, 10)
                    )}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route
                        exact
                        path="/aboutus"
                        component={() => <About leaders={this.props.leaders} />}
                    />
                    <Route
                        exact
                        path="/menu"
                        component={() => <Menu dishes={this.props.dishes} />}
                    />
                    <Route exact path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

// 
export default withRouter(connect(mapStateToProps)(Main));
