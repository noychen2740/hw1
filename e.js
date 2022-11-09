        ingarr = [];
        sumingrr = [];
        recarr = [];
        count=0;
        function ingredient(name, Image, Calories) {
            this.name = name;
            this.Image = Image;
            this.Calories =Calories;
        }
        
        brocoli = new ingredient("ברוקולי","https://hameshek.co.il/wp-content/uploads/2019/06/shutterstock_572617423-600x600.jpg",10);
        ingarr.push(brocoli);
        crovit = new ingredient("כרובית","https://d3m9l0v76dty0.cloudfront.net/system/photos/3809882/large/56a37ef42c07344704b77c5467967f32.jpg",10);
        ingarr.push(crovit);
        petrozilia = new ingredient("פטרוזיליה","https://cashcow-cdn.azureedge.net/images/0e51a480-26c2-45af-87aa-b1a0905ecc70.jpg",10);
        ingarr.push(petrozilia);
        function newingredient() {
            var res = "";
            res += "<div id='newind'>";
            res += "<p>Ingredient name:</p>";
            res += "<input type='text' id='Ingredientname'/>";
            res += "<p>Ingredient Image(url):</p>";
            res += "<input type='text' id='IngredientImage'/>";
            res += "<p>Ingredient Calories:</p>";
            res += "<input type='text' id='IngredientCalories'/>";
            res += "<br>";
            res += "<br>";
            res += "<input type='button' name='createIngredient' value='create Ingredient' onclick='createing()'/>";
            res += "          ";
            res += "<input type='button' name='closenow' value='close all' onclick='close()'/>";
            res += "</div>";
            document.getElementById("result").innerHTML = res
        }
        function createing() {
            name = document.getElementById("Ingredientname").value;
            Image = document.getElementById("IngredientImage").value;
            Calories = document.getElementById("IngredientCalories").value;
            ingarr.push(new ingredient(name, Image, parseInt(Calories)));
            str = "";
            for (var i = 0; i < ingarr.length; i++) {
                str += "<div id='theingr'>";
                str += '<input type="checkbox" id="'+ingarr[i].name+'" value="' + ingarr[i].name + '" onchange="f2(value)" />';
                str += "<h3> שם המוצר " + ingarr[i].name + "</h3>";
                str += "<img src=" + ingarr[i].Image + " style='width: 100px; height: 100px;'>";
                str += "<h3> קלוריות" + ingarr[i].Calories + "</h3>";
                str += "</div>";
            }
            document.getElementById("ing").innerHTML = str;
            document.getElementById("newrec").innerHTML = str;
            
        }
        function newrecipe() {
            var res = "";
            res += "<div id=newrec>";
            res += "<p>recipe name:</p>";
            res += "<input type='text' id='resname'/>";
            res += "<p>recipe cookingMethod:</p>";
            res += "<input type='text' id='rescookingMethod'/>";
            res += "<p>Recipe cooking time:</p>";
            res += "<input type='text' id='reccookingtime'/>";
            res += "<p>Recipe Image (url):</p>";
            res += "<input type='text' id='resImage'/>";
            res += "<br>";
            res += "<br>";
            res +="<p>chose Ingredient</p>"
            res += "<input type='button' name='createrecipe' value='create recipe' onclick='createres()'/>";
            res += "</div>";
            document.getElementById("result").innerHTML = res
        }
        
        function close() {
            document.getElementById("newind").innerHTML = " ";
        }
        function DishRecipe(recname, reccookingMethod, reccookingtime, recImage)
        {
            this.recname = recname;
            this.reccookingMethod = reccookingMethod;
            this.reccookingtime = reccookingtime;
            this.recImage = recImage;
        }
        function createres() {
            recname = document.getElementById("resname").value;
            reccookingMethod = document.getElementById("rescookingMethod").value;
            reccookingtime = document.getElementById("reccookingtime").value;
            recImage = document.getElementById("resImage").value;
            recarr.push(new DishRecipe(recname, reccookingMethod, reccookingtime, recImage));
            str = "<h1>Recipe</h1>";
            for (var i = 0; i < recarr.length; i++) {
                str += "<div id='therec'>";
                str += "<h3>" + recarr[i].recname + "</h3>";
                str += "<h3>" + recarr[i].reccookingMethod + "</h3>";
                str += "<h3>" + recarr[i].reccookingtime + "</h3>";
                str += "<img src=" + recarr[i].recImage + " style='width: 100px; height: 100px;'>";
                str+="<div id=showcalor>";
                str+="</div>";
                str += "</div>";
            }
            document.getElementById("rec").innerHTML = str;
        }
        count=0;
        function f2(checked) {
            for (var i = 0; i < ingarr.length; i++) {
                if (checked ==ingarr[i].name ){
                    str = "";
                    str += "<div id='theingrtow'>";
                    str += "<p> שם המוצר " +ingarr[i].name + "<p>";
                    str += "<img src=" + ingarr[i].Image + " style='width: 50px; height: 50px;'>";
                    str += "<p> קלוריות" + ingarr[i].Calories + "</p>";
                    str += "</div>";
                    document.getElementById("therec").innerHTML += str;
                    sumingrr.push(new ingredient(ingarr[i].name,ingarr[i].Image,ingarr[i].Calories))
                }
            }
            for (var i = 0; i < sumingrr.length; i++){
                count+=sumingrr[0].Calories; 
                i++;
            }
            document.getElementById("showcalor").innerHTML=count;
        }