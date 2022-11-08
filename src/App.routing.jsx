import { Route } from "wouter";
import { Todo } from "./components/Todo";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";

export function Routes() {
  return (
    <>
      <Route path="/"> 
        <ProtectedRoute>
          <Todo />
        </ProtectedRoute>
      </Route>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </>
  );
}
