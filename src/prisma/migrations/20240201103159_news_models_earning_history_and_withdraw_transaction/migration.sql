-- CreateTable
CREATE TABLE `WithdrawTransaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `driver_id` INTEGER NULL,
    `clientsite_id` INTEGER NULL,
    `withdrawalAmount` INTEGER NULL,
    `transactionStatus` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EarningUploadHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `vendor_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `driverId` INTEGER NULL,
    `clientSiteId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WithdrawTransaction` ADD CONSTRAINT `WithdrawTransaction_driver_id_fkey` FOREIGN KEY (`driver_id`) REFERENCES `Driver`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WithdrawTransaction` ADD CONSTRAINT `WithdrawTransaction_clientsite_id_fkey` FOREIGN KEY (`clientsite_id`) REFERENCES `ClientSite`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EarningUploadHistory` ADD CONSTRAINT `EarningUploadHistory_vendor_id_fkey` FOREIGN KEY (`vendor_id`) REFERENCES `Vendor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EarningUploadHistory` ADD CONSTRAINT `EarningUploadHistory_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `Driver`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EarningUploadHistory` ADD CONSTRAINT `EarningUploadHistory_clientSiteId_fkey` FOREIGN KEY (`clientSiteId`) REFERENCES `ClientSite`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
