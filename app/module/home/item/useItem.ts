import {useEffect, useState} from 'react';
import {ItemProps} from './Item';
import {useDispatch} from 'react-redux';
import {homeActions} from '../../../redux';

export interface ItemHookReturnType {
  questionNumber: string;
  option: {
    yes: boolean;
    no: boolean;
    yesFlag: boolean;
    noFlag: boolean;
  };
  rules: {
    noAction: string;
    yesAction: string;
  };
  handleFirstButton: () => void;
  handleSecondButton: () => void;
}

const useItem = ({item, index}: ItemProps) => {
  const dispatch = useDispatch();
  const [option, setOption] = useState({
    yes: false,
    no: false,
    yesFlag: false,
    noFlag: false,
  });
  const [rules, setRules] = useState({
    noAction: '',
    yesAction: '',
  });
  const questionNumber = `(${index + 1}) ${item?.title}`;

  const handleFirstButton = (): void => {
    if (item?.validations?.required) {
      const resultObject = {
        title: questionNumber,
        id: index + 1,
        isRequired: true,
        result: !option.yes ? 'Yes' : '',
        asterisk: option.yes,
      };
      dispatch(homeActions.updateData(resultObject));
    } else {
      const resultObject = {
        title: questionNumber,
        id: index + 1,
        result: !option.yes ? 'Yes' : '',
        isRequired: false,
      };
      dispatch(homeActions.updateData(resultObject));
    }
    setOption(prevOption => ({
      ...prevOption,
      yes: !option.yes,
      no: false,
    }));
  };

  const handleSecondButton = (): void => {
    if (item?.validations?.required) {
      const resultObject = {
        title: questionNumber,
        isRequired: true,
        id: index + 1,
        result: !option.no ? 'No' : '',
        asterisk: option.no,
      };
      dispatch(homeActions.updateData(resultObject));
    } else {
      const resultObject = {
        title: questionNumber,
        id: index + 1,
        isRequired: false,
        result: !option.no ? 'No' : '',
      };
      dispatch(homeActions.updateData(resultObject));
    }
    setOption(prevOption => ({
      ...prevOption,
      no: !option.no,
      yes: false,
    }));
  };

  useEffect(() => {
    item?.Options?.map(e => {
      if (e?.option === 'Yes') {
        setOption(prevOption => ({
          ...prevOption,
          yesFlag: true,
        }));
      } else if (e?.option === 'No') {
        setOption(prevOption => ({
          ...prevOption,
          noFlag: true,
        }));
      }
    });
    item?.rules?.map(e => {
      if (e?.rule === 'No') {
        setRules(prevRules => ({
          ...prevRules,
          noAction: e?.action,
        }));
      } else if (e?.rule === 'Yes') {
        setRules(prevRules => ({
          ...prevRules,
          yesAction: e?.action,
        }));
      }
    });
  }, []);

  return {
    rules,
    questionNumber,
    option,
    handleFirstButton,
    handleSecondButton,
  };
};

export default useItem;
