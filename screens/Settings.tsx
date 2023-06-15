import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { RootStackParamList } from '.'
import { StyleSheet, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import SelectDropdown from 'react-native-select-dropdown'

type LangType = {
  lang: string,
  type: 'en' | 'ru'
}

const Settings: React.FC<NativeStackScreenProps<RootStackParamList, "Settings">> = ({navigation}) => {
  const { t, i18n} = useTranslation()

  const languages: Array<LangType> = [
    {
      lang: t('english'),
      type: 'en'
    },
    {
      lang: t('russian'),
      type: 'ru'
    }
  ]

  const currentLang = languages.find(lang => lang.type == i18n.language)

  React.useEffect(() => {
    navigation.setOptions({
      title: t('settings') || 'Settings'
    })
  }, [i18n.language])

  const onChangeLanguage = (lang: LangType) => {
    i18n.changeLanguage(lang?.type)
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{t("switchLang")}</Text>
      <SelectDropdown
        data={languages}
        onSelect={(item: LangType) => onChangeLanguage(item)}
        defaultButtonText={currentLang?.lang}
        buttonStyle={{ borderWidth: 1 }}
        rowTextForSelection={(item: LangType) => item.lang}
        buttonTextAfterSelection={(item: LangType) =>
          currentLang?.lang || item.lang
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold'
  }
})

export default Settings