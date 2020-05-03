/**
 * Created by zhangyong on 16/7/29.
 */
var img1=document.getElementById('pic1');
var img0=document.getElementById('pic0');
var img2=document.getElementById('pic2');
var image0=document.getElementsByClassName('image0')[0];
//数组索引
var index=0;
//数组引用
var imgs;
function init(){
    imgs=new Array(7);

    for(var i=0;i<imgs.length;i++){
        imgs[i]=new Image();
    }
    imgs[0]="../images/pic1.jpg";
    imgs[1]="../images/pic2.jpg";
    imgs[2]="../images/pic3.jpg";
    imgs[3]="../images/pic4.jpg";
    imgs[4]="../images/pic5.jpg";
    imgs[5]="../images/pic6.jpg";
    imgs[6]="../images/pic7.jpg";
    img0.src=imgs[0];
    img1.src=imgs[6];
    img2.src=imgs[1];

    //img0.addEventListener('click',imgClick);
    img1.addEventListener('click',leftClick);
    img2.addEventListener('click',rightClick);
    image0.addEventListener('mouseover',enLarge);
    image0.addEventListener('mouseout',enSmall);
}

window.onload=init();

function leftClick(){

    if(index==0){

        img2.src=imgs[index];
        index=6;
        img0.src=imgs[index];
        img1.src=imgs[index-1];

    }

    else if(index==1){
        img0.src=imgs[index-1];
        img1.src=imgs[6];
        img2.src=imgs[index];
        index--;
    }
    else{
        img0.src=imgs[index-1];
        img1.src=imgs[index-2];
        img2.src=imgs[index];
        index--;
    }

}

function rightClick(){
    if(index==5){
        img0.src=imgs[index+1];
        img1.src=imgs[index];
        img2.src=imgs[0];
        index++;
    }

    else if(index==6){
        index=0;
        img0.src=imgs[index];
        img1.src=imgs[6];
        img2.src=imgs[index+1];

    }
    else{
        img0.src=imgs[index+1];
        img1.src=imgs[index];
        img2.src=imgs[index+2];
        index++;
    }

}

function enLarge(){
    //image0.style.zIndex=1000;
    //image0.style.clear='both';
    image0.style.width='70%';
    image0.style.height='115%';

}

function enSmall(){
    //image0.style.position='static';
    image0.style.width='60%';
    image0.style.height='100%';

}

