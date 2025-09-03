import RegisterForm from "@/components/share/RegisterForm";
import React from "react";

const RegisterPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen container mx-auto">
        <RegisterForm />
      </main>
    </React.Fragment>
  );
};

export default RegisterPage;
