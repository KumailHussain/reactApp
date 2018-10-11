import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';


export default class NavigationComponent extends Component{
    static navigationOptions = {
        title: 'Details of fetched Data',
    };

    render(){
        const {navigation} = this.props;
        const user = navigation.getParam('details', 'Default details');
        return(
            <View>
                <Text> Navigation Component showing the details of the users</Text>
                <Text>Name: {user.name}</Text>
                <Text>User Name: {user.username}</Text>
                <Text>Email: {user.email}</Text>
                <Text>Address: {JSON.stringify(user.address)}</Text>
                <Text>Phone: {user.phone}</Text>
                <Text>Website: {user.website}</Text>
                <Text>Company: {JSON.stringify(user.company)}</Text>

            </View>
        );
    }
}

AppRegistry.registerComponent('NavigationComponent', () => NavigationComponent);
