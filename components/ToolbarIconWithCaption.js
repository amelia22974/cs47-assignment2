import { View, Image, Text } from 'react-native';
import { styles } from '../App'

export default function BottomToolbar(props) {
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