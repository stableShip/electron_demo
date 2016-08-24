CREATE TABLE `customer_manager`.`customers` (
  `customer_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(450) NULL,
  `city` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `remarks` VARCHAR(500) NULL, PRIMARY KEY (`customer_id`)
);