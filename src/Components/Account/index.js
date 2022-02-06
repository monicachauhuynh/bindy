import React, { useState } from "react";
import {
  Form,
  Checkbox,
  Dropdown,
  Button,
  Input,
  Select,
} from "semantic-ui-react";
import "./style.css";
import {
  genderOptions,
  interestOptions,
  keywords,
  cities,
  sexualOrientaions,
} from "./constants";

const Account = () => {
  const [keywordOptions, setKeywordOptions] = useState(keywords);
  const [locationOptions, setLocationOptions] = useState(cities);
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch("http://localhost:5000/user", requestOptions).then((response) =>
      response.json()
    );
  };

  const handleAddition = (e, result) => {
    const { id, value } = result;
    if (id === "keywords") {
      setKeywordOptions([{ text: value, value }, ...keywordOptions]);
    } else if (id === "location") {
      setLocationOptions([{ text: value, value }, ...locationOptions]);
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleDropdownChange = (e, result) => {
    e.preventDefault();
    const { id, value } = result;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div className="wrapper">
      <div className="heading">
        <div className="title">Edit Profile</div>
        <div className="button-container">
          <Button className="save-btn" onClick={handleSubmit}>
            SAVE
          </Button>
          <Button className="exit-btn">EXIT</Button>
        </div>
      </div>
      <Form className="account-form">
        <div className="box left-box">
          <Checkbox
            toggle
            label="Show my Bindy profile"
            className="toggle-btn"
          />
          <textarea
            id="about"
            label="About"
            placeholder="Tell us more about you..."
            className="about-field"
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            id="employer"
            label="School/Company"
            placeholder="School/Company name"
            onChange={handleInputChange}
          />

          <Form.Field>
            <label>Keywords</label>
            <Dropdown
              options={keywordOptions}
              placeholder="Add keywords about yourself"
              search
              selection
              fluid
              multiple
              allowAdditions
              onAddItem={handleAddition}
              onChange={handleDropdownChange}
              id="keywords"
              className="keywords-input"
            />
          </Form.Field>
        </div>

        <div className="box right-box">
          <Form.Field inline>
            <label>Pronouns</label>
            <Input
              placeholder="they/them"
              onChange={handleInputChange}
              id="pronouns"
            />
          </Form.Field>

          <Form.Field inline>
            <label>Gender</label>
            <Select
              className="select"
              options={genderOptions}
              placeholder="Gender"
              onChange={handleDropdownChange}
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
              onChange={handleDropdownChange}
            />
          </Form.Field>

          <Form.Field>
            <label>Sexual Orientation</label>
            <Select
              fluid
              placeholder="Pansexual"
              options={sexualOrientaions}
              className="select"
              //TODO - handle sexual orientation change
              //   id="interest"
              // onChange={handleDropdownChange}
            />
          </Form.Field>

          <Form.Field>
            <label>City</label>
            <Dropdown
              placeholder="Search for your city name"
              className="select"
              search
              selection
              options={locationOptions}
              id="location"
              onChange={handleDropdownChange}
              allowAdditions
              onAddItem={handleAddition}
            />
          </Form.Field>

          <button fluid basic color="black" className="connect-btn">
            CONNECT INSTAGRAM
          </button>
          <button fluid basic color="black" className="connect-btn">
            CONNECT SPOTIFY
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Account;
