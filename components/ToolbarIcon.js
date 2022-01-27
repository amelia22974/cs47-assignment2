import { View, Image, Dimensions, StyleSheet } from 'react-native';

  export default function ToolbarIcon(props){
    return(<View style={styles.topToolbarIcons}>
            <Image style={styles.mainIcon} source={props.image}></Image>
          </View>);
  }

  const windowWidth = Dimensions.get('window').width;
  const cardWidth = windowWidth * 0.75;
  const cardHeight = 1.1 * cardWidth;
  
  const styles = StyleSheet.create({
      mainIcon: {
        width: 50,
        height: 50
      },
      topToolbarIcons: {
        flex: 1,
        marginTop: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: Platform.OS === 'ios' ? 41 : 54
      },
      topToolbar: {
          display: "flex",
          position: "absolute",
          top: '5%',
          flexDirection: "row",
          justifyContent: "space-between",
      },
  });
