import React, { useEffect, useState } from "react";
import Section from "../../../components/organisms/Section/Section";
import Title from "../../../components/atoms/Title/Title";

import { SecondaryButton } from "../../../components/atoms/Button/Button";

import { RoomsSectionContents, RoomsWrapper } from "./RoomsSection.styles";
import { theme } from "../../../styles/theme";

import roomsData from "../../../assets/data/rooms-data";

const RoomSection: React.FC = () => {
  const initialRooms: {
    id: number;
    img: string;
    title: string;
    info: string;
    price: number;
  }[] = [];
  const [rooms, setRooms] = useState(initialRooms);

  useEffect(() => {
    setRooms(roomsData);
  }, []);

  return (
    <Section color={theme.colors.white}>
      <RoomsSectionContents>
        <Title>Our Rooms</Title>
        <p>Lorem ipsum dol</p>
        {/* <RoomsWrapper>{rooms.map((room) => {
          return <Room key{room.id} />
        })} */}
        {/* </RoomsWrapper> */}
        <SecondaryButton>Find out more</SecondaryButton>
      </RoomsSectionContents>
    </Section>
  );
};

export default RoomSection;
