// $(function(){
//   $(".btn").click(function(){
//     var getValueOption=$("#inputState" ).val();
//     var getnumber=parseInt($(".soluong").val());
//     if(getnumber<=0||isNaN(getnumber)){
//       $(".soluong").next().text("Yêu cầu chọn lại");
//     }else{
//       $("p").remove();
//       $(".tongtien").val(getValueOption*getnumber*1000);
//     }
//   });

// });

$(function () {
//   let getValueInputPass = $("#pass").val();
//   let getValueInputPassrs = $("#getValueInputPassrs").val();
//   $("#pass").change(function () {
//     getValueInputPass = $("#pass").val();
//     if (getValueInputPass.length > 6) {

//       $("#pass").next().text("Yêu cầu Nhập lại");

//     } else {
//       $("#pass").next().remove();
//     }

//   });
  $("#getValueInputPassrs").change(function () {
    getValueInputPass = $("#pass").val();
    getValueInputPassrs = $("#getValueInputPassrs").val();
    if (getValueInputPass != getValueInputPassrs) {

      $("#getValueInputPassrs").next().text("Mật khẩu không đúng");
    } else {

    }

  });
  $(':radio').change(function () {
    let check = $(':radio:checked').val();
    if (check == "1") {
      $("#change").attr("disabled", true);
    } else {
      $("#change").attr("disabled", false);
    }
  })
})
$(function(){
  $("#form").validate(
    {
      rules:{
        Email:{
          new_validate:true,
          required:true,
          email:true
        },
        pass:{
          required:true,
          // minlength:6,
          // range:[5,6]
        }
      },
      messages:{
        Email:{
          required:"làm ơn nhập",
          email:"làm ơn nhập có @",
          new_validate:"please nhập .com"},
        pass:{
          required:"làm ơn nhập vào",
          // minlength:"please nhap 6 ki tu",
          // ranger:jQuery.validator.format("please {0} and {1}")
        }
      },
      submitHandler :function(){
          $(".showinfor").html('$("#email").val()');
      }
     
    }
  );
  $.validator.addMethod("new_validate",function(value){
    return value.indexOf(".com")!=-1? true :false;
  })

  
})