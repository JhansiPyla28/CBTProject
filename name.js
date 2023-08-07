<script type="text/javascript">
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
</script>
