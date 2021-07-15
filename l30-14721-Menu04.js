///"use strict"; 
window.addEventListener("load", () => {
   addButton();
    $("*ul").hide();
    $("#menu>h3").on("mouseenter", () => {
    let menuText=$("h3").html();
    });
//debugger;
    $("menu:contains('News')").on("mouseenter", () => {
        $("*ul").hide();
        $("menu:contains('News')>ul").show(500);
    });
    $("menu:contains('News')").on("mouseleave", () => {
        // alert("You clicked me");
        $("menu:contains('News')>ul").hide(500);
    });

    $("menu:contains('Articles')").on("mouseenter", () => {
        $("*ul").hide();
        $("menu:contains('Articles')>ul").show(500);
    });
    $("menu:contains('Articles')").on("mouseleave", () => {
         $("menu:contains('Articles')>ul").hide(500);
    });
    $("menu:contains('Blog Posts')").on("mouseenter", () => {
        $("*ul").hide();
        $("menu:contains('Blog Posts')>ul").show(500);
    });
    $("menu:contains('Blog Posts')").on("mouseleave", () => {
        $("menu:contains('Blog Posts')>ul").hide(500);
    });

}); 

function addButton() {
    let color=""; let x="";
    //debugger
    //<button onclick="addNote(document.getElementById(`n1`),document.getElementById(`d1`),document.getElementById(`h1`),document.getElementById(`b3`))" id="b1" >Add note</button>
    
        x=`<br/><menu id="menu" class="menu1" >
                 <h3>News</h3>
                    <ul>
                        <li><a href="">Story 1</a></li>
                        <li><a href="">Story 2</a></li>
                    </ul>
              </menu>
              <menu id="menu" class="menu2" >
                <h3>Articles</h3><ul>
                        <li><a href="">Article 1</a></li>
                        <li><a href="">Article 2</a></li>
                        <li><a href="">Article 3</a></li>
                        <li><a href="">Article 4</a></li>
                    </ul>
              </menu>
              <menu id="menu" class="menu3">
              <h3>Blog Posts</h3><ul>
              <li><a href="">Post 1</a></li>
              <li><a href="">Post 2</a></li>
              <li><a href="">Post 3</a></li>
            </ul>
            </menu>
        `
    
    $("#h1Ex04").append(x);
    
       
            
   }



//2. להוסיף אירוע כאשר PANEL אחד נפתח, לשנות את הצבע רקע לצהוב ואת הרקע של ה-PANEL שנסגר לכחול


$( function() {
    $( "#accordion" ).accordion();
    $( "#accordion" ).on( "accordionactivate", function( event, ui ) {
        $(ui.newPanel).css("background-color","Yellow");
        $(ui.oldPanel).css("background-color","blue");
    } );
  } );
  