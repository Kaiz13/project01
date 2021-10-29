import React, {Component} from 'react';
import { Image, View, StyleSheet } from 'react-native';

import { gambar } from '../../assets';

export default class Splash extends Component{

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.replace('Home')
        }, 3000)
    }
    render(){
        return(
            <View style={styles.logo}>
                <Image source={gambar}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})