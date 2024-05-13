// if else biasa //

const nilai= 80;
if (nilai >= 75) {
    console.log("Anda lulus.");
} else {
    console.log("Anda tidak lulus.");
}

const jam_tidur = 21_00;
if (jam_tidur >= 20_00) {
    console.log("selamat malam.");
} else {
    console.log("waktunya anda tidur.");
}

const suhu = 21;
if (suhu >= 35) {
    console.log("panas.");
} else {
    console.log("dingin.");
}

const berat_badan= 40;
if (berat_badan>= 51) {
    console.log("ideal.");
} else {
    console.log("kurus.");
    }
    
const tinggi_badan= 140;
if (tinggi_badan>= 160) {
    console.log("ideal.");
} else {
    console.log("masih pendek.");
    }
    
  // if else ternary //  
      
    var inivar= 12
    var date= new Date ().getHours;
    date >=inivar? console.log("sudah masuk")
                 : console.log("sudah selesai");
     
    var i=90; //V nilai dimasukkan//
    const ternaryanswer = i > 75?"tuntas":"Remidi";
    console.log(ternaryanswer)
    
    var x= 17;
    const derajat = x > 17 ? "Panas":"Dingin";
    console.log(derajat)
                
    var y= 40;
    const beratbadan = y < 40 ? "Sehat":"kurang sehat";
    console.log(beratbadan)        
    
    var z= 50;
    const umur = z > 50 ? "Muda":"Tua";
    console.log(umur)
    
    // ternary if //
    
    var i= 65;//variabel yang ingin dimasukkan//
    const ternaryif = i > 80? "Lulus" : i < 65? "Tidak lulus":
       ".Tidak Lulus";
       console.log(ternaryif)
     
    var x= 15;
    const celcius = x > 25? "Panas" : x > 15? "Normal":
    "Sangat Dingin";
    console.log(celcius)
     
     var y= 20;
     const lama = i > 60? "Lansia": i > 20? "Dewasa":
     "Anak-anak";
     console.log(lama)
     
     var z= 155;
     const tb = z > 165? "Tinggi" : z > 150? "Normal":     "Pendek";
     console.log(tb)
     
     var r= 35;
     const kurus = r > 79? "Obesitas" : r > 50? "Normal":
     "Kurang Gizi";
     console.log(kurus
