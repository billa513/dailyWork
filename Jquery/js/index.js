
    // $(document).ready(function(){
    // $('p').addClass('add-color');
    // });

    //  $(function(){
    //      $('#hide').click(()=>{
    //         $('p').hide();
    //      });
    //      $('#show').click(()=>{
    //         $('p').show();
    //      });
    //     });
//on clicking change color
        // $(function(){
        //     $('button').click(()=>{
        //        $('p').addClass('add-color');
        //     });
        //    });
//fast method
        // $(()=>{
        //     $('p').addClass('add-color');
        //     });
        // $(()=>{
        //      $('button').click(()=>{
        //          $('p').toggle();
        //      });
        //         });
       // $(()=>$('div').addClass('add-color'));
        $(() => {
            $('#selected-plays > li').addClass('horizontal');
            $('#selected-plays li:not(.horizontal)').addClass('sub-level');
            $('#selected-plays li:not(.horizontal):even').addClass('alt');
            
        });
        $(() => {
            $('a[href^="mailto:"]').addClass('mailto');
            $('a[href$=".pdf"]').addClass('pdflink');
            $('a[href^="http"][href*="henry"]') .addClass('henrylink');
        });
        $(() => { 
            $('tr:even').addClass('alt'); 
            $('td:contains(Henry)') .addClass('highlight'); 
           }); 