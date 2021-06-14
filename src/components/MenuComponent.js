import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';



    function RenderMenuItem({ dish, onClick })
    {
        return(
            <Card onClick={() => onClick(dish.id)}> 
                <CardImg width="100%"  src={dish.image} alt={dish.name} />
                
                <CardImgOverlay body className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }
    const Menu = (props) => {
        // render a list of dishes
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* functional component */}
                    <RenderMenuItem dish={dish} onClick={props.onClick} />                          
                </div>
            );
        });

        return (
            <div class="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;