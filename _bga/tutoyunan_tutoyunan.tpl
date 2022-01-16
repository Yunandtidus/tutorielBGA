{OVERALL_GAME_HEADER}

<script type="text/javascript">
const URL = dojoConfig.packages.reduce((r,p) => p.name == "bgagame" ? p.location : r, null);
document.write('<script src="' + URL + 'modules/js/app.js"></'+'script><script src="' + URL + 'modules/js/chunk-vendors.js"></'+'script>');
</script>

<div id="app"></div>

{OVERALL_GAME_FOOTER}
