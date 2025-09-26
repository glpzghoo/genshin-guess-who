'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerSchema, type RegisterSchemaType } from '@/lib/validation/auth';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import axios from 'axios';
import { ArrowBigLeft } from 'lucide-react';
import Header from '@/components/Header';

type ApiResult = { ok: true; message?: string } | { ok: false; error: string };

export default function RegisterPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: RegisterSchemaType) => {
    setServerError(null);
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/register', {
        nickname: values.nickname,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });

      if (!res.data.ok) {
        throw new Error('Registration failed');
      }

      // If you require email verification, keep the user here or route to a “check email” page
      router.replace('/login');
    } catch (err: any) {
      setServerError(err?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const continueAsGuest = async () => {
    setServerError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/auth/guest', {
        method: 'POST',
        credentials: 'include',
      });
      const data = (await res.json()) as ApiResult;
      if (!res.ok || !data.ok)
        throw new Error(
          ('error' in data && data.error) || 'Guest sign-in failed'
        );
      router.replace('/');
    } catch (err: any) {
      setServerError(err?.message || 'Guest sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] grid place-items-center px-4">
      <Header />

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            <div className=" flex justify-between ">
              <div>Create account</div>
              <Link
                href={'/'}
                className="text-forefround flex items-center gap-2"
              >
                <ArrowBigLeft /> Go back
              </Link>
            </div>
          </CardTitle>
          <CardDescription>
            Register to play ranked matches and track your AR.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="nickname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nickname</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="AYAYA"
                        {...field}
                        autoComplete="nickname"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                        autoComplete="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        autoComplete="new-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        autoComplete="new-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {serverError && (
                <p className="text-sm text-red-500">{serverError}</p>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={loading || !form.formState.isValid}
              >
                {loading ? 'Creating account…' : 'Create account'}
              </Button>
            </form>
          </Form>

          <div className="mt-4 grid gap-3">
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={continueAsGuest}
              disabled={loading}
            >
              Continue as Guest
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="underline text-primary">
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
