import { createStart } from '@tanstack/react-start';
import { authkitMiddleware } from '@workos-inc/authkit-tanstack-react-start';

export const startInstance = createStart(() => {
  return {
    requestMiddleware: [authkitMiddleware()],
  };
});
