import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MyContext} from './MyProvider';
import Image1 from './Image1';
import {useNavigation} from '@react-navigation/native';
//const { data } = useContext(MyContext);
import Error from './Error';
import Modal1 from './Modal1';

function Home(props) {
  const [search, setsearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const {data1, setData1, cc, log, setlog} = useContext(MyContext);
  const [num1, setnum1] = useState(4);
  const [url1, seturl1] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [err, seterr] = useState(false);
  const [conth, setconth] = useState(0);
  const [contentheight1, setcontentheight1] = useState(0);
  // const [activity,setactivity]=useState(true)

  function handlescroll(event) {
    const offsetY = event.nativeEvent.contentOffset.y;
    console.log(data1.length);
    // if (contentheight1 > offsetY && offsetY > conth) {
    //   setnum1(num1 + 2);
    //   setLoading(true);
    //   setconth(offsetY);
    // }
  }
  function changeContentSize(contentWidth, conttentHeight) {
    setcontentheight1(conttentHeight);
  }

  const openModal = () => {
    if (log) {
      navigation.navigate('Login1');
      return;
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = `https://fakestoreapi.com/products?limit=${num1}`;

    // Make the GET request using fetch
    fetch(apiUrl)
      .then(response => response.json())
      .then(responseData => {
        let modifydata = responseData.map(val => {
          val.isfavourite = false;
          val.iscart = false;
          val.count = 0;
          return val;
        });
       // if(data1.length<modifydata.length){
          setData(modifydata);
          //setLoading(false);
          setData1(modifydata);
          //console.log("d",data1)
          //arr(modifydata)
          setLoading(false);
          //setLoading(!loading)
      //   }
        
      })
      .catch(error => {
        setLoading(false);
      });
  }, [num1]);
  //}, []);



  const handleEnterPress = text => {
    let p = text.toLowerCase();
//console.log(p)
    if (p.trim() == ''||p.trim()==" "||p.length==0) {
     
      seterr(false)
      setData(data1);
      return;
    }
    let y = data1.filter(val => {
      return (
        val.category.toLowerCase().includes(p) ||
        val.title.toLowerCase().includes(p)
      );
    });
    //console.log("y",y.length)
    if (y.length > 0) {
      setData(y);
      seterr(false);
    } else {
      setData(data1);
      seterr(true);
    }
  };

  const handleEnterPress1 = () => {
    let p = search.toLowerCase();
    //console.log(p)
    if (p.trim() == '') {
      setData(data1);
      return;
    }
    let y = data1.filter(val => {
      return (
        val.category.toLowerCase().includes(p) ||
        val.title.toLowerCase().includes(p)
      );
    });
    //console.log("y",y.length)
    if (y.length > 0) {
      setData(y);
      seterr(false);
    } else {
      setData(data1);
      seterr(true);
    }
  };
  return (
    <>
      {/* <View style={{backgroundColor: 'white'}}> */}
      <View style={{width: wp('100%')}}>
        {/* nav */}
        <View
          style={{
            backgroundColor: '#047BD5',
            height: hp('17%'),
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#047BD5',
              paddingStart: 10,
              paddingEnd: 10,
              height: hp('10%'),
              width: wp('100%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                //justifyContent: 'space-between',

                alignItems: 'center',
                height: hp('12%'),
                width: wp('48%'),
                // backgroundColor: 'red',
              }}>
              <TouchableOpacity
                style={{marginRight: '10%'}}
                onPress={openModal}>
                <Image
                  source={require('../menu.png')}
                  style={{height: hp('.6%'), width: wp('8%'), marginBottom: 2}}
                />
                <Image
                  source={require('../menu.png')}
                  style={{height: hp('.6%'), width: wp('8%'), marginBottom: 2}}
                />

                <Image
                  source={require('../menu.png')}
                  style={{height: hp('.6%'), width: wp('8%'), marginBottom: 2}}
                />
              </TouchableOpacity>
              {modalVisible && <Modal1 onClose={closeModal} />}
              <Image
                source={require('../flipkart.png')}
                style={{
                  height: hp('15%'),
                  width: wp('32%'),
                  marginBottom: '10%',
                  objectFit: 'contain',
                }}
              />
            </View>
            <View
              style={{
                height: hp('12%'),
                width: wp('40%'),
                // backgroundColor: 'green',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              {log ? (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login1');
                    //setlog(false)
                  }}>
                  <Image
                    source={require('../lw.png')}
                    style={{
                      height: hp('4%'),
                      width: wp('8%'),
                      objectFit: 'cover',
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Wish');
                    }}>
                    {/* <Image
                source={require('.././notification.png')}
                style={{height: hp('4%'), width: wp('8%')}}
              /> */}
                    <Image
                      source={require('../fav_white1.png')}
                      style={{
                        height: hp('3.5%'),
                        width: wp('7%'),
                        marginRight: 10,
                        marginTop: 4,
                        objectFit: 'contain',
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Mycart');
                    }}>
                    <Image
                      source={require('../cart.png')}
                      style={{
                        height: hp('4%'),
                        width: wp('8%'),
                        objectFit: 'contain',
                      }}
                    />
                    <View
                      style={{
                        backgroundColor: 'red',
                        position: 'absolute',
                        right: -4,
                        borderRadius: 50,
                        height: 18,
                        width: 18,
                      }}>
                      <Text style={{color: 'white', textAlign: 'center'}}>
                        {cc}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          {/* search */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',

              //borderWidth: 1,
              height: hp('6%'),
              width: wp('96%'),
              backgroundColor: 'white',
              // backgroundColor: 'purple',
              borderRadius: 6,
            }}>
            <View
              style={{
                width: wp('9%'),
                padding: wp('1%'),
                backgroundColor: 'white',
                justifyContent: 'center',
                borderRadius: 6,
              }}>
              <TouchableOpacity onPress={handleEnterPress1}>
                <Image
                  source={require('../search.png')}
                  style={{
                    height: hp('2.8%'),
                    width: wp('5%'),
                    objectFit: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>

            <TextInput
              style={{flex: 1, backgroundColor: 'white'}}
              placeholder="Enter Your Requirements"
              autoCapitalize="none"
              value={search}
              spellCheck={false}
              onChangeText={text => {
                setsearch(text);
                handleEnterPress(text);
              }}

              //onSubmitEditing={handleEnterPress}
            />

            <View
              style={{
                width: wp('7%'),
                backgroundColor: 'white',
                justifyContent: 'center',
                borderRadius: 6,
              }}>
              <Image
                source={require('../microphone.png')}
                style={{height: hp('2.8%'), width: wp('5%')}}
              />
            </View>
          </View>
          {/* </View> */}
          {/* bottom or body */}
        </View>
      </View>
      {!err ? (
        //      <ScrollView
        //      onScroll={handlescroll}
        //      onContentSizeChange={changeContentSize}
        //     contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}>
        //  {data.map(val => {
        //           return <Image1 key={val.id} value2={val} />;
        //         })}

        //       </ScrollView>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return <Image1 key={item.id} value2={item} />;
          }}
          //onScroll={handlescroll}
          //onContentSizeChange={changeContentSize}
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.1} // Load more when reaching the end
          onEndReached={() => {
            //setLoading(false);
           if(num1>data.length){
            setLoading(false)
            return;
           }
            setnum1(num1 + 2);
      setLoading(true);
          }}
          numColumns={2}
          contentContainerStyle={
            {
              //flexDirection: 'row',
              // flexWrap: 'wrap',
            }
          }
        />
      ) : (
        <Error />
      )}
      {loading ? (
        <View style={{backgroundColor: 'white'}}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <View></View>
      )}
    </>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    // justifyContent: "center",
    // alignItems: "center",
    color: 'black',
    backgroundColor: '#047BD5',
    height: hp('10%'),
    width: wp('100%'),
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});
