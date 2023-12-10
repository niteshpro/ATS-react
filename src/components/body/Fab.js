import { useState } from "react";
import "./Fab.css";
export default function FloatingButton(props) {

    return (
        <div style={{
            position:"absolute",
            right:50,
            bottom:50,
            borderRadius:"100%"

        }}>
            <input class="btn btn-primary btn-lg btn-circle" type="reset" value="+" onClick={props.handleopen}/>
        </div>
    );
}