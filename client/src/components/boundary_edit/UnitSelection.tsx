import React, {useState} from 'react';
import {
  IconoirProvider,
  NavArrowDown,
  NavArrowUp,
  Ruler,
} from 'iconoir-react-native';
import {List} from 'react-native-paper';
import colors from '../../styles/colors/colors.ts';
import {StyleSheet} from 'react-native';

const UnitSelection = ({unit, setUnit}: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <IconoirProvider
      iconProps={{
        width: 20,
        height: 20,
        color: 'white',
        strokeWidth: 2,
      }}>
      <List.Accordion
        title={`Unit: ${unit}`}
        left={props => <Ruler style={styles.ruler} />}
        right={props => (isExpanded ? <NavArrowUp /> : <NavArrowDown />)}
        expanded={isExpanded}
        onPress={() => setIsExpanded(!isExpanded)}
        style={styles.accordion}
        titleStyle={styles.title}>
        <List.Item
          title="meter"
          onPress={() => {
            setUnit('meter');
            setIsExpanded(false);
          }}
          style={styles.listItem}
          titleStyle={styles.title}
        />
        <List.Item
          title="kilometer"
          onPress={() => {
            setUnit('kilometer');
            setIsExpanded(false);
          }}
          style={styles.listItem}
          titleStyle={styles.title}
        />
      </List.Accordion>
    </IconoirProvider>
  );
};

export default UnitSelection;

const styles = StyleSheet.create({
  accordion: {
    backgroundColor: colors.screenBackground,
  },
  ruler: {
    alignSelf: 'center',
  },
  title: {
    color: 'white',
  },
  listItem: {
    backgroundColor: colors.screenBackground,
  },
});
