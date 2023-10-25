import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import useAuthCheck from "./hooks/useAuthCheck";

const App = () => {
  useAuthCheck();

  return <RouterProvider router={router} />;
};

export default App;
