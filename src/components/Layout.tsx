import {Outlet} from "react-router-dom";
import {Header} from "./Header";
import {AppShell, Burger} from "@mantine/core";
import {Simulate} from "react-dom/test-utils";
import toggle = Simulate.toggle;
import {useDisclosure} from "@mantine/hooks";
import {Navbar} from "./Navbar";

export const Layout = () => {
    const [opened, {toggle}] = useDisclosure();
    return (
        <AppShell
            header={{height: 60}}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: {mobile: !opened},
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <Header/>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <Navbar/>
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
}