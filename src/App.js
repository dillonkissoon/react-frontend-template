import AppRouter from "./app.router";
import { ProvideAuth } from "./auth/login.hook";

function App() {
  return (
    <>
      <ProvideAuth>
        <AppRouter />
      </ProvideAuth>
    </>
  );
}

export default App;
