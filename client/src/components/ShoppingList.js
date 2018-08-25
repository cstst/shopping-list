import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import uuid from 'uuid';

export default class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Eggs' },
            { id: uuid(), name: 'Milk' },
            { id: uuid(), name: 'Steak' },
            { id: uuid(), name: 'Water' },
        ]
    }

    render() {
        const { items } = this.state;
        return(
            <Container>
                <Button 
                    color="dark"
                    style={{marginBottom: "2rem"}}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if (name) {
                            this.setState({
                                items: [...items, { id: uuid(), name }]
                            });
                        }
                    }}
                >Add Item</Button>
                
            </Container>
        )
    }
}
