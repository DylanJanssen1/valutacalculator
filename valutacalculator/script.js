jQuery(document).ready(function ($) {

    console.log("hallo");
    //api key
    //d599fca3b67d62c1abd9cd84

    // the url
    //url https://v6.exchangerate-api.com/v6/d599fca3b67d62c1abd9cd84/pair/{From}/{To}/{Amount}

    //url https://v6.exchangerate-api.com/v6/d599fca3b67d62c1abd9cd84/latest/USD

    $("#exchange").on('click', function () {

        const fromCurrency = $('#from').val();
        const toCurrency = $('#to').val();
        const amount = $('#amount').val();

        if (amount == "") {
            alert("You need to select an amount!");
        } else {

            const fromCountry = $('select[name="from"] option[value="' + fromCurrency + '"]').text();
            const toCountry = $('select[name="to"] option[value="' + toCurrency + '"]').text();

            let valutaCodeUrl = 'https://v6.exchangerate-api.com/v6/d599fca3b67d62c1abd9cd84/pair/' + fromCurrency + '/' + toCurrency + '/' + amount + '';

            // $('#divResult').append("Hallo");

            $.ajax({

                url: valutaCodeUrl,
                success(valuta) {
                    //alles ok

                    console.log(valuta);

                    const html = 'The exchanged amount From ' + ': <strong>' + amount + '</strong> ' + fromCountry + ' to ' + toCountry + ' : <strong>' + valuta.conversion_result + '</strong><br>';

                    $('#divResult').append(html);
                }

            })
        }
    })

})