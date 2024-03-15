const ErrorMessage = () => {
  return (
    <div style={error}>
      <p>Error fetching images. Please try again.</p>
    </div>
  );
};

export default ErrorMessage;

const error = {
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
};
