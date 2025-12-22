import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <div className="content" style={{ background: theme.background }}>
          <Header />
          <ErrorBoundary>
            <main>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </main>
          </ErrorBoundary>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;