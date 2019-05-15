// COLOR PICKER

$(document).ready(function() {
  $("#colorpicker").farbtastic("#color");

  $("#colorpicker").on("click", function() {
    var colorPicker = $("#color").val();
    console.log(colorPicker);
    $(".logo").css("backgroundColor", colorPicker);
    $(".teclas").css("backgroundColor", colorPicker);
    $(".teclasLeft").css("backgroundColor", colorPicker);
    $(".teclasBottom").css("backgroundColor", colorPicker);
    $(".teclasRight").css("backgroundColor", colorPicker);
    $(".mouseBrillo").css("fill", colorPicker);
    $(".bocinas").css("fill", colorPicker);
  });

  $(".column_list_item").on("click", function() {
    var allAnimClasses =
      "anim_static anim_breathing anim_strobing anim_colorCycle anim_colorCycleBg anim_rainbow anim_music anim_smart";
    $(".logo").removeClass(allAnimClasses);
    $(".teclas").removeClass(allAnimClasses);
    $(".teclasLeft").removeClass(allAnimClasses);
    $(".teclasBottom").removeClass(allAnimClasses);
    $(".teclasRight").removeClass(allAnimClasses);
    $(".mouseBrillo").removeClass(allAnimClasses);
    $(".bocinas").removeClass(allAnimClasses);

    var clasAnim = $(this).data("anim");
    console.log(clasAnim);

    if (clasAnim === "anim_colorCycle") {
      $(".logo").addClass("anim_colorCycleBg");
      $(".teclas").addClass("anim_colorCycleBg");
      $(".teclasLeft").addClass("anim_colorCycleBg");
      $(".teclasBottom").addClass("anim_colorCycleBg");
      $(".teclasRight").addClass("anim_colorCycleBg");

      $(".mouseBrillo").addClass(clasAnim);
      $(".bocinas").addClass(clasAnim);
    } else if(clasAnim === "anim_rainbow") {
        $(".teclas").addClass(clasAnim);
        $(".teclasLeft").addClass(clasAnim);
        $(".teclasBottom").addClass(clasAnim);
        $(".teclasRight").addClass(clasAnim);

        $(".logo").addClass("anim_colorCycleBg");
        $(".mouseBrillo").addClass("anim_colorCycle");
        $(".bocinas").addClass("anim_colorCycle");
        console.log('yeyeyyey')
    } else {
      $(".logo").addClass(clasAnim);
      $(".teclas").addClass(clasAnim);
      $(".teclasLeft").addClass(clasAnim);
      $(".teclasBottom").addClass(clasAnim);
      $(".teclasRight").addClass(clasAnim);
      $(".mouseBrillo").addClass(clasAnim);
      $(".bocinas").addClass(clasAnim);
    }
  });

  $(".column_list_item").on('click',function(){
    $(".column_list_item img").removeClass('nograyscale')
    $(this).find('img').addClass('nograyscale')
  })
});
