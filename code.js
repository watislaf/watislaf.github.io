// Сортировка
function compareZetta(rectA, rectB){
  if(check(2))
     return rectB.z - rectA.z;
 else
     return rectA.z - rectB.z;  
}
// Изменение плавное цвета bg
function for_color(){
    if(!check(8)&&Math.random()<0.05){            
        re+=chere;
        ge+=chege;
        bu+=chebu;
        if(re>255){
            re=255;
            chere=-7;
            }
        if(ge>255){
            ge=255;
            chege=-2;
            }
        if(bu>255){
            bu=255;
            chebu=-9;
            }
        if(re<0){
            re=0;
            chere=16;
            }
        if(ge<0){
            ge=0;
            chege=5;
            }
        if(bu<0){
            bu=0;
            chebu= 9;
            }    
        }
    s = ('rgba('+re+' ,'+ge+', '+bu+', +'+opac+')')
    return s
}
// Определение коэфициента прозрачности
function opa(op){
    
    if(check(10))
    return "rgba(144,144,166,"+0.20+")";
 //alert(op)
    return  "rgba(111,111,111,"+(0.01+op/(del+op))+")"; 
}
// Класс пары
function pair(F,S){
    this.F = F;
    this.S = S;
}
// Проверка на робочеспособность кнопок
function check(f){
   return (Divesi[f].style.color==myColor)
}
// Класс прямоугольника и его отрисовка
function rect(color, x, y,z,width, height) {
    this.color = color;
    this.z = z;
    this.koef = 1;
    this.width = width;
    this.height = height;
    this.x = x;    
    this.y = y;
    if(z!=0 )
        this.koef=z/41;
    this.draw = function() {
        var dela=0
        if(this.koef>0&&this.koef<=0.0001)
            return;
        context.fillStyle = opa(this.koef) 
        if(!check(7)&&this.z!=0){
            if(Math.random()<0.005){
            this.color = cll(0.90); 
            if(check(2)){
                dela= (Math.random()*(24-5)+5)/(this.koef/4+0.9); 
                
                }
            else{
                
                dela= (Math.random()*(15-4)+4)*(this.koef/4);      
                }
            }
        }
        if(z==0)
            this.color= for_color();
        var widtt= this.koef * this.width
        var heigg= this.koef * this.height
        if(!check(6)&&this.z!=0){
            this.x= this.x-this.x%12 ;
            this.y=this.y-this.y%12 ;
        }
        if(!check(4)){
            this.x=  (screen.width * kf + this.x) % (screen.width*kf)
            this.y=  (screen.height + this.y ) % screen.height
        }     
        if(this.z != 0)
            context.fillRect(this.x-(widtt+8+dela)/2, this.y-( heigg+8+dela)/2, widtt+8+dela, heigg+8+dela);
        context.fillStyle = this.color;
        context.fillRect(this.x-(widtt+dela)/2, this.y-(heigg+dela)/2, widtt+dela, heigg+dela);
    };
}
//Движение мыши
function WorldMove(e) {
    var y = e.pageY;
    Changes.F=0;
    Changes.S=0;
    var x = e.pageX;
    PY=e.pageY
    PX=e.pageX
    if(isDown){
        Changes.F = x-privX;
        Changes.S = y-privY;
    }
    if(e.which==3&&(!check(0))&&check(9))
        create();        
} 
// прорисовка всех обьектов
function draw() {
    if(check(3))
        game.draw(); 
    for(var i=0;i<Objects.length;i++)
        Objects[i].draw();  
}
// Изменения обьектов
function update() { 
    var kofe=0.9;
    if( !check(0))
        kofe=2.4
    for(var i=0; i<Objects.length;i++)
    {
        var ia=Objects[i].koef/2
        if(check(2)){
            Objects[i].x+=Changes.F/20/(ia)*kofe;
            Objects[i].y+=(Changes.S/20/(ia))*kofe;
        }
        else
        {   
            Objects[i].x+=Changes.F/20*(ia)*kofe;
            Objects[i].y+=(Changes.S/20*(ia))*kofe;
        }
    }
}
function cll(srr)
{
    if(check(1))
        return "rgb(253,251,255)";
    else{
        coloorr++;
        coloorr-=srr
        if(coloorr <300)
            return("rgb("+(Math.random()*(255-224)+224)+","+(Math.random()*( 213-167)+167)+","+(Math.random()*(111-14)+14)+")");
        if(coloorr <600)
            return("rgb("+(Math.random()*(90-13)+13)+","+(Math.random()*( 165-124)+134)+","+(Math.random()*(196-100)+100)+")");   
        if(coloorr <900)
            return("rgb("+(Math.random()*(244-200)+200)+","+(Math.random()*( 244-200)+200)+","+(Math.random()*(244-200)+200)+")");
        if(coloorr <1200)
            return("rgb("+(Math.random()*(240-190)+190)+","+(Math.random()*( 129-80)+80)+","+(Math.random()*(230-196)+196)+")");
        if(coloorr <1500)
            return("rgb("+(Math.random()*(244-180)+180)+","+(Math.random()*(88-0)+0)+","+(Math.random()*(88-0)+0)+")");
        if(coloorr <1800)
            return("rgb("+(Math.random()*(50))+30+","+(Math.random()*(10) )+","+(Math.random()*(15))+")");  
        if(coloorr <1950)
            return("rgb("+(Math.random()*(199-140))+140+","+(Math.random()*(142-130)+130)+","+(Math.random(244-205)+(205))+")");
        coloorr%=2100;
        }    
     return("rgba("+(Math.random()*(199-140))+140+","+(Math.random()*(142-130)+130)+","+(Math.random(244-205)+(205))+",0)");
}
// Изменение третьего параметра 
function get_Z(){
    switch(clearr.textContent){
        case 'Без изменений ✔':
            return fZ;
        case '❓Случайный ❓':{
            fZ=Math.random()*((460-10)+10);
            return fZ+0.1;
            }
        case '➕ Увеличение ➕':{
            if(check(10))   
                fZ+=2;
            else
                fZ+=0.43;
            fZ%=460; 
            return fZ;
            }
        case '➖ Уменьшение➖':{
            if(!check(10))
                fZ-=0.58;
            else
                fZ-=2;
            fZ=Math.max(fZ,0.00001)
            return fZ;
        }
    }
}
// Таймер
function play() {
    draw();  
    update(); 
   if(dw&&!check(9)) 
       move();        
   if(Math.random()<0.005){
           daa1.style.color='white'
           daa2.style.color='white'
           daa3.style.color='white'
    }
}
// создание 
function create(){
var f=1
Objects.push(new rect(cll(0), event.pageX+1,event.pageY+1, get_Z(),10, 10));
if(!check(5)){
    Objects.push(new rect(cll(0), event.pageX+Math.random()*(7+7)-7,event.pageY-Math.random()*(7+7)-7, get_Z(),7+f, 12+f));
    Objects.push(new rect(cll(0), event.pageX+Math.random()*(7+7)-7,event.pageY-Math.random()*(7+7)-7, get_Z(),9+f, 11+f));
    Objects.push(new rect(cll(0), event.pageX+Math.random()*(7+7)-7,event.pageY-Math.random()*(7+7)-7, get_Z(),10+f, 8+f));
    Objects.push(new rect(cll(0), event.pageX+Math.random()*(7+7)-7,event.pageY-Math.random()*(7+7)-7, get_Z(),13+f, 7+f));
    }
    Objects.sort(compareZetta);
}
//выбор наполнения
function che(){
         switch(clearr.textContent){
            case 'Без изменений ✔':{     
                clearr.style.color="red";
                clearr.textContent='❓Случайный ❓';
                return;
                }
            case '❓Случайный ❓':{
                    clearr.style.color="darkorange"; 
                    clearr.textContent='➕ Увеличение ➕';
                    return;
                 }
            case '➕ Увеличение ➕':{
                    clearr.style.color="chartreuse";
                    clearr.textContent='➖ Уменьшение➖';
                    return;
                 }
            case '➖ Уменьшение➖':{
                    clearr.style.color=myColor;
                    clearr.textContent='Без изменений ✔';
                    return;
                 }
        }
    }
    
// Вакум
function move( ){
    for( var i=0;i<Objects.length;i++){  
        var Ox=Objects[i].x;
        var Oy=Objects[i].y;
        if(!check(10)){
            Ox=(screen.width*kf)/2
            Oy=screen.height/2
        }
        var dx=Ox-PX
        var dy=Oy-PY
        var koef= Math.max((Math.abs(dy)/(Math.abs(dx)+Math.abs(dy)) ),0)
        if(dx>0)
            dx=1;
        else
            dx=-1;
        if(dy>0)
            dy=1;
        else
            dy=-1;
        if(dx==dy){
            dx*=-1;
            dy*=-1;
        }
        var kafa=33;
        if(check(0))
            {
                kafa=10
            }
        if(check(2)){
            Objects[i].x+=kafa*(dy)*(1-koef)/(1+(Objects[i].koef/9));
            Objects[i].y+=kafa*(dx)*(koef)/(1+Objects[i].koef/9);
        }
        else{
            Objects[i].x-=kafa*(dy)*(1-koef)/(1+(Objects[i].koef/9));
            Objects[i].y-=kafa*(dx)*(koef)/(1+Objects[i].koef/9 );
        }
    }
}
// Нажатие на кнопки 
function click_on(){        
            for(var xx=0;words[xx]!=this.textContent;xx++)
                var de;
            if(this.style.color==myColor)
            {
                this.style.color='deepskyblue'; 
                this.textContent=words[xx+1];    
            }
            else 
            {
                this.style.color=myColor;
                this.textContent=words[xx-1];    
            }
        Objects.sort(compareZetta);}
// Инициализация переменных
function init() {
    words=[ 
        '⏩ Быстрее ⏩','⏪ Медленнее⏪ ',
        '🎨  Разноцвет 🎨','🌀 Одноцвет 🌀',
        '🌞 Разворот 🌞','🌚 Разворот 🌚', 
        '◼ Затрирать ◼','◻ Не Затирать ◻',
        '⛎ Ограничь ⛎','〰 Обесконечь 〰',
        '🍇 Больше кв. 🍇','🍎 Меньше кв. 🍎',
        '🔒 Прицепить 🔒','🔓 Отцепить 🔓',
        '🔉 Пульсацируй🔉','🚷 Не надо 🚷',
        '🚦 Поменяй фон 🚦','💍 Спасибо 💍',
        '🚼 Режим 🚼','🍸 Режим 🍸',
        '💯 Гуще 💯','🔎 Мельче 🔎' 
    ]   
    del=70;
    re=181
    ge=35   
    bu=60
    PX=0
    PY=0
    opac=1
    chere=2;
    chege=3;
    chebu=1;
    coloorr=0;
    fZ=41;
    kf=0.84; 
    Objects = []; 
    myColor="yellow"
    isDown= false;
    dg=document.getElementById('daa')
    d1=document.getElementById('daa1')
    d2=document.getElementById('daa2')
    d3=document.getElementById('daa3')
    canvas = document.getElementById("holst");      
    canvas.setAttribute("tabindex", 0);
    dg.style.color='red'
    Changes = new pair(0,0)
    game = new rect('rgb(181,35,90)',(screen.width*kf)/2,  screen.height/2, 0,screen.width*kf, screen.height);
    Divesi= [
        document.getElementById('fast'),
        document.getElementById('cl_'),
        document.getElementById('obor'),
        document.getElementById('bad'),
        document.getElementById('close'),
        document.getElementById('luck'),
        document.getElementById('spon'),
        document.getElementById('dance'), 
        document.getElementById('reed'),
        document.getElementById('made'),
        document.getElementById('gus')
    ]    
    canvas.addEventListener("keydown",function() { 
        
        switch (event.keyCode){ 
            case 40:{
                daa2.style.color='red'
                for(var i=0; i<Objects.length;i++)
                    Objects[i].y+=21;
                return;    
                }
            case 38:{
                daa2.style.color='red'
                for(var i=0; i<Objects.length;i++)
                    Objects[i].y-=21;
                return;    
                }
            case 39:{
                daa2.style.color='red'
                for(var i=0; i<Objects.length;i++)
                    Objects[i].x+=21;
                return; 
                }
            case 37:{
                daa2.style.color='red'
                for(var i=0; i<Objects.length;i++)
                     Objects[i].x-=21;  
                return;     
                }
            case 187:{
                daa2.style.color='red'
                for(var i=0; i<Objects.length;i++)
                     Objects[i].koef+=0.37;  return;     
                }
            case 189:{
                daa2.style.color='red'
                for(var i=0; i<Objects.length;i++)
                     Objects[i].koef-=0.37;  return;     
                }
            case 89:{ 
                if(opac!=1){
                     dg.style.color='red'
                    opac=1;
                }
                else{  
                    dg.style.color='white' 
                    if(!check(10))
                        opac=0.05;
                    else
                        opac=0.005;
                  
                    }
                return;
                }
            case 219:{
            del+=2;return;
            }
            case 221:{
                del-=2;
                return;
            }
            case 82:{
                daa1.style.color='red'
               
                re=181
                ge=35
                bu=90
                Objects=[];
                game.draw()
                return;
                }
            case 84:{ 
                daa3.style.color='red'
                Objects=[]; 
                return;
                }
            case 49:{//быстр
                click_on.call(Divesi[0]);
                return;
            }
             case 50:{//колво
                click_on.call(Divesi[5]);
                return;
            }
             case 51:{//цвет
                click_on.call(Divesi[1]);
                return;
            }
             case 52:{//размер
                che.call(clearr);
                return;
            }
             case 53:{// фон
                click_on.call(Divesi[2]);
                return;
            }
             case 54:{//диско
                click_on.call(Divesi[7]);
                return;
            }
             case 55:{//режим
                click_on.call(Divesi[9]);
                return;
            }
             case 56:{//
                click_on.call(Divesi[4]);
                return;
            }
             case 57:{
                click_on.call(Divesi[10]);
                return;
            }
             case 48:{
                 for(var i=0;i<Divesi.length;i++)
                if(i!=6&&i!=0&&i!=3)click_on.call(Divesi[i]);
                return;
            } 
            
           
            
        }
    });
    dw=false;
    clearr= document.getElementById('IsZ')
    clearr.style.color=myColor; 
    clearr.textContent='Без изменений ✔';
    clearr.addEventListener("click",che);
    
    for(var i=0;i<Divesi.length;i++){
        Divesi[i].style.color=myColor;
        Divesi[i].textContent=words[i*2]
        Divesi[i].addEventListener("click",click_on)
    }
    canvas.addEventListener("mousedown",function(){
        if(clearr.textContent=='➖ Уменьшение➖')
            fZ=460;
        if(event.which==3)
            dw=true;
        if(event.which!=1)
             return;
        isDown=true;
        privX = event.pageX;
        privY=event.pageY
    });   
    canvas.addEventListener("mouseup",function(){
        if(event.which==3)
            dw=false 
        if(event.which!=1)
            return; 
        isDown=false
    });
    canvas.addEventListener("contextmenu",function(){
        if(!check(9)){
            move(event);
            return;
        }
        if(check(0))
            create(); 
    });
 
    canvas.width = game.width;
    canvas.height = game.height;
    context = canvas.getContext("2d");
    canvas.onmousemove = WorldMove;
    setInterval(play, 1000 / 600);
}
