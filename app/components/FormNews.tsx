import React from 'react';
import { StyleSheet, View, Text} from "react-native";

import {ThemedText} from "@/app/components/ThemedText";
import {NewsBanner} from "@/app/components/NewsBannerView";
import {darkTheme} from "../../colors/colors";

const { primary, secondary, accentLight, accentContrast, white } = darkTheme;

// OPTIMIZE: Переписать функцию, чтобы передавать текст, а не писать вручную 
/* export function Form(date: string, time: string, title: string, def: string, imgSrc: string){  <-- Переделать в пропсы
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <ThemedText type='title'>{date}</ThemedText>  <-- Сделать нормальную подстановку
                <ThemedText type='default'>{time}</ThemedText>   <-- Сделать нормальную подстановку
            </View>
        </View>
    );
}*/
// TODO: - Реализовать шапку с датой и временем Как в примере ниже 
/* <View styles={{justifyContent: "SpaceBetween"}}>
     <ThemedText type='date'>14 Января</ThemedText>
     <ThemedText type='date'>11:00</ThemedText>    
  </View>*/
// TODO: - Перенести полный шаблон блока новостей
/**
 * заголовок  <!-- DONE -->
 * описание   <!-- DONE -->
 * ссылка с баннером -> отдельный компонент -> NewsBannerView
 */

//TODO: - Компонент NewsBannerView имеет следующий прототип
/**
 * <View>
 *   <Image></Image>
 *   <ThemedText>Читать далее</ThemedText>
 * </View>
 * 
 */

export function Form(){
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={[styles.formHeader, {marginBottom: 10}]}>
                    <ThemedText type='newsCardDate'>19 Февраля</ThemedText>
                    <ThemedText type='newsCardDate'>11:00</ThemedText>
                </View>
                <ThemedText type='newsCardTitle'>Новая работа о "X" работодателя</ThemedText>
                <ThemedText type="newsCardDefinition">На нашей площадке появился новый работодатель. Надеемся что наше сотрудничество продлится как можно дольше. В этой статье вы узнаете. . . </ThemedText>
                <NewsBanner></NewsBanner>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    form: {
        width: 390,
        height: 250,
        padding: 14,
        borderRadius: 20,
        backgroundColor: primary,
        gap: 4,
    }
});
