import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {HomeStateType} from '../../types';
import {Item} from './item';

const AnswerScreen = () => {
  const {result: data} = useSelector((state: HomeStateType) => state.homeData);

  return <FlatList renderItem={({item}) => <Item {...{item}} />} data={data} />;
};

export default AnswerScreen;
