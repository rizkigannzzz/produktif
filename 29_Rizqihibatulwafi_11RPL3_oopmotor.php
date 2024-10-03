<?php
class Motor {
    private $merk;
    private $model;
    private $kecepatan;

    public function __construct($merk, $model) {
        $this->merk = $merk;
        $this->model = $model>
        $this->kecepatan = 0; 
    }
    public function getMerk() {
        return $this->merk;
    }
    public function getMerkk() {
        return $this->merk;
    }
        // method untuk menambah kecepatan
    public function 
    tambahkecepatan($jumlah) {
        $this->kecepatan += $jumlah;
        echo "kecepatan motor
        {$this->merk} {$this->model} bertambah 
        menjadi {$this->kecepatan} km/h.<br>";
    } 
    
        
            
    public function 
    kurangiKecepatan($jumlah) {
        $this->kecepatan -= $jumlah;
        if ($this->kecepatan < 0) {
            $this->kecepatan = 0;
        }
            echo "kecepatan motor
        {$this->merk} {$this->model} berkurang
        menjadi {$this->kecepatan} km/h.<br>";        
    }
    public function getkecepatan() {
        return $this->kecepatan;
    }
        
}

        $motor1 = new Motor("Yamaha", "NMAX");
        $motor2 = new Motor("Honda", "CBR150");

        $motor1->tambahKecepatan(20);
        $motor1->tambahKecepatan(30);
        $motor1->kurangiKecepatan(15);

        $motor2->tambahKecepatan(40);
        $motor2->kurangiKecepatan(20);
