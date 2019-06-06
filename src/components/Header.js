import React from 'react';
import { Text, View } from 'react-native';


// Build the component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        paddingBottom: 15,


        shadowColor: '#000000', // iOS
        shadowOffset: { width: 0, height: 2 }, // iOS
        shadowOpacity: 0.2 // iOS
    },
    textStyle: {
        fontSize: 20
    },
};

// Export the component to make it available to other parts of the app
export default Header;
