import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { Button, TextField, CircularProgress, Typography } from "@mui/material";

import { useThemeStore } from "../../../theme";

export type FormValue = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const validationSchema = useMemo(() => {
    return z.object({
      name: z.string().min(1),
      email: z
        .string()
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      message: z.string().min(1),
    });
  }, [z]);

  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
  } = useForm<FormValue>({
    resolver: zodResolver(validationSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { theme } = useThemeStore();

  const handleFormSubmit = useCallback(async (formValue: FormValue) => {
    try {
      setIsLoading(true);
      const response = await emailjs.send(
        "service_2v399oc",
        "template_6z7wyoq",
        formValue,
        "ej9cTYh3LZFte_Dlp"
      );
      if (response.status === 200) {
        alert(
          "Your email has been successfully received. Thank you for reaching out to us. We will get back to you shortly."
        );
      } else {
        alert(
          "There was an issue processing your email. Please try again later or contact us directly via phone."
        );
      }
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      alert(
        "There was an issue processing your email. Please try again later or contact us directly via phone."
      );
    }
  }, []);

  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: `radial-gradient(circle at bottom left, ${theme.palette?.background?.paper} 0%, rgba(39, 165, 221, 0) 70%)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left",
        backgroundSize: "350px 350px",
      }}
    >
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-2 w-3/4 md:w-1/2 lg:w-1/3"
      >
        <Typography variant="body1" color="secondary" className="self-center">
          Please feel free to reach out via email.
        </Typography>
        <TextField
          {...register("name")}
          label="Enter Your Name *"
          variant="outlined"
          color="primary"
          error={isSubmitted && !!errors.name}
          focused
        />
        <TextField
          {...register("email")}
          variant="outlined"
          label="Enter Your Email *"
          color="primary"
          error={isSubmitted && !!errors.email}
          focused
        />
        <TextField
          {...register("message")}
          variant="outlined"
          label="Enter Message *"
          color="primary"
          error={isSubmitted && !!errors.message}
          focused
          multiline
        />
        <div className="flex justify-center items-center">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              type="submit"
              variant="contained"
              sx={{ textTransform: "none" }}
            >
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
