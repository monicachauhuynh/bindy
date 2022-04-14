import React, { useCallback, useState } from "react";
import { Form, Input, Grid, Select } from "semantic-ui-react";
import SliderView from "semantic-ui-react-slider";
import { genderOptions, interestOptions } from "../Account/constants";
import styled from "styled-components";

const Title = styled.h1`
  font-family: DM Sans;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 88px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.darkGray};
`;

const SignupForm = styled(Form)({
  "border-radius": "20px",
  background: "white",
  display: "flex",
  "align-items": "center",
  "justify-content": "left",
  padding: "3rem !important",
});

const SignupButton = styled.button`
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

const Signup = () => {
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(130);
  const [minDistance, setMinDistance] = useState(0);
  const [maxDistance, setMaxDistance] = useState(100);

  const onSliderAgeRangeChange = useCallback((minAge, maxAge) => {
    setMinAge(minAge);
    setMaxAge(maxAge);
  }, []);

  const onSliderDistanceChange = useCallback((minDistance, maxDistance) => {
    setMinAge(minDistance);
    setMaxAge(maxDistance);
  }, []);

  return (
    <div style={{ marginLeft: "140px" }}>
      <div style={{ marginBottom: "40px" }}>
        <Title>Sign Up</Title>
      </div>
      <Grid container>
        <SignupForm>
          <Grid.Column mobile={16} tablet={8} computer={7}>
            <Form.Field inline>
              <label>Username</label>
              <Input id="username" />
            </Form.Field>
            <Form.Field inline>
              <label>D. O. B</label>
              <Input date id="dateOfBirth" />
            </Form.Field>
            <Form.Field inline>
              <label>Gender</label>
              <Select
                className="select"
                options={genderOptions}
                placeholder="Gender"
                id="gender"
              />
            </Form.Field>

            <Form.Field inline>
              <label>Interest</label>
              <Select
                className="select"
                options={interestOptions}
                placeholder="Everyone"
                id="interest"
              />
            </Form.Field>

            <Form.Field>
              <label>Max Distance</label>
              <SliderView
                className="signup-slider"
                onSliderValuesChange={onSliderDistanceChange}
                sliderMinValue={0}
                sliderMaxValue={100}
              />
            </Form.Field>

            <Form.Field>
              <label>Age Range</label>
              <SliderView
                className="signup-slider"
                onSliderValuesChange={onSliderAgeRangeChange}
                sliderMinValue={18}
                sliderMaxValue={130}
              />
            </Form.Field>

            <Grid>
              <Grid.Column textAlign="center">
                <SignupButton>SIGN UP</SignupButton>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </SignupForm>
      </Grid>
    </div>
  );
};

export default Signup;
