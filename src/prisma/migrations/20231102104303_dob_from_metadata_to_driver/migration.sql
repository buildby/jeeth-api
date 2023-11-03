/*
  Warnings:

  - You are about to drop the column `dob` on the `MetaData` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Driver` ADD COLUMN `dob` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `MetaData` DROP COLUMN `dob`;
