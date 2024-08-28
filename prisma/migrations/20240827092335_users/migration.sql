-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'SUPER_ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "email" VARCHAR(70) NOT NULL,
    "password" VARCHAR(120) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CUSTOMER',
    "acceptedPolicy" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
