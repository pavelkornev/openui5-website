import React from "react";
import { graphql } from "gatsby"

import Section from "../components/Section";
import { List, ListItem } from "../components/List";
import Tile from "../components/Tile";
import Button from "../components/Button";
import Text from "../components/Text";
import DefaultTemplate from "../templates/default";

const IndexPage = ({ data: { allFeaturesJson, indexJson } }) => {
    const { startCoding } = indexJson;
    return (
        <DefaultTemplate headerView="full">
            <Section>
                <List column="3">
                    { allFeaturesJson.edges.map(({ node }, idx) => {
                        return (
                            <ListItem
                                key={idx}
                            >
                                <Tile
                                    align="center"
                                    title={node.title}
                                    description={node.description}
                                    icon={() => <img src={node.image.publicURL} alt={node.title} height="98" />}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </Section>
            <Section color="lightblue" align="center">
                <Text size="1" style={{ marginBottom: "var(--default-margin-half)" }}>{startCoding.title}</Text>
                <Text
                    size="2"
                    font="light"
                    style={{
                        width: "73%",
                        maxWidth: "1024px",
                        margin: "0 auto 30px"
                    }}
                >{startCoding.description}</Text>
                <iframe
                    title={startCoding.title}
                    style={{
                        width: '100%',
                        height: '500px',
                        marginBottom: 'var(--default-margin)'
                    }}
                    src="https://embed.plnkr.co/MDAG4XxSJ4TXt1Ms/"
                    frameBorder="0"
                    allowfullscren="allowfullscren"
                    className="plunkerEmbedded"
                />
                {
                    startCoding.button
                    ? (
                        <Button
                            href={startCoding.button.url}
                            rel="noopener"
                            target="_blank"
                            size="2"
                        >{startCoding.button.title}</Button>
                    )
                    : null
                }
            </Section>
        </DefaultTemplate>
    );
};

export default IndexPage;

export const query = graphql`
    query {
        allFeaturesJson {
            edges {
                node {
                    title,
                    description,
                    image {
                        publicURL
                    }
                }
            }
        }
        indexJson {
            startCoding {
                title
                description
                button {
                    title
                    url
                }
            }
        }
    }
`
