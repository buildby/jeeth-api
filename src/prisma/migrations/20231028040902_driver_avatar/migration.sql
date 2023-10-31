/*
  Warnings:

  - Added the required column `profile` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Driver` ADD COLUMN `avatar` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Vendor` ADD COLUMN `profile` VARCHAR(191) NOT NULL;
