
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import VisitorForm from "./components/VisitorForm";
// import PreApprovalForm from "./components/PreApprovalForm";
// import Dashboard from "./components/Dashboard";
// import ExitForm from "./components/ExitForm";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<VisitorForm />} />
//           <Route path="/pre-approve" element={<PreApprovalForm />} />
//           <Route
//             path="/dashboard"
//             element={
//               <>
//                 <Dashboard />
//                 <ExitForm />
//               </>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import VisitorForm from "./components/VisitorForm";
import PreApprovalForm from "./components/PreApprovalForm";
import PreApprovedVisitors from "./components/PreApprovedVisitors";
import Dashboard from "./components/Dashboard";
import ExitForm from "./components/ExitForm";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<VisitorForm />} />
          <Route path="/pre-approve" element={<PreApprovalForm />} />
          <Route
            path="/pre-approved-visitors"
            element={<PreApprovedVisitors />}
          />
          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
                <ExitForm />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;