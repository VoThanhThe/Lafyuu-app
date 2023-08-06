import { StyleSheet, Text, View, Image, TextInput, FlatList, Button, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'
import ItemCategory from '../item_screen/ItemCategory'
import ItemGengerExplore from '../item_screen/ItemGengerExplore'

const dataMan = [
    {
        id: '1',
        title: 'Man Shirt',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_man_shirt.png?alt=media&token=ec71fd13-82d1-4f31-b863-f091f8f14ec8',
    },
    {
        id: '2',
        title: 'Man Work Equipment',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Man%20Work%20Equipment.png?alt=media&token=78574219-2cd5-4f4e-bf4f-25a079df3e0f',
    },
    {
        id: '3',
        title: 'Man Pants',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Man%20Pants.png?alt=media&token=9c973769-712f-4447-ad1e-9c6b7677c7b6',
    },
    {
        id: '4',
        title: 'Man Shoes',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Man%20Shoes.png?alt=media&token=f1bf8ed0-0637-48d9-93f2-3e754974c3cb',
    },
    {
        id: '5',
        title: 'Man Underwear',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Man%20Underwear.png?alt=media&token=9c2a1064-ab52-4d20-9d24-2c1a68547473',
    },
]
const dataWoman = [
    {
        id: '6',
        title: 'Dress',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Dress.png?alt=media&token=e19c2ce8-26c9-4b11-966a-509c96e5671f',
    },

    {
        id: '7',
        title: 'Woman Bag',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Woman%20Bag.png?alt=media&token=b34d5d98-6013-4fd8-b045-69017a941644',
    },

    {
        id: '8',
        title: 'Woman Pants',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_woman_pants.png?alt=media&token=a8a05a69-9756-4526-82b3-53419e90efb5',
    },

    {
        id: '9',
        title: 'High Heels',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_high_heel.png?alt=media&token=14f43a04-5f99-4375-9b77-ba8302774f1c',
    },

    {
        id: '10',
        title: 'Bikini',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_bikini.png?alt=media&token=fb81bb1a-bd01-4730-b1df-27239dcb232b',
    },
    {
        id: '11',
        title: 'Woman T-Shirt',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_woman_tshirt.png?alt=media&token=038bc741-209d-452f-8261-35db3f557163',
    },
    {
        id: '12',
        title: 'Skirt',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_shirt.png?alt=media&token=9464c2f1-34c9-474b-b34d-25ccb35675aa',
    },


]
const Explore = (props) => {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            {/* Start Header */}
            <View style={styles.groupHeader}>
                <View style={styles.inputHeader}>
                    <TextInput style={styles.input} placeholder='Search Product' />
                    <Icon style={styles.icon} name="search" color="#40BFFF" size={20} />
                </View>
                
                <Icon1 onPress={() => { { navigation.navigate('FavoriteProduct') } }} name="heart" color="#9098B1" size={20} />
                <Icon2 onPress={() => { { navigation.navigate('NotificationStack') } }} name="notifications-outline" color="#9098B1" size={20} />

            </View>
            {/* End Header */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>
                    {/* Start Flatlist Category */}
                    <Text style={styles.title}>Man Fashion</Text>

                    <View style = {{flexDirection: 'row', flexWrap:'wrap'}}>
                        {
                        dataMan.map((item) => <ItemGengerExplore key={item.id} dataIcon = {item} />)
                        }
                    </View>

                    <Text style={styles.title}>Woman Fashion</Text>

                    <View style = {{flexDirection: 'row', flexWrap:'wrap'}}>
                        {
                        dataWoman.map((item) => <ItemGengerExplore key={item.id} dataIcon = {item} />)
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    groupButton: {
        width: 72,
        height: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonBannel: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#EBF0FF',
    },
    groupHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomColor: '#EBF0FF',
        borderBottomWidth: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',

    },
    icon: {
        position: 'absolute',
        top: 13,
        left: 18
    },
    input: {
        width: 290,
        height: 46,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        backgroundColor: "#ffffff",
        borderRadius: 5,
        paddingLeft: 50,
    },
    inputHeader: {
        position: 'relative',

    },

    title: {
        fontSize: 14,
        fontWeight: '700',
        color: '#223263',
        lineHeight: 21.6,
    },
})