import {Box, Button, Collapse, Group, Title, Text, Code} from "@mantine/core";
import React from "react";
import {useDisclosure} from "@mantine/hooks";

export const RecipeInformation= () => {
    return (
        <>
        <Title order={1}>Tytuł</Title>
            <Text fw={700} size="xl">Składniki i sposób przygotowania:</Text>
            <Code block>przepis</Code>
        </>
    )
}