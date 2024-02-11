// latihan membuat pengecekan kondisi angkot



var noAngkot = 1
    testing = true
    jumlahAngkot = 10
while((noAngkot <= jumlahAngkot) && (testing === true)) {
    testing = confirm(`apakah mau cek angkot no.` +noAngkot+ ` ?`)
    console.log(`angkot no.`+noAngkot+` Beroprasi dengan baik` )
    
noAngkot++;
}




