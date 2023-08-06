import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SelectDropdown from 'react-native-select-dropdown'

const gender = ["Male", "Female", "Other",]
const countries = [
    "Male", "Female", "Other",
    
];


const Gender = (props) => {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            {/* Start Header */}
            <View style={styles.groupHeader}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back" color="#9098B1" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Gender</Text>
                </View>

            </View>
            {/* End Header */}
            <View style={{ padding: 16 }}>
                <Text style={styles.textItem}>Choose Gender</Text>
                <SelectDropdown
                    data={gender}
                    // defaultValueByIndex={1}
                    // defaultValue={'Egypt'}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                    }}
                    defaultButtonText={'Select Gender'}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item;
                    }}
                    buttonStyle={{width: '100%',borderRadius: 5, borderWidth: 1, borderColor: '#EBF0FF', backgroundColor: '#ffffff'}} 
                    buttonTextStyle= {{textAlign: 'center'}}
                    renderDropdownIcon={isOpened => {
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                    selectedRowStyle={styles.dropdown1SelectedRowStyle}
                    search
                    searchInputStyle={styles.dropdown1searchInputStyleStyle}
                    searchPlaceHolder={'Search here'}
                    searchPlaceHolderColor={'darkgrey'}
                    renderSearchInputLeftIcon={() => {
                        return <FontAwesome name={'search'} color={'#444'} size={18} />;
                    }}
                />
                
                

            </View>

            <TouchableOpacity style={styles.buttonSave}>
                <Text style={styles.textButtonSave}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Gender

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
        marginBottom: 12
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
        marginBottom: 24
    },
    select: {
        width: '100%',
        height: 48,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#EBF0FF',
        borderRadius: 5,

    },
    buttonSave: {
        position: 'absolute',
        bottom: 10,
        right: 16,
        left: 16,
        height: 57,
        backgroundColor: '#40BFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 16,
    },
    textButtonSave: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 25.2,
        color: "#ffffff",
    },



    

})