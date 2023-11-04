-- DropForeignKey
ALTER TABLE `Driver` DROP FOREIGN KEY `Driver_clientsite_id_fkey`;

-- DropForeignKey
ALTER TABLE `Driver` DROP FOREIGN KEY `Driver_vendor_id_fkey`;

-- AlterTable
ALTER TABLE `Driver` MODIFY `clientsite_id` INTEGER NULL,
    MODIFY `vendor_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_vendor_id_fkey` FOREIGN KEY (`vendor_id`) REFERENCES `Vendor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_clientsite_id_fkey` FOREIGN KEY (`clientsite_id`) REFERENCES `ClientSite`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
