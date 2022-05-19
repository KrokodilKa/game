import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Kuopna from "./kuopna/kuopna"

//Функции для переключения кнопок
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, backgroundColor: "#8bb1a0", width: "100%" }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function () {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%", width: "100%" }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="стоит" {...a11yProps(0)} />
                <Tab label="идёт" {...a11yProps(1)} />
                <Tab label="кусает" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Kuopna size="middle" action="stand"/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Kuopna  size="middle" action="walk"/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Kuopna size="middle" action="attack"/>
            </TabPanel>
        </Box>
    );
}
