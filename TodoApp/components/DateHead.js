/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

function DateHead({date}) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formatted = `${year}년 ${month}월 ${day}일`;

    return (
    <>
        <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
        <View style={styles.block}>
            <Text style={styles.dateText}>{formatted}</Text>
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    block: {
        padding: 16,
        backgroundColor: "#26a69a",
    },
    dateText: {
        fontsize: 24,
        color: 'white',
    },
});

export default DateHead;