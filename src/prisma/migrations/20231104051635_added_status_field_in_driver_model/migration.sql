/*
  Warnings:

  - Added the required column `status` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Driver` ADD COLUMN `status` ENUM('ACTIVE', 'IN_ACTIVE') NOT NULL;
