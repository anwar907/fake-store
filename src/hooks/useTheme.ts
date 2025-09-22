import { useColorScheme } from 'react-native'
import { colors } from '../theme/colors'

export const useTheme = () => {
  const isDark = useColorScheme() === 'dark'
  
  return {
    colors: isDark ? colors.dark : colors.light,
    isDark
  }
}