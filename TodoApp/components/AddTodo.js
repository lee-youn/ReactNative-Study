/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Image,TouchableNativeFeedback,Keyboard,} from 'react-native';

function AddTodo() {
    const [text, setText] = useState('');

    const onPress = () => {
        setText('');
        Keyboard.dismiss();
    };

    return(
        <View style={styles.block}>
            <TextInput
            placeholder="할일을 입력하세요."
            style={styles.input}
            value={text}
            onChangeText={setText}
            onSubmitEditing={onPress}
            returnKeyType="done"
            />
            <View style={styles.circleWrapper}>
                <TouchableNativeFeedback onPress={onPress}>
                    <View style={styles.buttonStyle}>
                        <Image source={require('../assets/assets/icons/add_white/add_white.png')} />
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 64,
        paddingHorizontal: 16,
        borderColor: '#bdbdbd',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        backgroundColor: "#26a69a",
        borderRadius: 24,
    },
    circleWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        overflow: 'hidden',
        borderRadius: 24,
    },
});

export default AddTodo;