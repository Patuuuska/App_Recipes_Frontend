import {RouteObject, useRoutes} from "react-router-dom";
import {Layout} from "../components/Layout";
import {RecipePage} from "./recipe/RecipePage";
import {RecipeForm} from "./recipe/RecipeForm";
import {ErrorPage} from "./error/ErrorPage";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/recipe',
                element: <RecipePage/>
            },
            {
                path: '/recipe/new',
                element: <RecipeForm/>
            },
            {
                path: '/recipe/:id',
                element: <RecipeForm/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
]

export const Routing = () =>{
    return useRoutes(routes);
}