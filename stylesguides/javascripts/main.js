$(document).ready(()=>{
    $("#modal").on('click',()=>{
        $(".myModal").fadeIn('slow');
    })
    $("#closeModal").on('click', ()=>{
        $('.myModal').fadeOut('slow');
    })
    $("#submitContact").on("click", (e)=>{
        e.preventDefault();
    })
})