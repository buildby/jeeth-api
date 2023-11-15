-- CreateTable
CREATE TABLE `ContactForm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `message` VARCHAR(191) NULL,
    `found_via` VARCHAR(191) NULL,
    `form_type` ENUM('CONTACT', 'TRY_DEMO') NOT NULL DEFAULT 'TRY_DEMO',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
