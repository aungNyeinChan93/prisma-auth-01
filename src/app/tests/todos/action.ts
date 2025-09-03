'use server'

import { prisma } from "@/libs/db/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createTodo = async (formData: FormData) => {
    try {
        const task = formData.get('task') as string;
        await prisma.todo.create({ data: { task } })
        revalidatePath('/tests/todos')
        return redirect('/tests/todos')

    } catch (error) {
        if (error instanceof Error) {
            console.error(error?.message)
        }
    }

};

export const deleteTodo = async (formData: FormData) => {
    try {
        const id = formData.get('id') as string;
        await prisma.todo.delete({ where: { id } })
        revalidatePath('/tests/todos')
        return redirect('/tests/todos')

    } catch (error) {
        if (error instanceof Error) {
            console.error(error?.message)
        }
    }

};