
shadow.cljs.devtools.client.env.module_loaded('main');

try { games.ui.start(); } catch (e) { console.error("An error occurred when calling (games.ui/start)"); throw(e); }