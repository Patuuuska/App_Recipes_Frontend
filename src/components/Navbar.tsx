import {NavLink} from "@mantine/core";
import {IconMilkshake, IconSoup} from "@tabler/icons-react";

export const Navbar = () => {
    return (<>
            <NavLink
                href="#required-for-focus"
                label="Obiady"
                leftSection={<IconSoup size="1rem" stroke={1.5}/>}
            />
            <NavLink
                href="#required-for-focus"
                label="Desery"
                leftSection={<IconMilkshake size="1rem" stroke={1.5}/>}
            />

        </>
    );
}