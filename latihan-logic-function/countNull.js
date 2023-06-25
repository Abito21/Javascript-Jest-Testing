const tablea = [
    { A: 45, B: 'NULL', C: 12, D: 83 },
    { A: 'NULL', B: 32, C: 67, D: 76 },
    { A: 92, B: 'NULL', C: 'NULL', D: 'NULL' },
    { A: 92, B: 'NULL', C: 'NULL', D: 'NULL' },
    { A: 'NULL', B: 'NULL', C: 'NULL', D: 'NULL' },
    // ...
  ];
  
  function countNullValues(table, kolom, totalRow, limit) {
      let nullCount = 0;
      // Loop melalui setiap baris dalam kolom yang ditentukan
      for (let i = 0; i < table.length; i++) {
          const row = table[i];
          const value = row[kolom];
          if (value === 'NULL' || value === '') {
          nullCount++;
        }
      }
      // Menghitung persentase null value
      const nullPercentage = (nullCount / totalRow) * 100;
  
      console.log('Nama kolom : ',kolom,'\nJumlah NULL : ', nullCount, '\nJumlah total : ', totalRow); 
  
      // Memeriksa jika persentase null value melebihi batasan yang ditentukan
      if (nullPercentage >= limit) {
          throw new Error(`column ${kolom} did not passed.`);
      }
    }
    countNullValues(tablea, 'A', tablea.length, 50);