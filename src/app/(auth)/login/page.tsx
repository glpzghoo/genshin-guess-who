'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { loginSchema, type LoginSchemaType } from '@/lib/validation/auth';

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

type ApiResult = { ok: true; message?: string } | { ok: false; error: string };

export default function LoginPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (values: LoginSchemaType) => {
    setServerError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = (await res.json()) as ApiResult;
      if (!res.ok || !data.ok) {
        throw new Error(('error' in data && data.error) || 'Login failed');
      }

      router.replace('/');
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
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>
            Welcome back! Let&apos;s get you into a match.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                        autoComplete="current-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {serverError && (
                <p className="text-sm text-red-500">{serverError}</p>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Signing in…' : 'Sign in'}
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
              New here?{' '}
              <Link href="/register" className="underline text-primary">
                Create an account
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
