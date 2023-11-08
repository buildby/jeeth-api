/*
  Warnings:

  - Added the required column `clientsite_id` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendor_id` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Driver` ADD COLUMN `clientsite_id` INTEGER NOT NULL,
    ADD COLUMN `vendor_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_vendor_id_fkey` FOREIGN KEY (`vendor_id`) REFERENCES `Vendor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_clientsite_id_fkey` FOREIGN KEY (`clientsite_id`) REFERENCES `ClientSite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
