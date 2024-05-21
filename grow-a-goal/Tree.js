import {StyleSheet, View, Text} from "react-native"

export default function TreeScreen(){
    return(
        <View style={styles.container}>
            <Text>Tree</Text>
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
  