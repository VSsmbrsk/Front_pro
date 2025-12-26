import { useSelector } from "react-redux";

function Footer() {
  const count = useSelector((state) => state.todos.items.length);

  return (
    <footer>
      <p>Total tasks: {count}</p>
    </footer>
  );
}

export default Footer;
