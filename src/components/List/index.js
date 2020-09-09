import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import getCssModifiers from "../../utils/getCssModifiers";
import _ from "lodash";

const List = ({ column, style, justifyContent, alignitems, children }) => (
    <div
        className={classnames(
            styles.List,
            column ? styles[`column_${column}`] : null,
            justifyContent ? styles[`justifyContent_${_.camelCase(justifyContent)}`] : null,
            alignitems ? styles[`alignitems_${_.camelCase(alignitems)}`] : null
        )}
        style={style}
    >
        {children}
    </div>
);

List.defaultProps = {
    column: null,
    justifyContent: null,
    style: null,
    alignitems: null
};


List.propTypes = {
    column: PropTypes.oneOf(getCssModifiers(styles, "column")),
    justifyContent: PropTypes.oneOf(getCssModifiers(styles, "justifyContent")),
    alignitems: PropTypes.oneOf(getCssModifiers(styles, "alignitems")),
    style: PropTypes.object,
};

const ListItem = ({ style, background, children }) => (
    <div className={classnames(
            styles.ListItem,
            background ? styles[`background_${background}`] : null
        )}
        style={style}>{children}</div>
);

ListItem.defaultProps = {
    style: null,
    background: null
};

ListItem.propTypes = {
    style: PropTypes.object,
    background: PropTypes.oneOf(getCssModifiers(styles, "background")),
};


export {
    List,
    ListItem
};
