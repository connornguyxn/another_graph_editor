if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/another_graph_editor/sw.js', { scope: '/another_graph_editor/' })})}