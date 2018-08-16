
import React from 'react';
import Contribution from './Contribution.js';

import './Products.css';



class ProductDisplay extends React.Component {

    render() {

        return (
            <div className="product-display"></div>
            );

    }
}

class Product extends React.Component {

    constructor (props){
        super(props);
    }

    handleChange (e) {
        this.setState({editText: e.target.value});
    }

    renderAspects(){

        let contribution = new Contribution(this.props.contribution);
        let elementList = contribution.getAspects().reduce(
                (updated, aspect) => {updated.push(
                    <tr key={aspect}>
                        <td><b>{aspect}</b></td>
                        <td>
                            <input
                                value={contribution.getAspectValue(aspect)}
                                onChange={this.handleChange.bind(this)}
                            />
                        </td>
                    </tr>
                );
                return updated;
            },
            []
        );
        return elementList;

    }


    render() {

        var contribution = this.props.contribution;

        return (
            <div className={"product-single"}>
                <table>
                    <tbody>
                        <tr>
                            <td><b>Name</b></td>
                            <td>{this.props.contribution['id']}</td>
                        </tr>
                        {this.renderAspects()}
                    </tbody>

                </table>

                <button className={"product-update-button"}>Update</button>
            </div>

        )
    }

}


class Products extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            contributions: []
        };

    }

    renderProducts(){

        let productElements = this.state.contributions
            .map(contribution =>
                <li key={contribution['id']}>
                    <Product contribution={contribution}/>
                </li>
            );

        return productElements;
    }

    componentDidMount(){
        console.log("Product mounting");

        fetch("/contributions/contributions.json")
            .then(
                results => {
                    return results.json();
                }
            ).then(
                json => {
                    this.setState({contributions: json['contributions']});
                }
            );

    }

    render() {

        console.log("Product rendering");

        return (<div className="products">
                    <div className="product-column product-list-container">
                        <p>My app is running!</p>
                        <div>
                            <ul className={"products-list"}>
                                {this.renderProducts()}
                            </ul>
                        </div>
                    </div>
                    <div className="product-column product-display-container">
                        <p>Display title</p>
                        <ProductDisplay>

                        </ProductDisplay>
                    </div>


                </div>
        );


    };
}


export default Products;
