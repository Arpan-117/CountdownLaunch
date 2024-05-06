var countDownDate = new Date("May 25, 2024 8:00:00");

      // Update the count down every 1 second
      var x = setInterval(function () {
        // Get todays date and time
        var now = new Date().getTime();

        // Find the time between now an the count down date
        var diff = countDownDate - now;

        // Time calculations
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById('time-counter').innerHTML =
          days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

        // Countdown Ends
        if (diff < 0) {
          clearInterval(x);
          document.getElementById('time-counter').innerHTML = 'EXPIRED';
        }
      }, 1000);