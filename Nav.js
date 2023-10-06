<>
{/* <View style={{backgroundColor: 'white'}}> */}
  <View style={{width: wp('100%')}}>
    {/* nav */}
    <View style={{backgroundColor:'#047BD5',height:hp('20%'),alignItems:'center'}}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#047BD5',
        paddingStart: 10,
        paddingEnd: 10,
        height: hp('11%'),
        width:wp('100%')
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: hp('12%'),
          width: wp('48%'),
          // backgroundColor: 'red',
        }}>
        <View style={{}}>
          <Image
            source={require('./menu.png')}
            style={{height: hp('.6%'), width: wp('10%'), marginBottom: 2}}
          />
          <Image
            source={require('./menu.png')}
            style={{height: hp('.6%'), width: wp('10%'), marginBottom: 2}}
          />
          <Image
            source={require('./menu.png')}
            style={{height: hp('.6%'), width: wp('10%'), marginBottom: 2}}
          />
        </View>
        <Image
          source={require('./flipkart.png')}
          style={{height: hp('12%'), width: wp('30%')}}
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
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('./notification.png')}
            style={{height: hp('4%'), width: wp('8%')}}
          />
          <Image
            source={require('./cart.png')}
            style={{height: hp('4%'), width: wp('8%')}}
          />
        </View>
      </View>
      
      
    </View>
    {/* search */}
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',

        borderWidth: 1,
        height: hp('7%'),
        width: wp('98%'),
        backgroundColor: 'purple',
      }}>
      <View
        style={{
          width: wp('9%'),
          padding: wp('1%'),
          backgroundColor:'white',
          justifyContent: 'center',
        }}>
        <Image
          source={require('./search.png')}
          style={{height: hp('2.8%'), width: wp('5%')}}
        />
      </View>
      
        <TextInput
        style={{flex: 1,backgroundColor:'white'}}
          placeholder="Enter Your Requirements"
          autoCapitalize="none"
          value={search}
          spellCheck={false}
          onChangeText={text => {
            setsearch(text)
          }}
          onSubmitEditing={handleEnterPress}
        />
      
      <View
        style={{
          width: wp('7%'),
          backgroundColor: 'white',
          justifyContent: 'center',
        }}>
        <Image
          source={require('./microphone.png')}
          style={{height: hp('2.8%'), width: wp('5%')}}
        />
      </View>
    </View>
    {/* </View> */}
    {/* bottom or body */}
    
  
  </View>
</View>
<ScrollView contentContainerStyle={{flexDirection:'row',flexWrap:'wrap'}}>
    
      <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
      <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
      <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
      <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
      <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
      <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
      <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
      <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
     
 
    </ScrollView>
</>







return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: hp('50%'),
        width: wp('50%'),
        borderWidth: 1,
        padding: '2%',
      }}>
      <Image
        source={{
          uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        }}
        style={{height: '40%', width: '80%',borderWidth:1,paddingTop:3}}
      />
      <View
        style={{
          backgroundColor: 'white',
          height: '50%',
          width: '100%',
          borderWidth: 1,
        }}>
             <Text numberOfLines={1} ellipsizeMode="tail" style={{}}>
             Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </Text>
      <Text numberOfLines={1} ellipsizeMode="tail" style={{}}>
      men's clothing
      </Text>
      <View></View>
      <Text numberOfLines={1} ellipsizeMode="tail" style={{}}>
      109.95
      </Text>
      <Button
  
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
        </View>
    </View>
  );