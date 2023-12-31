import { useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { Login ,Main, Orders, Pricing, StepOne, StepTwo, StepTree } from "./pages"
import { ProtectedRoute } from "./components"

import type { InitialStateTypes } from './store';

import styles from "./App.module.scss"

function App() {
  const loggedIn = useSelector(( state: InitialStateTypes) => state.loggedIn);

  return (
    <div className={styles.App}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />}/>
            <Route path="/orders" element={<Orders />} />
          {/* <Route path="/orders" element={<ProtectedRoute loggedIn={loggedIn} />} >
            <Route path="/orders" element={<Orders />} />
          </Route> */}
          <Route path="/stepone" element={<ProtectedRoute loggedIn={loggedIn} />} >
            <Route path="/stepone" element={<StepOne />} />
          </Route>
          <Route path="/steptwo" element={<ProtectedRoute loggedIn={loggedIn} />} >
            <Route path="/steptwo" element={<StepTwo />} />
          </Route>
          <Route path="/steptree" element={<ProtectedRoute loggedIn={loggedIn} />} >
            <Route path="/steptree" element={<StepTree />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
