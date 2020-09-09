import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import getCssModifiers from "../../utils/getCssModifiers";


const Icon = ({ size, src, alt, style, imgStyle, background }) => {
    return (
        <div
            className={classnames(
                styles.Icon,
                styles[`size_${size}`],
                background ? styles[`background_${background}`] : null
            )}
            style={style}
        >
            <img src={src} alt={alt} style={imgStyle} />
        </div>
    );
};

Icon.defaultProps = {
    size: "96x96",
    alt: null,
    style: null,
    imgStyle: null,
    background: null
};

Icon.propTypes = {
    size: PropTypes.oneOf(getCssModifiers(styles, "size")),
    alt: PropTypes.string,
    style: PropTypes.object,
    imgStyle: PropTypes.object,
    background: PropTypes.oneOf(getCssModifiers(styles, "background")),
};


export default Icon;