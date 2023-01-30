function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  //Adicione o link do teachablemachine
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QxTVvhzG2/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  //Faça o seguinte código:
  //Se acontecer (error), mostre esse (error) no console
 if(error){
  console.log(error)

 
   //Complete a linha de código usando 'senão' em javascript
  } else {
    console.log(results);
    //O código abaixo deixa as cores aleatórias utilizando as cores RBG, porém apenas a leta 'R', está sendo programada. Tente programar a letra 'B' e 'G'
    RGB_color_R = Math.floor(Math.random() * 255) + 1;
    RGB_color_G = Math.floor(Math.random() * 255) + 1;
    RGB_color_B = Math.floor(Math.random() * 255) + 1;
//Utilize o código que altera o HTML utilizando JavaScrit
    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    
    //Utilize o código 'style.color' para mostrar as cores que você programou aciima
    document.getElementById("result_label").style.color = "rgb("+RGB_color_R+","+RGB_color_G+","+RGB_color_B+")";
    document.getElementById("result_confidence").style.color = "rgb("+RGB_color_R+","+RGB_color_G+","+RGB_color_B+")";

   
  }


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    img = document.getElementById('alien1') 
    img1 = document.getElementById('alien2')
//Declare a varivável para a imagem 'alien3' e 'alien4'
img2 = document.getElementById('alien3')
img3 = document.getElementById('alien4')      
      
    if (results[0].label == "Palmas") {
      img.src = 'aliens-01.gif';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "Mesa") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.gif';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
      
      //Programe o seguinte código:
      //Senão se o resultado do texto for igual a estralos, troque a imagem 3 para um gif
    } else if (results[0].label == "Background Noise"){
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.gif';
      img3.src = 'aliens-04.png';
     

      
      //Utilize o código 'senão' no JavaScipt
    }else{
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.gif';
    }
  
  }
