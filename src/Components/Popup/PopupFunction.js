import NewsData from '../../Data/NewsData';
import UserData from '../../Data/PersonalRouteData';
import HomeData from '../../Data/HomeData';

function popupFunction(value){
  console.log(value);
    const keyTitle = document.getElementById("componentTitle"+value).textContent;
    let myObj={};
    //Page Check
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    if(page === "news.html"){
      myObj = NewsData.find(obj => obj.title === keyTitle);
    }else if(page === "profile-page.html"){
      myObj = UserData.find(obj => obj.title === keyTitle);
    }else{
      myObj = HomeData.find(obj => obj.title === keyTitle);
    }
    
    //Popup details
    document.getElementById("popupTitle").innerHTML = myObj.title;
    document.getElementById("popupImage").src = myObj.imgUrl;
    document.getElementById("popupDirection").innerHTML = myObj.direction;
    document.getElementById("popupDescription").innerHTML = myObj.description;
    
    document.getElementById("individual__card--master").classList.remove("individual__card--master");
    document.getElementById("individual__card--master").classList.add("individual__card--master--active");
    document.getElementById("blurhook").style.filter = "blur(8px)";
    };
    
    export default popupFunction;