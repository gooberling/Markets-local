<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7 ie"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8 ie"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9 ie"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Forms</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">


	<meta http-equiv="X-UA-Compatible" content="IE=9">
	<!-- forces IE to standards mode-->
    <!--[if IE 8]>
    	<meta http-equiv="X-UA-Compatible" content="IE=8" />
    <![endif]-->

   
	
    <?php print $head; ?>
    <title><?php print $head_title; ?></title>
    <?php print $styles; ?>
    <?php print $scripts; ?>
	
    <?php
    /**
     * Pull the HTML5shiv script from Googlecode to support IE6/7/8
     */
    ?>
    <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
  </head>
  <body class="<?php print $classes; ?> cfd"<?php print $attributes;?> >
    <!-- <div id="skip-link">
      <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
    </div> -->
   	 <?php print $page_top; ?>
	    <?php print $page; ?>
	    <?php print $page_bottom; ?>
  </body>
</html>
