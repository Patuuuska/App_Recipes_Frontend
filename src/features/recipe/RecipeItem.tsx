import {Card, Group, Image, Badge, Button, Text, Title} from "@mantine/core";
import React, {FC, memo} from "react";
import {RecipeType} from "../../types/RecipeType";

interface RecipeItemProps {
    item: RecipeType;
}

export const RecipeItem: FC<RecipeItemProps> = memo(({item}) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    radius="md"
                    //src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                    //src={"./image-from-rawpixel-id-13021870-original.png"}
                    src={"./image-from-rawpixel-id-449412-jpeg.jpg"}
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                {/*<Text fw={500}>Norway Fjord Adventures</Text>*/}
                <Title order={6}> {item.title} </Title>
            </Group>

            <Text size="sm" c="dimmed">
                {item.content}
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
                <Text fw={500}> Gotuj </Text>
            </Button>
        </Card>
    )
})