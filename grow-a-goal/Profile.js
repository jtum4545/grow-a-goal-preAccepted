import { useReState } from "@raulpesilva/re-state";
import {StyleSheet, View, Text} from "react-native"

export default function ProfileScreen(){
    const [bgColour] = useReState("bgColour", '#A2FCAB');
    return(
        <View style={[styles.container, {backgroundColor: bgColour}]}>
            <Text>Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#A2FCAB'
    },
  });
  