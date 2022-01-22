import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Button, ImageBackground, Platform} from 'react-native';
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

  const LabeledIcon = (props) => {
    return(
      <View style={styles.toolbarIcons}>
          <Image style={styles.standardIcon} source={require("./assets/Icons/discover_light.png")}></Image>
          <Text style={styles.iconText}> Discover</Text>
      </View>
    )
  }

  const AudioBox = (props) => {
    return(
      <View style={styles.audioSection}>
        <Text style={styles.audioText}>My hottest take</Text>
        <View style={styles.audioBox}>
            <View style={styles.audioChild}>
              <Image style={styles.standardIcon} source={require("./assets/Icons/player_light.png")}></Image>
            </View>
            <View style={styles.audioChild}>
              <Image style={styles.audioIcon} source={require("./assets/Icons/audio_waveform_light.png")}></Image>
            </View>
        </View>
      </View>
    );
  }

  const BottomToolbar = (props) => {
    return(
      <View style={styles.bottomToolbar}>
        <View style={styles.toolbarIcons}>
          <Image style={styles.standardIcon} source={require("./assets/Icons/discover_light.png")}></Image>
        </View>
        <View style={styles.toolbarIcons}>
          <Image style={styles.standardIcon} source={require("./assets/Icons/heart_light.png")}></Image>
        </View>
        <View style={styles.toolbarIcons}>
          <Image style={styles.standardIcon} source={require("./assets/Icons/messages_light.png")}></Image>
        </View>
      </View>
    )
  }

  const TopToolbar = (props) => {
    return(<View style={styles.TopToolbar}>
      <View style={styles.toolbarIcons}>
          <Image style={styles.standardIcon} source={require("./assets/Icons/menu_light.png")}></Image>
        </View>
        <View style={styles.toolbarIcons}>
          <Text style={styles.titleText}>ensom</Text>
        </View>
      <View style={styles.toolbarIcons}>
          <Image style={styles.standardIcon} source={require("./assets/Icons/sun.png")}></Image>
      </View>

    </View>);
  }
  const MainCard = (props) => {

    return(
      <View>
        <TopToolbar />
        <View style={styles.cardPiece}>
          <ProfilePic />
        </View>
        <View styles={styles.cardPiece}>
          <AudioBox />
        </View>
      </View>
    );
  }
  
  return (
      <View style={styles.container}>
          <MainCard />
          <BottomToolbar />
      </View>
    );
  }


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: themes.light.bg,
        alignItems: 'center',
        justifyContent: 'center',
      },
      card: {
        width: 300,
        height: 350,
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
      audioSection: {
        width: 350,
        height: 150,
        borderRadius: 15,
        backgroundColor: themes.light.bgSecondary,
        shadowColor: themes.light.shadowColor,
        shadowOffset: themes.light.shadows.shadowOffset,
        shadowOpacity: themes.light.shadows.shadowOpacity,
        shadowRadius: themes.light.shadows.shadowRadius,  

      },
      audioBox: {
        display: "flex",
        flexDirection: "row",
        padding:'3%',
      },
      audioChild: {
        display:"flex",
        alignItems: "center", 
        padding: '1%',
      },
      audioText: {
        fontFamily: "Sydney",
        color: Themes.light.text,
        fontSize: 30,
        paddingTop:'5%',
        paddingLeft: '5%'
      },
      standardIcon: {
          width: 45,
          height: 45
      },
      audioIcon: {
        width: 250,
        height:40
      },
      locationText: {
        fontFamily: "Sydney",
        color: Themes.light.textSecondary,
        textAlignVertical: "bottom",
        paddingLeft: '20%'
      },
      iconText: {
        fontFamily: "Sydney",
        color: Themes.light.textSecondary,
        textAlignVertical: "bottom",
        paddingLeft: '20%'
      },
      cardPiece:{
        padding: '5%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      toolbarIcons: {
        marginTop: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      },
      bottomToolbar:{
        backgroundColor: "black",
        position: 'absolute',
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      TopToolbar: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
      },
      titleText:{
        fontFamily: "Sydney-Bold",
        fontSize: 42
      }
  });