import {StyleSheet, View, Text} from "react-native"

export default function AddScreen(){
    return(
        <View style={styles.container}>
            <Text>Add</Text>
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
  