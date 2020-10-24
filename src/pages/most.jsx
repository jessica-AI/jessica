import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "../css/most.module.css";
import Helmet from "react-helmet";

const Most = ({ data }) => {
    const {
        allContentfulMost: { nodes: projects },
    } = data;

    const renderProject = (project,i) => <li key={i}>{project}</li>;

    return (
        <Layout>
            <Helmet>
                <title>Most | 鄭麗珍 Li-Chen Cheng</title>
                <meta
                    name="description"
                    content={projects.map(e=>e.title).join(", ")}
                />
            </Helmet>
            <article className={styles.container}>
                {projects.map((project,i) => {
                    return (
                        <section key={i}>
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
