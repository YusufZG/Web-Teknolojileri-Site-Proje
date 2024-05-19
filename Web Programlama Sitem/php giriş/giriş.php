<?php 

$numara = $_POST['numara'];
$sadeceNumara = substr($_POST['numara'],0 , 10);
$sifre = $_POST['sifre'];
if (isset($_POST['submit']))
{
    if($numara == "b231210046@sakarya.edu.tr" && $sifre == "b231210046")
    {
        
    }
    else if ($numara == "" || $sifre == "")
    {
        echo "<script>window.location.href = 'login.html';
        </script>";
        exit;
    }
    else
    {
        echo "<script>window.location.href = 'login.html';
        </script>";
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
<body>
  <div class="container">
    <div class="alert alert-success" role="alert">
      Giriş başarıyla gerçekleştirildi. Yönlendiriliyorsunuz...
    </div>
  </div>

  <!-- JavaScript ile yönlendirme işlemi -->
  <script>
    setTimeout(function() {
      window.location.href = "http://www.yusufgok.byethost5.com/Anasayfa.html"; // Yönlendirilecek site adresi
    }, 3000); // 3 saniye sonra yönlendirme yapılacak (3000 milisaniye)
  </script>
</body>
</html>