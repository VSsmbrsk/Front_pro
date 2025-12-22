import { useContext } from "react";
import { ThemeContext, themes } from "../../themeContext";

const ChangeButtonColor = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleClick = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.green ? themes.orange : themes.green
    );
  };

  return <button onClick={handleClick}>Change Style</button>;
};

export default ChangeButtonColor;