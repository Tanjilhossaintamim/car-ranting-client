import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ExtraProtectedroute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  return token && user?.is_owner ? (
    children
  ) : (
    <Navigate to={token ? "/" : "/login"}></Navigate>
  );
};
ExtraProtectedroute.propTypes = {
  children: PropTypes.node,
};
export default ExtraProtectedroute;
