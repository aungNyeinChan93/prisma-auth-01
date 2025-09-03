-- CreateTable
CREATE TABLE "public"."todos" (
    "id" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "isCompleted" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
