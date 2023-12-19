-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "systemEntryDate" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isLent" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IRent" (
    "id" TEXT NOT NULL,
    "student_name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "withdrawalDate" TIMESTAMP(3) NOT NULL,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "IRent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "IRent" ADD CONSTRAINT "IRent_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
