<?php
  class pies
  {
     public $imie;
     public $rasa;
     
     
                  
     public function ustaw_imie_rasa($imie,$rasa)
     {

        $this->imie = $imie;
        $this->rasa = $rasa;
     } 
     public function dostan_dane()
     {

        return $this->imie." Rasy ".$this->rasa;
     }
     public function daj_glos()
     {
         $glos= "hau hau";
         return $glos;
     }
     
  }
  $czarek = new pies;
  $czarek-> ustaw_imie_rasa("czarek","kundel");
  echo "Jestem piesek ".$czarek->dostan_dane()."<br>";
  echo $czarek->daj_glos()."<br>";
  
  // krocej 
  class pies1
  {
    public $imie;
    public $rasa;
    
    
                 
    public function imie_rasa($imie,$rasa)
    {

       $this->imie = $imie;
       $this->rasa = $rasa;
       return $this->imie." Rasy ".$this->rasa;
    } 
          
    
    public function daj_glos()
    {
        $glos= "hau hau";
        return $glos;
    }
    
 }
 $leszek = new pies1;

 echo "Jestem piesek ".$leszek->imie_rasa("Leszek","Kundel")."<br>";
 echo $leszek->daj_glos();



?>