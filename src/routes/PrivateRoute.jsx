import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { is_loggedin, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <div>loading....</div>;
  }
  return is_loggedin ? children : <Navigate to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
