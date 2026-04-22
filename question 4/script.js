document.getElementById('billForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var consumerNumber = document.getElementById('consumerNumber').value.trim();
    var name = document.getElementById('name').value.trim();
    var units = document.getElementById('units').value.trim();

    if (consumerNumber === '') {
        alert('Please enter Consumer Number.');
        return;
    }

    if (name === '') {
        alert('Please enter Name.');
        return;
    }

    if (units === '') {
        alert('Please enter Units Consumed.');
        return;
    }

    units = parseFloat(units);

    if (isNaN(units) || units < 0) {
        alert('Units Consumed must be a valid positive number.');
        return;
    }

    var bill = 0;

    if (units <= 50) {
        bill = units * 2;
    } else if (units <= 100) {
        bill = (50 * 2) + ((units - 50) * 3);
    } else if (units <= 200) {
        bill = (50 * 2) + (50 * 3) + ((units - 100) * 5);
    } else {
        bill = (50 * 2) + (50 * 3) + (100 * 5) + ((units - 200) * 7);
    }

    alert(
        'Electricity Bill Details\n\n' +
        'Consumer Number: ' + consumerNumber + '\n' +
        'Name: ' + name + '\n' +
        'Units Consumed: ' + units + '\n\n' +
        'Total Bill Amount: Rs. ' + bill.toFixed(2)
    );
});
