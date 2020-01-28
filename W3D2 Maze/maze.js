$(document).ready(()=>{
    let hit = false;

    $('.boundary').on('mouseenter',()=>{
        hit = true;
        $('.boundary').addClass('youlose');
        $('h2#status').html('you lose');
    });

    $('div#start').on('click',()=>{
        hit = false;
        $('.boundary').removeClass('youlose');
        $('h2#status').html('Click the "S" to begin.');
    });

    $('div#end').on('mouseenter',()=>{

        if(hit !== true){
        $('h2#status').html('You win!');
        alert('You win!:]')
        }else{
            alert('Sorry,you lost. :[')
        }
    });
});
