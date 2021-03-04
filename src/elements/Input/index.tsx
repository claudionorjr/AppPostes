import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useField } from '@unform/core';

import { Container, TextInput } from './styles';

interface Props extends TextInputProps {
  name: string;
  icon: string;
}

interface InputRefProps {
  value: string;
}

const Input: React.FC<Props> = ({ name, icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { defaultValue = '', error, fieldName, registerField } = useField(name);
  const inputElementRef = useRef<any>(null);
  const inputRef = useRef<InputRefProps>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(_ref: any, value) {
        inputRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current.value);
  }, []);

  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#ff9000' : '#666360'}
      />
      <TextInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        onChangeText={value => {
          inputRef.current.value = value;
        }}
        placeholderTextColor="#666360"
        {...rest}
      />
    </Container>
  );
};

export default Input;
