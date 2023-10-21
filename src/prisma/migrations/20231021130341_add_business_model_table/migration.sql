-- CreateTable
CREATE TABLE `BusinessModel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `type` ENUM('SLAB', 'KM_FARE', 'PACKAGE') NOT NULL,
    `modeldata` JSON NOT NULL,
    `vendor_id` INTEGER NOT NULL,
    `clientsite_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BusinessModel` ADD CONSTRAINT `BusinessModel_vendor_id_fkey` FOREIGN KEY (`vendor_id`) REFERENCES `Vendor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BusinessModel` ADD CONSTRAINT `BusinessModel_clientsite_id_fkey` FOREIGN KEY (`clientsite_id`) REFERENCES `ClientSite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
