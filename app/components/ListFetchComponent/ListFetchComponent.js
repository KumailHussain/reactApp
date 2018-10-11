import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight} from 'react-native';




export default class ListFetchComponent extends Component{

    static navigationOptions = {
        title: 'Fetching Data from Web',
    };

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds,
        };
    }

    componentDidMount(){
        this.fetchUsers();
    }

    fetchUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    userDataSource: this.state.userDataSource.cloneWithRows(response)
                })
            })
    }




    renderRow(user, sectionId, rowId, highlightRow){
        return(
        <TouchableHighlight onPress={() => this.props.navigation.navigate("Navigationn", {details: user})}>
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}: {user.email}</Text>
            </View>
        </TouchableHighlight>
        );

    }


    render(){
        return(
            <View>
                <Text> Fetching Component </Text>
                <ListView
                    dataSource = {this.state.userDataSource}
                    renderRow = {this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor:"green",
        marginBottom: 3,


    },
    rowText: {
        flex:2
    }
})

AppRegistry.registerComponent('ListFetchComponent', () => ListFetchComponent);
