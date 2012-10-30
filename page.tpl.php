<?php
	// footer include
	include('templates/header.inc');
?>


		<?php if ($tabs = render($tabs)): ?>
			<div class="tabs"><?php print $tabs; ?></div>
		<?php endif; ?>

		<?php if ($action_links = render($action_links)): ?>
			<ul class="action-links"><?php print $action_links; ?></ul>
		<?php endif; ?>
		
		<?php print render($page['navigation']); ?>
	
    <?php print render($messages); ?>

		<?php print render($page['content']); ?>

    <div class="riskBg"></div>


<?php
	// footer include
	include('templates/footer.inc');
?>

