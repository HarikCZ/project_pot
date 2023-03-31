import React from "react";

const Flowerdetail = ({flowers}) => {
    return <>
        <h1>Flower detail</h1>
        {flowers ?.map((kytka) =>                 
            <ul>
                <li>{kytka.name}</li>
            </ul>   
        )}

    </>
}

export default Flowerdetail;