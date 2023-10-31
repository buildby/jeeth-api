/*
  Warnings:

  - Added the required column `avatar` to the `ClientSite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactNumbers` to the `ClientSite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `ClientSite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workingDays` to the `ClientSite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ClientSite` ADD COLUMN `avatar` VARCHAR(191) NOT NULL,
    ADD COLUMN `contactNumbers` JSON NOT NULL,
    ADD COLUMN `location` VARCHAR(191) NOT NULL,
    ADD COLUMN `workingDays` JSON NOT NULL;
