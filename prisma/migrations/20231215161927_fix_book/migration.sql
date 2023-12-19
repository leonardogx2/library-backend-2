/*
  Warnings:

  - You are about to drop the `IRent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "IRent" DROP CONSTRAINT "IRent_bookId_fkey";

-- DropTable
DROP TABLE "IRent";

-- CreateTable
CREATE TABLE "Rent" (
    "id" TEXT NOT NULL,
    "student_name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "withdrawalDate" TIMESTAMP(3) NOT NULL,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "Rent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
