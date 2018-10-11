import React, {Component} from 'react';
import {AppRegistry, Text, View, Button, StyleSheet} from 'react-native';


export default class Component1 extends Component{
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props){
        super(props);
        this.state = {
            name:'Osama',
            showName: true,
            message: this.props.message
        }
    }

    static defaultProps = {message: 'Default Prop'}

    render(){
        let name = this.state.showName ? this.state.name : 'No name';
        return(
            <View style={styles.container}>
                <Text>{this.props.message}</Text>
                <Text>{name}</Text>
                <Button title="Go to Style Component" style={styles.Button1} onPress={() => this.props.navigation.navigate("Stylee")}/>
                <Button title="Go to Text Component" style={styles.Button1} onPress={() => this.props.navigation.navigate("Textt")}/>
                <Button title="Go to List Component" style={styles.Button1} onPress={() => this.props.navigation.navigate("Listt")}/>
                <Button title="Go to ListFetch Component" style={styles.Button1} onPress={() => this.props.navigation.navigate("ListFetch")}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{flex: 0.3, flexDirection:'column', justifyContent: 'space-between'},
    Button1: { backgroundColor:'blue'},



});

AppRegistry.registerComponent('Component1', () => Component1);
