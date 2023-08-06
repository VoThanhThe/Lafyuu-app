import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, Button, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Add_Payment = (props) => {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            {/* Start Header */}
            <View style={styles.groupHeader}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back" color="#9098B1" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Payment</Text>
                </View>

            </View>
            {/* End Header */}
            <TouchableOpacity onPress={() => {navigation.navigate('CreaditCardAndDebit')}}>
                <View style={styles.groupItem}>
                    <Ionicons name="card" color="#40BFFF" size={20} />
                    <Text style={styles.textItem}>Credit Card And Debit</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.groupItem}>
                    <Image style={styles.logo} resizeMode='cover' source={require('../assets/logo_payment.png')}/>
                    <Text style={styles.textItem}>Paypal</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.groupItem}>
                    <FontAwesome name="bank" color="#40BFFF" size={20} />
                    <Text style={styles.textItem}>Bank Transfer</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Add_Payment

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
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 18,
        color: '#223263',
        letterSpacing: 0.5,
        textAlign: 'left',
        marginStart: 19
    },
    groupItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16
    },
    logo: {
        width: 24,
        height: 24,
    }

})