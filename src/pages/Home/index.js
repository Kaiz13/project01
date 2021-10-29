import { assertTemplateElement } from "@babel/types";
import React from "react";
import { StyleSheet,View,Text,TouchableOpacity} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";


export default class app extends React.Component{
  
  constructor(){
    super()
    this.state={
      resulttext:"",
      calculated:""
    }
    this.operation =['del','+','-','*','/']
  }
   calculateResult(){
     const text =this.state.resulttext
     console.log(text)
     this.setState({
       calculated:eval(text)
     })
   }
   operate(operation){
     switch(operation){
       case 'del':
       let text=this.state.resulttext.split('')
       text.pop()
       this.setState({
         resulttext: text.join('')
       })
       break
       case'+':
       case'-':
       case'*':
       case'/':
        const lastChar =this.state.resulttext.split('').pop()
        if(this.operation.indexOf(lastChar)>0)return
        if(this.state.resulttext=="")return
        this.setState({
          resulttext:this.state.resulttext+operation
        })
     }
   }

   validate(){
     const text =this.state.resulttext
     switch(text.slice(-1)){
      case'+':
      case'-':
      case'*':
      case'/':
      return false
     }
     return true
   }
   buttonPressed(text){
     console.log(text)

     if (text == '='){
       return this.validate()&& this.calculateResult(this.state.resulttext)
     }
     this.setState({
       resulttext: this.state.resulttext+text
     })
   }

   render(){
     let rows=[]
     let nums=[[7,8,9],[4,5,6],[1,2,3],['.',0,'=']]
     let ops=[]
     for(let i=0;i<4;i++){
       let row=[]
       for(let j=0;j<3;j++){
         row.push(
           <TouchableOpacity key={nums[i][j]} onPress={()=>this.buttonPressed(nums[i][j])} style={styles.btn}>
             <Text style={styles.btnText}>{nums[i][j]}</Text>
             </TouchableOpacity>
         )
       }
       rows.push(
         <View key={i} style={styles.row}>{row}</View>
       )
     }
     for(let i=0;i<5;i++){
       ops.push(
         <TouchableOpacity key={this.operation[i]} style={styles.btn} onPress={()=>this.operate(this.operation[i])}>
           <Text style={styles.btnText}>{this.operation[i]}</Text>
         </TouchableOpacity>

       )
     }
     return(
       <View style={styles.container}>
         <View style={styles.result}>
           <Text style={styles.resulttext}>{this.state.resulttext}</Text>
           </View>
           <View style={styles.calculation}>
             <Text style={styles.calculationText}>{this.state.calculated}</Text>
             </View>
             
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              {rows}
              </View>
              <View style={styles.operation}>
                {ops}
                </View>
                </View>
                </View>
      
      



     )
   }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignContent: 'flex-end',
    //backgroundColor:'white',
  },
  row:{
flexDirection:'row',
flex:1,
justifyContent:'space-around',
alignItems:'center',
  },
  btnText:{
color:'white',
fontSize: 24,
  },
  btn:{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center',
  },
  calculationText:{
fontSize: 35,
color:'black',
  },
  resulttext:{
    fontSize: 24,
    color:'black',
  },
  result:{
flex:1,
justifyContent:'center',
alignItems:'flex-end',
backgroundColor:'white',
  },
  calculation: {
    flex:1,
    justifyContent: 'center',
    alignContent: 'flex-end',
    backgroundColor:'white',
   
  },
  buttons: {
    flex :7,
    flexDirection: 'row',
  },
  numbers: {
   flex:3,
   backgroundColor:'#604CFF',
    
  },
    operation :{
      flex:1,
      justifyContent:'space-around',
      backgroundColor: 'black'
    },


});
 
