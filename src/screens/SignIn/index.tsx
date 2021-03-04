import React, { useCallback, useRef } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { OutAppHeader } from '../../components';
import { Button, Input, LinkButton } from '../../elements';
import { Container } from './styles';
import getValidationErrors from '../../helpers/getValidationErrors';

interface SignInFormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleGoToSingUp = useCallback(() => navigation.navigate('SingUp'), []);

  const handleSignIn = useCallback(async (data: SignInFormData) => {
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
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais.',
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
          <OutAppHeader title="Faça seu Login" />

          <Form ref={formRef} style={{ width: '100%' }} onSubmit={handleSignIn}>
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
            <Button onPress={handleSubmit} text="Entrar" />
          </Form>
          <LinkButton
            text="Esqueci minha senha"
            onPress={() => console.log('Button Login')}
          />
          <LinkButton
            text="Cadastrar"
            iconName="log-in"
            onPress={handleGoToSingUp}
          />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
