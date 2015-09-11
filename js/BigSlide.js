/**
 * Created by yan on 2015/9/11.
 */

$(function(){
    var bg_num=$("#backimg").find("img").length;  //获取背景图片的数量
    var bg_width=$("#backimg").children("img").first().width();   //获取背景图片的宽度

    for(var k=0;k<bg_num;k++) {
        $("#backimg").children("img").eq(k).css("left",(k-1)*bg_width);
    }

    function Slide_Last() {
        for(var k=0;k<bg_num;k++)
        {
            if(parseInt($("#backimg").children("img").eq(k).css("left"))==0)   //判断是否位移到制定位置，防止同时多次点击出错
            {
                var bg_left_pos=0;   //位置参数归0
                for(var j=0;j<bg_num;j++)
                {
                    if(parseInt($("#backimg").children("img").eq(j).css("left"))==bg_width*(bg_num-2))  //判断是否是第一个
                    {
                        $("#backimg").children("img").eq(j).css("left",-bg_width);
                    }
                    else {
                        bg_left_pos=parseInt($("#backimg").children("img").eq(j).css("left"))+bg_width;
                        $("#backimg").children("img").eq(j).animate({left:bg_left_pos},"slow");

                    }
                }
            }
        }
    }

    function Slide_Next() {
       // alert("slide next func!");
        for(var k=0;k<bg_num;k++)
        {
            if(parseInt($("#backimg").children("img").eq(k).css("left"))==-bg_width)   //判断是否位移到制定位置，防止同时多次点击出错
            {
                var bg_left_pos=0;   //位置参数归0
                for(var j=0;j<bg_num;j++)
                {
                    if(parseInt($("#backimg").children("img").eq(j).css("left"))==-bg_width)  //判断是否是第一个
                    {
                        $("#backimg").children("img").eq(j).css("left",bg_width*(bg_num-2));
                    }
                    else {
                        bg_left_pos=parseInt($("#backimg").children("img").eq(j).css("left"))-bg_width;
                        $("#backimg").children("img").eq(j).animate({left:bg_left_pos},"slow");

                    }
                }
            }
        }
    }

    var Slide_Speed=10000;
    var Slide_Run=setInterval(Slide_Next,Slide_Speed);  //设置滚动器

    $("#Big_Slide_Last").click(Slide_Last);   //上一张按钮
    $("#Big_Slide_Next").click(Slide_Next);   //下一张按钮
});