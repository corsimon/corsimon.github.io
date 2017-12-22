var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var objJSON = JSON.parse(myObj);
        document.getElementById("name").innerHTML = objJSON.name;
        document.getElementById("numBloc").innerHTML = objJSON.height;
        document.getElementById("numPeers").innerHTML = objJSON.peer_count;
        document.getElementById("unconfirmed").innerHTML = objJSON.unconfirmed_count;
    }
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send();

$('#form1').on('submit', function(event) {
    var isAddress = /^[0-9a-zA-Z]{34}$/.test('#adresse');
    alert(isAddress);
    event.preventDefault();
    var input = $('#adresse').val();
    $.ajax("https://api.blockcypher.com/v1/btc/main/addrs/" + input, {
        success: function(result) {
            $('#result').html(
                '<h4> Adresse ' + result.address + '</h4>' +
                '<p><u>Total reçu:</u> ' + (result.total_received) / 100000000 + ' BTC</p>' +
                '<p><u>Total envoyé:</u> ' + (result.total_sent) / 100000000 + ' BTC</p>' +
                '<p><u>=> Balance:</u> ' + (result.balance) / 100000000 + ' BTC</p>' +
                '<p><u>Nombre de transactions:</u> ' + result.n_tx + '</p>'
            );
        }, // end success
        error: function(request, errorType, errorMessage) {
            alert('Error: ' + errorType + ', ' + errorMessage + ' :(');
        },
        timeout: 3000,
        beforeSend: function() {
            $('#search').attr('value', 'loading...');
        },
        complete: function() {
            $('#search').attr('value', 'Go!');
        }
    }); // end poster getJSON
}); // end submit event

$('#form2').on('submit', function(event) {
    var isAddress = /^[0-9a-zA-Z]{64}$/.test('#hashT');
    alert(isAddress);
    event.preventDefault();
    var input = $('#hashT').val();
    $.ajax("https://api.blockcypher.com/v1/btc/main/txs/" + input, {
        success: function(result) {
            $('#result').html(
                '<h4> Transaction ' + result.hash + '</h4>' +
                '<p><u>Numéro de bloc:</u> ' + result.block_height + '</p>' +
                '<p><u>Total:</u> ' + (result.total) / 100000000 + ' BTC</p>' +
                '<p><u>Fees:</u> ' + result.fees + '</p>' +
                '<p><u>Taille:</u> ' + result.size + '</p>' +
                '<p><u>Date de confirmation:</u> ' + result.confirmed + '</p>' +
                '<p><u>Nombre de confirmations:</u> ' + result.confirmations + '</p>'
            );
        }, // end success
        error: function(request, errorType, errorMessage) {
            alert('Error: ' + errorType + ', ' + errorMessage + ' :(');
        },
        timeout: 3000,
        beforeSend: function() {
            $('#search').attr('value', 'loading...');
        },
        complete: function() {
            $('#search').attr('value', 'Go!');
        }
    }); // end poster getJSON
}); // end submit event

$('#form3').on('submit', function(event) {
    var isAddress = /^[0-9a-zA-Z]{64}$/.test('#hashB');
    alert(isAddress);
    event.preventDefault();
    var input = $('#hashB').val();
    $.ajax("https://api.blockcypher.com/v1/btc/main/blocks/" + input, {
        //$.ajax(q.url, {
        success: function(result) {
            $('#result').html(
                '<h4> Bloc ' + result.hash + '</h4>' +
                '<p><u>Numéro:</u> ' + result.height + '</p>' +
                '<p><u>Chaine:</u> ' + result.chain + '</p>' +
                '<p><u>Fees:</u> ' + result.fees + '</p>' +
                '<p><u>Date:</u> ' + result.time + '</p>' +
                '<p><u>Nombres de transactions:</u> ' + result.n_tx + '</p>' +
                '<p><u>Bloc précédent:</u> ' + result.prev_block + '</p>'
            );
        }, // end success
        error: function(request, errorType, errorMessage) {
            alert('Error: ' + errorType + ', ' + errorMessage + ' :(');
        },
        timeout: 3000,
        beforeSend: function() {
            $('#search').attr('value', 'loading...');
        },
        complete: function() {
            $('#search').attr('value', 'Go!');
        }
    }); // end poster getJSON
}); // end submit event

$('#form4').on('submit', function(event) {
    var isAddress = /^[0-9a-zA-Z]{34}$/.test('#index');
    alert(isAddress);
    event.preventDefault();
    var input = $('#index').val();
    $.ajax("https://api.blockcypher.com/v1/btc/main/blocks/" + input, {
        //$.ajax(q.url, {
        success: function(result) {
            $('#result').html(
                '<h4> Bloc ' + result.hash + '</h4>' +
                '<p><u>Numéro:</u> ' + result.height + '</p>' +
                '<p><u>Chaine:</u> ' + result.chain + '</p>' +
                '<p><u>Fees:</u> ' + result.fees + '</p>' +
                '<p><u>Date:</u> ' + result.time + '</p>' +
                '<p><u>Nombres de transactions:</u> ' + result.n_tx + '</p>' +
                '<p><u>Bloc précédent:</u> ' + result.prev_block + '</p>'
            );
        }, // end success
        error: function(request, errorType, errorMessage) {
            alert('Error: ' + errorType + ', ' + errorMessage + ' :(');
        },
        timeout: 3000,
        beforeSend: function() {
            $('#search').attr('value', 'loading...');
        },
        complete: function() {
            $('#search').attr('value', 'Go!');
        }
    }); // end poster getJSON
}); // end submit event



function rechercheA() {
    //var addressBTC = document.getElementById("addresse");
    /*
    ajaxGet("https://api.blockcypher.com/v1/btc/main", function (reponse) {
    	var objJSON = JSON.parse(myObj);
    	document.getElementById("name").innerHTML = "test";
    	document.getElementById("numBloc").innerHTML = objJSON.height;
    	document.getElementById("numPeers").innerHTML = objJSON.peer_count;
    	document.getElementById("unconfirmed").innerHTML = objJSON.unconfirmed_count;
    });
    */
    /*
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    	   // Typical action to be performed when the document is ready:
    	   document.getElementById("resultA").innerHTML = xhttp.responseText;
    	   alert("test");
    	}
    };
    xhttp.open("GET", "https://api.blockcypher.com/v1/btc/main/blocks/0000000000000000189bba3564a63772107b5673c940c16f12662b3e8546b412", true);
    xhttp.send();*/
}