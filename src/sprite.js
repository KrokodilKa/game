import * as React from 'react';
import {Box} from "@mui/material";

export default (props) => {
    return(
        <Box
            width={0}
            height={0}
            position="relative"
        >
            <img
                className={props.className}
                src={props.img}
                style={{
                    width: props.width,
                    height: props.height,
                    position:"absolute",
                    left: props.left,
                    top: props.top,

                }}
            />
        </Box>
    )
}