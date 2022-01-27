import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { Themes, Icons, Profiles } from '../assets/Themes';
import ToolbarIcon from './ToolbarIcon';

export default function Navigation(props){
    return(<View style={styles.topToolbar}>
      <ToolbarIcon image={Icons.menu.light}/>
        <View style={styles.topToolbarIcons}>
          <Text style={styles.titleText}>ensom</Text>
        </View>
      <ToolbarIcon image={Icons.sun}/>
    </View>);
  }

  const styles = StyleSheet.create({
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