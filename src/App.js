import './App.css';
import NavBar from "./components/NavBar";
import Contect from "./components/Contect";
import About from "./components/About";
import Home from "./components/Home";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import LoadingBar from 'react-top-loading-bar';

import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";


function App() {
  const [progress, setProgress] = useState(0);

  let location = useLocation();


  useEffect(() => {
    setProgress(10);
    setProgress(40);
    setProgress(60);
    setProgress(90);
    setProgress(100);
  }, [location]);



  return (
    <>
      <LoadingBar
        color='#6665ee'
        height= {3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <NavBar site="NirexMig" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contect" element={<Contect />} />
        <Route path="*" element={<Error />} />

      </Routes>

      <Footer sitename="NIREXMIG" />

    </>

  );
}

export default App;
