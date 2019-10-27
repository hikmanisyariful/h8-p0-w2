function konversiMenit(menit) {
    reminder = menit % 60;
    hour= (menit-reminder) / 60;
    if (reminder < 10) {
        reminder = '0' + reminder;
    }
    time = `${hour}:${reminder}`;
    return time;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00