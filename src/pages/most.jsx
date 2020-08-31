import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "../css/most.module.css";

const Most = ({ data }) => {
    const {
        allContentfulMost: { nodes: projects },
    } = data;

    const renderProject = project => <li>{project}</li>;

    return (
        <Layout>
            <article className={styles.container}>
                {projects.map(project => {
                    return (
                        <section>
                            <h3 className={styles.title}>{project.title}</h3>
                            <ul>{project.items.map(renderProject)}</ul>
                        </section>
                    );
                })}
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulMost(sort: { order: ASC, fields: createdAt }) {
            nodes {
                title
                items
            }
        }
    }
`;

export default Most;
