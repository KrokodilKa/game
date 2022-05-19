import * as React from 'react';
import {Box} from "@mui/material";
import Sprite from "../sprite";
import head from "./png/head.png"
import body from "./png/body.png"
import distantHand from "./png/distantHand.png"
import distantLeg from "./png/distantLeg.png"
import nearestHand from "./png/nearestHand.png"
import nearestLeg from "./png/nearestLeg.png"
import mouth from "./png/mouth.png"

import "./animations/stand.css"


const sizes = {
    small: {x:100, y:100},
    middle: {x:200, y:200},
    big: {x:300, y:300}
}


export default (props) => {
    let a = props.action
    return(
        <Box
            backgroundColor="gray"
            width={sizes[props.size].x}
            height={sizes[props.size].y}
        >
            <Sprite
                width="55px"
                top="105px"
                left="0"
                img={distantLeg}
            />
            <Sprite
                width="55px"
                top="71px"
                left="0"
                img={distantHand}
                className={`kuopna_${props.action}_hand`}
            />
            <Sprite
                width="180px"
                top="53px"
                left="17px"
                img={body}
            />
            <Sprite
                width="74px"
                top="19px"
                left="22px"
                img={head}
            />
            <Sprite
                width="45px"
                top="59px"
                left="18px"
                img={mouth}
            />
            <Sprite
                width="56px"
                top="80px"
                left="42px"
                img={nearestHand}
                className={`kuopna_${props.action}_hand`}
            />
            <Sprite
                width="66px"
                top="124px"
                left="51px"
                img={nearestLeg}
            />
        </Box>
    )
}