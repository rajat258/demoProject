import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Strings} from '../../../constants';
import {horizontalScale} from '../../../theme';
import {ResultArrayType} from '../../../types';
import {ItemStyles} from '../../home';

export interface ItemProps {
  item: ResultArrayType;
}

const Item = ({item}: ItemProps): JSX.Element => {
  const firstButton = StyleSheet.flatten([
    ItemStyles.button,
    item?.result === 'Yes' && {backgroundColor: 'green'},
  ]);
  const secondButton = StyleSheet.flatten([
    ItemStyles.button,
    {marginLeft: horizontalScale(30)},
    item?.result === 'No' && {backgroundColor: 'green'},
  ]);
  const firstText = StyleSheet.flatten([
    ItemStyles.buttonText,
    item?.result === 'Yes' && {color: 'white'},
  ]);
  const secondText = StyleSheet.flatten([
    ItemStyles.buttonText,
    item?.result === 'No' && {color: 'white'},
  ]);

  return (
    <>
      <View style={ItemStyles.container}>
        <View style={ItemStyles.row}>
          <Text style={ItemStyles.questionNumberText}>{item?.title}</Text>
          {item?.isRequired && <Text style={ItemStyles.asterisk}>*</Text>}
        </View>
        <View style={ItemStyles.row}>
          <View style={firstButton}>
            <Text style={firstText}>{Strings.yes}</Text>
          </View>
          <View style={secondButton}>
            <Text style={secondText}>{Strings.no}</Text>
          </View>
        </View>
      </View>
      <View style={ItemStyles.line} />
    </>
  );
};

export default Item;
