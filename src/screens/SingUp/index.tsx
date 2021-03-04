import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { OutAppHeader } from '../../components';
import { Button, Input, LinkButton } from '../../elements';
import { Container } from './styles';
import getValidationErrors from '../../helpers/getValidationErrors';

interface SingUpFormData {
  username: string;
  password: string;
}

const SingUp: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const handleGoToSignIn = useCallback(() => navigation.goBack(), []);

  const handleSingUp = useCallback(async (data: SingUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('Nome de usuário(a) é obrigatório'),
        password: Yup.string().required('Senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });

      // history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }

      Alert.alert(
        'Erro na criação',
        'Ocorreu um erro ao criar sua conta, cheque seus dados.',
      );
    }
  }, []);

  const handleSubmit = useCallback(() => {
    formRef.current?.submitForm();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <OutAppHeader title="Faça seu Cadastro" />

          <Form ref={formRef} style={{ width: '100%' }} onSubmit={handleSingUp}>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              name="username"
              icon="mail"
              placeholder="Username"
            />
            <Input
              name="password"
              icon="lock"
              placeholder="Password"
              secureTextEntry
              textContentType="newPassword"
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />
            <Button onPress={handleSubmit} text="Cadastrar" />
          </Form>

          <LinkButton
            text="Ir para Login"
            iconName="arrow-left"
            onPress={handleGoToSignIn}
          />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SingUp;
