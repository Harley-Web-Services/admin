import * as React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const MyAppBar = props => (
    <AppBar>
        <Toolbar>
            <Typography variant="h6" id="react-admin-title">MIH Admin|||</Typography><br/>
        </Toolbar>
    </AppBar>
);

export default MyAppBar;