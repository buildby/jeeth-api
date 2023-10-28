/*
  Warnings:

  - You are about to drop the column `profile` on the `Vendor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Vendor` DROP COLUMN `profile`,
    ADD COLUMN `avatar` VARCHAR(191) NULL;
