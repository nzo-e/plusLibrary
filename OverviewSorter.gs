// Insert this at A17

/*

=sort(

    if(C13 ="Achievement %",
        filter('1 - MyLibrary'!A6:T,and(not('1 - MyLibrary'!O6:O = "-"), not(iserror('1 - MyLibrary'!B6:B))) ),
    if(C13 = "Rating",
        filter('1 - MyLibrary'!A6:T,and(not(isblank('1 - MyLibrary'!H6:H)), not(iserror('1 - MyLibrary'!B6:B)))),
        
        filter('1 - MyLibrary'!A6:T,not(iserror('1 - MyLibrary'!B6:B)))
    ),

        if(C13 ="SteamID",3,
        if(C13 ="Name",4,
        if(C13="Hours Played",5,
        if(C13 ="$/hr",6,
        if(C13 ="Orig. $/hr",17,
        if(C13 ="Cost", 7, 
        if(C13 ="Orig. Price", 18, 
        if(C13 ="Savings", 19, 
        if(C13 ="%Savings",20, 
        if(C13 ="Achievement %",15, 
        if(C13 = "Rating",8,
        0 
        ))))))))))), 
        
          if(C14 = "Ascending", TRUE, FALSE))
          
*/ 