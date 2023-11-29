import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import useAuthCheck from "./hooks/useAuthCheck";

const App = () => {
  useAuthCheck();
  console.log("render");

  return <RouterProvider router={router} />;
};

export default App;
