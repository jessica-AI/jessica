import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "../css/project.module.css";
import Helmet from "react-helmet";

const Project = ({ data }) => {
    const {
        allContentfulProject: { nodes: projects },
    } = data;

    const renderProject = project => <li>{project}</li>;

    return (
        <Layout>
            <Helmet>
                <title>Project | 鄭麗珍 Li-Chen Cheng</title>
            </Helmet>
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
        allContentfulProject(sort: { order: ASC, fields: createdAt }) {
            nodes {
                title
                items
            }
        }
    }
`;

export default Project;
