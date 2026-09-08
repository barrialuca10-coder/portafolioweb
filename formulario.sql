SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET time_zone = "+00:00";

CREATE TABLE `formulario` (
    `id` int(11) NOT NULL,
    `nombre` varchar(100) NOT NULL,
    `asunto` varchar(150) NOT NULL,
    `mensaje` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

ALTER TABLE `formulario` ADD PRIMARY KEY (`id`);

ALTER TABLE `formulario`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

COMMIT;