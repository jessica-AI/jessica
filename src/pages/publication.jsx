import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "../css/publication.module.css";
import Helmet from "react-helmet";

const Publication = ({ data }) => {
    const {
        allContentfulPublication: { nodes: publications },
    } = data;

    return (
        <Layout>
            <Helmet>
                <title>Publication | 鄭麗珍 Li-Chen Cheng</title>
            </Helmet>
            <article className={styles.container}>
                {publications.map(publication => {
                    return (
                        <section>
                            <h3 className={styles.title}>{publication.title}</h3>
                            {documentToReactComponents(publication.content.json)}
                        </section>
                    );
                })}
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulPublication(sort: {order: ASC, fields: createdAt}) {
            nodes {
                title
                content {
                    json
                }
            }
        }
    }
`;

export default Publication;