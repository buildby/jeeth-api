/*
  Warnings:

  - You are about to drop the column `accNumber` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `bankName` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `dob` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `ifscCode` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `ownerAddress` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `ownerName` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `ownerPhoneNumber` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleImage` on the `Driver` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Driver` DROP COLUMN `accNumber`,
    DROP COLUMN `bankName`,
    DROP COLUMN `dob`,
    DROP COLUMN `ifscCode`,
    DROP COLUMN `ownerAddress`,
    DROP COLUMN `ownerName`,
    DROP COLUMN `ownerPhoneNumber`,
    DROP COLUMN `vehicleImage`;

-- AlterTable
ALTER TABLE `MetaData` ADD COLUMN `accNumber` VARCHAR(191) NULL,
    ADD COLUMN `bankName` VARCHAR(191) NULL,
    ADD COLUMN `dob` DATETIME(3) NULL,
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
