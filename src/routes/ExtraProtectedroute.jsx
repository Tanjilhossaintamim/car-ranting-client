import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ExtraProtectedroute = ({ children }) => {
  const { is_loggedin, isOwner } = useSelector((state) => state.auth);
  return is_loggedin && isOwner ? (
    children
  ) : (
    <Navigate to={"/login"}></Navigate>
  );
};
ExtraProtectedroute.propTypes = {
  children: PropTypes.node,
};
export default ExtraProtectedroute;
