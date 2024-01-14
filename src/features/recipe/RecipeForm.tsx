import {Button, Combobox, Group, Paper, Stack, Textarea, TextInput} from "@mantine/core"
import {useForm} from "@mantine/form";
import {RecipeFormValues} from "../../types/RecipeFormValues";
import {useRecipeForm} from "./hooks/useRecipeForm";

export const RecipeForm = () => {
    const form = useRecipeForm();

    const handleSubmit = (vals: RecipeFormValues) => {
        console.log(vals);
    }
    return (
        <Paper shadow="xs" p="xl">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack
                    h={300}
                    bg="var(--mantine-color-body)"
                    gap="sm"
                >
                    <TextInput
                        label="Input label"
                        description="Input description"
                        placeholder="Input placeholder"
                    />

                    <Textarea
                        label="Input label"
                        description="Input description"
                        placeholder="Input placeholder"
                    />

                    <Group justify="flex-end" mt="md">
                        <Button type="submit"> Submit </Button>
                    </Group>
                </Stack>
            </form>
        </Paper>
    )
}