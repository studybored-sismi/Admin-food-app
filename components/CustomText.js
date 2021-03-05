import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { connect } from 'react-redux';


class CustomText extends Component {
    render() {
        return (
            
            <Text style={{ fontSize: this.props.fontSize,margin:1,color:"#696969",
             fontFamily:"OpenSansRegular"}}>{this.props.children}</Text>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fontSize: state
    }
}

export default connect(mapStateToProps)(CustomText);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});