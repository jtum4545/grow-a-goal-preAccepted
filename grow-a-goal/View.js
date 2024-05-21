import {StyleSheet, View, Text} from "react-native"

export default function ViewScreen(){
    return(
        <View style={styles.container}>
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
  