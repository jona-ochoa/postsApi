import { useForm } from "react-hook-form";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        component="form"
        sx={{
          minWidth: 450,
          p: 5,
        }}
        spacing={2}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography variant="h4" gutterBottom>
          Crear una publicación
        </Typography>
        <Stack spacing={2} width={450}>
        <TextField
          id="userId"
          label="userId"
          variant="outlined"
          fullWidth
          helperText={errors.userId?.message}
          error={!!errors.userId}
          {...register("userId", { required: "userId es requerido" })}
        />

        <TextField
          id="title"
          label="title"
          variant="outlined"
          fullWidth
          helperText={errors.title?.message}
          error={!!errors.title}
          {...register("title", { required: "title es requerido" })}
        />

        <TextField
          id="body"
          label="body"
          variant="outlined"
          fullWidth
          helperText={errors.body?.message}
          error={!!errors.body}
          multiline
          rows={4}
          {...register("body", { required: "body es requerido" })}
        />

        <Button type="submit" fullWidth variant="contained">
          Submit
        </Button>
        </Stack>
      </Box>
    </Container>
  );
}
