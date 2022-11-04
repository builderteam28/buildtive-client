import React from 'react';
import { Button, useTheme } from 'react-native-paper';

export const ThemeButton = ({ onPress, withParameter, title='Button' }) => {
  const theme = useTheme();
  return (
    <Button mode="contained" style={{ backgroundColor: theme.colors.yellowBee }} onPress={() => onPress(withParameter)}>
      {title}
    </Button>
  );
};
