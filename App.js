import React, {Component} from 'react';
import {AppRegistry, Text, View, ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Component1 from './app/components/Component1/Component1';
import StyleComponent from "./app/components/StyleComponent/StyleComponent";
import TextComponent from "./app/components/TextComponent/TextComponent";
import ListComponent from "./app/components/ListComponent/ListComponent";
import ListFetchComponent from "./app/components/ListFetchComponent/ListFetchComponent";
import NavigationComponent from "./app/components/NavigationComponent/NavigationComponent";

const Navigation = createStackNavigator({
    Home:{
        screen:Component1,
    },
    Textt:{
        screen:TextComponent,
    },
    Listt:{
        screen:ListComponent,
    },
    ListFetch:{
        screen:ListFetchComponent,
    },
    Navigationn:{
        screen:NavigationComponent,
    },
    Stylee:{
        screen:StyleComponent,
    },
})

export default Navigation;



/**/