import {View, Text, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './SongCard.styles';

const SongCard = ({song}) => {
  return (
    <TouchableOpacity style={styles.containter}>
      
      <Image style={styles.image} source={{uri: song.imageUrl}} />

      <View style={styles.inner_container}>
        <Text style={styles.title}>{song.title}</Text>

        <View style={styles.content_container}>

          <View style={styles.info_container}>
            <Text style={styles.album}>{song.album}</Text>
            <Text style={styles.year}>{song.year}</Text>
          </View>
          

          {song.isSoldOut && (
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_title}>TÜKENDİ</Text>
            </View>
          )}

        </View>
        
        <Text style={styles.artist}>{song.artist}</Text>

      </View>

    </TouchableOpacity>
  );
};

export default SongCard;
