import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LogoArea from "./Home";
import SvgUri from "react-native-svg-uri";

export default class About extends Component {
   
    render() {
        return (
            <View style={styles.className}>
                <Text>About</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        paddingLeft:20,
        paddingTop:20
    }
});
