$(function () {
    $('#id_setsel').click(function () {
        var a = $("#id_select").val();
        var content_ = '';
        for (let i = 0; i < a.length; i++) {
            content_ += '<option ' + 'value="' + a[i] + '">' + a[i] + '<' + '/option>';


        }

        $('#id_setselect').html(content_);
        $("#id_select option:selected").remove()

        $("#id_removesel").click(function () {


            var b = $('#id_setselect').val();
            var content_ = '';
            for (let i = 0; i < b.length; i++) {
                content_ += '<option ' + 'value="' + b[i] + '">' + b[i] + '<' + '/option>';




            }
            $('#id_select').append(content_);
            $('#id_setselect option:selected').remove();

        })
    })

})
$(function () {
    $("#form").validate(
        {
            rules: {
                Name: {
                    required: true,
                },
                hour: {
                    required: true,
                    number: true,

                },
                color: {
                    required: true,
                },
            },
            messages: {
                Name: {
                    required: "lam on nhap "
                },
                hour: {
                    required: "Làm ơn nhập số giờ"
                }

            },
            submitHandler: function () {
                // save
                var company_name = $('#getName').val();
                get_company_name = localStorage.getItem(company_name);
                if (get_company_name == null) {
                    var obj_ = new company_obj(company_name, $('#getNumber').val(), $('#status').val(), $('#getColor').val(), $('#id_setselect').val());
                    var key_company = localStorage.getItem('key_company');
                    key_company = (key_company == null) ? company_name : key_company + ',' + company_name;
                    localStorage.setItem('key_company', key_company);
                    obj_ = JSON.stringify(obj_);
                    localStorage.setItem(company_name, obj_);
                } else {
                    alert('Please re-enter company name information.');
                    $("#getName").focus();
                }
                var convertobj=JSON.parse(obj_)
                console.log(convertobj);
                $("#Manage").load("index.html",  function() {
                    $("")
                    var  content="";
                    content+= '<tbody>'+
                    '<tr>'+ 
                         '<th scope="row">'+convertobj.name +'</th>'+
                         +'<td>'+convertobj.hour+'</td>'+
                         +'<td>'+convertobj.status+'</td>'+
                         +'<td>'+convertobj.color+'</td>'+
                         +'<td>'+convertobj.select+'</td>'+
                    
                ' </tbody>';
                
                $("#table1").append(content);
                });
              
               
            }

        }
    )
})
function company_obj(name, hour, status, color, select) {
    this.name = name;
    this.hour = hour;
    this.status = status;
    this.color = color;
    this.select = select;
}

// $('#Manage').click(function () {
//     location.href = 'index.html';
    
// })