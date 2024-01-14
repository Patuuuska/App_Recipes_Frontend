import {RecipeType} from "../../types/RecipeType";
import {RecipeItem} from "./RecipeItem";
import {SimpleGrid} from "@mantine/core";

const data: RecipeType[] = [
    {
        id: 1,
        title: "kurczaczek",
        content: " Opis potrawy Opis potrawy Opis potrawy Opis potrawy\n" +
            "                Opis potrawy Opis potrawy Opis potrawy Opis potrawy\n" +
            "                Opis potrawy Opis potrawy Opis potrawy Opis potrawy"
    },
    {
        id: 2,
        title: "sphagetti",
        content: " Opis potrawy Opis potrawy Opis potrawy Opis potrawy\n" +
            "                Opis potrawy Opis potrawy Opis potrawy Opis potrawy\n" +
            "                Opis potrawy Opis potrawy Opis potrawy Opis potrawy"
    },
    {
        id: 3,
        title: "łosośowe danie",
        content: " Opis potrawy Opis potrawy Opis potrawy Opis potrawy\n" +
            "                Opis potrawy Opis potrawy Opis potrawy Opis potrawy\n" +
            "                Opis potrawy Opis potrawy Opis potrawy Opis potrawy"
    },
    {
        id: 4,
        title: "kurczaczek jakis inny",
        content: " Opis potrawy Opis potrawy Opis potrawy Opis potrawy\n" +
            "                Opis potrawy Opis potrawy Opis potrawy Opis potrawy\n" +
            "                Opis potrawy Opis potrawy Opis potrawy Opis potrawy"
    },
    {
        id: 5,
        title: "kurczaczek jeszcze inny",
        content: " Opis potrawy Opis potrawy Opis potrawy Opis potrawy\n" +
            "                Opis potrawy Opis potrawy Opis potrawy Opis potrawy\n" +
            "                Opis potrawy Opis potrawy Opis potrawy Opis potrawy"
    },
    {
        id: 6,
        title: "kasza kukus",
        content: " Opis potrawy Opis potrawy Opis potrawy Opis potrawy\n" +
            "                Opis potrawy Opis potrawy Opis potrawy Opis potrawy\n" +
            "                Opis potrawy Opis potrawy Opis potrawy Opis potrawy"
    }
]


export const RecipePage = () => {
    return (
        <div style={{width: '100%'}}>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3}}>
                {data.map((item) => <RecipeItem key={item.id} item={item}/>)}
            </SimpleGrid>
        </div>
    )
}

