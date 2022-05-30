import { StatusBar } from 'expo-status-bar';
import {useState,useEffect} from 'react'
import { StyleSheet,SafeAreaView, Text, View,FlatList } from 'react-native';
import Card from './src/component/Card';
import data from './assets/data'
import {SearchBar} from '@rneui/base'
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {

  const [search, setSearch] = useState('');

  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const [masterDataSource, setMasterDataSource] = useState([]);

  const searchFilterFunction = (text) => { // Thanks https://aboutreact.com/react-native-search-bar-filter-on-listview/
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          // Applying filter for the inserted text in search bar
          const itemData = item.title
              ? item.title.toUpperCase()
              : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      );
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  }

  useEffect(()=> {
    setFilteredDataSource(data);
    setMasterDataSource(data);
  },[])

  return (
    <View>
      <SearchBar  placeholder="Recherche"
      onChangeText={(text) => searchFilterFunction(text)}
      value={search}
      inputContainerStyle={{
        flexDirection:'row-reverse'
      }}
      />
   <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginBottom:80}}>
   <SafeAreaView>
    <FlatList
    numColumns={2}
    data={filteredDataSource}
    renderItem={({ item, index, separators }) => (
      <Card key={index} kl={index} e={item}  />
    )}
    />
   </SafeAreaView>
   </View>
   </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
