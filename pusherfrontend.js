// for later use
Pusher.logToConsole = true;

var pusher = new Pusher('aa0f301a21b25380fc83', {
  cluster: 'eu',
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function (data) {
  alert(JSON.stringify(data));
});
