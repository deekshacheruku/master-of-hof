import React, { Component } from 'react';

class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
    // display all items
    renderItems = () => {
        //Display all items
        // const data = this.state.userData;
        // const mapRows = data.map((item) => (
        //     <React.Fragment key={item.id}>
        //         <li className="list-elements">
        //             {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and 
        //             update HTML tree  */}
        //             <span>Id: {item.id}</span>
        //             <span>Name : {item.name}</span>
        //             <span>User Type: {item.user_type}</span>
        //         </li>
        //     </React.Fragment>
        //     ));
        // return mapRows;

        //display specific usertype data
        // const data1 = this.state.userData;
        // const data = data1.filter(items => items.user_type == 'Designer')
        // const mapRows = data.map((item)=>(
        //     <React.Fragment key = {item.id}>
        //         <li className="list-elements">
        //             <span>Id: {item.id}</span>
        //             <span>Name:{item.name}</span>
        //             <span>User Type: {item.user_type}</span>
        //         </li>
        //     </React.Fragment>
        // ));
        // return mapRows;

        //display names startswith J
        // const data1 = this.state.userData;
        // const data = data1.filter(items => items.name.startsWith('J'))
        // const mapRows = data.map((item)=>(
        //     <React.Fragment key = {item.id}>
        //         <li className="list-elements">
        //             <span>Id: {item.id}</span>
        //             <span>Name:{item.name}</span>
        //             <span>User Type: {item.user_type}</span>
        //         </li>
        //     </React.Fragment>
        // ));
        // return mapRows;

        //display age greater than 28 and less than equal to 50
        // const data1 = this.state.userData;
        // const data = data1.filter(items => items.age > 28 && items.age <= 50)
        // const mapRows = data.map((item)=>(
        //     <React.Fragment key = {item.id}>
        //         <li className="list-elements">
        //             <span>Id: {item.id}</span>
        //             <span>Name:{item.name}</span>
        //             <span>User Type: {item.user_type}</span>
        //         </li>
        //     </React.Fragment>
        // ));
        // return mapRows;

        //Display total experience of designers
        let total =0;
        const data1 = this.state.userData;
        const data = data1.filter(items => items.user_type == 'Designer')
        const mapRows = data.map((item)=>(
                total = total + item.years
        ));
        return total;
    };

    render() {
        return (
          <div>
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>
          </div>
        )
    }
}

export default HigherOrderComponent;