$(function () {

    $("#movie-datasetGet").click(function (e) {
            e.preventDefault();
            console.log("testing");
                // askldjfklasjdfklajsdf
                $.ajax({
                  dataType: "json",
                  url: "http://localhost:8080/allmovies",
                  success: function(data){

                    console.log("testing inside ajax success");
                    console.log(data);

                    generateTableMovie(data);

                  }

                });           

        });

        function generateTableMovie(data) {
        var columns = [];
        Object.keys(data[0]).forEach(function (title) {
            columns.push({
                head: title,
                cl: "title",
                html: function (d) {
                    return d[title]
                }
            });
        });
        var container = d3.select("#movie-dataDisplay");
        container.html("");
        container.selectAll("*").remove();
        var table = container.append("table").style("margin", "auto");

        table.append("thead").append("tr")
            .selectAll("th")
            .data(columns).enter()
            .append("th")
            .attr("class", function (d) {
                return d["cl"]
            })
            .text(function (d) {
                return d["head"]
            });

        table.append("tbody")
            .selectAll("tr")
            .data(data).enter()
            .append("tr")
            .on("click", function(d) { 

             
                console.log(d);
                console.log(d['Title']);
                movietitle = d['Title'];

                // removing white spaces
                str = movietitle.replace(/\s+/g, ''); 
                
                console.log("http://localhost:8080/" + str);

                   $.ajax({
                    dataType: "json",
                    url: "http://localhost:8080/" + str,
                    success: function(data){
                       
                        params = 'movietitle=' + movietitle;
                        
                        window.open("singleMovie.html" + '?' + params);
                        
                  }

                });

             })
            .selectAll("td")
            .data(function (row, i) {
                return columns.map(function (c) {
                    // compute cell values for this specific row
                    var cell = {};
                    d3.keys(c).forEach(function (k) {
                        cell[k] = typeof c[k] == "function" ? c[k](row, i) : c[k];
                    });
                    return cell;
                });
            }).enter()
            .append("td")
            .html(function (d) {
                return d["html"]
            })
            .attr("class", function (d) {
                return d["cl"]
            });
        }

        $("#actor-datasetGet").click(function (e) {
            e.preventDefault();
            console.log("testing");

                $.ajax({
                  dataType: "json",
                  url: "http://localhost:8080/allactors",
                  success: function(data){

                    console.log("testing inside ajax success");
                    console.log(data);

                    generateTableActor(data);

                  }

                });
             
        });

        function generateTableActor(data) {
        var columns = [];
        Object.keys(data[0]).forEach(function (title) {
            columns.push({
                head: title,
                cl: "title",
                html: function (d) {
                    return d[title]
                }
            });
        });
        var container = d3.select("#actor-dataDisplay");
        container.html("");
        container.selectAll("*").remove();
        var table = container.append("table").style("margin", "auto");

        table.append("thead").append("tr")
            .selectAll("th")
            .data(columns).enter()
            .append("th")
            .attr("class", function (d) {
                return d["cl"]
            })
            .text(function (d) {
                return d["head"]
            });

        table.append("tbody")
            .selectAll("tr")
            .data(data).enter()
            .append("tr")
            .on("click", function(d) { 

             
                console.log(d);
                console.log(d['Name']);
                actorname = d['Name'];

                // removing white spaces
                str = actorname.replace(/\s+/g, ''); 
                
                console.log("http://localhost:8080/" + str);


               
                $.ajax({
                    dataType: "json",
                    url: "http://localhost:8080/" + str,
                    success: function(data){
                        
                        params = 'actorname=' + actorname;
                      
                        window.open("singleActor.html" + '?' + params);
                    
                  }

                });
                 


             })
            .selectAll("td")
            .data(function (row, i) {
                return columns.map(function (c) {
                    // compute cell values for this specific row
                    var cell = {};
                    d3.keys(c).forEach(function (k) {
                        cell[k] = typeof c[k] == "function" ? c[k](row, i) : c[k];
                    });
                    return cell;
                });
            }).enter()
            .append("td")
            .html(function (d) {
                return d["html"]
            })
            .attr("class", function (d) {
                return d["cl"]
            });
        }



       

    // $("#movie-datasetGet").click(function (e) {
    //         e.preventDefault();
    //         console.log("testing");

    //         var id = $("#datasetId").val();
    //         console.log(id);

    //         if (id == "movie"){

    //             $.ajax({
    //               dataType: "json",
    //               url: "http://localhost:3000/movie",
    //               success: function(data){

    //                 console.log("testing inside success");
    //                 console.log(data);

    //                 var data_string = JSON.stringify(data);

    //                  $("#dataDisplay").html(data_string);

    //               }

    //             });
    //          }else if (id == "actor"){

    //              $.ajax({
    //               dataType: "json",
    //               url: "http://localhost:3000/actor",
    //               success: function(data){

    //                 console.log("testing inside success");
    //                 console.log(data);

    //                 var data_string = JSON.stringify(data);

    //                  $("#dataDisplay").html(data_string);

    //               }

    //             });


    //          }else {
    //             alert("Please select one.")
    //          }

    //     });

});

