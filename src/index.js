$(document).ready(function () {
  // JS code 請寫在這
  
    //新增
    var id = 0
  
    $("#addButton").on('click',function() {
  
      const input1 = $("input[name=inputName]").val()
      const input2 = $("input[name=inputTime]").val()
  
        if (input1.trim() !== '' && input2.trim() !== '' ) {
          $(".list").append(`
          <div data-id="${id}" class="card">
            <div class="record name">${input1}</div>
            <span id="renewTime" name="editTime" class="record time" style="display:block; 
            position: relative;">${input2}</span>
            <div>
            <button id="edit" type="button" class="button editButton">
              編輯
            </button>
            <button id="delete" type="button" class="button deleteButton">
                刪除
              </button>
          </div>
        </div> `)
        }else {
          alert("請檢查輸入字元是否正確!")
        }
    });
    id++

    //刪除
    $(".list").delegate("#delete","click",function(){
     $(this).parent().parent().remove();
    })

    //按下編輯
  $(".list").delegate("#edit","click",function(){
    var clicks = $(this).data("click");
    if(clicks){
      $(this).text("更新");
      $(this).before(
        `<input id="timeCheck1" name="timeCheck2"
        type="text" style="height:25px; width:120px;
        margin-top:-30px;
        position:absolute;
        z-index: 10;"
        placeholder="請輸入修改的時間">` 
      );
    }else{
     const input3 = $("input[name='timeCheck2']").val();
     if(input3 !== ''){
       $(this).before(
        ` <span style="height:20px; width:110px; margin-top:-25px;
        position:absolute;
        background:white;
        text-align:center;
        display:inline-block;
        z-index: 10;">${input3}<span/>`)
     }else{
       alert("請檢查輸入字元是否正確!")
     }
     $("#timeCheck1").remove()
     $(this).text("編輯")
    }
  $(this).data("click", !clicks);
  })

  //第一個項目的編輯
$("#originEdit").click(function(){
  var clicks = $(this).data("click");
  if(clicks){
    $(this).text("更新");
    $(this).before(
      `<input id="timeCheck1" name="timeCheck2"
      type="text" style="height:25px; width:120px;
      margin-top:-30px;
      position:absolute;
      z-index: 10;"
      placeholder="請輸入修改的時間">` 
    );
  }else{
   const input3 = $("input[name='timeCheck2']").val();
   if(input3 !== ''){
     $(this).before(
      ` <span style="height:20px; width:110px; margin-top:-25px;
      position:absolute;
      background:white;
      text-align:center;
      display:inline-block;
      z-index: 10;">${input3}<span/>`)
   }else{
     alert("請檢查輸入字元是否正確!")
   }
   $("#timeCheck1").remove()
   $(this).text("編輯")
  }
$(this).data("click", !clicks);
})

})

