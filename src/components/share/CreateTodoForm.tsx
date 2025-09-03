import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createTodo } from "@/app/tests/todos/action";

const CreateTodoForm = () => {
  return (
    <React.Fragment>
      <div className=" w-full max-w-sm p-2">
        <form action={createTodo} className="items-center gap-2 flex">
          <Input
            type="text"
            placeholder="Task"
            name="task"
            className="text-indigo-100"
          />
          <Button type="submit" variant="outline">
            ➕
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateTodoForm;
