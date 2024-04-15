import { useState } from "react";
import '@mantine/charts/styles.css';
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/nprogress/styles.css';
import "./styles/App.css";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Test from "./pages/Test";
import SignIn from "./pages/SignUp"

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SentenceCompletion } from "./components/questions/SentenceCompletion";
import { TFNG } from "./components/questions/TFNG";
import { YNNG } from "./components/questions/YNNG";
import { qSentenceCompletion, qTFNG, qYNNG } from "./pages/Test";


function App() {
    return (
    
        <HelmetProvider>
            <div id="content">
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="test" element={<Test />} />
                        <Route path="*" element={<PageNotFound />} />
                        <Route path='signIn' element={<SignIn />} />
                        <Route path='sc' element={<SentenceCompletion q={qSentenceCompletion} />} />
                        <Route path='ynng' element={<YNNG q={qYNNG} />} />
                        <Route path='tfng' element={<TFNG q={qTFNG} />} />
                        {/* <Route path='mcq' element={<SignIn />} />
                        <Route path='sumc' element={<SignIn />} />
                        <Route path='fc' element={<SignIn />} />
                        <Route path='tc' element={<SignIn />} />
                        <Route path='formc' element={<SignIn />} />
                        <Route path='dc' element={<SignIn />} /> */}
                    </Route>
                </Routes >
            </div>
        </HelmetProvider>
    );
}

export default App;
