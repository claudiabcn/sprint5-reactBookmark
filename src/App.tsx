import { Button } from "../src/components/atoms/button";
import { Logo } from "./components/atoms/Logo";
import { Icon } from "./components/atoms/Icon";

function App() {
  return (
    <div>
      <Button variant="red">Login</Button>
      <Logo variant="black"></Logo>
      <Icon variant="facebook"></Icon>
    </div>
  );
}

export default App;
