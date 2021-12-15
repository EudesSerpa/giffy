import React from "react";

import { Link , Button} from "./style.js";

export default function ButtonComponent ({ children, to, origin }) {
    return to 
        ? <Link to={to} origin={origin}> { children } </Link>
        : <Button origin={origin}>{ children }</Button>
}
