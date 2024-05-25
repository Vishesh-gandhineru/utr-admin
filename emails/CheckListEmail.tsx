import {
  Button,
  Html,
  Heading,
  Container,
  Row,
  Column,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

type FormData = {
  propertyName: string;
  bookingId: string;
  dateOfCheck: string;
  checkConductedBy: string;
  propertyManagerName: string;
  onSiteCareTakerName: string;
  Amenities: Record<string, boolean>;
};

export default function CheckListEmail(formData: FormData) {
  const {
    propertyName,
    bookingId,
    dateOfCheck,
    checkConductedBy,
    propertyManagerName,
    onSiteCareTakerName,
    Amenities,
  } = formData;

  return (
    <Html>
      <Heading as="h1">This checklist is for {propertyName}</Heading>
      <Tailwind>
        <Section>
          <Text>
            <b>Property name : </b>
            {propertyName}
          </Text>
            <Text>
                <b>Booking ID : </b>
                {bookingId}
            </Text>
            <Text>
                <b>Date of Check : </b>
                {dateOfCheck}
            </Text>
            <Text>
                <b>Check Conducted By : </b>
                {checkConductedBy}
            </Text>
            <Text>
                <b>Property Manager Name : </b>
                {propertyManagerName}
            </Text>
            <Text>
                <b>On Site Care Taker Name : </b>
                {onSiteCareTakerName}
            </Text>
            <Heading as="h2">Amenities</Heading>
            <ul>
                {Object.entries(Amenities).map(([key, value]) => (
                    <li key={key}>
                        {key} : {value ? "Yes" : "No"}
                    </li>
                ))}
            </ul>
        </Section>
      </Tailwind>
    </Html>
  );
}
