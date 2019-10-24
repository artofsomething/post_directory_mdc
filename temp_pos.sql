-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2019 at 02:57 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `temp_pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `cashier_shift`
--

CREATE TABLE `cashier_shift` (
  `idk` bigint(50) NOT NULL,
  `uid` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tgl` datetime NOT NULL,
  `balance` double NOT NULL,
  `tipe` enum('Open','Close') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Open',
  `transactions` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `company_profile`
--

CREATE TABLE `company_profile` (
  `idk` int(10) NOT NULL,
  `nama` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `no_telp` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `website` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `fax` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `alamat` text COLLATE utf8_unicode_ci NOT NULL,
  `logo` text COLLATE utf8_unicode_ci NOT NULL,
  `logo_text` text COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('Active','Not Active') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Not Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detail_po`
--

CREATE TABLE `detail_po` (
  `idk` bigint(50) NOT NULL,
  `id_transaksi` bigint(50) NOT NULL,
  `id_product` bigint(30) NOT NULL,
  `nama_product` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `qty` double NOT NULL,
  `harga` double NOT NULL,
  `total` double NOT NULL,
  `expired_date` varchar(25) COLLATE utf8_unicode_ci NOT NULL DEFAULT '--',
  `status` enum('Open','Pending','Finish','Return') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Open'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detail_sales`
--

CREATE TABLE `detail_sales` (
  `idk` bigint(50) NOT NULL,
  `id_transaksi` bigint(50) NOT NULL,
  `id_product` bigint(30) NOT NULL,
  `barcode` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nama_product` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `qty` double NOT NULL,
  `harga` double NOT NULL,
  `diskon` double NOT NULL,
  `total` double NOT NULL,
  `status` enum('Open','Hold','Refund','Finish','Cancel') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Open'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detail_stock_opname`
--

CREATE TABLE `detail_stock_opname` (
  `idk` bigint(80) NOT NULL,
  `id_stock_opname` bigint(50) NOT NULL,
  `id_product` bigint(50) NOT NULL,
  `system` int(10) NOT NULL,
  `actual` int(10) NOT NULL,
  `difference` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detail_utpt`
--

CREATE TABLE `detail_utpt` (
  `idk` bigint(50) NOT NULL,
  `id_utpt` bigint(50) NOT NULL,
  `tgl` datetime NOT NULL,
  `uid` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `total` double NOT NULL,
  `status` int(2) NOT NULL,
  `keterangan` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `idk` int(10) NOT NULL,
  `nama` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `keterangan` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `parents` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `login_session`
--

CREATE TABLE `login_session` (
  `idk` bigint(50) NOT NULL,
  `uid` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tgl` datetime NOT NULL,
  `status` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `log_activity`
--

CREATE TABLE `log_activity` (
  `idk` bigint(50) NOT NULL,
  `id_transaction` bigint(30) NOT NULL,
  `action` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `tgl` date NOT NULL,
  `users` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `operational_cost`
--

CREATE TABLE `operational_cost` (
  `idk` bigint(50) NOT NULL,
  `judul` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `supervisor` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `jumlah` double NOT NULL,
  `tgl` date NOT NULL,
  `keterangan` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `idk` bigint(20) NOT NULL,
  `kode` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `barcode` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nama` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `kategori` int(10) NOT NULL,
  `subkategori` int(10) NOT NULL,
  `cqty` bigint(20) NOT NULL,
  `harga_beli` double NOT NULL,
  `harga1` double NOT NULL,
  `harga2` double NOT NULL,
  `harga3` double NOT NULL,
  `satuan` int(10) NOT NULL,
  `supplier` int(10) NOT NULL,
  `gambar` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchase_order`
--

CREATE TABLE `purchase_order` (
  `idk` bigint(50) NOT NULL,
  `id_supplier` int(10) NOT NULL,
  `tgl` date NOT NULL,
  `subtotal` double NOT NULL,
  `qty` double NOT NULL,
  `total` double NOT NULL,
  `jenis` enum('Cash','Credit') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Cash',
  `status` enum('Open','Pending','Finish','Installment','Send','Return') COLLATE utf8_unicode_ci NOT NULL,
  `pajak` double NOT NULL,
  `cicilan` double NOT NULL,
  `user` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Note` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sales_transaction`
--

CREATE TABLE `sales_transaction` (
  `idk` bigint(50) NOT NULL,
  `tgl` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `users` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `subtotal` double NOT NULL,
  `qty` double NOT NULL,
  `diskon` double NOT NULL,
  `pajak` double NOT NULL,
  `total` double NOT NULL,
  `jenis` enum('Cash','Credit Card','Debit Card','Voucher','Wechat Pay','Alipay','Other','Split Payment Type') COLLATE utf8_unicode_ci NOT NULL,
  `no_tickets` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('Open','Hold','Finish','Refund','Cancel') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Open',
  `note` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `satuan`
--

CREATE TABLE `satuan` (
  `idk` int(10) NOT NULL,
  `nama` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `keterangan` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stock_movement`
--

CREATE TABLE `stock_movement` (
  `idk` bigint(30) NOT NULL,
  `id_product` bigint(20) NOT NULL,
  `tgl` date NOT NULL,
  `id_transaksi` bigint(30) NOT NULL,
  `qty` bigint(20) NOT NULL,
  `last_qty` bigint(30) NOT NULL,
  `exp_date` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tipe` enum('Out','In','Refund','Broken','Disposal') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Out',
  `status` enum('Close','Open','Adjustment') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Open',
  `note` text COLLATE utf8_unicode_ci NOT NULL,
  `user` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stock_opname`
--

CREATE TABLE `stock_opname` (
  `idk` bigint(50) NOT NULL,
  `tgl` datetime NOT NULL,
  `uid` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `supervisor` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('Open','Finish') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Open',
  `difference` int(10) NOT NULL,
  `pass` int(10) NOT NULL,
  `total_item` int(10) NOT NULL,
  `tgl_finish` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE `supplier` (
  `idk` int(10) NOT NULL,
  `nama` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `no_telp` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `website` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cp` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cp_phone` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `alamat` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `temp_most_sales_item`
--

CREATE TABLE `temp_most_sales_item` (
  `idk` bigint(50) NOT NULL,
  `id_product` bigint(30) NOT NULL,
  `qty` int(10) NOT NULL,
  `tgl` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `temp_stock_report`
--

CREATE TABLE `temp_stock_report` (
  `idk` bigint(50) NOT NULL,
  `products` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `barcode` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `category` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `purchase_price` double NOT NULL DEFAULT '0',
  `sales_price` double NOT NULL DEFAULT '0',
  `current_qty` int(10) NOT NULL DEFAULT '0',
  `qty_in` int(10) NOT NULL DEFAULT '0',
  `qty_out` int(10) NOT NULL DEFAULT '0',
  `qty_refund` int(10) NOT NULL DEFAULT '0',
  `qty_broken` int(10) NOT NULL DEFAULT '0',
  `total_purchase` double NOT NULL DEFAULT '0',
  `total_sales` double NOT NULL DEFAULT '0',
  `total_refund` double NOT NULL DEFAULT '0',
  `total_disc` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idk` int(10) NOT NULL,
  `uid` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `pwd` text COLLATE utf8_unicode_ci NOT NULL,
  `nama` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `level` enum('Admin','Cashier','Supervisor','Logistic','Manager') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Cashier'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `utang_piutang`
--

CREATE TABLE `utang_piutang` (
  `idk` bigint(50) NOT NULL,
  `id_transaksi` bigint(50) NOT NULL,
  `tgl_transaksi` datetime NOT NULL,
  `uid` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `jatuh_tempo` date NOT NULL,
  `total` double NOT NULL,
  `sisa` double NOT NULL,
  `terbayar` double NOT NULL,
  `status` enum('Open','Installment','Finish') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Open',
  `tipe` enum('Sales','Purchase') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Purchase'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cashier_shift`
--
ALTER TABLE `cashier_shift`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `company_profile`
--
ALTER TABLE `company_profile`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `detail_po`
--
ALTER TABLE `detail_po`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `detail_sales`
--
ALTER TABLE `detail_sales`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `detail_stock_opname`
--
ALTER TABLE `detail_stock_opname`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `detail_utpt`
--
ALTER TABLE `detail_utpt`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `login_session`
--
ALTER TABLE `login_session`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `log_activity`
--
ALTER TABLE `log_activity`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `operational_cost`
--
ALTER TABLE `operational_cost`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `purchase_order`
--
ALTER TABLE `purchase_order`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `sales_transaction`
--
ALTER TABLE `sales_transaction`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `satuan`
--
ALTER TABLE `satuan`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `stock_movement`
--
ALTER TABLE `stock_movement`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `stock_opname`
--
ALTER TABLE `stock_opname`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `temp_most_sales_item`
--
ALTER TABLE `temp_most_sales_item`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `temp_stock_report`
--
ALTER TABLE `temp_stock_report`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idk`);

--
-- Indexes for table `utang_piutang`
--
ALTER TABLE `utang_piutang`
  ADD PRIMARY KEY (`idk`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cashier_shift`
--
ALTER TABLE `cashier_shift`
  MODIFY `idk` bigint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `company_profile`
--
ALTER TABLE `company_profile`
  MODIFY `idk` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detail_po`
--
ALTER TABLE `detail_po`
  MODIFY `idk` bigint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `detail_sales`
--
ALTER TABLE `detail_sales`
  MODIFY `idk` bigint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `detail_stock_opname`
--
ALTER TABLE `detail_stock_opname`
  MODIFY `idk` bigint(80) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detail_utpt`
--
ALTER TABLE `detail_utpt`
  MODIFY `idk` bigint(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `idk` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `login_session`
--
ALTER TABLE `login_session`
  MODIFY `idk` bigint(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `log_activity`
--
ALTER TABLE `log_activity`
  MODIFY `idk` bigint(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `operational_cost`
--
ALTER TABLE `operational_cost`
  MODIFY `idk` bigint(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `idk` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1330;

--
-- AUTO_INCREMENT for table `purchase_order`
--
ALTER TABLE `purchase_order`
  MODIFY `idk` bigint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sales_transaction`
--
ALTER TABLE `sales_transaction`
  MODIFY `idk` bigint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `satuan`
--
ALTER TABLE `satuan`
  MODIFY `idk` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `stock_movement`
--
ALTER TABLE `stock_movement`
  MODIFY `idk` bigint(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `stock_opname`
--
ALTER TABLE `stock_opname`
  MODIFY `idk` bigint(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `idk` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `temp_most_sales_item`
--
ALTER TABLE `temp_most_sales_item`
  MODIFY `idk` bigint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `temp_stock_report`
--
ALTER TABLE `temp_stock_report`
  MODIFY `idk` bigint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idk` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `utang_piutang`
--
ALTER TABLE `utang_piutang`
  MODIFY `idk` bigint(50) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
