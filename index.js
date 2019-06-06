/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {
    return (
        <View>
            <Header headerText={'Albums'} />
            <AlbumList/>
        </View>
    );
};

// Render that component
AppRegistry.registerComponent(appName, () => App);
