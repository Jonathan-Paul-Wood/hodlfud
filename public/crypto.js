firebase.database().ref(`bitcoin/`).once('value').then(function(snapshot){
     let data = snapshot.val();
     let price = data['price'];
     let ticker = data['ticket'];
     let competitors = data['competitors'];
     console.log(competitors);
     document.getElementById("price").innerHTML = price;
  });