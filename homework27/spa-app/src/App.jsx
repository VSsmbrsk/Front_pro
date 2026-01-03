import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import NotFound from "./components/NotFound/NotFound";
import { ThemeContext, themes } from "./themeContext";

function App() {
  const [theme, setTheme] = useState(themes.orange);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <HashRouter>
        <div className="content" style={{ background: theme.background }}>
          <Header />
          <ErrorBoundary>
            <main>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </ErrorBoundary>
          <Footer />
        </div>
      </HashRouter>
    </ThemeContext.Provider>
  );
}

export default App;
