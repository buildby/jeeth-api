-- AlterTable
ALTER TABLE `ClientSite` ALTER COLUMN `address` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Vendor` ADD COLUMN `ageOfCompany` INTEGER NULL;
