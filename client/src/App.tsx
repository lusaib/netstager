import { BrowserRouter, Route, Routes } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { CardPage, HomePage } from "./pages";
import background from "./assets/background.svg";

export const AppBackGroundProperties = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: "100%",
  height: "100%",
  position: "fixed",
  backgroundImage: `url(${background})`,
  // backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

function App() {
  return (
    <AppBackGroundProperties>
      <BrowserRouter>
        <Routes>
          <Route caseSensitive path="/" element={<HomePage />} />
          <Route caseSensitive path="/card" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </AppBackGroundProperties>
  );
}

export default App;

//sample format to implement lazy loading in future.

// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./pages/About'));
// const Contact = lazy(() => import('./pages/Contact'));

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//         </Switch>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;
