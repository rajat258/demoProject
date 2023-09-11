import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {Data, Strings} from '../../constants';
import styles from './Styles';
import {Item} from './item';
import useHome, {HomeHookReturnType} from './useHome';

const ListFooterComponent = ({
  handleSave,
}: {
  handleSave: () => void;
}): JSX.Element => {
  return (
    <TouchableOpacity onPress={handleSave} style={styles.button}>
      <Text>{Strings.save}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = (): JSX.Element => {
  const {handleSave}: HomeHookReturnType = useHome();

  return (
    <FlatList
      renderItem={({index, item}) => <Item {...{index, item}} />}
      data={Data.category?.[0]?.forms?.[0].questions}
      ListFooterComponent={<ListFooterComponent {...{handleSave}} />}
    />
  );
};

export default HomeScreen;
