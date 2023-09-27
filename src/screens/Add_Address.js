import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, Button, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Add_Address = (props) => {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            {/* Start Header */}
            <View style={styles.groupHeader}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back" color="#9098B1" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Add Address</Text>
                </View>

            </View>
            {/* End Header */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>
                    {/* Item 1 */}
                    <Text style={styles.textItem}>Country or region</Text>
                    <TextInput style={styles.input} placeholder='United States' />
                    {/* Item 2 */}
                    <Text style={styles.textItem}>First Name</Text>
                    <TextInput style={styles.input} />
                    {/* Item 3 */}
                    <Text style={styles.textItem}>Last Name</Text>
                    <TextInput style={styles.input} />
                    {/* Item 4 */}
                    <Text style={styles.textItem}>Street Address</Text>
                    <TextInput style={styles.input} />
                    {/* Item 5 */}
                    <Text style={styles.textItem}>Street Address 2 (Optional)</Text>
                    <TextInput style={styles.input} />
                    {/* Item 6 */}
                    <Text style={styles.textItem}>City</Text>
                    <TextInput style={styles.input} />
                    {/* Item 7 */}
                    <Text style={styles.textItem}>State/Province/Region</Text>
                    <TextInput style={styles.input} />
                    {/* Item 8 */}
                    <Text style={styles.textItem}>Zip Code</Text>
                    <TextInput style={styles.input} />
                    {/* Item 9 */}
                    <Text style={styles.textItem}>Phone Number</Text>
                    <TextInput style={styles.input} />

                </View>
            </ScrollView>
            <TouchableOpacity style={styles.buttonAdd}>
                <Text style={styles.textButton}>Add Address</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Add_Address

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
        marginBottom: 24,

    },
    icon: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    inputHeader: {
        position: 'relative',
        marginTop: 8
    },

    viewItem: {
        padding: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#EBF0FF",
        marginBottom: 16
    },
    textTitle: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: '#223263',
        textAlign: 'left',
    },
    textContent: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 21.6,
        color: '#9098B1',
        textAlign: 'left',
        letterSpacing: 0.5,
        opacity: 0.5,
        marginTop: 16
    },
    textPhoneNumber: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 21.6,
        color: '#9098B1',
        textAlign: 'left',
        letterSpacing: 0.5,
        opacity: 0.5,
        marginTop: 16
    },

    groupButton: {
        flexDirection: 'row',
        marginTop: 16,
        alignItems: 'center'
    },
    button: {
        width: 77,
        height: 57,
        borderRadius: 5,
        backgroundColor: '#40BFFF',
        marginEnd: 29.25
    },
    textButton: {
        fontSize: 14,
        fontWeight: '700',
        color: '#ffffff',
        textAlign: 'center',
        letterSpacing: 0.5,
        lineHeight: 57,
    },
    buttonAdd: {
        height: 57,
        borderRadius: 5,
        backgroundColor: '#40BFFF',
        margin: 16,
    },
})