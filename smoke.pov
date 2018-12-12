 #include "colors.inc"
  camera {
    location <10, 1, -25>  
      rotate <12,clock*360,-35>
    look_at 0
    angle 30
  }
  background { color Gray50 }
  light_source{ <300, 300, -1000> White }
  
  #declare odwroc = x*180;
  #declare zmiana_torus = 8;
 
  
    
    #declare poltorus = difference {
    torus {
      4,1
      sturm
      rotate x*-90  // so we can see it from the top
    }
    box { <-5, -5, -1>, <5, 0, 1> }
  }
    
  #declare el_lancucha = cylinder {
    <0, 4, 0>, <0, -4, 0>, 1
  }

  #declare lancuch_zloty = texture {
    pigment { BrightGold }
    finish {
      ambient .1
      diffuse .4
      reflection .25
      specular 1
      metallic
    }
  }

  #declare laczenie = union {
    object {
     poltorus
      translate y*zmiana_torus/2
    }
    object {
      poltorus
      rotate odwroc
      translate -y*zmiana_torus/2
    }
    object {
      el_lancucha
      translate x*zmiana_torus/2
    }
    object {
      el_lancucha
      translate -x*zmiana_torus/2
    }    texture { lancuch_zloty }
  }  
   #declare laczenie_zmien = zmiana_torus*2-2*y;
    
   #declare para_laczen =
  union {
    object { laczenie }
    object { laczenie translate y*laczenie_zmien rotate y*90 }
  }
  #declare lancuch = union {
    object { para_laczen}
    object { para_laczen translate  y*laczenie_zmien*2 }
    object { para_laczen translate  y*laczenie_zmien*4 }
    object { para_laczen translate  y*laczenie_zmien*6 }
    object { para_laczen translate -y*laczenie_zmien*2 }
    object { para_laczen translate -y*laczenie_zmien*4 }
    object { para_laczen translate -y*laczenie_zmien*6 }
  }
  object { lancuch scale .1 rotate <0, 45, -45> }  
   object { lancuch scale .22 rotate <0, 10, -100> }  
    text {
      ttf "timrom.ttf" "Mateusz Misiak IIIE" 0.15, 0
      pigment { BrightGold }
      finish { reflection .25 specular 1 }
      translate -6*x
      translate 4*y
    } 
    text {
      ttf "timrom.ttf" "Praca na zaliczenie" 0.15, 0
      pigment { BrightGold }
      finish { reflection .25 specular 1 }
      translate -6*x
      translate 5*y
    }
    fog { fog_type   2
      distance   50
      color      White*0.9
      fog_offset 0.1
      fog_alt    1.5
      turbulence 1.8
    }