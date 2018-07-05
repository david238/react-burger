import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends Component {

    state = {
        ingredients: null,
        totalPrice: 0
    }

    // Has been Changed to Willmount as ingredients is now set to Null on initialisation. 
    // and null pass on didmount causes an error 
    componentWillMount() {
        console.log('location search values are', this.props.location.search);
        const query = new URLSearchParams(this.props.location.search);
        console.log('query is', query.entries());
        const ingred = {};
        let price = 0;
        for (let param of query.entries()) {
            // ['salad', '1']
            if (param[0] === 'price')
            {
                price = param[1];
            }else{
                ingred[param[0]] = +param[1];                
            }
        }
        console.log('asd', ingred);
        this.setState({ingredients: ingred, totalPrice: price});
    }

    CheckoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    CheckoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    render() {
        return (
            <div>

                <CheckoutSummary 
                ingredients={this.state.ingredients} 
                CheckoutCancelled={this.CheckoutCancelledHandler}
                CheckoutContinued={this.CheckoutContinuedHandler}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props) => (
                        <ContactData 
                            ingredients={this.state.ingredients} 
                            price={this.state.totalPrice}
                            {...props}
                        />
                      )}  
                /> 
                {/* USING THIS METHOD ROUTE, you do not pass props.history, 
                you can use two methods, either pass props in param render, 
                or use export default withRouter(ContactData.js)*/}
            </div>
        );     
    }
}

export default Checkout;