import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import * as styles from "../css/publication.module.css";
import Helmet from "react-helmet";
const { BLOCKS } = require('@contentful/rich-text-types');

const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => node.data.target?.file?.url ? <img className='custom-asset' src={node.data.target.file.url} alt="custom-asset" /> : null
    },
};

const Publication = ({ data }) => {
    const {
        allContentfulPublication: { nodes: publications },
    } = data;

    return (
        <Layout>
            <Helmet>
                <title>Publication | 鄭麗珍 Li-Chen Cheng</title>
                <meta
                    name="description"
                    content={publications.map(e=>e.title).join(", ")}
                />
            </Helmet>
            <article className={styles.container}>
                {publications.map(publication => {
                    return (
                        <section key={publication.title}>
                            <h3 className={styles.title}>
                                {publication.title}
                            </h3>
                            {renderRichText(
                                publication.content,options
                            )}
                        </section>
                    );
                })}
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulPublication(sort: { createdAt: ASC }) {
            nodes {
                title
                content {
                    raw
                }
            }
        }
    }
`;

export default Publication;
