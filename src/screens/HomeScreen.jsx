import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const songData = [
  { 
    id: '1', 
    title: 'Tañako Ny Hery', 
    artist: 'Tanjona Randrianarivelo & Melky',
    lyrics: `Tañako ny hery ao am-ponao
Ry Jesoa ô, Mpanavotra ahy
Hery mamelona ny fanahy malemy
Hery mahavonjy ny olona rehetra

Tañako ny hery, tañako ny fiainana
Ao amin'ny Teninao ry Jesoa ô
Tañako ny fitiavana tsy mety maty
Izay nanavotra ny aiko tamin'ny fahotana

Amen, Amen, ry Jesoa ô
Midera Anao mandrakizay`
  },
  { 
    id: '2', 
    title: 'Odian-tsy Hita Ve', 
    artist: 'Henri Ratsimbazafy',
    lyrics: `Odian-tsy hita ve ny fitiavanao
Ry Jesoa Mpanavotra ahy
Na aiza na aiza no handehanako
Ny tananao no mitarika ahy

Fa ianao no Mpiandry tsara
Izay mahafoy ny ainy ho an'ny ondry
Odian-tsy hita ve ny fitiavanao
Midera Anao mandrakizay

Eny Tompo, eny, tia Anao aho
Fa Ianao no lalana sy fahamarinana`
  },
  { 
    id: '3', 
    title: 'Nofy', 
    artist: 'Hosea Marlyn',
    lyrics: `Nofy noana aho fa tsy nahita
Nofy mangetaheta fa tsy nahazo
Fa rehefa nahita Anao ry Jesoa
Dia feno foana ny fanahiko

Ianao no nofy tonga zava-misy
Ianao no fanantenako mandrakizay
Ry Jesoa, Mpanavotra ahy
Ao Aminao no ahitako fiadanana

Fa Ianao no mamelona ny fanahy
Ianao no loharanon'ny harena`
  },
  { 
    id: '4', 
    title: 'Mila Anao', 
    artist: 'Steph Rambi',
    lyrics: `Mila Anao aho ry Jesoa
Isan'andro sy isan'ora
Tsy misy afa-tsy Ianao
No mameno ny foko

Mila Anao, mila Anao
Ry Jesoa malalako
Tsy hiala Aminao mandrakizay
Fa Ianao no mpanavotra ahy

Eo anatrehanao no ahitako fiadanana
Eo anatrehanao no feno hafaliana`
  },
  { 
    id: '5', 
    title: 'Mila Anao', 
    artist: 'Steph Rambi',
    lyrics: `Mila Anao aho ry Jesoa
Isan'andro sy isan'ora
Tsy misy afa-tsy Ianao
No mameno ny foko

Mila Anao, mila Anao
Ry Jesoa malalako
Tsy hiala Aminao mandrakizay
Fa Ianao no mpanavotra ahy

Eo anatrehanao no ahitako fiadanana
Eo anatrehanao no feno hafaliana`
  },
];

export default function HomeScreen({ navigation }) {
  const handleSongPress = (song) => {
    navigation.navigate('Lyrics', { song });
  };

  const renderSongItem = ({ item, index }) => (
    <TouchableOpacity 
      style={styles.songCard} 
      activeOpacity={0.7}
      onPress={() => handleSongPress(item)}
    >
      <View style={styles.songNumberContainer}>
        <Text style={styles.songNumber}>{index + 1}</Text>
      </View>
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
      </View>
      <Icon name="chevron-right" size={28} color="#6A1B9A" />
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://www.transparenttextures.com/patterns/congruent-outline.png' }}
      style={styles.background}
    >
      <View style={styles.header}>
        <Icon name="church" size={32} color="#FFD54F" />
        <Text style={styles.appTitle}>Hasina Masina</Text>
        <Icon name="menu" size={28} color="#FFFFFF" style={styles.menuIcon} />
      </View>

      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Tononkira</Text>
        <View style={styles.recentBadge}>
          <Text style={styles.recentText}>Récents</Text>
        </View>
      </View>

      <FlatList
        data={songData}
        keyExtractor={(item) => item.id}
        renderItem={renderSongItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A148C',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  appTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 1,
  },
  menuIcon: {
    marginLeft: 'auto',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 16,
  },
  subHeaderText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A148C',
  },
  recentBadge: {
    backgroundColor: '#FFD54F',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  recentText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A148C',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  songCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  songNumberContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EDE7F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  songNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A1B9A',
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 4,
  },
  songArtist: {
    fontSize: 13,
    color: '#757575',
  },
});