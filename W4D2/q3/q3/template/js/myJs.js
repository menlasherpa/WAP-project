$(()=>{
    
    const clearMsg = $("#msg").text("");

    const addSuccess = (count) => {
        $("#id").val();
        $("#name").val();
        $("#price").val();
        $("#quantity").val();
        $("#cartCount").html(count);
        //console.log(count);
        $("#msg").text("Data added successfully.");
        setTimeout(clearMsg, 3000);
        
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server.");
        setTimeout(clearMsg, 10000);
    }
    $("#addToCart").submit(()=>{
       
        const data = {
            id : $("#id").val(),
            name : $("#name").val(),
            price : $("#price").val(),
            quantity : $("#quantity").val(),
        };
        console.log(data);
        $.post({
          url: "/addToCart",
          data: JSON.stringify(data),
          contentType: "application/json; charset=utf-8"
        }).done(addSuccess)
        .fail(noSuccess);

        return false

    });

    
});