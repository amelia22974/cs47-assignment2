import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, Platform, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Icons, Profiles } from './assets/Themes';
import { addValidStylePropTypes } from 'react-native/Libraries/StyleSheet/StyleSheetValidation';
import { BottomToolbar } from './components/ToolbarIconWithCaption';

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
      <ImageBackground  style={styles.card} imageStyle={{ borderRadius: 10}} resizeMode="cover" source={props.image}>
        <Text style={styles.profileText}>{props.name}</Text>
        <Text style={styles.locationText}>{props.caption}</Text>
      </ImageBackground>
    );
  }

  const AudioBox = (props) => {
    return(
      <View style={styles.audioSection}>
        <Text style={styles.audioText}>My hottest take</Text>
        <View style={styles.audioBox}>
            <View style={styles.audioChild}>
              <Image style={styles.mainIcon} source={Icons.player.light}></Image>
            </View>
            <View style={styles.audioChild}>
              <Image style={styles.audioIcon} source={Icons.audioWave.light}></Image>
            </View>
        </View>
      </View>
    );
  }

  const BottomToolbar = (props) => {
    return(
      <View style={styles.bottomToolbar}>       
        <ToolbarIconWithCaption image={Icons.discover.light} text="Discover"/>
        <ToolbarIconWithCaption image={Icons.heart.light} text="Matches"/>
        <ToolbarIconWithCaption image={Icons.messages.light} text="DMs" />
      </View>
    )
  }

  const ToolbarIconWithCaption = (props) => {
    return (
      <View style={styles.bottomToolbarIcons}>
        <View style={styles.iconChild}>
          <Image style={styles.standardIcon} source={props.image}></Image>
        </View>
        <View style={styles.iconChild}>
          <Text style={styles.iconText}>{props.text}</Text>
        </View>
    </View>
    );
  }

  const ToolbarIcon =  (props) => {
    return(<View style={styles.topToolbarIcons}>
            <Image style={styles.mainIcon} source={props.image}></Image>
          </View>);

  }

  const Navigation = (props) => {
    return(<View style={styles.topToolbar}>
      <ToolbarIcon image={Icons.menu.light}/>
        <View style={styles.topToolbarIcons}>
          <Text style={styles.titleText}>ensom</Text>
        </View>
      <ToolbarIcon image={Icons.sun}/>
    </View>);
  }
  const MainCard = (props) => {
    
    const members = [Profiles.mtl, Profiles.drell, Profiles.man, Profiles.woman, Profiles.brubakercole]
    const idx = props.idx
    return(
      <View> 
        <View style={styles.cardPiece}>
          <ProfilePic image={members[idx].image} name={members[idx].name} caption={members[idx].caption}/>
        </View>
        <View styles={styles.cardPiece}>
          <AudioBox />
        </View>
      </View>
    );
  }


  
  return (
    
      <View style={styles.container}>
          <Navigation />
          <MainCard idx={0} onClick={()=> setIdx( 1 )}/>
          <BottomToolbar />
      </View>
    );
  }
  const windowWidth = Dimensions.get('window').width;
  const cardWidth = windowWidth * 0.75;
  const cardHeight = 1.1 * cardWidth;
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: Themes.light.bg,
        alignItems: "center",
        justifyContent: "center"
      },
      card: {
        width: cardWidth,
        height: cardHeight,
      },
      profileText: {
        fontSize: 36,
        fontFamily: "Sydney",
        color: Themes.light.textSecondary,
        textAlign: "left", 
        textAlignVertical: "bottom",
        padding: '3%'
      },
      audioSection: {
        width: cardWidth,
        height: 150,
        borderRadius: 15,
        justifyContent: "center",
        backgroundColor: Themes.light.bgSecondary,
  
        shadowColor: Themes.light.shadowColor,
        shadowOffset: Themes.light.shadows.shadowOffset,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius, 
      },
      audioBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      },
      audioChild: {
        display:"flex",
        alignItems: "center", 
        padding: '2%',
      },
      audioText: {
        fontFamily: "Sydney",
        color: Themes.light.text,
        fontSize: 32,
        paddingLeft: '5%'
      },
      standardIcon: {
          width: 30,
          height: 30
      },
      mainIcon: {
        width: 50,
        height: 50
      },
      audioIcon: {
        width: 210,
        height:40
      },
      locationText: {
        fontFamily: "Sydney",
        color: Themes.light.textSecondary,
        position: "absolute",
        bottom: 0,
        padding: '5%',
        fontSize: 18
      },
      iconText: {
        fontFamily: "Sydney",
        color: Themes.light.textSecondary,
        textAlignVertical: "bottom",
        textAlign: "center"
      },
      cardPiece:{
        display: "flex",
        paddingBottom: "3%",
  
        shadowColor: Themes.light.shadowColor,
        shadowOffset: Themes.light.shadows.shadowOffset,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,  
      },
      topToolbarIcons: {
        flex: 1,
        marginTop: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: Platform.OS === 'ios' ? 41 : 54
      },
      bottomToolbarIcons: {
        padding:'3%'
      },
  
      bottomToolbar:{
        backgroundColor: "black",
        position: 'absolute',
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: '100%'
      },
      topToolbar: {
          display: "flex",
          position: "absolute",
          top: '5%',
          flexDirection: "row",
          justifyContent: "space-between",
      },
      titleText:{
        fontFamily: "Sydney-Bold",
        fontSize: 42
      },
      iconChild:{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5%"
      }
  });





    