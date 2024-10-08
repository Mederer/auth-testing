import { useMsal } from "@azure/msal-react";

export default function useAdmin() {
  const { accounts } = useMsal();
  const token = accounts[0]?.idTokenClaims;
  return token?.roles?.includes("Innovation.Admin") ?? false;
}
