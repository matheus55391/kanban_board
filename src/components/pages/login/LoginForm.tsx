'use client';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LoginSchema } from '@/schemas';
import { FormError } from '@/components/FormError';

const LoginForm: React.FC = () => {
  const formMethods = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log(data);
  };
  
  return (
    <FormProvider {...formMethods}>
      <form className="space-y-6 w-80" onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className="flex flex-col align-baseline text-left">
          <span className="text-xs font-medium">Email Address</span>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 border rounded-md placeholder:text-sm"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col align-baseline text-left">
          <span className="text-xs font-medium">Password</span>
          <input
            type="password"
            id="password"
            name="password"
            className="p-2 border rounded-md placeholder:text-sm"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <FormError message={formMethods.formState.errors.email?.message || formMethods.formState.errors.password?.message} />
        </div>
        <button
          type="submit"
          className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-md transition-all"
        >
          Log In
        </button>

      </form>
    </FormProvider>
  );
};

export default LoginForm;