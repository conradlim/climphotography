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


$(function() {
            $("html, body").mousewheel(function(event, delta) {
                this.scrollLeft -= (delta * 30);
                event.preventDefault();
            });
        });
