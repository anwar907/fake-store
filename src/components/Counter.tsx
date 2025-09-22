import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useTheme } from '../hooks/useTheme'
import { decrement, increment, reset } from '../store/counterSlice'
import { spacing } from '../theme/spacing'

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const { colors } = useTheme()

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Counter: {count}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(increment())}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(decrement())}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => dispatch(reset())}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: spacing.lg
  },
  title: {
    fontSize: 24,
    marginBottom: spacing.lg
  },
  button: {
    backgroundColor: '#007AFF',
    padding: spacing.md,
    margin: spacing.xs,
    borderRadius: spacing.sm,
    minWidth: 50,
    alignItems: 'center'
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    padding: spacing.md,
    margin: spacing.xs,
    borderRadius: spacing.sm,
    minWidth: 80,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default Counter