import React, { createContext, useState, useContext, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableOpacity 
} from 'react-native';

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [data1, setData1] = useState([]);
    const [tot,settot]=useState(0)
    const [cc,setcc]=useState(0)
    const [log, setlog] = useState(true);
    const updateData = () => {
      setData('Updated data from Context!');
    };
  useEffect(()=>{
for(i of data1){
  let p=i.count*i.price+tot;
  //console.log(i)
  //p=p.toFixed(2)
settot(p)
}
  },[])
    return (
      <MyContext.Provider value={{ data1, setData1,tot,settot,cc,setcc,log,setlog }} >
        {children}
      </MyContext.Provider>
    );
  };
  
  export { MyContext};
  export default MyProvider