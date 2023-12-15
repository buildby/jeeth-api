/*
  Warnings:

  - Added the required column `address` to the `ClientSite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ClientSite` ADD COLUMN `address` VARCHAR(191) NOT NULL DEFAULT 'Unknown';
