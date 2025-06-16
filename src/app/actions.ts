"use server";

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        message: "Validation failed. Please check your inputs.",
        errors: validatedFields.error.flatten().fieldErrors,
        isSuccess: false,
      };
    }
    
    console.log("Contact Form Submitted:", validatedFields.data);

    return {
      message: "Thank you for your message! We'll get back to you soon.",
      errors: null,
      isSuccess: true,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      message: "An unexpected error occurred. Please try again.",
      errors: null,
      isSuccess: false,
    };
  }
}

// --- Auth Actions ---

const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password cannot be empty." }), // Simple validation for prototype
});

export async function loginUserAction(prevState: any, formData: FormData) {
  try {
    const validatedFields = loginFormSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (!validatedFields.success) {
      return {
        message: "Validation failed. Please check your inputs.",
        errors: validatedFields.error.flatten().fieldErrors,
        isSuccess: false,
      };
    }
    
    // Mock login logic
    console.log("Login attempt:", validatedFields.data);
    // Simulate checking credentials
    if (validatedFields.data.email === "test@example.com" && validatedFields.data.password === "password") {
      return {
        message: "You have successfully logged in!",
        errors: null,
        isSuccess: true,
      };
    } else {
      return {
        message: "Invalid email or password. Please try again.",
        errors: null, // No specific field errors, general message
        isSuccess: false,
      };
    }

  } catch (error) {
    console.error("Error during login:", error);
    return {
      message: "An unexpected error occurred during login. Please try again.",
      errors: null,
      isSuccess: false,
    };
  }
}

const signupFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"], // Path to the field to attach the error
});


export async function signupUserAction(prevState: any, formData: FormData) {
  try {
    const validatedFields = signupFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    });

    if (!validatedFields.success) {
      return {
        message: "Validation failed. Please check your inputs.",
        errors: validatedFields.error.flatten().fieldErrors,
        isSuccess: false,
      };
    }
    
    // Mock signup logic
    console.log("Signup attempt:", validatedFields.data);
    // Simulate creating a user (in a real app, check if email exists, hash password, save to DB)

    return {
      message: "Your account has been created successfully! You can now log in.",
      errors: null,
      isSuccess: true,
    };
  } catch (error) {
    console.error("Error during signup:", error);
    return {
      message: "An unexpected error occurred during signup. Please try again.",
      errors: null,
      isSuccess: false,
    };
  }
}
