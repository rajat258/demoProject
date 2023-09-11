import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Strings} from '../../../constants';
import {horizontalScale} from '../../../theme';
import {ItemType} from '../../../types';
import styles from './Styles';
import useItem from './useItem';
import images from '../../../assets/images';

export interface ItemProps {
  item: ItemType;
  index: number;
}

const InputBox = (): JSX.Element => {
  return (
    <TextInput placeholder={Strings.commentBox} style={styles.textInput} />
  );
};

const CameraImage = (): JSX.Element => {
  return (
    <TouchableOpacity style={styles.row}>
      <Image source={images.camera} style={styles.camera} />
    </TouchableOpacity>
  );
};

const Item = ({item, index}: ItemProps) => {
  const {questionNumber, option, handleFirstButton, handleSecondButton, rules} =
    useItem({index, item});
  const firstButton = StyleSheet.flatten([
    styles.button,
    option.yes && {backgroundColor: 'green'},
  ]);
  const secondButton = StyleSheet.flatten([
    styles.button,
    {marginLeft: horizontalScale(30)},
    option.no && {backgroundColor: 'green'},
  ]);
  const firstText = StyleSheet.flatten([
    styles.buttonText,
    option.yes && {color: 'white'},
  ]);
  const secondText = StyleSheet.flatten([
    styles.buttonText,
    option.no && {color: 'white'},
  ]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.questionNumberText}>{questionNumber}</Text>
          {item?.validations?.required && (
            <Text style={styles.asterisk}>*</Text>
          )}
        </View>
        <View style={styles.row}>
          {option.yesFlag && (
            <TouchableOpacity style={firstButton} onPress={handleFirstButton}>
              <Text style={firstText}>{Strings.yes}</Text>
            </TouchableOpacity>
          )}
          {option.noFlag && (
            <TouchableOpacity style={secondButton} onPress={handleSecondButton}>
              <Text style={secondText}>{Strings.no}</Text>
            </TouchableOpacity>
          )}
        </View>
        {option.yes && rules?.yesAction === 'Comment' && <InputBox />}
        {option.yes && rules?.yesAction === 'Image' && <CameraImage />}
        {option.no && rules?.noAction === 'Comment' && <InputBox />}
        {option.no && rules?.noAction === 'Image' && <CameraImage />}
      </View>
      <View style={styles.line} />
    </>
  );
};

export default Item;
