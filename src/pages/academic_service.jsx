import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "../css/academicService.module.css";
import Helmet from "react-helmet";

const AcademicService = ({ data }) => {
    const {
        allContentfulAcademicService: { nodes: services },
    } = data;

    const renderService = item => <li>{item}</li>;

    return (
        <Layout>
            <Helmet>
                <title>Academic Service | 鄭麗珍 Li-Chen Cheng</title>
            </Helmet>
            <article className={styles.container}>
                {services.map(service => {
                    return (
                        <section>
                            <h3 className={styles.title}>{service.title}</h3>
                            <ul>{service.items.map(renderService)}</ul>
                        </section>
                    );
                })}
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulAcademicService(sort: { order: ASC, fields: createdAt }) {
            nodes {
                title
                items
            }
        }
    }
`;

export default AcademicService;
