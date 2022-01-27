import { View, Image, Text, StyleSheet } from 'react-native';
import { Themes, Icons, Profiles } from '../assets/Themes';


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

export default function BottomToolbar(props) {
    return(
      <View style={styles.bottomToolbar}>       
        <ToolbarIconWithCaption image={Icons.discover.light} text="Discover"/>
        <ToolbarIconWithCaption image={Icons.heart.light} text="Matches"/>
        <ToolbarIconWithCaption image={Icons.messages.light} text="DMs" />
      </View>
    )
  }





  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Themes.light.bg,
      alignItems: "center",
      justifyContent: "center"
    },
    profileText: {
      fontSize: 36,
      fontFamily: "Sydney",
      color: Themes.light.textSecondary,
      textAlign: "left", 
      textAlignVertical: "bottom",
      padding: '3%'
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
