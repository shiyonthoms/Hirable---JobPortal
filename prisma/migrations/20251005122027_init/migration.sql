-- CreateTable
CREATE TABLE "user_auth" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "acc_type" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_auth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_email_key" ON "user_auth"("email");
