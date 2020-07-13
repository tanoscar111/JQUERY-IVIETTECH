$(function(){
  $(".btn").click(function(){
    var getValueOption=$("#inputState" ).val();
    var getnumber=parseInt($(".soluong").val());
    if(getnumber<=0||isNaN(getnumber)){
      $(".soluong").next().text("Yêu cầu chọn lại");
    }else{
      $("p").remove();
      $(".tongtien").val(getValueOption*getnumber*1000);
    }
  });

});