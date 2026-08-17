<?php
session_start();

// PROTEKSI HALAMAN UTAMA
if (!isset($_SESSION['login'])) {
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dashboard Utama</title>
</head>
<body>

    <!-- Tombol Logout -->
    <a href="logout.php" style="color: red; float: right;">Logout</a>

    <h1>Selamat Datang, <?= $_SESSION['username']; ?>!</h1>
    <p>Ini adalah halaman utama/kalkulator turnamen yang berhasil diproteksi.</p>

    <!-- KODE KLASEMEN / HALAMAN UTAMA KAMU DI SINI -->

</body>
</html>
