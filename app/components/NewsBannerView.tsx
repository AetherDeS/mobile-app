import React from 'react';
import { StyleSheet, View, Button, Text, Image } from 'react-native';
import { ThemedText } from './ThemedText';
import { darkTheme } from "../../colors/colors";
const { primary, secondary, accentLight, accentContrast, white } = darkTheme;

export function NewsBanner() {
    return (
        <View style={style.container}>
            <Image
                style={style.banner}
                source={require("@/assets/images/NewsBannerImage1.png")}
                resizeMode='cover'
                blurRadius={1}
            />
            <ThemedText type='newsCardLink'>Читать больше</ThemedText>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        width: 362,
        height: 100,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: accentLight,

        justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        position: 'absolute',
        width:'100%',
        height: 96,
        borderRadius: 20,
    }
});