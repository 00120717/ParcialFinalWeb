window.onload = ()=>{
    app.init();
}

var app = {

    init:function(){
        this.AddEvents();
        this.loadContent();
    },

    AddRow:function(data){
        let tbody = document.getElementsByClassName('hoteles')[0],
            tr =  document.getElementsByClassName('tr');
            tr.innerHTML = `

                <td>${data._id} <input type='submit' value='delete'><input type='submit' value='update'> </td>
                <td>${data.nombre}<input type='submit' value='delete'><input type='submit' value='update'></td>
                <td>${data.ubicacion}<input type='submit' value='delete'><input type='submit' value='update'></td>
                <td>${data.precio}<input type='submit' value='delete'><input type='submit' value='update'></td>

            `;
        tbody.appendChild(tr);

        tr.addEventListener("click",function(evt){
            this.deleteHotel(evt,data,tr,tbody);
        });
        tr.addEventListener("click",function(evt){
            this.updateHotel(tr,tbody,data);
        })


    },

    updateHotel:function(evt,tr,tbody,data){
        evt.preventDefault();

        tr.innerHTML = `

        <td>${data._id} <input type='submit' value='delete'><input type='submit' value='update'> </td>
        <td>${data.nombre}<input type='submit' value='delete'><input type='submit' value='update'></td>
        <td>${data.ubicacion}<input type='submit' value='delete'><input type='submit' value='update'></td>
        <td>${data.precio}<input type='submit' value='delete'><input type='submit' value='update'></td>

    `;
    let form = tr.getElementsByTagName('form')[0];
    form.innerHTML = 

    let delete = this.deleteHotel;
    let update = this.updateHotel;
    
    form.addEventListener("submit",function(evt){
        evt.preventDefault();

    })

    },
    deleteHotel:(evt,data,tr,tbody)=>{
        evt.preventDefault();
        fetch('/api/Hoteles',)
    }
    


    
    


}