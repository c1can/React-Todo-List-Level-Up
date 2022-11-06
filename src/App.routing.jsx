import { Route } from "wouter";
import { Todo } from "./components/Todo";
import { Register } from "./components/Register";
import { Login } from "./components/Login";

export function Routes() {
  return (
    <>
      <Route path="/" component={Todo} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </>
  );
}
