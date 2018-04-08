import React, { Component } from 'react';
import {
    Text,
    View,
    Platform,
} from 'react-native';
import { Container, Header, Title, Content, Button, Input, CardItem, Card, Item, Icon, Body, Left, Right } from 'native-base';
import request from 'request';
const parseString = require('react-native-xml2js').parseString;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
        // this.fetchData = this.fetchData();
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        request('http://pulse.zerodha.com/feed.php', (error, response, body) => {
            parseString(body, (err, result) => {
                console.log(result, 'Response Here');
                console.log(result.channel, ' channel Response Here');
            });
        });
    }

    render() {
        return (
            <Container>
                <Header><Left>
                    <Icon name="ios-person" />
                </Left>
                    <Body style={{ flex: 3 }}><Title style={{ paddingTop: (Platform.OS === 'ios') ? 5 : 0 }}>
                        Pulse by Zerodha </Title></Body> <Right />
                </Header>
                <Content />
            </Container>
        );
    }
}
