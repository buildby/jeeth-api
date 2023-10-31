/*
  Warnings:

  - You are about to drop the column `commonType` on the `AppConfig` table. All the data in the column will be lost.
  - You are about to drop the column `showButton` on the `AppConfig` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `AppConfig` DROP COLUMN `commonType`,
    DROP COLUMN `showButton`;
