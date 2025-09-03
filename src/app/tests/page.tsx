import { signOut } from "@/libs/authjs/auth";
import React from "react";

export async function logoutAction() {
  "use server";
  await signOut({ redirectTo: "/auth/register" });
  return;
}

const TestPage = async () => {
  return (
    <React.Fragment>
      <main>
        <form action={logoutAction}>
          <button type="submit">SignOut</button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default TestPage;
