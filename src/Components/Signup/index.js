import React, { useCallback, useState } from "react";
import { Form, Input, Grid, Select } from "semantic-ui-react";
import SliderView from "semantic-ui-react-slider";
import "./style.css";
import { genderOptions, interestOptions } from "../Account/constants";

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
    <div className="signup-wrapper">
      <div className="signup-heading">
        <div className="signup-title">Sign Up</div>
      </div>
      <Grid container>
        <Form className="signup-form">
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
                <button className="signup-btn">SIGN UP</button>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Form>
      </Grid>
    </div>
  );
};

export default Signup;
