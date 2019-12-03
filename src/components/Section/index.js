import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import getCssModifiers from "../../utils/getCssModifiers";

const Section = ({ children, color, align }) => (
    <div
        className={classnames(
            styles.Section,
            color ? styles[`color_${color}`] : null,
        )}
    >
        <div
            className={classnames(
                styles.SectionContent,
                align ? styles[`align_${align}`] : null
            )}
        >
           { children }
       </div>
    </div>
);

Section.defaultProps = {
    color: null,
    align: null,
};

Section.propTypes = {
    color: PropTypes.oneOf(getCssModifiers(styles, "color")),
    align: PropTypes.oneOf(getCssModifiers(styles, "align")),
};


export default Section;
