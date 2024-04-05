import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "../css/research_area.module.css";
import Helmet from "react-helmet";

const ResearchArea = ({ data }) => {
    const {
        allContentfulResearchArea: { nodes: research },
    } = data;

    const [selected, setSelected] = useState(0); // index of data array

    return (
        <Layout>
            <Helmet>
                <title>Research Area | 鄭麗珍 Li-Chen Cheng</title>
                <meta
                    name="description"
                    content={research.flat().map(e=>e.title).join(", ")}
                />
            </Helmet>
            <article className={styles.container}>
                <div className={styles.sidebar}>
                    {research.map(({ title }, index) => {
                        return (
                            <div
                                key={index}
                                role="button"
                                tabIndex={index}
                                onClick={() => {
                                    setSelected(index);
                                }}
                                className={
                                    index === selected ? styles.selected : ""
                                }
                                onKeyDown={event => {
                                    if (event.keycode === 13) setSelected(index);
                                }}
                            >
                                <span>{title.replace(" ", "\n")}</span>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.content}>
                    <section>
                        <h3 className={styles.title}>
                            {research[selected].title}
                        </h3>
                        <p>
                            {
                                research[selected].descriptionChinese
                                    .descriptionChinese
                            }
                        </p>
                        <p>
                            {
                                research[selected].descriptionEnglish
                                    .descriptionEnglish
                            }
                        </p>
                        <p>
                            {
                                research[selected].descriptionChinese2
                                    .descriptionChinese2
                            }
                        </p>
                        <p>
                            {
                                research[selected].descriptionChinese3
                                    .descriptionChinese3
                            }
                        </p>
                        <p>
                            {
                                research[selected].descriptionChinese4
                                    .descriptionChinese4
                            }
                        </p>
                        <p>
                            {
                                research[selected].descriptionChinese5
                                    .descriptionChinese5
                            }
                        </p>
                        <p>
                            {
                                research[selected].descriptionChinese6
                                    .descriptionChinese6
                            }
                        </p>
                        <p>
                            {
                                research[selected].descriptionChinese7
                                    .descriptionChinese7
                            }
                        </p>
                        <p>
                            {
                                research[selected].descriptionChinese8
                                    .descriptionChinese8
                            }
                        </p>
                    </section>
                </div>
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulResearchArea(sort: { order: ASC, fields: createdAt }) {
            nodes {
                title
                descriptionEnglish {
                    descriptionEnglish
                }
                descriptionChinese {
                    descriptionChinese
                }
                descriptionChinese2 {
                    descriptionChinese2
                }
                descriptionChinese3 {
                    descriptionChinese3
                }
                descriptionChinese4 {
                    descriptionChinese4
                }
                descriptionChinese4 {
                    descriptionChinese5
                }
                descriptionChinese4 {
                    descriptionChinese6
                }
                descriptionChinese4 {
                    descriptionChinese7
                }
                descriptionChinese4 {
                    descriptionChinese8
                }
            }
        }
    }
`;

export default ResearchArea;
