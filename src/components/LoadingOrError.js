const LoadingOrError = ({ error, loading }) => {
  return (
    <>
      {error && <div>{error}</div>}
      {loading && <div>Loading.....</div>}
    </>
  );
};

export default LoadingOrError;
