import React, { Component } from "react";
import { Provider } from "react-redux";
import { StyleProvider } from "native-base";
import App from "../AppNavigator";
import configureStore from "./configureStore";

export default class Setup extends Component {
    state: {
        store: Object,
        isLoading: boolean
    };
    constructor() {
        super();
        this.state = {
            isLoading: false,
            store: configureStore(() => this.setState({ isLoading: false }))
        };
    }
    render() {
        return (
                <App />
    
        );
    }
}
