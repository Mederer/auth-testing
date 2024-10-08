import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import useAdmin from "../../../hooks/useAdmin";

export default function Home() {
  const { instance } = useMsal();
  const isAdmin = useAdmin();

  return (
    <div>
      <AuthenticatedTemplate>
        <h1>Home for known users</h1>
        {isAdmin && <h2>You are an admin</h2>}
        <button onClick={() => instance.logoutRedirect()}>Logout</button>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <h1>Home for unknown users</h1>
        <button onClick={() => instance.loginPopup()}>Login</button>
      </UnauthenticatedTemplate>
    </div>
  );
}
