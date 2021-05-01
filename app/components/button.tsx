import { Link as RouterLink } from "react-router-dom";

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
  extraMargin?: boolean;
}

export function Link({ to, children, extraMargin }: ButtonLinkProps) {
  return (
    <RouterLink
      to={to}
      className={`inline-block bg-primary-dark hover:bg-primary ease-in-out transition duration-200 text-white py-3 px-4 rounded shadow-md
        ${extraMargin && "mt-3 mb-5 md:my-3"}`}
    >
      {children}
    </RouterLink>
  );
}
