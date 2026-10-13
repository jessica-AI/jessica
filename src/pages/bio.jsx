import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import * as styles from "../css/bio.module.css";
import Helmet from "react-helmet";

const Bio = ({ data }) => {
    const {
        allContentfulBio: { nodes: bios },
    } = data;

    return (
        <Layout>
            <Helmet>
                <title>Bio | 鄭麗珍 Li-Chen Cheng</title>
                <meta
                    name="description"
                    content={bios.map(e=>e.title).join(", ")}
                />
            </Helmet>
            <article className={styles.container}>
                {bios.map(bio => {
                    return (
                        <section key={bio.title}>
                            <h3 className={styles.title}>{bio.title}</h3>
                            {renderRichText(bio.content)}
                        </section>
                    );
                })}
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulBio(sort: { createdAt: ASC }) {
            nodes {
                title
                content {
                    raw
                }
            }
        }
    }
`;

export default Bio;
