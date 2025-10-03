import { redirect, createFileRoute, Outlet } from '@tanstack/react-router';
import { getAuth, getSignInUrl } from '@workos-inc/authkit-tanstack-react-start';

export const Route = createFileRoute('/_authenticated')({
  loader: async ({ location }) => {
    const { user } = await getAuth();
    if (!user) {
      const path = location.pathname;
      const href = await getSignInUrl({ data: { returnPathname: path } });
      throw redirect({ href });
    }
  },
  component: () => <Outlet />,
});
