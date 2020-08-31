import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "../css/teaching.module.css";
import Helmet from "react-helmet";

const Teaching = ({ data }) => {
    const {
        allContentfulTeaching: { nodes: teachings },
    } = data;

    return (
        <Layout>
            <Helmet>
                <title>Teaching | 鄭麗珍 Li-Chen Cheng</title>
            </Helmet>
            <article className={styles.container}>
                {teachings.map(
                    ({
                        title,
                        descriptionChinese: { descriptionChinese },
                        descriptionEnglish: { descriptionEnglish },
                    }) => {
                        return (
                            <section>
                                <h3 className={styles.title}>
                                    {title}
                                </h3>
                                <p>{descriptionChinese}</p>
                                <p>{descriptionEnglish}</p>
                            </section>
                        );
                    }
                )}
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulTeaching(sort: { order: ASC, fields: createdAt }) {
            nodes {
                title
                descriptionEnglish {
                    descriptionEnglish
                }
                descriptionChinese {
                    descriptionChinese
                }
            }
        }
    }
`;

export default Teaching;
