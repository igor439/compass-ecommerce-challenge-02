import React from "react";
import ThematicCard from "./ThematicCard";
import { ThematicCardList_h1, ThematicCardList_ul, ThematicCradList_nav} from "./thematicCardList.style";
import { ThematicCardProps } from "../../../types/types";




export default function ThematicCardList(props: { imgesCradProps: ThematicCardProps[], listTitle: string }) {
    return (
        <ThematicCradList_nav>
            <ThematicCardList_h1>{props.listTitle}</ThematicCardList_h1>
            <ThematicCardList_ul>
                {props.imgesCradProps.map((item, index) => ( // Adicionando a propriedade "key" com base no índice
                    <ThematicCard key={index} imageLink={item.imageLink} alt={item.alt} title={item.title} />
                ))}
            </ThematicCardList_ul>
        </ThematicCradList_nav>
    );
}
