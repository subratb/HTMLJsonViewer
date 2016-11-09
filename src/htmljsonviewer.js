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
