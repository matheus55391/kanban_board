"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSession from "@/hooks/use-session";
import { ThemeToggleButton } from "../core/theme-toggle-button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React from "react";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function LoginView() {
  const [showPassword, setShowPassword] = React.useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const { handleSignInEmail, handleSignInWithGoogle } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      await handleSignInEmail(data.email, data.password);
      // Redirecionar ou mostrar uma mensagem de sucesso
    } catch (error) {
      console.error("Login failed:", error);
      // Mostrar uma mensagem de erro para o usuário
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="w-full max-w-md px-4 py-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">Megaboard</h1>
          <p className="text-muted-foreground">Welcome back!</p>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="mt-1"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="mt-1 pr-8"
                {...register("password")}
                autoComplete="current-password"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-1 right-1 h-7 w-7"
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <EyeIcon className="h-4 w-4" onClick={toggleShowPassword} />
                ) : (
                  <EyeOffIcon
                    className="h-4 w-4"
                    onClick={toggleShowPassword}
                  />
                )}
                <span className="sr-only">Toggle password visibility</span>
              </Button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex  items-end w-full mt-1  justify-end">
            <Link
              href="#"
              className="text-sm text-primary hover:underline"
              prefetch={false}
            >
              Forgot password ?
            </Link>
          </div>
          <Button className="w-full" onClick={handleSubmit(onSubmit)}>
            Login
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-muted" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-background text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full"
          onClick={handleSignInWithGoogle}
        >
          <ChromeIcon className="mr-2 h-4 w-4" />
          Google
        </Button>
        <p className="text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-primary hover:underline"
            prefetch={false}
          >
            Sign up
          </Link>
        </p>
      </div>

      <Link
        href="/"
        className="absolute top-4 left-4 inline-flex items-center justify-center rounded-full w-8 h-8 hover:bg-muted/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        prefetch={false}
      >
        <ArrowLeftIcon className="h-4 w-4" />
        <span className="sr-only">Back</span>
      </Link>

      <div className="absolute top-4 right-4 inline-flex items-center justify-center rounded-full ">
        <ThemeToggleButton />
      </div>
    </div>
  );
}

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ChromeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
