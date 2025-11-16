document.addEventListener("DOMContentLoaded", function () {
  const techPills = document.querySelectorAll("span.tech-pill");

  techPills.forEach((pill) => {
    const icon = document.createElement("i");
    let textContent = "";

    switch (true){
        /*Languages*/
        case  pill.classList.contains("c#"):
            icon.className = "devicon-csharp-plain"
            textContent = "C#"
            pill.style.backgroundColor = "#d1e0f7";
            pill.style.color = "#3178C6";
            break;
        
        case pill.classList.contains('python'):
            icon.className = "devicon-python-plain";
            textContent = " Python";
            pill.style.backgroundColor = "#f7e8d1";
            pill.style.color = "#ab8f5e";
            break;

        case pill.classList.contains("cpp"):
            icon.className = "devicon-cplusplus-plain";
            textContent = " C++";
            pill.style.backgroundColor = "#cce4f6";
            pill.style.color = "#00599C";
            break;

        case pill.classList.contains("dart"):
            icon.className = "devicon-dart-plain";
            textContent = " Dart";
            pill.style.backgroundColor = "#cceeff";
            pill.style.color = "#0175C2";
            break;

        case pill.classList.contains("html/css"):
            icon.className = "devicon-html5-plain";
            textContent = " HTML/CSS";
            pill.style.backgroundColor = "#ffe5b4";
            pill.style.color = "#ff8800";
            break;


        /*Tech*/
        case pill.classList.contains("flutter"):
            icon.className = "devicon-flutter-plain";
            textContent = " Flutter";
            pill.style.backgroundColor = "#cce4f6";
            pill.style.color = "#02569B";
            break;

        case pill.classList.contains("aws"):
            icon.className = "devicon-amazonwebservices-plain-wordmark";
            textContent = "aws";
            pill.style.backgroundColor = "#f4f6ccff";
            pill.style.color = "#3290c7ff";
            break;

        case pill.classList.contains("firebase"):
            icon.className = "devicon-firebase-plain";
            textContent = " Firebase";
            pill.style.backgroundColor = "#d4f7d4";
            pill.style.color = "#ad5f2eff";
            break;
        
        case pill.classList.contains("unreal"):
            icon.className = "devicon-unrealengine-original";
            textContent = " Unreal";
            pill.style.backgroundColor = "#ffffffff";
            pill.style.color = "#232323ff";
            break;

        case pill.classList.contains("unity"): 
            icon.className = "devicon-unity-plain";
            textContent = " Unity";
            pill.style.backgroundColor = "#232323ff";
            pill.style.color = "#e5e5e5ff";

        
    }

    pill.appendChild(icon);
    const text = document.createTextNode(textContent);
    pill.appendChild(text);
  });
});