import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";

import SkillsJson from "../skills.json";


//Profile Components

import Skills from "../profile components/Skills";


export default class Employee2Profile extends React.Component {
    
    state = {
        SkillsJson
    }

    render() {
        
      return (
                
                <View style={styles.containerBottom}>
                    {console.log(this.props.id, "SKILLSCONTAINER"),this.state.SkillsJson[this.props.skillsdata].skills.map(data => (
                        
                        <Skills 
                        key={data.name}
                        skill={data.name}
                        id={this.props.id}
                        />
                    ))}
                        
                    
                </View>
           )
        
      
    }
    
}

const styles = StyleSheet.create({
    
    containerBottom: {
        
        backgroundColor: "#fff",
        alignItems: "center",
    },
   
    
    

});