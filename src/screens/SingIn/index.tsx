import React, { useCallback, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { OutAppHeader } from '../../components';
import { Button, Input, LinkButton } from '../../elements';
import { Container } from './styles';

const SingIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleGoToSingUp = useCallback(() => navigation.navigate('SingUp'), []);

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
          <OutAppHeader title="Faça seu Login" />

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

export default SingIn;
