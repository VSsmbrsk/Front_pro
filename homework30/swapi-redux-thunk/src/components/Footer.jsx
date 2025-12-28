import { useDispatch, useSelector } from "react-redux";
import { clearData } from "../store/rootReducer";

function Footer() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.swapi.data);

  if (!data) return null;

  return (
    <footer>
      <button onClick={() => dispatch(clearData())}>
        Clear all
      </button>
    </footer>
  );
}

export default Footer;
