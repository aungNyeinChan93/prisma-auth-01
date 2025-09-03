import CreateTodoForm from "@/components/share/CreateTodoForm";
import TodoCard from "@/components/share/TodoCard";
import { Prisma } from "@/generated/prisma";
import { prisma } from "@/libs/db/prisma";
import Link from "next/link";
import React from "react";

export type Todo = Prisma.TodoGetPayload<object>;

const TodosPage = async () => {
  const todos: Array<Todo> | null = await prisma.todo.findMany();
  return (
    <React.Fragment>
      <main>
        <div className="p-2 bg-slate-700 flex justify-between items-center">
          <button
            type="button"
            className="text-2xl text-gray-100 font-bold tracking-wider ms-2"
          >
            <Link href={"/tests/todos/create-todo"}> Todo</Link>
          </button>
          <CreateTodoForm />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 p-4">
          {todos &&
            todos?.map((todo: Todo) => {
              return <TodoCard key={todo.id} todo={todo} />;
            })}
        </div>
      </main>
    </React.Fragment>
  );
};

export default TodosPage;
