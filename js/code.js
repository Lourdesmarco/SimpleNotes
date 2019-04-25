$(document).on("mobileinit", function() {
    $(function(){
        $("#main").on("pageinit", function() {
            $("#editar").on("click", modoeditor);
            $("#guardar").on("click", guardar);

            modovisor();

            function modoeditor(){
                $(".ui-input-text").show();
                $(".editor").show();
                $(".visor").hide();
                $("#editor").val(localStorage.getItem("nota"));
                $("#title").val(localStorage.getItem("title"));
            }
            function modovisor(){
                $(".ui-input-text").hide();
                $(".editor").hide();
                $(".visor").show();
                $("#visor").text(localStorage.getItem("nota"));
                $("#vtitle").text(localStorage.getItem("title"));
            }

            function guardar(){
                localStorage.setItem("nota", $("#editor").val());
                localStorage.setItem("title", $("#title").val());
                modovisor();
            }
        });             
    });
});