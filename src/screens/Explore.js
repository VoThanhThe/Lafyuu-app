import { StyleSheet, Text, View, Image, TextInput, FlatList, Button, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'
import ItemGengerExplore from '../item_screen/ItemGengerExplore'
import AxiosIntance from '../ultil/AxiosIntance';

const Explore = (props) => {
    const { navigation } = props;
    const [dataCategoryMan, setDataCategoryMan] = useState([]);
    const [dataCategoryWomen, setDataCategoryWomen] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getCategpryMan = async () => {
            const response = await AxiosIntance().get("/api/categories/get-categories-by-man");
            console.log(response);
            if (response.returnData.error == false) {
                setDataCategoryMan(response.categories);
                setIsLoading(false);
            } else {
                console.log("Lấy dữ liệu thất bại");
            }
        }

        const getCategoryWomen = async () => {
            const response = await AxiosIntance().get("/api/categories/get-categories-by-women");
            console.log(response);
            if (response.returnData.error == false) {
                setDataCategoryWomen(response.categories);
                setIsLoading(false);
            } else {
                console.log("Lấy dữ liệu thất bại");
            }
        }
        getCategoryWomen();
        getCategpryMan();
        return () => {

        }
    }, []);
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
                <View style={{ padding: 12 }}>
                    {/* Start Flatlist Category */}
                    <Text style={styles.title}>Man Fashion</Text>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            dataCategoryMan.map((item) => <ItemGengerExplore key={item._id} dataIcon={item} />)
                        }
                    </View>

                    <Text style={styles.title}>Woman Fashion</Text>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            dataCategoryWomen.map((item) => <ItemGengerExplore key={item._id} dataIcon={item} />)
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