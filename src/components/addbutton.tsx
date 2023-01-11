import React from "react";
import Link from "next/link";

export const AddButton = () => {
    return (
        <Link href='/newflower' className="addbutton">
            <p className="addbutton-sign">+</p>
        </Link>
    )
}