/**
 * Created by Ritesh on 7/3/2017.
 */

var ar =new Array;
var player1Name =localStorage.getItem('player1Name');
var player1age =localStorage.getItem('player1age');
var player2Name =localStorage.getItem('player2Name');
var player2age =localStorage.getItem('player2age');
var id = true;
var obj='';
window.onload =function () {

   // var pic1 = document.getElementById('location01');
    ////console.log('bey');
    GameBegin();
    setTheMap();


    var row1 = document.getElementsByClassName('row1');
    ////console.log(row1.length);
    for (var index = 0; index < row1.length; index++) {
        var i = row1[index].getAttribute('myid');
        ////console.log(i);
        row1[index].addEventListener('click', function () {

            id = myturn(id);
           //console.log(id);
           setmyname(id);

            obj = this;
            var stat = getTheMap(this);
            if (stat) {
                setTimeout(function () {
                    $('#whoseturn').modal();
                }, 300);
                setTimeout(function () {
                    $('#whoseturn').modal('hide')
                },1800)
            }
            else {

                setTimeout(function () {
                    id=myturn(id);
                    setmylost(id);
                    $('#lost').modal();

                }, 500);
                setTimeout(function () {
                    $('#lost').modal('hide')
                },3800)
                setTimeout(function () {
                    $("#mymodal").modal();

                },4800)
            }

        })
        ////console.log(i);
        // row1[index].addEventListener('click',function () {
        //     //console.log('hey');
        //      //console.log(row1[index].getAttribute('myid'));
        //  }
    }




        // var row01 =document.getElementById('11');
        // row01.addEventListener('click',function () {
        //  getTheMap(11);              //passing the arguments is to be done in this  way
        // });
        //  var row02 =document.getElementById('11');
        //  row01.addEventListener('click',function () {
        //      getTheMap(12);              //passing the arguments is to be done in this  way
        //  });
        //  var row03 =document.getElementById('11');
        //  row01.addEventListener('click',function () {
        //      getTheMap(13);              //passing the arguments is to be done in this  way
        //  });
        //  var row04 =document.getElementById('11');
        //  row01.addEventListener('click',function () {
        //      getTheMap(14);              //passing the arguments is to be done in this  way
        //  });
        //  var row01 =document.getElementById('11');
        //  row01.addEventListener('click',function () {
        //      getTheMap(11);              //passing the arguments is to be done in this  way
        //  });}

};
function setmylost(id) {
    if(id===true)
    {
        document.getElementById('mlost').innerHTML=player1Name;
    }
    else {
        document.getElementById('mlost').innerHTML=player2Name;
    }

}
function setmyname(id) {
    if(id ===true)
    {
        document.getElementById('myturn').innerHTML=player1Name;

    }
    else if (id===false) {
        document.getElementById('myturn').innerHTML=player2Name;

    }

}
function myturn(i) {
    return !i;
}

// function launch() {
//
//
//     GameBegin();
//
//
// }

// function showalert() {
//
//
// }
function GameBegin() {
    setTimeout(function(){
        document.getElementById('player1').innerHTML=player1Name;
            document.getElementById('player2').innerHTML=player2Name;
           $('#welcome').modal()}

        ,500);
    setTimeout(function () {
        $('#welcome').modal('hide')
    },4000)


        setTimeout(function () {
         document.getElementById('myturn').innerHTML=player1Name;
         $("#whoseturn").modal();

        },4500)
    setTimeout(function () {
        $('#whoseturn').modal('hide')
    },6000)

}
function  setTheMap() {
   var  count =0;
    for(var i=0;i<4;i++) {
        ar[i] = new Array
        for (var j = 0; j < 4; j++) {
            var rand = myrandom(i, j, Math.floor(Math.random(1) * 250));
            if (rand % 5 === 0) {

                ar[i][j] = 0;
                //console.log('yeti '+i+''+j+' ' + ar[i][j])

            }
            else {
                ar[i][j] = 1;
                ////console.log('element '+ar[i][j]);
            }

            var adr = (i + 1) * 10 + (j + 1);

            if (document.getElementById(adr)) {
                document.getElementById(adr).setAttribute('class', 'col-md-3 col-sm-3 col-xs-3 col-lg-3 row1')
                // count++;
                // //console.log(i+" "+j+' '+' '+ar[i][j]);
            }

        }

    }



    
}
function myrandom(i,j,ran) {

    return (i*j+ran)+500-ran*2+i+j;

}

function refreshgrid(index) {
    setTheMap();
    //console.log(index)
    document.getElementById(index).setAttribute('class','col-md-3 col-sm-3 col-xs-3 col-lg-3 yeti')
    setTimeout(setTheMap,2000);

}
function getTheMap(index) {
    ////console.log(index);
    ////console.log(index.getAttribute('myid'));

    ////console.log(index.getAttribute('myid'));
  // //console.log(ar);
    var obj=index;
    //console.log(index);
   var address =index.getAttribute('myid');
    //console.log(address);
   // //console.log(address);

    address = + address;
    index=address;

    var j =index%10;
    var i;
    if(index>0) {
        index-=j;
        i = index / 10;
        i--;
    }
    else
    {
        i=0;
    }
    j--;

     ////console.log(i+' '+j);
     var toshow = ar[i][j];
    //console.log(toshow+' '+address);
    // // //document.getElementById('address').style.color='black';
        if(toshow !==0 )
        {
            document.getElementById(address).removeAttribute('class','row1')
            document.getElementById(address).setAttribute('class','col-md-3 col-sm-3 col-xs-3 col-lg-3 penguin');
            //document.getElementById(address).style.backgroundImage ="url('penguin_pngs/penguin_1.png')";
            return true;
        }
        else {


            document.getElementById(address).setAttribute('class','col-md-3 col-sm-3 col-ls-3 col-xs-3 yeti');
            refreshgrid(address);
            //document.getElementById(address).style.backgroundImage ="url('penguin_pngs/yeti.png')";
           // alert('Game Over You Lose  ');
            return false;

        }
}

