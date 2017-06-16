<?PHP
	//include ("phpPublicFiles/initIndex.php");
	
		if (!isset($_GET["p"])) include ("indexStart.php");
		else
		{
			$p = str_replace(".", "/", $_GET["p"]);
			if (file_exists($p.".php")) include ($p.".php");
			else include ("indexStart.php");
		}
?>