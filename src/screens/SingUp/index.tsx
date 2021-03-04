import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { OutAppHeader } from '../../components';
import { Button, Input, LinkButton } from '../../elements';
import { Container } from './styles';

const SingUp: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const handleGoToSingIn = useCallback(() => navigation.goBack(), []);

  const handleSingIn = useCallback((data: any) => {
    console.log(data);
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

          <Form ref={formRef} style={{ width: '100%' }} onSubmit={handleSingIn}>
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
            onPress={handleGoToSingIn}
          />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SingUp;
