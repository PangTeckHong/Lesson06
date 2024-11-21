import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {datasource} from './Data';

const Edit = ({navigation, route}) => {
    const [text, setText] = useState(route.params.key);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Letter:</Text>
            <TextInput
                value={text}
                style={styles.input}
                maxLength={1}
                onChangeText={(text) => setText(text)}
            />

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Save"
                            onPress={() => {
                                let indexnum = 1
                                if (route.params.type==="Vowels") {
                                    indexnum = 0;
                                }
                                datasource[indexnum].data[route.params.index].key = text;
                                navigation.navigate("Home");
                            }}/>
                </View>
                <View style={styles.button}>
                    <Button title="Delete"
                            onPress={()=> {
                                let indexnum = 1
                                if (route.params.type==="Vowels") {
                                    indexnum = 0;
                                }
                                Alert.alert("Are you sure?", '',
                                    [{text:'Yes', onPress:()=>{
                                            datasource[indexnum].data.splice(route.params.index,1);
                                            navigation.navigate("Home")
                                        }},
                                        {text:'No'}
                                    ])
                            }}
                    />
                </View>
            </View>
        </View>
    )
}

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
        marginBottom: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        margin: 10,
    },
});


export default Edit;
