import {Link} from "react-router-dom";
import {Anchor, Button, Group} from "@mantine/core";

export const Header = () => {
    return (
        <Group>

            <Group style={{height: '100%'}}>
                <Anchor component={Link} to="/recipe" size="lg">
                    Strona gotowanie
                </Anchor>
                <Group>
                    <Button component={Link} to="/recipe/new" variant="outline">
                        Dodaj przepis
                    </Button>

                </Group>
            </Group>

        </Group>

    )
}

// <Link to={'/recipe'}> Recipe Page here </Link> |
//     <Link to={'/recipe/new'}> Stworz przepis </Link>
