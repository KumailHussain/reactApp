import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet} from 'react-native';

const users = [
    {name: 'Kumail Hussain'},
    {name: 'Virk'},
    {name: 'Abuzar'},
    {name: 'Osama'}
]

export default class ListComponent extends Component{
    static navigationOptions = {
        title: 'Display List Example',
    };

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds.cloneWithRows(users),
        };
    }

    renderRow(user, sectionId, rowId, highlightRow){
            return(
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}</Text>
            </View>
            );

        }


    render(){
        return(
            <ListView
                dataSource = {this.state.userDataSource}
                renderRow = {this.renderRow.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor:"blue",
        marginBottom: 3

    },
    rowText: {
        flex:1
    }
})

AppRegistry.registerComponent('ListComponent', () => ListComponent);