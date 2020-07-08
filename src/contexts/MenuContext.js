import React from 'react';
const MenuContext = React.createContext();
const MenuConsumer = MenuContext.Consumer;
class MenuProvider extends React.Component {
    state = { 
        menuComponent : <h2>Menu</h2>
     }
    render() { 
        return (<MenuContext.Provider value={{...this.state}}>
            {this.props.children}
        </MenuContext.Provider> );
    }
}
 
export {MenuProvider,MenuConsumer};