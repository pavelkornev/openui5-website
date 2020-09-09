import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import getCssModifiers from "../../utils/getCssModifiers";

const Section = ({ children, color, align, padding }) => (
    <div
        className={classnames(
            styles.Section,
            color ? styles[`color_${color}`] : null,
        )}
    >
        <div
            className={classnames(
                styles.SectionContent,
                align ? styles[`align_${align}`] : null,
                padding ? styles[`padding_${padding}`] : null
            )}
        >
           { children }
       </div>
    </div>
);

Section.defaultProps = {
    color: null,
    align: null,
    padding: null
};

Section.propTypes = {
    color: PropTypes.oneOf(getCssModifiers(styles, "color")),
    align: PropTypes.oneOf(getCssModifiers(styles, "align")),
    padding: PropTypes.oneOf(getCssModifiers(styles, "padding")),
};


export default Section;
