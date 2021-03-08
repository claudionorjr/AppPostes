import React, { useCallback, useEffect, useRef, useState } from 'react';
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

import { useAuth } from '../../hooks/auth';
import { OutAppHeader, Loading } from '../../components';
import { Button, Input, LinkButton, Typography } from '../../elements';
import { Container, PasswordContainer } from './styles';
import getValidationErrors from '../../helpers/getValidationErrors';

const ForgotPassword: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);
  const [passwordState, setPasswordState] = useState<string>('');
  const { forgotPassword } = useAuth();
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleGoToSingIn = useCallback(() => navigation.goBack(), []);

  const handleForgotPassword = useCallback(
    async ({ username }: { username: string }) => {
      try {
        setIsLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Nome de usuário(a) é obrigatório'),
        });

        await schema.validate(
          { username },
          {
            abortEarly: false,
          },
        );

        const response = await forgotPassword(username);
        setPasswordState(response.password);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        Alert.alert(
          'Erro em recuperação de senha',
          'Ocorreu um erro ao recuperar sua senha, cheque as credenciais.',
        );
      }
    },
    [forgotPassword, passwordState, isLoading],
  );

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
          <OutAppHeader title="Recuperação de senha" />
          <Form
            ref={formRef}
            style={{ width: '100%' }}
            onSubmit={handleForgotPassword}
          >
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              name="username"
              icon="user"
              placeholder="Username"
            />
            <Button
              onPress={handleSubmit}
              text="Recuperar"
              disabled={isLoading}
            />
          </Form>
          <PasswordContainer>
            {isLoading === undefined && null}
            {isLoading && <Loading />}
            {isLoading === false && (
              <Typography
                color="White"
                fontFamily="Regular"
                size={20}
                text={`Senha: ${passwordState}`}
              />
            )}
          </PasswordContainer>
          <LinkButton text="Voltar para login" onPress={handleGoToSingIn} />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
