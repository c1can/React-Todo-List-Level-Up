import { Routes } from "./App.routing";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";

export function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
