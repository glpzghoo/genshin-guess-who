import { cookies } from 'next/headers';
import { getAdminCookieName, verifyAdminSessionToken } from '@/lib/server/admin-auth';
import AdminLoginForm from './components/AdminLoginForm';
import AdminPanel from './components/AdminPanel';

export const metadata = {
  title: 'Admin',
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getAdminCookieName())?.value;
  const authenticated = verifyAdminSessionToken(token);

  if (!authenticated) {
    return (
      <div className="container mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-6 text-2xl font-semibold">Admin Login</h1>
        <AdminLoginForm />
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-semibold">Admin Panel</h1>
      <AdminPanel />
    </div>
  );
}

