import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'

const Change_Password = (props) => {
    const [oldPassword, setoldPassword] = useState('•••••••••••••••••');
    const [newPassword, setnewPassword] = useState('•••••••••••••••••');
    const [newPasswordAgain, setnewPasswordAgain] = useState('•••••••••••••••••');
    const {navigation} = props;
    return (
    <View style={styles.container}>
    {/* Start Header */}
    <View style={styles.groupHeader}>
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Ionicons name="chevron-back" color="#9098B1" size={20} />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Change Password</Text>
        </View>

    </View>
    {/* End Header */}
    <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.textItem}>Old Password</Text>
        <View style={styles.inputHeader} >
            <TextInput style={[styles.input]} onChangeText={setoldPassword} value={oldPassword}/>
            <Feather style={styles.icon} name="lock" color="#9098B1" size={20} />
        </View>

        <Text style={styles.textItem}>New Password</Text>
        <View style={styles.inputHeader} >
            <TextInput style={[styles.input]} onChangeText={setnewPassword} value={newPassword}/>
            <Feather style={styles.icon} name="lock" color="#9098B1" size={20} />
        </View>

        <Text style={styles.textItem}>New Password Again</Text>
        <View style={styles.inputHeader} >
            <TextInput style={[styles.input]} onChangeText={setnewPasswordAgain} value={newPasswordAgain}/>
            <Feather style={styles.icon} name="lock" color="#9098B1" size={20} />
        </View>
    </View>
</View>
  )
}

export default Change_Password

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    groupHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomColor: '#EBF0FF',
        borderBottomWidth: 1
    },
    textHeader: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: '#223263',
        marginStart: 21
    },
    viewFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewFlex_1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textItem: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: '#223263',
        marginBottom: 12,
        marginTop: 16
    },
    textInput: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 21.6,
        color: '#9098B1',
        textAlign: 'left',
    },
    input: {
        width: '100%',
        height: 48,
        paddingHorizontal: 16,
        paddingVertical: 13,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        marginBottom: 0,
        paddingStart: 50,
       
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 18,
    },
    inputHeader: {
        position: 'relative',

    },
    textbottom: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 21.6,
        color: '#40BFFF',
        textAlign: 'left',
        marginTop: 8
    }

})