import React from 'react';
import { useTranslation } from 'react-i18next';
import Body from 'native-base';
import { Container } from 'native-base';
import Content from "native-base";
import { Header } from 'react-native/Libraries/NewAppScreen';
import {Text} from 'react-native';

import NativeBaseProvider from 'native-base'
import SwitchSelector from "react-native-switch-selector";
import Lang from './languages/Lang';
const options=[
  {label:"English",value:'en'},
  {label:"French",value:'fr'},
  {label:"Italian",value:'it'},
];
const App=()=>{
  return(
    <Lang/>
  )
  // return(
  //   <NativeBaseProvider>
  //   <Container>
  //     <Header>
  //       <Body>
  //         <SwitchSelector options={options} hasPadding initial={0}
  //         onPress={(language)=>{
  //           i18n.changeLanguage(language);
  //         }}
  //         />
  //       </Body>
  //     </Header> 
  //     <Content
  //       padder
  //       contentContainerStyle={{
  //         flex:1,
  //         alignitems:'center',
  //         justifyContent:'center',
  //       }}>
  //         <Text style={{fontSize:26,textAlign:'center'}}>{t("Welcome")}</Text>
  //       </Content>

      
  //   </Container>
  //   </NativeBaseProvider>
  // );
};
export default App;