import CreateTodoForm from "@/components/share/CreateTodoForm";
import React from "react";

const CreateTodoPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center bg-green-50 container mx-auto">
        <CreateTodoForm />
      </main>
    </React.Fragment>
  );
};

export default CreateTodoPage;
