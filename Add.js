import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {datasource} from './Data';

const Add = ({navigation}) => {
    // States
    const [text, setText] = useState('');
    const [type, setType] = useState('Vowels');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Add Letter:</Text>
            <TextInput
                style={styles.input}
                maxLength={1}
                onChangeText={(text) => setText(text)}
            />
            <RNPickerSelect
                onValueChange={(value) => setType(value)}
                items={[
                    { label: 'Vowels', value: 'Vowels' },
                    { label: 'Consonants', value: 'Consonants' },
                ]}
            />

            <Button title="Submit" onPress={()=>{
                let item = {key:text}
                let indexnum = 1;
                if(type === "Vowels") {
                    indexnum = 0;
                }
                datasource[indexnum].data.push(item);
                navigation.navigate("Home")
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
    },
});

export default Add;
