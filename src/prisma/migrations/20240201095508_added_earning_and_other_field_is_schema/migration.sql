-- AlterTable
ALTER TABLE `ClientSite` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `isDeleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Earning` ADD COLUMN `earning` INTEGER NULL,
    ADD COLUMN `eligibleToWithdraw` INTEGER NULL;

-- AlterTable
ALTER TABLE `Vendor` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `isDeleted` BOOLEAN NOT NULL DEFAULT false;
