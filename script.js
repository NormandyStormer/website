// Define the sendMessage function
function sendMessage() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var webhook = "https://discord.com/api/webhooks/1260563092325269617/NJ9oZb9YbsWzSxiayfrj-bbGy509Fz9MKH0Y2oQwbeB23qc68gcWl2w4Lh9RKT545soX";  // Replace with your actual webhook URL
    var content = `senders name: ${name} \nmessage: ${message}`;
    
    // Create the JSON payload
    var params = {
        content: content
    };
    
    console.log('Payload:', JSON.stringify(params));  // Debugging: Log the payload

    var request = new XMLHttpRequest();
    request.open("POST", webhook, true);
    request.setRequestHeader('Content-type', 'application/json');
    
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            console.log('Response:', request.responseText);  // Debugging: Log the response
            if (request.status === 204) {
                alert('Message sent successfully!');
            } else {
                alert('Error sending message: ' + request.status + ' ' + request.statusText);
            }
        }
    };
    
    // Send the JSON payload
    request.send(JSON.stringify(params));
}

// Add an event listener to the button
document.getElementById("send").addEventListener("click", sendMessage);