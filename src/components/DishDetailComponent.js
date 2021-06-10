import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {
    render() {
        const {dish} = this.props;
        return (
            <div className="row">
                {this.renderDish(dish)}
            </div>
        );
    }

    renderDish = (dish) => 
    {
        if (dish != null)
        {
            return (
                <div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%"  src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }
        else
        {
            return (
                <div></div>                                     // render nothing
            )
        }  
    }  

    renderComments = (comments) => 
    {
        if (comments != null) {
            const comm = comments.map(c => 
            {
                return (
                    <ul className="list-unstyled">
                        <li>{c.comment}</li>
                        <br/>
                        <li>-- {c.author} , {(new Date(c.date)).toLocaleDateString("en-US",{year: 'numeric', month: 'short', day: 'numeric' })}</li>
                        <br/>
                    </ul>
                )
            });
            return (
                <ul className="list-unstyled">
                    {comm}
                </ul>
            )
        }
        else {
            return (
                <div></div>                                     // render nothing
            )
        }
    }
}

export default DishDetail;