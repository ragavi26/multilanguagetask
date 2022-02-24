import { View, Text } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';
import SwitchSelector from "react-native-switch-selector";

export default function screen() {
    const options=[
        {label:"English",value:'en'},
        {label:"French",value:'fr'},
        {label:"Italian",value:'it'},
      ];
    const {t,i18n}=useTranslation();
  return (
    <View>
        <SwitchSelector options={options} hasPadding initial={0}
          onPress={(language)=>{
            i18n.changeLanguage(language);
          }}
          />
          <Text style={{fontSize:26,textAlign:'center'}}>{t("Welcome")}</Text>
    </View>
  )
}