import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../css/photo_card.module.css";

const PhotoCard = ({ title, link, image }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={styles.card}>
            <h4>{title}</h4>
            <GatsbyImage
                image={image}
                alt={title}
                className={styles.photo}
            />
        </a>
    );
};

export default PhotoCard;
