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