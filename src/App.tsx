import React, { useEffect, useState } from 'react'
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import { CustomAppBar } from './components/header/appBar'
import { useTheme } from './hooks/useTheme'
import { ReduxProvider } from './providers/ReduxProvider'
import { spacing } from './theme/spacing'

type ListError = {
  event_id: string,
  project: number,
  release: string,
  dist: string,
  platform: string,
  environment: string,
  message: string,
  timestamp: string,
  level: string,
  logger: string,
  tags: Record<string, string>,
  culprit: string,
  extra: Record<string, any>,
  context: Record<string, any>,
  user: Record<string, any>,
  ip_address: string,
  title: string,
  type: string,
}

const AppContent = () => {
  const { colors, isDark } = useTheme()
  const [listError, setListError] = useState<ListError[]>([])

  const getListError = async () => {
    const token = process.env.SENTRY_TOKEN || 'token';
    console.log('isi tooken', token);
    try {
      const response = await fetch('https://de.sentry.io/api/0/projects/kuasaiteknologi/flutter/events/', {
        headers: {
          'Authorization': `Bearer `,
          'Content-Type': 'application/json'
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setListError(data)
        console.log(data)
      } else {
        console.log('error', JSON.stringify(response.body))
        console.error('Error:', response.status)
      }
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }

  useEffect(() => {
    getListError()
  }, [])

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <CustomAppBar title="Crash Report"/>
      <View style={[styles.content, { backgroundColor: colors.surface }]}>
          <FlatList
          data={listError}
          renderItem={({item}) => <Text>{item.user.ip_address}</Text>}
          />
        </View>
    </View>
  )
}

const App = () => {
  return (
    <ReduxProvider>
      <AppContent />
    </ReduxProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    borderRadius: spacing.sm,
    paddingVertical: spacing.lg,
  },
})

export default App
