import ConnectionStatus from "./Connection";
import Lab6Todos from "./Todos";
import Lab6Users from "./Users";
export default function Lab6() {
  return (
    <div id="wd-lab6" className="p-4">
      <h2>Lab 6</h2>
      <ConnectionStatus />
      <Lab6Todos />
      <Lab6Users />
    </div>
  );
}