$(function(){
    let qy = 0;
    var pro = setInterval(function () {
        qy++;
        $('.heared').click(function(){
            clearInterval(pro);
            $('.heared').fadeOut();
            $('.swlie').fadeIn();
        })
    }, 30)

    $('.shgfn').click(function(){
        $('.swlie').fadeOut();
        $('.heared').fadeIn();
    })
    $('.anbtn').click(function(){
        $('.gz').fadeIn();
        $('.gray').fadeIn();
    })
    $('.gz').click(function(){
        $(this).fadeOut();
    })
    $('.swile').click(function(){
        $('.swlie').fadeOut();
        $('.sure').fadeIn();
    })
    $('.b,.dg').click(function(){
        $('.font').fadeIn();
        $('.b2-font,.b2-img,.b3-img,.b3-font,.b4-font,.b5-img,.b5-font').fadeOut()
    })
    $('.b2').click(function(){
        $('.font,.b3-img,.b3-font,.b4-font,.b5-img,.b5-font').fadeOut();
        $('.b2-font,.b2-img').fadeIn();
    })
    $('.b3').click(function(){
        $('.font,.b2-img,.b2-font,.b4-font,.b5-img,.b5-font').fadeOut();
        $('.b3-font,.b3-img').fadeIn();
    })
    $('.b4').click(function(){
        $('.font,.b2-img,.b2-font,.b3-img,.b3-font,.b5-img,.b5-font').fadeOut();
        $('.b4-font').fadeIn();
    })
    $('.b5').click(function(){
        $('.font,.b2-img,.b2-font,.b3-img.b3-font,.b4-font').fadeOut();
        $('.b5-font,.b5-img').fadeIn();
    })

    $('.surebtn').click(function(){
        $('.sure').fadeOut();
        $('.srkli').fadeIn();
    })
    
})