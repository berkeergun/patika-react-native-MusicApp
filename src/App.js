import React,{useState} from 'react'
import { View, StyleSheet,FlatList, } from 'react-native'
import music_data from "./music-data.json"
import SongCard from "./components/SongCard"
import SearchBar from "./components/SearchBar"

const App = () => {
  const [list,setList]=useState(music_data)

  const renderSong = ({item}) => <SongCard song={item} />
  const renderSeperator=() => <View style={styles.seperator} />

  const handeSearch = (text)=> {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle= song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1 ;
    });
    
    setList(filteredList)
  }

  return (
    <View style={styles.container}>

      <SearchBar onSearch={handeSearch}  />

        <FlatList 
          keyExtractor={item => item.id} // json da id olduğu için olmasa da olurdu
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />

    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1db954"
  },
  seperator:{
    borderWidth:1,
    borderColor:"#33333380"
  }
})