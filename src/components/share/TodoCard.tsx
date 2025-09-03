import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  //   CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Todo } from "@/generated/prisma";
import { Button } from "../ui/button";
import { deleteTodo } from "@/app/tests/todos/action";

interface Props {
  todo: Todo;
}

const TodoCard = ({ todo }: Props) => {
  return (
    <React.Fragment>
      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>{todo?.task.slice(0, 10)}</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
            <CardAction>
              <form action={deleteTodo}>
                <input type="hidden" name="id" value={todo?.id} />
                <Button
                  type="submit"
                  variant={"destructive"}
                  className=" cursor-pointer"
                >
                  Delete
                </Button>
              </form>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div
              className={`${
                todo?.isCompleted ? "text-green-400" : "text-red-400"
              } overflow-hidden h-20 `}
            >
              <p>
                {todo?.task ||
                  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                vero architecto nulla. Natus quo debitis, quae odio accusantium
                quod dolores?`}
              </p>
            </div>
          </CardContent>
          {/* <CardFooter>
          <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      </div>
    </React.Fragment>
  );
};

export default TodoCard;
