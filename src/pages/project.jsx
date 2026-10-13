import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../css/project.module.css";
import Helmet from "react-helmet";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const { BLOCKS } = require('@contentful/rich-text-types');

const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => node.data.target?.file?.url ? <img className="custom-asset" src={node.data.target.file.url} alt="custom-asset" /> : null
    },
};

const Project = ({ data }) => {
    const {
        allContentfulProject: { nodes: projects },
    } = data;

    return (
        <Layout>
            <Helmet>
                <title>Student Honor | 鄭麗珍 Li-Chen Cheng</title>
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
                            {renderRichText(project.content,options)}
                        </section>
                    );
                })}
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulProject(sort: { createdAt: ASC }) {
            nodes {
                title
                content{
                    raw
                }
            }
        }
    }
`;

export default Project;
