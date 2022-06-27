import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

const CustomCard = styled(Card)`
  &&& {
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const UserCard = ({ user }) => {
  return (
    <CustomCard>
      <Image
        src={user.avatar}
        fluid
      />

      <Card.Content>
        <p>{user.anonymousName}</p>
        <p>
          {user.age}, {user.pronouns}
        </p>
      </Card.Content>
      <Card.Content>
        <p>
          <Icon name="location arrow" />
          {user.distanceAway} km away
        </p>
        <p>
          <Icon name="map marker alternate" />
          {user.location}
        </p>
        <p>
          <Icon name="briefcase" />
          {user.schoolOrCompany}
        </p>
        <p>{user.about}</p>
      </Card.Content>
    </CustomCard>
  );
};

export default UserCard;
