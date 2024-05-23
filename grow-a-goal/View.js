import {StyleSheet, View, Text} from "react-native"
import { useReState } from "@raulpesilva/re-state";


export default function ViewScreen(){
    const [bgColour] = useReState("bgColour", '#A2FCAB');
    return(
        <View style={[styles.container, {backgroundColor: bgColour}]}>
            <Text>View</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#A2FCAB',
    },
  });
  