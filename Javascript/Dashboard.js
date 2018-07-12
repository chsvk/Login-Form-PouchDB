var db = new PouchDB('vbb');
db.get('userData').then(function(doc){
    console.log(doc.token);
    console.log(doc.email);
})

function logout(){
    var db = new PouchDB('vbb');
       db.get('userData').then(function(doc){
           db.remove(doc);
           console.log('removed');
           location.href= "../index.html"
       })
      
}