import React from 'react';
import {MenuProvider} from './MenuContext.js';

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;
class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorComponent:<h2>Editor</h2> }
    }
    render() { 
        return <AppContext.Provider value={{...this.state}}>
            <MenuProvider>
                {this.props.children}
            </MenuProvider>
        </AppContext.Provider>;
    }
}
 
export {AppProvider,AppConsumer};