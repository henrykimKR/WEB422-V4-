import React from "react";
import Card from "react-bootstrap/Card";
import useSWR from "swr";

export default function ArtworkCardDetail({ objectID }) {
  const { data } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );

  if (!data) {
    return null;
  }

  const {
    primaryImage,
    primaryImageSmall,
    title,
    objectDate,
    classification,
    medium,
    artistDisplayName,
    creditLine,
    dimensions,
    artistWikidata_URL,
  } = data;

  return (
    <Card>
      {primaryImageSmall && <Card.Img variant="top" src={primaryImage} />}
      <Card.Body>
        <Card.Title>{title || "N/A"}</Card.Title>
        <Card.Text>
          <b>Date:</b> {objectDate || "N/A"}
          <br />
          <b>Classification:</b> {classification || "N/A"}
          <br />
          <b>Medium:</b> {medium || "N/A"}
          <br />
          <br />
          <b>Artist:</b> {artistDisplayName || "N/A"} ({" "}
          {artistDisplayName && (
            <a href={artistWikidata_URL} target="_blank" rel="noreferrer">
              wiki
            </a>
          )}{" "}
          )
          <br />
          <b>Credit Line:</b> {creditLine || "N/A"}
          <br />
          <b>Dimensions:</b> {dimensions || "N/A"}
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
