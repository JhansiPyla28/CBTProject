<!DOCTYPE html>
<html>
<head>
    <title>Personalized Greeting</title>
    <!-- Add any CSS or other meta tags if needed -->
</head>
<body>
    <div id="greeting"></div>

    <script type="text/javascript">
        function loadGreeting() {
            SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
                var context = new SP.ClientContext.get_current();
                var currentUser = context.get_web().get_currentUser();
                context.load(currentUser);
                context.executeQueryAsync(
                    function() {
                        var displayName = currentUser.get_title();
                        var greetingElement = document.getElementById('greeting');
                        greetingElement.textContent = 'Hi ' + displayName;
                    },
                    function(sender, args) {
                        console.log('Failed to get user properties: ' + args.get_message());
                    }
                );
            });
        }

        SP.SOD.executeOrDelayUntilScriptLoaded(loadGreeting, 'sp.js');
    </script>
</body>
</html>
