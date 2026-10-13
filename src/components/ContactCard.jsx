import React from "react"
import * as styles from "../css/contact_card.module.css";

const ContactCard = ({icon,link}) => {
    return (
        <a className={styles.card} href={link} target="_blank" rel="noreferrer">
            {icon}
            <p>{link}</p>
        </a>
    );
}

export default ContactCard;