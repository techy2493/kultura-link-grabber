function act(link) {
    navigator.clipboard.writeText(link).then(function() {
        console.log("Successfully inserted to clipboard")
      }, function() {
        console.log("Failed to write to clipboard")
      });
}