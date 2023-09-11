import {useEffect} from 'react';
import {Data, Routes, Strings} from '../../constants';
import type {HomeStateType, ResultArrayType} from '../../types';
import {useDispatch, useSelector} from 'react-redux';
import {homeActions} from '../../redux';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface HomeHookReturnType {
  handleSave: () => void;
}

const useHome = (): HomeHookReturnType => {
  const resultArray = [] as Array<ResultArrayType>;
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const {result} = useSelector((state: HomeStateType) => state.homeData);

  useEffect(() => {
    const data = Data.category?.[0]?.forms?.[0].questions;
    for (let i = 0; i < data?.length; i++) {
      if (data?.[i]?.validations?.required) {
        resultArray.push({
          title: `(${i + 1}) ${data?.[i]?.title}`,
          id: i + 1,
          result: '',
          asterisk: true,
          isRequired: data?.[i]?.validations?.required,
        });
      } else {
        resultArray.push({
          title: `(${i + 1}) ${data?.[i]?.title}`,
          id: i + 1,
          result: '',
          isRequired: data?.[i]?.validations?.required,
        });
      }
    }
    dispatch(homeActions.addData(resultArray));
  }, []);

  const handleSave = (): void => {
    const isClear = result?.every(e => {
      if (typeof e?.asterisk === 'boolean') {
        return e?.asterisk === false;
      } else {
        return true;
      }
    });
    if (isClear) {
      navigation.navigate(Routes.answer);
    } else {
      console.error(Strings.answerAll);
    }
  };

  return {handleSave};
};

export default useHome;
