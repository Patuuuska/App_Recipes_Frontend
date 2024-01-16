import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Anchor, Avatar, Button, Drawer, Group, Input, Title} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import {useDisclosure} from "@mantine/hooks";


export const Header = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (

        <Group justify="space-between" >
            <Group>
                <img
                    src={process.env.PUBLIC_URL + "PyszneInspiracje.jpg"}
                    alt="Pyszne Inspiracje Image"
                    style={{
                        borderRadius: "10px",
                        height: "120px",
                        width: "auto",
                    }}
                />
                <Anchor
                    component={Link}
                    to="/recipe"
                    size="lg"
                    style={{ color: "black", fontWeight: "bold" }}
                >
                    Strona gotowania
                </Anchor>

                <Button component={Link} to="/recipe/new" variant="outline" color="dark">
                    Dodaj przepis
                </Button>

            </Group>
                <Group>
                    <Input
                        leftSection={<IconSearch size="1rem" stroke={1.5}/>}
                        placeholder="Wyszukaj przepis..."
                        style={{ marginLeft: "10px" }}
                    />
                    <>
                        <Drawer opened={opened} onClose={close} title="Logowanie" position="right">

                            <p>Tu umieść formularz logowania lub inne elementy związane z uwierzytelnianiem.</p>
                        </Drawer>

                        <Avatar
                            variant="filled"
                            radius="xl"
                            size="lg"
                            src=""
                            style={{ marginLeft: "20px", marginRight: "10px", cursor: "pointer" }}
                            onClick={open}
                        />
                    </>
                </Group>


        </Group>
    );
};