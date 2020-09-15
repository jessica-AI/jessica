import React from "react";
import Image from "gatsby-image";
import styles from "../css/photo_card.module.css";

const PhotoCard = ({ title, link, image }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={styles.card}>
            <h4>{title}</h4>
            <Image
                fluid={image}
                alt={title}
                className={styles.photo}
            />
        </a>
    );
};

export default PhotoCard;
