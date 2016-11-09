function getString(ele) {
        //if object && array
        //create a table
        //create rows
        if (ele !== null && typeof ele === 'object') {
            var v = "<table class='table table-bordered'>";

            if (Array.isArray(ele)) {
                v = v + "<tr>";
                for (var i = 0; i < ele.length; i++) {
                    v = v + getString(ele[i]);
                }
                v = v + "</tr>";
            } else {

                var keys = Object.keys(ele).map(function (key) { return key ? key : '""'; });

                var v = v + "<tr>";
                for (var i = 0; i < keys.length; i++) {
                    v = v + "<td>" + keys[i] + "</td>";
                }
                v = v + "</tr><tr>";
                for (var i = 0; i < keys.length; i++) {
                    v = v + "<td>" + getString(ele[keys[i]]) + "</td>";
                }
                v = v + "</tr>";
            }

            v = v + "</table>";
            return v;
        } else {
            return ele;
        }

         //if only object
        //create table
        //if only value
        //create a cell
    }
var jsonObject = JSON.parse('[{ "UserProfiles": { "old": { "MiddleName": "test", "AddDate": "2016-11-03T15:27:59.013" }, "new": { "MiddleName": "test1", "AddDate": "2016-11-03T16:40:20.6743482-04:00" } } }]');
var htmltable = getString(jsonObject); 
console.log(htmltable);
