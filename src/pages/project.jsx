import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "../css/project.module.css";
import Helmet from "react-helmet";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const { BLOCKS } = require('@contentful/rich-text-types');

const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => <img class="custom-asset" src={`${node.data.target.fields.file["en-US"].url}`} alt="custom-asset" />
    },
};

const Project = ({ data }) => {
    const {
        allContentfulProject: { nodes: projects },
    } = data;

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
                            {documentToReactComponents(project.content.json,options)}
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
                content{
                    json
                }
            }
        }
    }
`;

export default Project;
