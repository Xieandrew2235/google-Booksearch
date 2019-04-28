import React from "react";
import Saved from "./pages/Saved";
import DeleteBtn from "./components/DeleteBtn";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <div>
            {/* <Books /> */}
            {/* <Switch>

                <Router>

                    <Route exact path="/" component={Saved} />

                </Router>
                )
      </Switch> */}
        <DeleteBtn></DeleteBtn>
        </div>
    );
}

export default App;
