import {StyleSheet, View, Text, TouchableOpacity, SafeAreaView} from "react-native"
import {useState, useEffect} from "react"
import { Switch, Divider } from "react-native-paper";
import { useReState } from '@raulpesilva/re-state';
import { Picker } from "@react-native-picker/picker";


//Setting lists
// Dark mode
// On start view (like where they start on the thingy)asdasdas

const themeColours = {
    background: '#A2FCAB',
    tabBackground: '#F6FFBD',
    borderAndIcons: '#7E6767'
  };
   
  const darkThemeColours = {
    background: '#355F3A',
    tabBackground: '#737373',
    borderAndIcons: '#D0CBCB'
  };
  

export default function SettingsScreen(){
    const [bgColour, setbgColour] = useReState("bgColour", '#A2FCAB')
    const [itemColour, setItemColour] = useReState("itemColour", '#7E6767')
    const [tabBackground, setTabbgColour] = useReState("tabBackground", '#F6FFBD')
    const [initialTab, setInitialTab] = useReState("initialTab", "Profile");


    const [darkModeToggle, setDarkMode] = useState(false);
    const onToggleSwitch = () => {
        setDarkMode(!darkModeToggle);
        if(!darkModeToggle){
            setbgColour('#355F3A'); //Dark mode section
            setItemColour('#D0CBCB');
            setTabbgColour('#737373')
        } else {
            setbgColour('#A2FCAB');
            setItemColour('#7E6767');
            setTabbgColour('#F6FFBD')
        }
    }
    return(
        <SafeAreaView style={[styles.container, {backgroundColor: bgColour}]}>
            <View style={[styles.settingRow, {borderBottomColor: itemColour}]}>
                <Text style={[styles.settingText,{color: itemColour}]}>Dark mode</Text>
                <Switch value={darkModeToggle} onValueChange={onToggleSwitch} color={itemColour} thumbColor={itemColour} trackColor={itemColour}/>
            </View>
            <View style={[styles.settingRow, {borderBottomColor: itemColour}]}>
                <Text style={[styles.settingText,{color: itemColour}]}>Initial Tab</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 10, borderBottomWidth: 1, borderBottomColor: itemColour}}>
                    <Text style={[styles.settingText, {color:itemColour}]}>{initialTab}</Text>
                    <Picker 
                        mode='dropdown' 
                        onValueChange={(value, index) => {setInitialTab(value)}} 
                        selectedValue={initialTab} 
                        itemStyle={styles.pickerLabel} 
                        style={styles.picker}
                        dropdownIconColor={itemColour}
                    >
                        <Picker.Item label="Profile" value="Profile"/>
                        <Picker.Item label="Add" value="Add"/>
                        <Picker.Item label="Tree" value="Tree"/>
                        <Picker.Item label="View" value="View"/>
                        <Picker.Item label="Settings" value="Settings"/>
                    </Picker>
                </View>
            </View>
            <SafeAreaView>
                <TouchableOpacity style={[styles.settingSave, {borderColor: itemColour}]}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: itemColour}}>SAVE</Text>
                </TouchableOpacity>
            </SafeAreaView> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    settingSave:{
        marginTop: '10%',
        marginBottom:'5%',
        borderWidth: 3,
        padding: 10,
    },

    settingText: {
        fontSize: 15,
        fontWeight: 'bold',
        
    },
    settingRow :{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 15,
        height: '10%',
    },
    picker:{
        height: 30,
        width: 40,
    },
    pickerLabel:{
        font:20,
        color: 'white'
    }
  });
  