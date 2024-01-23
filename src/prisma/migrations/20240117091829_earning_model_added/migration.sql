-- CreateTable
CREATE TABLE `Earning` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `phone` VARCHAR(191) NOT NULL,
    `vehicleNumber` VARCHAR(191) NULL,
    `tripId` VARCHAR(191) NOT NULL,
    `tripDate` DATETIME(3) NOT NULL,
    `clientsite_id` INTEGER NULL,
    `distanceTravelled` INTEGER NOT NULL,
    `escort` BOOLEAN NOT NULL,
    `dropLocation` VARCHAR(191) NOT NULL,
    `tripType` VARCHAR(191) NOT NULL,
    `eta` VARCHAR(191) NOT NULL,
    `ota` VARCHAR(191) NOT NULL,
    `etd` VARCHAR(191) NOT NULL,
    `otd` VARCHAR(191) NOT NULL,
    `shiftTime` VARCHAR(191) NOT NULL,
    `headCount` INTEGER NOT NULL,

    UNIQUE INDEX `Earning_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Earning` ADD CONSTRAINT `Earning_clientsite_id_fkey` FOREIGN KEY (`clientsite_id`) REFERENCES `ClientSite`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
