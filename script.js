var drawerOpen =[false, false, false];

function drawerClick(id){
    if(drawerOpen[id]){
        document.getElementById("drawer_"+id).classList.remove("drawer_open");
        if(id == 0){
            document.getElementById("animation_dario").classList.remove("animation_dario_open");
            document.getElementById("animation_dario").classList.add("animation_dario_closed");
        }else if(id == 1){
            document.getElementById("animation_projects").classList.remove("animation_projects_open");
            document.getElementById("animation_projects").classList.add("animation_projects_closed");
        }
    }else{
       
        document.getElementById("drawer_"+id).classList.add("drawer_open");
        
        if(id == 0){
            document.getElementById("animation_dario").classList.add("animation_dario_open");
            document.getElementById("animation_dario").classList.remove("animation_dario_closed");
        }else if(drawerOpen[0]){
            document.getElementById("animation_dario").classList.remove("animation_dario_open");
            document.getElementById("animation_dario").classList.add("animation_dario_closed");
        }

         if(id == 1){
            document.getElementById("animation_projects").classList.add("animation_projects_open");
            document.getElementById("animation_projects").classList.remove("animation_projects_closed");
        }else if(drawerOpen[1]){
            document.getElementById("animation_projects").classList.remove("animation_projects_open");
            document.getElementById("animation_projects").classList.add("animation_projects_closed");
        }

        for(var i = 0; i < drawerOpen.length; i++){
            if(id  != i && drawerOpen[i]){
                document.getElementById("drawer_"+i).classList.remove("drawer_open");
                drawerOpen[i] = false;
            }
        }
    }
    

    drawerOpen[id] = !drawerOpen[id];
}