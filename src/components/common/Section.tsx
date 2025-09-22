import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../../hooks/useTheme'
import { spacing } from '../../theme/spacing'

interface SectionProps {
  title: string
  children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  const { colors } = useTheme()

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>
        {title}
      </Text>
      <Text style={[styles.description, { color: colors.textSecondary }]}>
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    marginTop: spacing.sm,
    fontSize: 18,
    fontWeight: '400',
  },
})