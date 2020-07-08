import React from 'react';
const MenuContext = React.createContext();
const MenuConsumer = MenuContext.Consumer;
class MenuProvider extends React.Component {
    constructor(props){
        super(props);
        this.setState = this.setState.bind(this);
    }
    state = { 
        menuComponent : <h2>Menu</h2>,
    }

    render() { 
        return (<MenuContext.Provider value={{...this.state,setState: this.setState}}>
            {this.props.children}
        </MenuContext.Provider> );
    }
}
 
export {MenuProvider,MenuConsumer};