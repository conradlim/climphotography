// $(function() {

//     $("html, body").mousewheel(function(event, delta) {
//         var mult = 1;
//         var $this = $(this);
//         if (event.timeStamp - $this.data('oldtimeStamp') < 1000) {
//             //calculate easing here
//             mult = 10000 / (event.timeStamp - $this.data('oldtimeStamp'));
//         }
//         $this.data('oldtimeStamp', event.timeStamp);
//         this.scrollLeft -= (delta) * mult;
//         event.preventDefault();
//     });
// });

$(window).load(function(){
  $("#Weddings").hide().fadeIn(1000);

});

function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}

$(function() {
            $("html, body").mousewheel(function(event, delta) {
                this.scrollLeft -= (delta * 30);
                event.preventDefault();
            });
        });


function changeLink(link){
  link = link.innerHTML
  var linkSection = document.getElementById(link)
  var mainContent = document.querySelectorAll(".mainContent")
  console.log(mainContent)
    linkSection.style.display = ''

    for(var i = 0;i< mainContent.length;i++){
      if(linkSection.id != mainContent[i].id){
        _linkSection =linkSection.id
        $("#"+_linkSection+"").fadeTo(600,1.0);
        $("#"+mainContent[i].id+"").fadeTo(300,0.7).hide();
      // mainContent[i].style.display='none'
      }
    }
  }
