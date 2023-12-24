import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux';


const Profile = (props) => {
    const { navigation } = props;
    const user = useSelector(state => state.UserReducer.user);

    return (
        <View style={styles.container}>
            {/* Start Header */}
            <View style={styles.groupHeader}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Icon2 name="chevron-back" color="#9098B1" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Profile</Text>
                </View>

            </View>
            {/* End Header */}

            <View style={{ padding: 19 }}>
                <View style={styles.viewFlex_1}>
                    <TouchableOpacity>
                        <Image style={styles.image} source={{uri: user.profile.avatar}} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('Change_Name') }}>
                        <View style={{ marginStart: 15 }}>
                            <Text style={styles.textName}>{user.profile.name}</Text>
                            <Text style={styles.textEmail}>{user.email}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('Gender') }}>
                    <View style={[styles.viewFlex, { paddingVertical: 19 }]}>
                        <View style={styles.viewFlex_1}>
                            <Icon2 name="female" color="#40BFFF" size={18} />
                            <Text style={styles.textItem}>Gender</Text>
                        </View>
                        <View style={styles.viewFlex_1}>
                            <Text style={styles.textNotify}>{user.profile.gender}</Text>
                            <Icon2 name="chevron-forward" color="#9098B1" size={20} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('BirthDay') }}>
                    <View style={[styles.viewFlex, { paddingVertical: 19 }]}>
                        <View style={styles.viewFlex_1}>
                            <Icon2 name="ios-calendar-sharp" color="#40BFFF" size={18} />
                            <Text style={styles.textItem}>Birthday</Text>
                        </View>
                        <View style={styles.viewFlex_1}>
                            <Text style={styles.textNotify}>{user.profile.birthday}</Text>
                            <Icon2 name="chevron-forward" color="#9098B1" size={20} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Phone_Number') }}>
                    <View style={[styles.viewFlex, { paddingVertical: 19 }]}>
                        <View style={styles.viewFlex_1}>
                            <Icon2 name="ios-phone-portrait-outline" color="#40BFFF" size={18} />
                            <Text style={styles.textItem}>Phone Number</Text>
                        </View>
                        <View style={styles.viewFlex_1}>
                            <Text style={styles.textNotify}>{user.profile.phone}</Text>
                            <Icon2 name="chevron-forward" color="#9098B1" size={20} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Change_Password') }}>
                    <View style={[styles.viewFlex, { paddingVertical: 19 }]}>
                        <View style={styles.viewFlex_1}>
                            <Icon2 name="lock-closed-outline" color="#40BFFF" size={18} />
                            <Text style={styles.textItem}>Change Password</Text>
                        </View>
                        <View style={styles.viewFlex_1}>
                            <Text style={styles.textNotify}>•••••••••••••••••</Text>
                            <Icon2 name="chevron-forward" color="#9098B1" size={20} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

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
        marginStart: 19
    },
    textNotify: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 21.6,
        color: '#9098B1',
        textAlign: 'right',
        marginEnd: 15,
    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 36
    }
    , textName: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: '#223263',
    }
    , textEmail: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 21.6,
        color: '#9098B1',
    }
})