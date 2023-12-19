-- DropForeignKey
ALTER TABLE "Rent" DROP CONSTRAINT "Rent_bookId_fkey";

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
