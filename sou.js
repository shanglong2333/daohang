/*
* 鍏浂
* 2022骞?12鏈?10鏃?
*/ 
$(document).ready(function(){
    //璁剧疆涓轰笂娆′娇鐢ㄧ殑鎼滅储寮曟搸
    var index_id = localStorage.getItem("index_id")?localStorage.getItem("index_id"):0;
    localStorage.setItem("index_id",index_id); 
    sethint(index_id);
    $(".lylme").children().eq(index_id).show();
});
$(".lg").click(function () {
    //鍒囨崲鎼滅储寮曟搸
    var count = $(".lylme").children(".ss").length;
    var index = $(".lg").index(this);
    if(count <= index+1){var index = -1;}
    $(".lylme").children(".ss").hide();
    $(".lylme").children().eq(index+1).show();
    sethint(index+1);
    localStorage.setItem("index_id",index+1); 
});
function sethint(id){
    //璁剧疆鎼滅储妗嗘彁绀?
     $(".soinput").attr("placeholder",solist()[id][1]);
}
function go(input_text){
    // 璺宠浆鎼滅储缁撴灉
    var index_id = localStorage.getItem("index_id");
    var sourl = solist()[index_id][2];
    if(input_text==""){var input_text = $(".soinput").val();}
        var url = sourl+input_text;
    if(navigator.userAgent.match(/mobile/i)){
        window.location.href=url;
    }else{
        window.open(url, "_blank");
    }
}

/*
浣滆€?:D.Young
涓婚〉锛歨ttps://yyv.me/
github锛歨ttps://github.com/5iux/sou
鏃ユ湡锛?2020/11/18
鐗堟潈鎵€鏈夛紝璇峰嬁鍒犻櫎
*/

$(document).ready(function() {
    //鍒ゆ柇绐楀彛澶у皬锛屾坊鍔犺緭鍏ユ鑷姩瀹屾垚
    var wid = $("body").width();
    if (wid < 640) {
        //$(".wd").attr('autocomplete', 'off');
    } else {
        $(".wd").focus();
    }
    //鑿滃崟鐐瑰嚮
    $("#menu").click(function(event) {
        $(this).toggleClass('on');
        $(".list").toggleClass('closed');
        $(".mywth").toggleClass('hidden');
    });
    $("#content").click(function(event) {
        $(".on").removeClass('on');
        $(".list").addClass('closed');
        $(".mywth").removeClass('hidden');
        $('#word').hide();
    });
    $(".mywth").click(function(event) {
        var wt = $("body").width();
        if (wt < 750 || wt == 750) {
            //window.location.href = "https://tianqi.qq.com/";
            window.location.href = "/weather/";
        }
    });
});

//鍏抽敭璇峴ug
$(function() {
    //褰撻敭鐩橀敭琚澗寮€鏃跺彂閫丄jax鑾峰彇鏁版嵁
    $('.wd').keyup(function() {
        var keywords = $(this).val();
        if (keywords == '') { $('#word').hide(); return };
        $.ajax({
            url: 'https://suggestion.baidu.com/su?wd=' + keywords,
            dataType: 'jsonp',
            jsonp: 'cb', //鍥炶皟鍑芥暟鐨勫弬鏁板悕(閿€?)key
            // jsonpCallback: 'fun', //鍥炶皟鍑芥暟鍚?(鍊?) value
            beforeSend: function() {
               // $('#word').append('<li>姝ｅ湪鍔犺浇銆傘€傘€?</li>');
            },
            success: function(data) {
                $('#word').empty().show();
                if (data.s == '') {
                    //$('#word').append('<div class="error">Not find  "' + keywords + '"</div>');
                    $('#word').hide();
                }
                $.each(data.s, function() {
                    $('#word').append('<li><svg class="icon" style=" width: 15px; height: 15px; opacity: 0.5;" aria-hidden="true"><use xlink:href="#icon-sousuo"></use></svg> ' + this + '</li>');
                })
            },
            error: function() {
                $('#word').empty().show();
                //$('#word').append('<div class="click_work">Fail "' + keywords + '"</div>');
                $('#word').hide();
            }
        })
    })
    //鐐瑰嚮鎼滅储鏁版嵁澶嶅埗缁欐悳绱㈡
    $(document).on('click', '#word li', function() {
        var word = $(this).text();
        $('.wd').val(word);
        $('#word').hide();
       go(word);
        // $('#texe').trigger('click');瑙﹀彂鎼滅储浜嬩欢
    })
$(".wd").keypress(function(event){
  if(event.which === 13) { 
      var word = $(".soinput").val();
       go(word);
   }
})
})