db.collection('users').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        console.log(doc.data());
    })
})