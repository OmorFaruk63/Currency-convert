import "./NetworkErrorPage.css";

const NetworkErrorPage = () => {
  const onReload = () => {
    window.location.reload();
  };
  return (
    <div className="network-error-container">
      <h1>Network Error</h1>
      <p>
        There was an issue connecting to the server. Please check your internet
        connection and try again.
      </p>
      <button onClick={onReload}>Reload</button>
    </div>
  );
};

export default NetworkErrorPage;
