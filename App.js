import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Button, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import themes from './assets/Themes/themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  const ProfilePic = (props) => {
    return(
      <ImageBackground  style={styles.card} imageStyle={{ borderRadius: 10}} resizeMode="cover" source={require("./assets/Profiles/mtl.jpg")}>
        <Text style={styles.profileText}>MTL</Text>
        <Text style={styles.locationText}>2 miles away</Text>
      </ImageBackground>
    );
  }

  const AudioBox = (props) => {
    return(
      <View style={styles.audioBox}>
      <Text style={styles.audioText}>My hottest take</Text>
        <Image style={styles.standardIcon} source={require("./assets/Icons/player_light.png")}></Image>
        <Image style={styles.audioIcon} source={require("./assets/Icons/audio_waveform_light.png")}></Image>
      </View>
    );
  }
  const MainCard = (props) => {

    return(
      <View>
        <ProfilePic />
        <AudioBox />
      </View>
      
    );

    

  }
  
  return (
      <View style={styles.container}>
          <MainCard />
      </View>
    );
  }


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      card: {
        width: 350,
        height: 375,
        display: "flex",
        flexDirection: "row",
  
      },
      profileText: {
        fontSize: 42,
        fontFamily: "Sydney",
        color: Themes.light.textSecondary,
        textAlign: "left", 
        textAlignVertical: "bottom",
        paddingLeft: '2%'

      },
      audioBox: {
        width: 350,
        height: 150,
        borderRadius: 15,
        backgroundColor: "gray",
        padding:'3%',
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOffset: Themes.light.shadows.shadowOffset,
        shadowOpacity: Themes.light.shadowOpacity,
        shadowRadius: Themes.light.shadowRadius
      },
      audioText: {
        fontFamily: "Sydney",
        color: Themes.light.text,
        fontSize: 30,
        padding:'5%'
      },
      standardIcon: {
          width: 60,
          height: 60
      },
      audioIcon: {
        width: 350,
        height: 50
      },
      locationText: {
        fontFamily: "Sydney",
        color: Themes.light.textSecondary,
        textAlignVertical: "bottom",
        paddingLeft: '20%'
      }
  });