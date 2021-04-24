import React from "react";
import {SW} from "../../../styles/StyleWrappers";


interface IList<T> {
    items: T[]
    renderItem: (item: T) => React.ReactNode
    direction?: "row" | "column"
}

export default function List<T>(props: IList<T>) {
    //<RE.List items={items} renderItem={(item)=><itemTemplate key/>}
    return (
        <SW.Flex direction={props.direction}>
            {props.items.map(props.renderItem)}
        </SW.Flex>
    )
}