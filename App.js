import { StatusBar } from 'expo-status-bar';
import {useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
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
    <ScrollView>
      <SearchBar  placeholder="ex. John DOE"
      onChangeText={(text) => searchFilterFunction(text)}
      value={search}
      inputContainerStyle={{
        flexDirection:'row-reverse'
      }}
      />
   <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
      <View style={{display:'flex',flexDirection:'column'}}>
      {filteredDataSource.map((e,k) => {

        if ((k+1)%2==1) {

          return(
            <Card key={k} kl={k} e={e} />
          )
        }

      })}
      </View>
      <View style={{display:'flex',flexDirection:'column'}}>
      {filteredDataSource.map((e,k) => {

        if ((k+1)%2==0) {

          return(
            <Card key={k} kl={k} e={e} />
          )
        }

      })}
      </View>
   </View> 
   </ScrollView>
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
