interface ItemType {
  title: string;
  titleImages: Array<string>;
  desc: string;
  type: string;
  validations: {
    required: boolean;
  };
  rules: {
    rule: string;
    action: string;
  }[];
  Options: {
    option: string;
  }[];
}

interface ResultArrayType {
  id: number;
  result: string;
  isRequired: boolean;
  asterisk?: boolean;
  title: string;
}

interface HomeStateType {
  homeData: {
    result: Array<ResultArrayType>;
  };
}

export type {ItemType, ResultArrayType, HomeStateType};
