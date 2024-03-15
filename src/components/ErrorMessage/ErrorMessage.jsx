/* eslint-disable react/prop-types */
const ErrorMessage = ({ error }) => {
  return (
    <div style={errorStyle}>
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;

const errorStyle = {
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
};
