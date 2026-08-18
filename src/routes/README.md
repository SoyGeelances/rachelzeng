# Routes

This project uses TanStack Router with file-based routing for a client-side SPA.
Each `.tsx` file in this directory defines a route.

## Conventions

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `buy.tsx` | `/buy` |
| `sell.tsx` | `/sell` |
| `contact.tsx` | `/contact` |
| `__root.tsx` | app shell — wraps every page and preserves `<Outlet />` |

`routeTree.gen.ts` is auto-generated. Don't edit it by hand.
