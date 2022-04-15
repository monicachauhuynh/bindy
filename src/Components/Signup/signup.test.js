import React from 'react';
import { render } from '@testing-library/react';
import Signup from './index';
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <Signup />
    </ThemeProvider>
  );

test('renders Signup', () => {
  const { getByText } = renderComponent({ theme: theme });
  const username = getByText('Username');
  expect(username).toBeInTheDocument();

  const dateOfBirth = getByText('D. O. B');
  expect(dateOfBirth).toBeInTheDocument();

  const gender = getByText('Gender');
  expect(gender).toBeInTheDocument();

  const interest = getByText('Interest');
  expect(interest).toBeInTheDocument();

  const maxDistance = getByText('Max Distance');
  expect(maxDistance).toBeInTheDocument();

  const ageRange = getByText('Age Range');
  expect(ageRange).toBeInTheDocument();

const createAccount = getByText('SIGN UP');
  expect(createAccount).toBeInTheDocument();
});

