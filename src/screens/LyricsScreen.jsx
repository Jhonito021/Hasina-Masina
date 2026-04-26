import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LyricsScreen({ route, navigation }) {
  const { song } = route.params;

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${song.title}\n\n${song.lyrics}\n\n--- Hasina Masina ---`,
        title: song.title,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* En-tête avec titre et artiste */}
      <View style={styles.headerContainer}>
        <Text style={styles.songTitle}>{song.title}</Text>
        <Text style={styles.songArtist}>{song.artist}</Text>
        <View style={styles.divider} />
      </View>

      {/* Boutons d'action */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <Icon name="share" size={24} color="#6A1B9A" />
          <Text style={styles.actionText}>Partager</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#6A1B9A" />
          <Text style={styles.actionText}>Retour</Text>
        </TouchableOpacity>
      </View>

      {/* Paroles */}
      <ScrollView 
        style={styles.lyricsContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.lyricsText}>{song.lyrics}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    backgroundColor: '#4A148C',
    paddingTop: 24,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  songTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  songArtist: {
    fontSize: 16,
    color: '#FFD54F',
    textAlign: 'center',
    marginBottom: 16,
  },
  divider: {
    width: 60,
    height: 3,
    backgroundColor: '#FFD54F',
    alignSelf: 'center',
    borderRadius: 2,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDE7F6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    gap: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6A1B9A',
  },
  lyricsContainer: {
    flex: 1,
    padding: 24,
  },
  lyricsText: {
    fontSize: 18,
    lineHeight: 30,
    color: '#212121',
    textAlign: 'left',
    fontFamily: 'System',
  },
});