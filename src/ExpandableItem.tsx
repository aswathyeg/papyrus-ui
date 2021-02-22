import { useState } from "react";

const ExpandableItem = (props:any) => {
    const [itemState, setItemState] = useState({open: false, menuItemName: ""});

    console.log(props.menuItemName);
    return props.render({ itemState, setItemState });
};

export default ExpandableItem;