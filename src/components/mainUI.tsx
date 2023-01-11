import React from "react";
import { AddButton } from "./addbutton";
import { FlowerGrid } from "./flowergrid";
import { Heading } from "./heading";

export const MainUI = () => {

    return <>
        <div className="mainUI">

            <Heading/>

            <FlowerGrid/>
            <AddButton/>


        </div>
    </>
    
}

