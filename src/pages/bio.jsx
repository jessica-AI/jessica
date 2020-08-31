import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "../css/bio.module.css";

const Bio = ({ data }) => {
    const {
        allContentfulBio: { nodes: bios },
    } = data;

    return (
        <Layout>
            <article className={styles.container}>
                {bios.map(bio => {
                    return (
                        <section key={bio.title}>
                            <h3 className={styles.title}>{bio.title}</h3>
                            {documentToReactComponents(bio.content.json)}
                        </section>
                    );
                })}
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulBio(sort: { order: ASC, fields: createdAt }) {
            nodes {
                title
                content {
                    json
                }
            }
        }
    }
`;

export default Bio;
