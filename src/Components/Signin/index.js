import React from "react";
import { Form, Input, Grid } from "semantic-ui-react";
// import SliderView from "semantic-ui-react-slider";
import styled from 'styled-components';

const Title = styled.h1`
  font-family: DM Sans;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 88px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.darkGray};
`;

const SigninForm = styled(Form)({
  'border-radius': '20px',
  'background': 'white',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'left',
  'padding': '3rem !important'
})

const SigninButton = styled.button`
  height: 40px;
  width: 200px;
  font-family: DM Sans;
  font-size: 14px;
  color: white;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  align-self: center;
  background: ${props => props.theme.linearGradient};
  border: transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`

const Signin = () => {
  return (
    <div style={{ marginLeft: "140px" }}>
      <div style={{ marginBottom: "40px" }}>
        <Title>Sign In</Title>
      </div>
      <Grid container>
        <SigninForm>
          <Grid.Column mobile={16} tablet={8} computer={7}>
            <Form.Field inline>
              <label>Username</label>
              <Input id="username" />
            </Form.Field>
            <Form.Field inline>
              <label>Password</label>
              <Input date id="dateOfBirth" />
            </Form.Field>
            <Grid>
              <Grid.Column textAlign="center">
                <SigninButton>SIGN UP</SigninButton>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </SigninForm>
      </Grid>
    </div>
  );
};

export default Signin;
