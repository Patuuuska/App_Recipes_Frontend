import {NavLink} from "@mantine/core";
import {
    IconBaguette, IconCandy,
    IconClockHour1,
    IconFishChristianity,
    IconMeat,
    IconMeatOff,
    IconMilkshake,
    IconPepper,
    IconSoup, IconToolsKitchen2
} from "@tabler/icons-react";
import React from "react";

export const Navbar = () => {
    return (<>
            <NavLink
                href="#required-for-focus"
                label="Obiady"
                leftSection={<IconToolsKitchen2 size="1rem" stroke={1.5}/>}
            />
            <NavLink
                href="#required-for-focus"
                label="Desery"
                leftSection={<IconMilkshake size="1rem" stroke={1.5}/>}
            />
            <NavLink
                href="#required-for-focus"
                label="Danie wegetariańskie"
                leftSection={<IconMeatOff size="1rem" stroke={1.5}/>}
            />
            <NavLink
                href="#required-for-focus"
                label="Ryby"
                leftSection={<IconFishChristianity size="1rem" stroke={1.5}/>}
            />
            <NavLink
                href="#required-for-focus"
                label="Pomysł na śniadanie"
                leftSection={<IconBaguette size="1rem" stroke={1.5}/>}
            />
            <NavLink
                href="#required-for-focus"
                label="Szybkie danie"
                leftSection={<IconClockHour1 size="1rem" stroke={1.5}/>}
            />
                <NavLink
                href="#required-for-focus"
                label="Potrawa mięsna"
                leftSection={<IconMeat size="1rem" stroke={1.5}/>}
            />
                <NavLink
                href="#required-for-focus"
                label="Na ostro"
                leftSection={<IconPepper size="1rem" stroke={1.5}/>}
            />
            <NavLink
                href="#required-for-focus"
                label="Przekąski"
                leftSection={<IconCandy size="1rem" stroke={1.5}/>}
            />
            <NavLink
                href="#required-for-focus"
                label="Zupy"
                leftSection={<IconSoup size="1rem" stroke={1.5}/>}
            />



        </>
    );
}