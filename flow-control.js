function basicTeenager(age){
  if (age>=13 && age<=19) {
    return 'You are a teenager!'
  }
  else {}
}


function teenager(age) {
  if(age>=13 && age<=19){
    return "You are a teenager!"
  }
  else{
    return "You are not a teenager"
  }
}


function ageChecker(age){
  if(age>=13 && age<=19){
    return "You are a teenager!"
  }
  elseif(age<=12){
    return "You are a kid"
  }
  elseif(age>=20){
    return "You are a grownup"
  }
  else{}
}


function ternaryTeenager(age){
  if(age>=13 && age<=19){
    return "You are a teenager":"You are not a teenager"
  }
}
