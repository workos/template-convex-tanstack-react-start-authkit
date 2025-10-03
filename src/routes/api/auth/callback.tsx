import { createFileRoute } from '@tanstack/react-router';
import { handleCallbackRoute } from '@workos-inc/authkit-tanstack-react-start';

export const Route = createFileRoute('/api/auth/callback')({
  server: {
    handlers: {
      GET: handleCallbackRoute,
    },
  },
});
