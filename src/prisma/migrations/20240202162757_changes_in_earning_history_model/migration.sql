/*
  Warnings:

  - You are about to drop the column `clientSiteId` on the `EarningUploadHistory` table. All the data in the column will be lost.
  - You are about to drop the column `driverId` on the `EarningUploadHistory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `EarningUploadHistory` DROP FOREIGN KEY `EarningUploadHistory_clientSiteId_fkey`;

-- DropForeignKey
ALTER TABLE `EarningUploadHistory` DROP FOREIGN KEY `EarningUploadHistory_driverId_fkey`;

-- AlterTable
ALTER TABLE `EarningUploadHistory` DROP COLUMN `clientSiteId`,
    DROP COLUMN `driverId`;
