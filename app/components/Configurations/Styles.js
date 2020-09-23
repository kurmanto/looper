import { StyleSheet } from 'react-native';

export const confStyles = StyleSheet.create({
  settings: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 25

  },
  label: {
    fontWeight: "800",
    fontSize: 25,
    color: 'rgba(242,242,247,1)',
    fontFamily: 'TrebuchetMS-Bold'
  },
  optionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 0
  },
  optionValue: {
    fontSize: 25,
    fontWeight: "700",
    marginLeft: 40,
    color: 'rgba(72, 72, 74, 1)',
    fontFamily: 'TrebuchetMS-Bold'
  }
});
