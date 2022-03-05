import React from "react";
import {
  Form,
  Input,
  Grid,
  Button,
  Select,
  Segment,
  Label,
} from "semantic-ui-react";
import "./style.css";
import { genderOptions, interestOptions } from "../Account/constants";

const Signup = () => {
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
