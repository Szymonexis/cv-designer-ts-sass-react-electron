import React from "react";

import Screen, { ScreenProps } from "../Screen";
import Card from "../Card";
import Button from "../Button";

import "./01BasicDataScreenOne.scss";

const BasicDataScreenOne:React.FC<ScreenProps> = (props) => {
    return <Screen className={props.className} platform={props.platform}>
        <Card className={props.className}>
            
        </Card>
    </Screen>;
}

export default BasicDataScreenOne;