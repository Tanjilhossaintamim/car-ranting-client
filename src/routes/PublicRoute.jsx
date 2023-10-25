import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  return !token ? children : <Navigate to="/"></Navigate>;
};
PublicRoute.propTypes = {
  children: PropTypes.node,
};
export default PublicRoute;
