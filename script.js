let balance = 0;

      // Function to deposit money
      function deposit() {
        const amount = parseFloat(document.getElementById("amount").value);

        if (amount > 0) {
          balance = balance + amount;
          document.getElementById(
            "message"
          ).innerHTML = `Successfully deposited $${amount}. New balance is $${balance}.`;
          updateBalance();
        } else {
          document.getElementById("message").innerHTML =
            "Please enter a valid amount to deposit.";
        }
        clearInput();
      }

      // Function to withdraw money
      function withdraw() {
        const amount = parseFloat(document.getElementById("amount").value);

        if (amount > 0 && amount <= balance) {
          balance = balance - amount;
          document.getElementById(
            "message"
          ).innerHTML = `Successfully withdrew $${amount}. New balance is $${balance}.`;
          updateBalance();
        } else if (amount > balance) {
          document.getElementById("message").innerHTML =
            "Insufficient balance!";
        } else {
          document.getElementById("message").innerHTML =
            "Please enter a valid amount to withdraw.";
        }
        clearInput();
      }

      // Function to check balance
      function checkBalance() {
        document.getElementById(
          "message"
        ).innerHTML = `Your current balance is $${balance}.`;
      }

      // Update the balance displayed on the page
      function updateBalance() {
        document.getElementById("balance").innerHTML = balance;
      }

      // Clear the input field after each operation
      function clearInput() {
        document.getElementById("amount").value = "";
      }


      