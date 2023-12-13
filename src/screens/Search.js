import { StyleSheet, Text, View, Alert, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'
import { SelectList } from 'react-native-dropdown-select-list'
import ItemGengerExplore from '../item_screen/ItemGengerExplore'
import AxiosIntance from '../ultil/AxiosIntance';
import LoadingScreen from './LoadingScreen';

const Search = (props) => {
    const { navigation } = props;
    const [dataCategory, setDataCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchCateglory, setSearchCateglory] = useState(true);
    const [selected, setSelected] = React.useState("");
    console.log("Selected", selected);

    // const gender = ["Male", "Female", "Other",];
    const gender = [
        {
            id: "1",
            name: "Male",
            status: "true",
        },
        {
            id: "2",
            name: "Female",
            status: "true",
        },
    ];

    useEffect(() => {
        const getCategories = async () => {
            const response = await AxiosIntance().get("/api/categories/get-all-categories");
            console.log(response);
            if (response.returnData.error == false) {
                setDataCategory(response.categories);
                setIsLoading(false);
            } else {
                console.log("Lấy dữ liệu thất bại");
            }
        }
        getCategories();
        return () => {
        }
    }, []);

    // Lấy thuộc tính "name" của đối tượng đầu tiên
    let category = dataCategory.length > 0 ? dataCategory[0].name : "";

    // Lọc ra chỉ các thuộc tính "_id" và "name" từ mỗi đối tượng
    let filteredArray = dataCategory.map(obj => ({ key: obj._id, value: obj.name }));

    const handleResetSelection = () => {
        // Cập nhật giá trị đã chọn về giá trị mặc định
        setSelected('');
        // Hiển thị thông báo hoặc thực hiện các hành động khác nếu cần thiết
        Alert.alert('Selection Reset', 'Selected value has been reset to default.');
      };

    return (
        <View style={styles.container}>
            {/* Start Header */}
            <View style={styles.groupHeader}>
                <View style={styles.inputHeader}>
                    <TextInput style={styles.input} placeholder="Search Product" autoFocus = {true} />
                    <Icon style={styles.icon} name="search" color="#40BFFF" size={20} />
                </View>

                <TouchableOpacity>
                    <Icon
                        // sort-amount-asc
                        name="sort-amount-desc"
                        color="#9098B1"
                        size={20}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon1

                        name="filter"
                        color="#40BFFF"
                        size={24}
                    />
                </TouchableOpacity>
            </View>
            {/* End Header */}
            <View style={{ paddingHorizontal: 16 }}>
                {/* Start Result */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', marginTop: 16, }}>
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#9098B1' }}>0 Result</Text>
                    </View>
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate("ListCategory", { category: dataCategory._id})}
                        style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#223263', marginEnd: 8 }}>{category}</Text>
                        <Icon2 name='chevron-down' size={24} color={'#9098B1'} />
                    </TouchableOpacity> */}
                    <View style={{ width: 200, height: 48 }}>
                        
                    </View>
                    <View style={{ position: "absolute", top: 0, right: 0, width: 200, zIndex: 1 }}>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={filteredArray}
                            save="key"
                            placeholder='Select Category'
                            searchPlaceholder='Search'
                            dropdownStyles={{backgroundColor: 'gray'}}
                            dropdownTextStyles={{color: "white"}}
                        />
                    </View>

                </View>
                {/* End Result */}
            </View>
            <TouchableOpacity style = {{width: 200, height: 58, backgroundColor: "yellow", padding: 16}} onPress={() => {handleResetSelection()}}>
                <Text>Xóa bộ lọc</Text>
            </TouchableOpacity>
        </View >
    )
}

export default Search

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