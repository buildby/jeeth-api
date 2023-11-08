/*
  Warnings:

  - You are about to drop the column `accNumber` on the `MetaData` table. All the data in the column will be lost.
  - You are about to drop the column `bankName` on the `MetaData` table. All the data in the column will be lost.
  - You are about to drop the column `ifscCode` on the `MetaData` table. All the data in the column will be lost.
  - You are about to drop the column `ownerAddress` on the `MetaData` table. All the data in the column will be lost.
  - You are about to drop the column `ownerName` on the `MetaData` table. All the data in the column will be lost.
  - You are about to drop the column `ownerPhoneNumber` on the `MetaData` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleImage` on the `MetaData` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleMake` on the `MetaData` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleModel` on the `MetaData` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleNumber` on the `MetaData` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleType` on the `MetaData` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleYear` on the `MetaData` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Driver` ADD COLUMN `accNumber` VARCHAR(191) NULL,
    ADD COLUMN `bankName` VARCHAR(191) NULL,
    ADD COLUMN `ifscCode` VARCHAR(191) NULL,
    ADD COLUMN `ownerAddress` VARCHAR(191) NULL,
    ADD COLUMN `ownerName` VARCHAR(191) NULL,
    ADD COLUMN `ownerPhoneNumber` VARCHAR(191) NULL,
    ADD COLUMN `vehicleImage` VARCHAR(191) NULL,
    ADD COLUMN `vehicleMake` VARCHAR(191) NULL,
    ADD COLUMN `vehicleModel` VARCHAR(191) NULL,
    ADD COLUMN `vehicleNumber` VARCHAR(191) NULL,
    ADD COLUMN `vehicleType` VARCHAR(191) NULL,
    ADD COLUMN `vehicleYear` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `MetaData` DROP COLUMN `accNumber`,
    DROP COLUMN `bankName`,
    DROP COLUMN `ifscCode`,
    DROP COLUMN `ownerAddress`,
    DROP COLUMN `ownerName`,
    DROP COLUMN `ownerPhoneNumber`,
    DROP COLUMN `vehicleImage`,
    DROP COLUMN `vehicleMake`,
    DROP COLUMN `vehicleModel`,
    DROP COLUMN `vehicleNumber`,
    DROP COLUMN `vehicleType`,
    DROP COLUMN `vehicleYear`;
