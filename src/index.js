import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Table from './table';

const App = () => {
    return(
        <>
            <CssBaseline />
            <Table/>
        </>
    )
}
ReactDOM.render( <App/>, document.getElementById("root"));