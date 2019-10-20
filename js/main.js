$(document).ready(() => 
{
    console.log('Doc ready')
    $('#testBT').on('click', () =>
    {
        console.log('hello');
        $('#demo').append('Hello World!!');
    });
    $('#testAjaxBT').on('click', () =>
    {
        $.ajax({
            url: 'http://api.reimaginebanking.com/accounts?key=7efecbb2eba7997a96110e342714ad67',
            success: function(results){
                console.log(results);
                $('#demo').append($(results).length);
            }
        });
    });

    var randomName = ['Mike', 'Gretchen','Lisa','Ben','Jonnathan'];
    var randomIndex = randomName[Math.floor(Math.random() * ((randomName.length - 1) - 0 + 1))];
    $('#randomCustomerName').text('Welcome, '+ randomIndex);
    
    $('#carbonBT').on('click',() =>
    {
        $('#tableLabel').show();
        var APIKey = '7efecbb2eba7997a96110e342714ad67';
        var fakeTypeData = ['Shopping', 'Clothes','Utilities','Rent','Credit Card']

        $.ajax({
            
            url: `http://api.reimaginebanking.com/accounts?key=${APIKey}`,
            success: function(results)
            {
                var totalTransaction = 0;
                var totalCarbon = 0;
                console.log(results);
                for(var i = 0; i < results.length; i++)  
                {
                    var myResponse = results[i];
                    var accountBalance = myResponse.balance;
                    var purchaseType = fakeTypeData[Math.floor(Math.random() * ((fakeTypeData.length - 1) - 0 + 1))]; 
                    var purchaseAmount = (10 + Math.random()*100).toFixed(2); 
                    totalTransaction += parseFloat(purchaseAmount);
                    var purchaseAmountDollar = ' $' + purchaseAmount;
                    var carbonCalculate = (purchaseAmount % 1) * 160;
                    totalCarbon += carbonCalculate;
                    var carbon = carbonCalculate.toFixed(2) + " grams";
                    
                    var newRow = $('<tr>').append(`<td>${purchaseType}</td><td>${purchaseAmountDollar}</td><td>${carbon}</td>`);
                    $('.calculation').append(newRow);
                }
                var newTotal = $('<tr>').append(`<td><b> Total </b></td><td><b>$ ${totalTransaction.toFixed(2)}</b></td><td><b>${totalCarbon.toFixed(2)} grams</b></td>`);
                $('.calculation').append(newTotal);
                $('#customizedComment').show();
                $('#customizedComment').text('You spent $'+ `${totalTransaction.toFixed(2)}` +' electronically, which is equivalent ' +  `${totalCarbon.toFixed(2)}` +
                                                ' grams' );
            }
        });
    });
});