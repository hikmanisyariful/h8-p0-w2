var tanggal= 25;
var bulan= 4; 
var tahun= 1995;



if (bulan === 1 || bulan === 3 || bulan === 5 || bulan ===7 || bulan === 8 || bulan === 10 || bulan === 12) {
    switch (bulan) {
        case 1:
            bulan = "Januari";
            break;
        case 3:
            bulan = "Maret";
            break;
        case 5:
            bulan = "Mei"; 
            break;
        case 7:
            bulan = "Juli";
            break;
        case 8:
            bulan = "Agustus";
            break;
        case 10:
            bulan = "Oktober";
            break;
    }
    if (tanggal >= 1 && tanggal <= 31) {
        console.log(`${tanggal} ${bulan} ${tahun}`);
    } else {
        console.log('out of range');
    }
} else if (bulan === 4 || bulan === 6 || bulan === 9 || bulan === 11) {
    switch (bulan) {
        case 4:
            bulan = "April";
            break;
        case 6:
            bulan = "Juni";
            break;
        case 9:
            bulan = "September"; 
            break;
        case 11:
            bulan = "November";
            break;
    }
    if (tanggal >=1 && tanggal <= 30) {
        console.log(`${tanggal} ${bulan} ${tahun}`);
    } else {
        console.log('out of range');
    }
} else if (bulan === 2 ) {
    switch (bulan) {
        case 2:
            bulan = "Februari";
            break;
    }
    if (tanggal >= 1 && tanggal <= 28) {
        console.log(`${tanggal} ${bulan} ${tahun}`);
    } else if (tanggal = 29) {
        if (tahun % 4 === 0 && tahun % 100 !== 0 || tahun % 4 === 0 && tahun % 100 === 0 && tahun % 400 === 0) {
            console.log(`${tanggal} ${bulan} ${tahun}`);
        } else {
            console.log('out of range');
        }
    } else {
        console.log('out of range');
    }
} else {
    console.log('out of range');
}




