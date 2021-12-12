import Grid from "./Components/Grid";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
  return <Grid />;
}

export default App;
