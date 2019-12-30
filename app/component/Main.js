
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Note from './Note'

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      noteArray:[],
      noteText:'',
    }
  }
  render(){

    let notes = this.state.noteArray.map((val,key)=>{
      return <Note key={key} keyval={key} val={val}
      deleteMethod={()=>this.deleteNote(key)}/>
    });
    return (
        <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.headerText}>Noter</Text>
              </View>
              <ScrollView style={styles.scrollContainer}>
              {notes}
              </ScrollView>

              <View style={styles.footer}>
                  <TextInput style={styles.textInput}
                  placeholder='>note'
                  onChangeText={(noteText)=>this.setState({noteText})}
                  value={this.state.noteText}
                  placeholderTextColor='white'
                  underlineColorAndroid='transparent'>
                  </TextInput>
              </View>

              <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
        </View>
    );
  }

addNote(){
  if (this.state.noteText) {
    var d = new Date();
    this.state.noteArray.push({
      'date':d.getFullYear()+
      "/"+(d.getMonth()+1)+
      "/"+d.getDate(),
      'note': this.state.noteText
    });
    this.setState({noteArray:this.state.noteArray})
    this.setState({noteText: ''})

  }
}


}

const styles= StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    backgroundColor:'#ff1122',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd',
  },
  headerText:{
    color:'white',
    fontSize:26,
    padding:10,
  },
  scrollContainer:{
    flex:1,
    marginBottom:100,
  },
  footer:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    zIndex:10,
  },
  textInput:{
    alignSelf:'stretch',
    color:'#fff',
    padding:20,
    backgroundColor:'#112233',
    borderTopWidth:2,
    borderTopColor:'#ddd',
  },
  addButton:{
    position:'absolute',
    zIndex:11,
    right:20,
    bottom:90,
    backgroundColor:'#909090',
    width:90,
    height:90,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
  },
  addButtonText:{
    color:'#fff',
    fontSize:24
  }


});
