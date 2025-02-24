import PropTypes from "prop-types";

export function Alert({text}) {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
}

Alert.propType = {
    text : PropTypes.string.isRequired,
};